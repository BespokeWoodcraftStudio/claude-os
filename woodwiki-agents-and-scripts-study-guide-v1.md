# Woodwiki — Agents, Pipelines, Skills, and Scripts Study Guide

A complete reference for the automation that runs the Woodwiki project. This guide documents every agent (Claude-driven pipeline), every skill (reusable instruction set), and every script (standalone tool) in the repo, plus the supporting pipeline stages and editorial context files. It's meant to be read as a blueprint: enough detail to rebuild a similar content-automation system on a different topic.

**How this system works in one sentence:** raw SEO data becomes prioritized assignments, assignments move through a 13-step guide-production pipeline, and a parallel diagram pipeline adds inline SVGs — all driven by Claude agents reading from shared context files and calling purpose-built scripts.

---

## 1. System Overview

Woodwiki is a Next.js MDX wiki, but the interesting part isn't the runtime — it's the content-production machine layered over it. That machine has four kinds of moving parts.

| Part | Where it lives | What it is |
|---|---|---|
| **Agent runners** | `.claude/*.sh` and `.claude/parallel/*.sh` | Bash orchestrators that invoke the `claude` CLI in a loop with a prompt file, with optional parallelism |
| **Agent prompts** | `.claude/*-prompt.md` and `.claude/parallel/*-prompt.md` | Long Markdown prompts that tell Claude exactly how to run one cycle of a pipeline |
| **Skills** | `.agents/skills/**/SKILL.md` and `.claude/skills/**/SKILL.md` | Reusable instruction sets the agents read. Each has a `SKILL.md` and often sub-skills, scripts, and references |
| **Scripts** | `scripts/*.mjs`, `.claude/*.sh`, `.claude/parallel/*.py`, `.agents/skills/keyword-gap-to-assignments/scripts/*.js` | Deterministic tools: validators, CSV processors, index builders, etc. |

Two independent pipelines run on this substrate:

- **Guide Production Pipeline** — 13 steps, turns an assignment into a published, cross-linked guide.
- **Diagram Pipeline** — 7 steps, retrofits inline SVG diagrams onto existing guides.

Both pipelines have a serial runner and a parallel runner. The parallel runners fan out to N workers and a coordinator.

---

## 2. Agents (Claude-driven pipelines)

"Agent" here means a Claude session invoked non-interactively from the command line with `claude -p "$PROMPT" --dangerously-skip-permissions`. Each agent is defined by the pair (prompt file, shell runner).

### 2.1 Guide Production Pipeline — Serial Runner

**Runner:** `.claude/run-pipeline.sh`
**Prompt:** `.claude/pipeline-prompt.md`
**Logs:** `.claude/pipeline-logs/run-YYYY-MM-DD_HH-MM-SS.log`
**Stop file:** `.claude/stop-pipeline`
**Model:** `sonnet`

**What it does.** Loops forever. Each cycle picks one assignment from `assignments/02-ready-to-start/`, runs it through Steps 2–13 of the guide pipeline, waits five minutes, then picks the next one.

**The loop.**

1. Launch — `bash .claude/run-pipeline.sh`
2. On each iteration, check for `.claude/stop-pipeline`. If present, delete it and exit.
3. Timestamp the run, create a log file under `.claude/pipeline-logs/`.
4. Invoke `claude --dangerously-skip-permissions --verbose --model sonnet -p "$PROMPT"` with the prompt file piped through `tee` to the log.
5. Sleep 300 seconds (cooldown), checking for the stop file every 10 seconds.
6. Repeat.

**What the prompt tells Claude to do** (see `.claude/pipeline-prompt.md`):

1. List `assignments/02-ready-to-start/`, read each, pick the highest-impact topic (factoring volume, KD, breadth, gap-fill value).
2. Read the orchestrator skill at `.agents/skills/guide-pipeline/SKILL.md`.
3. Run Steps 2 through 13 of that skill, loading each step's `SKILL.md` before executing it.
4. Enforce the `## Part N:` heading convention before committing (the only H2s exempt are the ancillary ones: How to Use, At a Glance, Quick Reference, Sources).
5. Read the three editorial context files in order before any writing: `context/audience.md` → `context/writing-style.md` → `context/manifesto.md`.
6. Apply `stop-slop` to kill AI writing patterns.
7. Commit and push to GitHub. Never trigger Vercel manually — it deploys automatically from the push.
8. If an MCP tool is missing (DataForSEO, SEMrush, etc.), fall back to web search / Exa / Perplexity rather than aborting.
9. Summarize the run: slug processed, steps completed, commit hash.

**Graceful stop.** `touch $HOME/Documents/GitHub/woodwiki/.claude/stop-pipeline`. The runner checks between cycles and inside the cooldown sleep loop.

---

### 2.2 Diagram Pipeline — Serial Runner

**Runner:** `.claude/run-diagram-pipeline.sh`
**Prompt:** `.claude/diagram-pipeline-prompt.md`
**Logs:** `.claude/pipeline-logs/diagrams/`
**Stop file:** `.claude/stop-diagram-pipeline`
**Model:** `claude-sonnet-4-6`

**What it does.** Same loop shape as the guide runner, but targets one guide per cycle and adds inline SVG diagrams. Includes a safety-net `git push origin main` after the Claude call returns, so changes reach GitHub even if Claude's session ended before it pushed.

**How Claude picks a target** (`diagram-pipeline-prompt.md`):

1. **Priority 1 — fix under-diagrammed guides.** For each guide marked ✅ in `.agents/skills/diagram-pipeline/GUIDE-INVENTORY.md`, count H2 sections (excluding Sources/References) and count `<figure>` blocks. If figures < H2s, this guide is under-diagrammed. Pick the largest gap.
2. **Priority 2 — pick a new ⬜ guide.** Read the inventory and `TRACKING.md`. Favor longer guides, technique/process guides, and guides with spatial/structural concepts.

**Steps the agent runs.**

1. Read SVG-STYLE-GUIDE.md and SKILL.md; read reference diagrams in `content/guides/sheet-goods-for-cabinets.mdx` (lines 48–185, 247–384).
2. Analyze the target guide and plan diagrams per H2.
3. Generate SVGs following the style guide (viewBox math, zone-based text layout, polygon winding, unique IDs).
4. Insert diagrams into the MDX at planned locations — wrapped in `<figure>...<figcaption>`, with zero blank lines inside `<figure>` blocks.
5. Code-level verification: unique IDs, viewBox overflow math, accessibility attributes.
6. Domain accuracy: re-read the prose, confirm SVG geometry matches the real-world mechanics.
7. Visual verification: extract `<figure>` blocks into a standalone HTML file, serve with `python3 -m http.server 8888`, open in Chrome, screenshot every diagram, fix anything broken, clean up the temp file.
8. Update `TRACKING.md` and flip the guide's ⬜ to ✅ in `GUIDE-INVENTORY.md`.
9. Commit and push.

---

### 2.3 Parallel Guide Pipeline

**Runner:** `.claude/parallel/run-guide-pipeline-parallel.sh`
**Prompts:** `.claude/parallel/guide-worker-phase1-prompt.md`, `.claude/parallel/crosslink-prompt.md`, `.claude/parallel/guide-worker-phase3-prompt.md`
**Logs:** `.claude/pipeline-logs/parallel/run-<timestamp>/`
**State:** `.claude/parallel/state/`
**Stop file:** `.claude/stop-parallel-pipeline`
**Config:** `MAX_PARALLEL` (default 5), `MODEL` (default `sonnet`)

**Why three phases.** Cross-linking must see the full set of new guides at once, so it can't run per-worker in parallel. The split is:

| Phase | Scope | Parallelism |
|---|---|---|
| Phase 1 — Steps 2–9 | Research, outline, draft, content edit, copy edit, stop-slop, citations (per guide) | Parallel, one worker per slug |
| Phase 2 — Step 10 | Cross-link audit across the whole batch + existing published guides | Sequential, one coordinator |
| Phase 3 — Steps 11–13 | Diagrams, metadata preflight, publish (per guide) | Parallel, one worker per slug |

**Usage.**

```bash
bash .claude/parallel/run-guide-pipeline-parallel.sh                  # auto-pick top N
bash .claude/parallel/run-guide-pipeline-parallel.sh slug1 slug2 slug3 # specific slugs
MAX_PARALLEL=10 bash .claude/parallel/run-guide-pipeline-parallel.sh  # override concurrency
```

**Crash safety.** Every worker launch writes a state file. On the next run, a pre-flight cleanup detects orphaned assignments (workers killed mid-run) and resets them so nothing gets stuck at a stage.

**Worker prompts — what each one tells Claude.**

- `guide-worker-phase1-prompt.md` — "Your assignment is `{{SLUG}}`. Run Steps 2–9 end-to-end on just this guide. Do NOT cross-link; the coordinator handles that next." Template substitution swaps `{{SLUG}}` for the target.
- `crosslink-prompt.md` — "Here's the batch: {{SLUG_LIST}}. For each, run the cross-link audit skill. Link bi-directionally to every other published guide, including the rest of this batch. One git commit at the end; don't push (coordinator pushes)."
- `guide-worker-phase3-prompt.md` — "Your guide is `{{SLUG}}`. Run Steps 11–13. Before planning diagrams, run the section classifier (`.claude/parallel/section-needs-diagram.py`) to see which H2s actually need one."

---

### 2.4 Parallel Diagram Pipeline

**Runner:** `.claude/parallel/run-diagram-pipeline-parallel.sh`
**Worker prompt:** `.claude/parallel/diagram-worker-prompt.md`
**Logs:** `.claude/pipeline-logs/parallel-diagrams/`
**Stop file:** `.claude/stop-parallel-diagrams`
**Config:** `MAX_PARALLEL` (default 5), `MODEL` (default `claude-sonnet-4-6`)

**What it does.** Fans out the diagram pipeline across N guides at once. Each worker runs Steps 1–6 of the diagram skill on exactly one guide (the coordinator skips Step 7 commit on the worker and commits in aggregate at the end).

**Crash safety.** The `GUIDE-INVENTORY.md` file is only updated after a worker finishes successfully. If you Ctrl+C a worker mid-run, the guide stays ⬜ and gets picked up on the next run. If a worker wrote some SVGs but not all, the "under-diagrammed" heuristic from Section 2.2 detects the gap and finishes the job next time.

**Usage.**

```bash
bash .claude/parallel/run-diagram-pipeline-parallel.sh                  # auto-pick from inventory
bash .claude/parallel/run-diagram-pipeline-parallel.sh slug1 slug2      # specific slugs
```

---

### 2.5 Fix-Parts Pipeline (heading-format repair)

**Runner:** `.claude/parallel/run-fix-parts-parallel.sh`
**Worker prompt:** `.claude/parallel/fix-parts-worker-prompt.md`
**Validator:** `.claude/validate-parts.sh`
**Logs:** `.claude/pipeline-logs/fix-parts/`
**Stop file:** `.claude/stop-fix-parts`

**What it does.** Enforces the `## Part N: Title` heading convention across existing guides. For each target, a worker rewrites every non-ancillary H2 to carry a sequential `Part N:` prefix. After all workers finish, the coordinator runs the validator, commits, and pushes.

**Usage.**

```bash
bash .claude/parallel/run-fix-parts-parallel.sh                          # fix every failing guide
bash .claude/parallel/run-fix-parts-parallel.sh applying-polyurethane    # fix specific slugs
bash .claude/parallel/run-fix-parts-parallel.sh --all                    # rewrite every published guide
```

**Classification logic** (from the worker prompt):

- **Ancillary H2s (no prefix):** How to Use This Guide, `[Topic] at a Glance`, Quick Reference, Sources, Where This Fits, Related Guides, FAQ / Frequently Asked Questions, Glossary, About This Guide.
- **Content H2s (must become `## Part N: Title`):** every other H2, numbered sequentially from 1 in document order.

---

## 3. Skills — the Instruction Library

Two skill roots:

- `.agents/skills/` — skills invoked by the pipeline agents. Each has a `SKILL.md` and sometimes sub-skills, prompts, scripts, or references.
- `.claude/skills/` — slash-command skills the user invokes directly in a Claude Code session.

### 3.1 `.agents/skills/guide-pipeline/` — the 13-step orchestrator

The master skill that wraps the whole guide-production pipeline. Each step is its own sub-skill in a numbered folder.

| # | Sub-skill | Input | Output | What it does |
|---|---|---|---|---|
| 1 | `01-assignment-to-brief/` | `assignments/01-backlog/[slug].md` | `assignments/02-ready-to-start/[slug].md` | SEO research (DataForSEO, SEMrush, Exa, Perplexity, GSC), intent classification, keyword expansion, SERP analysis, persona ID, proposed H2s. Reject-gate for low-quality topics. |
| 2 | `02-plan-research/` | enriched brief | `assignments/03-in-progress/[slug].md` (plan appended) | Translates brief to learner profile + prioritized research questions. |
| 3 | `03-research-to-study-guide/` | research plan | `pipeline/outputs/[slug]-study-guide-v1.md` + scratchpad | Wraps the `research-to-study-guide` skill. Deep web research, source eval, synthesis. |
| 4 | `04-plan-outline/` | study guide + brief | `pipeline/scratchpad/[date]-[slug]-outline.md` | Maps research to sections. Sets word counts, planned tables, keyword targets per section. |
| 5 | `05-write-draft/` | outline + study guide + brief | `content/guides/[slug].mdx` (comingSoon: true) | Writes full MDX. Loads `audience.md` → `writing-style.md` → `manifesto.md` in order. |
| 6 | `06-content-edit/` | draft | same file, edited | Structural review: does the guide match its content-type pattern and serve the personas? |
| 7 | `07-copy-edit/` | content-edited draft | same file, polished | Sentence-level pass against `writing-style.md`. |
| 8 | `08-stop-slop/` | copy-edited draft | same file, de-slopped | Wraps the `stop-slop` skill. Strips AI writing patterns while preserving technical specifics. |
| 9 | `09-integrate-citations/` | de-slopped draft + study guide | same file, cited | Two-layer citations: inline links at the point of claim, plus a Sources section at the bottom. |
| 10 | `10-cross-link-audit/` | cited guide | same file + modified sibling guides | Bi-directional internal links: from new guide to existing guides and back. Updates `relatedGuides` frontmatter on both sides. |
| 11 | *(diagram-pipeline)* | guide | guide + inline SVGs | Invokes the separate diagram-pipeline skill (see 3.2). |
| 12 | `12-metadata-preflight/` | cross-linked guide | publication-ready guide | Frontmatter validation against `GuideFrontmatter` interface, build check, SEO verification, removes `comingSoon`. |
| 13 | `13-push-to-live/` | publication-ready guide | live URL + `assignments/05-published/[slug].md` | Moves assignment, rebuilds INDEX, commits, pushes, verifies deployment. |

**Why every step is its own folder.** Separation keeps prompts short enough for workers to load only what they need. Workers in the parallel runner typically load 3–4 step skills, not all 13.

### 3.2 `.agents/skills/diagram-pipeline/`

Generates inline SVG diagrams matching the style set by `content/guides/sheet-goods-for-cabinets.mdx`. Includes three reference files:

- `SKILL.md` — the 7-step pipeline.
- `SVG-STYLE-GUIDE.md` — visual rules (font sizes, color palette, class prefixing, zone-based layout, viewBox math).
- `GUIDE-INVENTORY.md` — the ⬜/✅ status table of every guide.
- `TRACKING.md` — log of completed diagram jobs.

**The seven steps.**

1. **Analyze and plan.** Read the guide, identify H2 sections, classify each (concept / comparison / sequence / decision tree / dimensional / exploded view), decide placement.
2. **Generate SVGs.** Build each SVG following the style guide. Use `.claude/parallel/section-needs-diagram.py` to confirm which sections actually need one.
3. **Insert into MDX.** Wrap each in `<figure>...<figcaption>`. Zero blank lines inside `<figure>` (blank lines break MDX rendering).
4. **Code-level verification.** Unique IDs across the whole file, accessibility (`role="img"` + `aria-label`), no viewBox overflow, no narrow rects cutting into text zones.
5. **Domain accuracy.** Re-read the prose; every geometry in the SVG must match the mechanics described.
6. **Visual verification.** Extract figures to a standalone HTML file, serve locally, screenshot every diagram in Chrome, fix issues, clean up the temp HTML.
7. **Commit.** Update `TRACKING.md` and `GUIDE-INVENTORY.md`, then `git commit && git push`.

### 3.3 `.agents/skills/keyword-gap-to-assignments/`

Three-stage pipeline that turns a SEMrush Keyword Gap CSV into a prioritized backlog of content assignments. Full details of the scripts are in Section 4.

**What the skill adds on top of the scripts** (the `SKILL.md` itself):

- Specifies the three stages and their CSV inputs/outputs.
- Defines the priority scoring formula: `volume × 0.5 + (1 − KD/100) × 0.3 + keyword_breadth × 0.2`.
- Defines content-type inference rules (concept / technique / tool-guide / reference) from search-intent signals.
- Defines difficulty inference (Beginner / Intermediate / Advanced).
- Describes the 13-category taxonomy auto-categorization against `lib/taxonomy.ts`.

### 3.4 `.agents/skills/research-to-study-guide/`

Generic deep-research skill. Used directly (e.g. a user asks "research topic X") and also wrapped by guide-pipeline Step 3.

**Phases.**

- **Phase 0 — Setup.** Get topic + learner profile from user. Answer the five audience-analysis questions (WHO, WHAT they care about vs noise, WHY, WHAT sources they trust, WHAT to exclude).
- **Phase 1 — Generate research questions.** 3–5 per category across Foundations, Frameworks & Models, Key Practitioners, Source Discovery, Real Examples.
- **Phase 2 — Execute research.** Web search, source evaluation (authority / recency / primary-vs-secondary), iterate until gaps close.
- **Phase 3 — Synthesize.** Organize by theme, filter for the audience, produce `pipeline/outputs/[topic]-study-guide-v1.md`.

**Sub-folder:** `prompts/` — full prompt templates for each phase.

### 3.5 `.agents/skills/stop-slop/`

Removes predictable AI writing patterns from prose. 8 core rules, quick-check list, 1–10 scoring across 5 dimensions (Directness, Rhythm, Trust, Authenticity, Density). References: `phrases.md` (filler-phrase blacklist), `structures.md` (formulaic patterns), `examples.md` (before/after rewrites).

**The 8 rules in one line each.**

1. Cut filler phrases (throat-clearing openers, emphasis crutches, adverbs).
2. Break formulaic structures (binary contrasts, rhetorical setups, false agency).
3. Active voice with a human subject.
4. Be specific (name the thing, no vague extremes).
5. Put the reader in the room ("you" beats "people").
6. Vary rhythm (mix sentence lengths, no em dashes).
7. Trust readers (state facts directly).
8. Cut quotables (pull-quote tone means rewrite).

### 3.6 `.agents/skills/writing/`

Lightweight writing skill (separate from stop-slop). Emphasizes: lead with the point, minimum words, write like you talk, ground in specifics. Voice anchors: Paul Graham, Naval, Derek Sivers, Morgan Housel, Hemingway. Review-flag system: 🔴 must-fix, 🟡 improve, 🟢 optional.

### 3.7 `.agents/skills/shadcn/` and `.agents/skills/vercel-react-best-practices/`

Technical skills loaded when working on UI code. The shadcn skill covers CLI usage (`npx shadcn@latest init -d`), component composition, theming, Tailwind v4 integration. The Vercel skill contains 65 React/Next.js performance rules across 8 prioritized categories (waterfalls, bundle size, server-side perf, client fetching, re-renders, rendering, JS perf, advanced).

### 3.8 `.claude/skills/ship/` and `.claude/skills/push-commit/`

Slash commands for shipping work.

**`/ship`** runs sequentially:

1. `npx pnpm tsc --noEmit` — type check.
2. `npx pnpm lint` — ESLint.
3. `npx pnpm build` — full Next.js build.
4. Inline `npx tsx` SEO audit: discovers every `app/**/page.tsx`, checks that each route has canonical URL metadata, OG image, and is included in the sitemap.
5. Commit (use user-supplied message or derive from diff) and push.

Stops at the first failing step. Never bypasses `ignoreBuildErrors: true` by editing `next.config.mjs` — type errors must be fixed.

**`/push-commit`** is an alias that delegates to `/ship`.

### 3.9 `.claude/skills/refresh-youtube-list/`

Scheduled monthly task. Updates `content/lists/youtube-channels.mdx`:

1. Roster lives in `channels.json` (slug, name, url, ytdlp URL, description).
2. Script `update.py` fetches `channel_follower_count` via `yt-dlp` for every entry.
3. Sorts by subscriber count, keeps top 20.
4. Downloads missing avatars to `public/images/lists/youtube-channels/<slug>.jpg`.
5. Rewrites the MDX in place with refreshed counts, ranking, and image paths.
6. Stamps "Counts verified <Month YYYY>" into the frontmatter.
7. Prints a diff summary (rank deltas, count deltas, additions/drops).

Invoked via the `schedule` skill on the 1st of each month.

### 3.10 `.claude/skills/deep-research/`

Wraps the deep-research capability with citation tracking and source credibility scoring. Triggers on "deep research", "comprehensive analysis", "research report", "compare X vs Y". Not used inside the content pipeline (which uses `research-to-study-guide` instead) — this one is for direct user requests.

---

## 4. Scripts — Deterministic Tools

### 4.1 `scripts/validate-svg-viewbox.mjs`

**Purpose.** Catches the three most common SVG bugs across every guide MDX.

**Checks.**

1. **viewBox overflow.** Computes absolute bottom-Y of every SVG element (including elements nested inside translated `<g>` groups — it adds the group translate). Compares against viewBox height. Error if content extends past the viewBox.
2. **Text collision.** Finds text elements at the same y-band (±4px) and measures horizontal gap using a char-width estimate. Overlap > 20px = error, > 4px = warning.
3. **Rect-over-text overlap.** Narrow tall rects (width ≤ 20, height ≥ 80 — blades, fences, dividers) whose vertical extent reaches into the text zone below the graphic get flagged.

**Config constants** at the top of the file:

```js
const VIEWBOX_OVERFLOW_THRESHOLD = 0
const VIEWBOX_WARNING_THRESHOLD = -5
const VIEWBOX_PADDING = 16
const TEXT_Y_BAND = 4
const COLLISION_ERROR_PX = -20
const COLLISION_WARN_PX = 4
const NARROW_RECT_MAX_WIDTH = 20
const NARROW_RECT_MIN_HEIGHT = 80
```

**Usage.**

```bash
pnpm validate:svg           # run on all guides
node scripts/validate-svg-viewbox.mjs --fix  # auto-fix viewBox height overflow
```

Wired into `package.json` as both `validate:svg` and `prebuild`, so `pnpm build` can't succeed with a broken SVG.

### 4.2 `scripts/fix-svg-viewbox.mjs`

**Purpose.** Auto-repairs viewBox height overflow. Walks every SVG in `content/guides/`, calculates the actual max Y of all content (with translate awareness), adds 16px padding, writes the new viewBox back if it's taller than the declared height.

**Element handlers.** `rect` (y + height), `circle` (cy + r), `ellipse`, `line`, `polygon` (max y of points), `text` (y + ~14px for descenders), nested `<g transform="translate(x, y)">` (recurses with accumulated offset).

**Usage.**

```bash
node scripts/fix-svg-viewbox.mjs
```

### 4.3 `.claude/validate-parts.sh`

**Purpose.** Enforces the `## Part N:` heading convention.

**Pass criteria.** For every non-comingSoon guide:

- At least one `## Part N: Title` heading (N = integer).
- Every H2 is either a `## Part N: Title` heading OR one of the allowed ancillary headings: How to Use This Guide, `[Topic] at a Glance`, Quick Reference, Sources, Where This Fits, Related Guides, FAQ, Frequently Asked Questions, Glossary, About This Guide.

**Awk trick.** Skips H2-looking lines inside fenced code blocks so `## Foo` inside a \`\`\`markdown block doesn't trip the check.

**Usage.**

```bash
.claude/validate-parts.sh path/to/guide.mdx        # validate one
.claude/validate-parts.sh content/guides/*.mdx     # validate many
.claude/validate-parts.sh --all                    # whole corpus
```

Exits 0 if all pass, 1 if any fail. The fix-parts parallel runner uses this as its acceptance test before committing.

### 4.4 `.claude/parallel/section-needs-diagram.py`

**Purpose.** Tells the diagram pipeline which H2 sections actually need a diagram and which to skip.

**Classification rules.** Headings that never need a diagram:

- Exact matches: Sources, References, Bibliography, Related Guides, How to Use This Guide, Quick Reference.
- Regex matches: `Where .+ fits?`, `Where to go`, `Where to learn`, `What to learn next`, `Part N: Research .* Sources`.

Everything else needs a diagram. This matches the diagram skill's rule: every teaching H2 gets at least one diagram.

**Usage.**

```bash
python3 .claude/parallel/section-needs-diagram.py content/guides/[slug].mdx           # human report
python3 .claude/parallel/section-needs-diagram.py content/guides/[slug].mdx --check   # exit 0/1
python3 .claude/parallel/section-needs-diagram.py content/guides/[slug].mdx --json    # machine-readable
python3 .claude/parallel/section-needs-diagram.py content/guides/[slug].mdx --missing # list sections that need a diagram but don't have one
```

Used by the parallel diagram runner for under-diagrammed detection and by Phase 3 of the parallel guide runner for diagram planning.

### 4.5 `.agents/skills/keyword-gap-to-assignments/scripts/`

Four scripts, run in order, that turn a raw SEMrush CSV into an initialized backlog.

#### `cluster-keywords-by-url.js`

**Stage 1 of 3.** Groups keywords by the competitor URL that ranks for them.

Inputs: raw SEMrush Keyword Gap export (a CSV with keyword, volume, KD, competitor URLs, etc.).

Outputs (both in `downloads/` or `--out` directory):

- `*-url-summary.csv` — one row per URL: total volume, keyword count, avg KD, top keywords.
- `*-url-keywords.csv` — every keyword with its URL-level summary attached.

```bash
node .agents/skills/keyword-gap-to-assignments/scripts/cluster-keywords-by-url.js <raw-gap.csv> --out downloads
```

#### `generate-content-assignments.js`

**Stage 2 of 3.** Turns URL clusters into prioritized editorial assignments.

Takes `*-url-keywords.csv` from Stage 1 and does five things:

1. Auto-categorizes each URL cluster against the 13 Woodwiki categories + subcategories.
2. Merges URL clusters covering the same topic within the same subcategory.
3. Filters clusters below a volume threshold (default 500, `--min-volume` overrides).
4. Scores priority: `volume × 0.5 + (1 − KD/100) × 0.3 + keyword_breadth × 0.2`.
5. Infers content type (concept / technique / tool-guide / reference) and difficulty (Beginner / Intermediate / Advanced) from keyword signals.

Outputs:

- `*-content-assignments.csv` — categorized, priority-sorted.
- `*-uncategorized.csv` — clusters that didn't match the taxonomy (likely off-topic).

```bash
node .agents/skills/keyword-gap-to-assignments/scripts/generate-content-assignments.js <url-keywords.csv> --out downloads
```

#### `csv-to-backlog.js`

**Stage 3 of 3.** Converts the assignments CSV into one `.md` file per row in `assignments/01-backlog/` with YAML frontmatter and sections for target keywords, competitor URLs, and editorial notes. Also (re)generates `assignments/README.md` and `assignments/INDEX.md`.

```bash
node .agents/skills/keyword-gap-to-assignments/scripts/csv-to-backlog.js <content-assignments.csv>
```

#### `build-assignment-index.js`

**Index rebuilder.** Scans all six stage folders under `assignments/`, reads every `.md` file's frontmatter, and writes a summary table to `assignments/INDEX.md`. Run after any bulk move between stages.

```bash
node .agents/skills/keyword-gap-to-assignments/scripts/build-assignment-index.js
```

### 4.6 Root taxonomy sanity scripts — `check.mts`, `check2.mjs`, `check3.mjs`

Three small scripts in the project root that verify how guides map to taxonomy subtopics via `lib/subtopic-keywords.ts`. They differ in how they load the data (TypeScript imports vs gray-matter file reads vs eval'd regex parse of the source) but all report the same thing: how many subtopics have at least one guide matched to them, and which guides match no subtopic.

These are ad-hoc diagnostics, not CI checks. Keep them as a pattern for "quick taxonomy coverage audit"; replace with a real test when the subtopic system is promoted from `lib/subtopic-keywords.ts` into the guide data model.

---

## 5. Content Pipeline Stages

Assignments move through six folders under `assignments/`. Each folder is a stage; a stage transition is just a `mv` plus a `status:` frontmatter update.

| Stage | Folder | Enters from | Work that happens here |
|---|---|---|---|
| Archived | `00-archived/` | any stage | Rejected during enrichment (zero volume, branded, wrong intent, off-topic). File retained with rejection brief. |
| Backlog | `01-backlog/` | `csv-to-backlog.js` output | Raw assignments, prioritized but not committed to. |
| Ready to Start | `02-ready-to-start/` | Step 1 (assignment-to-brief) | Enriched brief: SEO data, intent, persona, proposed H2s. |
| In Progress | `03-in-progress/` | Step 2 (plan-research) | Research plan appended. Study guide being written in `pipeline/outputs/`. |
| Ready to Publish | `04-ready-to-publish/` | Step 12 (metadata-preflight) | Guide written, edited, cited, cross-linked, diagrammed. Frontmatter validated. Build passes. |
| Published | `05-published/` | Step 13 (push-to-live) | Live on site. Record retained linking the SEO opportunity to the published URL. |

**Rules.**

- Every assignment has a unique `assignment_id` (`WW-NNNN` for categorized, `UC-NNNN` for uncategorized). IDs are permanent across stage moves.
- Bulk additions only in backlog. Every other transition is deliberate and one-at-a-time.
- Never delete — always move to `05-published/` or `00-archived/`.
- `INDEX.md` is generated. Never hand-edit; rerun `build-assignment-index.js` after moves.

**Working directories outside `assignments/`.**

| Directory | Purpose |
|---|---|
| `pipeline/scratchpad/` | Research working files: notes, sources, findings, outlines. `[date]-[slug]-*.md` naming. |
| `pipeline/outputs/` | Intermediate deliverables. Primarily `[slug]-study-guide-v1.md`. |
| `pipeline/runs/` | Dated batch outputs: enrichment reports, completion summaries, results. Never in project root, never in `assignments/`. |
| `knowledge/` | Final research study-guide deliverables (the reusable ones, not per-guide). |
| `content/guides/` | Published MDX guide source files. Filename = slug = URL path. |

---

## 6. Context Files — the Editorial Operating System

The `context/` directory is what the agents read to behave consistently. Every writing skill loads some subset of these before producing content.

### 6.1 `context/audience.md`

Three named personas with frustrations, motivations, trust-builders, and trust-destroyers:

- **Matt** — the hobbyist DIYer. Buys tools once, wants to do it right.
- **Jess** — the learning enthusiast. Reads widely, values context and history.
- **Derek** — the professional. Cares about speed, repeatability, and not wasting shop time.

Every guide states up front which persona it's written for. Frontmatter persona mapping is in `audience.md`.

### 6.2 `context/writing-style.md`

Voice anchors, sentence-level rules, quality checks, the "read it aloud" test. Mandatory read before Steps 5 and 7 of the guide pipeline.

### 6.3 `context/manifesto.md`

Five publication principles that shape what and why Woodwiki publishes. Editorial models and content-type standards. Loaded before every writing step.

### 6.4 `context/content-types.md`

Seven content types with their structural patterns:

- **concept** — principle explained in physical terms, forward links to technique guides.
- **technique** — skill level up front, why before how, numbered steps, troubleshooting for 2–3 common problems.
- **project** — plan, cut list, step-by-step, common pitfalls.
- **tool-guide** — one recommendation up front, budget tiers, setup/tuning, what it unlocks.
- **reference** — table at top, prose below, bookmarkable.
- **troubleshooting** — symptom, diagnoses by likelihood, fix per cause.
- **glossary** — alphabetized, plain language.

Includes a "Choosing the Right Type" decision tree. Loaded in Step 4 (outline) and Step 6 (content edit) of the pipeline.

### 6.5 `context/taxonomy.md`

Canonical 13-category taxonomy with subcategories. The source of truth when `lib/taxonomy.ts` disagrees. Also documents URL structure (`/guides/[category]/[subcategory]/[slug]` — planned) vs current (`/guides/[slug]` — flat).

### 6.6 `context/assignments-pipeline.md`

The user-facing version of Section 5 above: what an assignment is, how the stages work, YAML frontmatter schema, how IDs are assigned, how to move assignments between stages, and the assignment-to-guide frontmatter mapping.

### 6.7 `context/guide-production-pipeline.md`

The narrative version of the 13-step guide pipeline, cross-referenced with the executable skills in `.agents/skills/guide-pipeline/`. Loaded before starting any pipeline run.

---

## 7. Pattern Library — How to Build a Similar Project

If you're building a content-automation system on a different topic (cooking, gardening, law — anything with a knowable taxonomy and a supply of keyword data), here's the reusable pattern.

### 7.1 The four-layer architecture

```
[ Shell runner ]  bash loop with stop-file support, log rotation, cooldown
       │
       ▼
[ Agent prompt ]  long Markdown prompt that orchestrates one cycle
       │
       ▼
[ Skills       ]  modular SKILL.md files the agent reads mid-run
       │
       ▼
[ Scripts      ]  deterministic tools (validators, processors, index builders)
```

Each layer is independently testable. The shell runner doesn't know what the agent does; the agent doesn't know what the runner does; skills compose; scripts are pure functions on files.

### 7.2 What to build first, in order

1. **Taxonomy.** Categories and subcategories codified in both a reference doc (`context/taxonomy.md`) and a TypeScript source (`lib/taxonomy.ts`). This is the decision tree every other piece depends on.
2. **Persona profiles.** 2–4 named personas with frustrations, motivations, trust builders/destroyers. Short, specific, memorable.
3. **Writing style guide.** The voice rules. One paragraph of don'ts, one paragraph of do's, a handful of before/after examples.
4. **Content-type patterns.** 5–7 types covering the output. Each has a one-paragraph structural pattern.
5. **Assignment pipeline folders.** Six stages under `assignments/`. Start with empty folders, a README, and a generated INDEX.md.
6. **Keyword-gap scripts.** Three-stage CSV processing (cluster → generate → backlog) plus an index rebuilder.
7. **Per-step skills.** 10–15 small `SKILL.md` files, one per pipeline step. Each has inputs, outputs, context-files-to-load, and a process.
8. **Orchestrator skill.** One `SKILL.md` that links to all the step skills in order.
9. **Serial runner + prompt.** Bash loop, stop-file, log rotation. The prompt tells Claude to pick a target, read the orchestrator skill, and run each step.
10. **Validators.** Any invariant you want the system to maintain (viewBox math, heading conventions, frontmatter shape) gets a script. Wire at least one into `prebuild` so the build fails when it breaks.
11. **Parallel runner.** Once the serial runner is stable, split the pipeline into phases where parallel workers make sense. Almost always there's one sequential middle step (cross-linking in this project) separating two parallel phases.

### 7.3 Non-obvious design choices worth copying

- **Stop files, not signals.** `touch .claude/stop-pipeline` is easier to reason about than SIGTERM handling. Every loop checks for the file in both the work phase and the sleep phase.
- **State files for crash recovery.** Parallel workers write state at launch, clean up on completion. Next run's pre-flight detects orphans. This eliminates "stuck assignment" recovery.
- **One file per concern.** The guide pipeline has 13 `SKILL.md` files instead of one 1000-line monster. Workers load only the 2–4 they need for their phase — context windows stay small, prompts stay focused.
- **Bi-directional rules.** Cross-linking touches both the new guide AND every existing guide it references. Make that explicit in the skill so you don't end up with orphaned back-references.
- **Read order matters.** The writing steps always load `audience.md` → `writing-style.md` → `manifesto.md` in that order. WHO before HOW before WHY. Codify load order in every writing skill.
- **Validate in CI, fix in pipeline.** `validate:svg` runs as `prebuild` so you can't ship broken. `fix:svg` auto-repairs during the pipeline. Separate tools for separate jobs.
- **Section classifiers as Python.** The "does this need a diagram?" logic is a 30-line Python script, not 30 lines of prompt. The agent calls the script; deterministic judgment stays deterministic.
- **Template substitution in worker prompts.** Workers read a Markdown prompt with `{{SLUG}}` tokens and substitute before passing to `claude -p`. Cheap parameterization.
- **Two skill roots.** `.agents/skills/` for pipeline-invoked skills. `.claude/skills/` for slash commands the user invokes directly (like `/ship`). Same file format, different contexts.

### 7.4 Invariants to enforce from day one

- **Filename = slug = URL path.** No mapping tables. `content/guides/track-saw.mdx` is `/guides/track-saw`.
- **Frontmatter matches a TypeScript interface.** A single source-of-truth interface (`GuideFrontmatter` in `lib/guides.ts` here) that frontmatter is validated against.
- **Generated files have generator scripts.** `INDEX.md`, `sitemap.xml`, and `robots.txt` are all generated. Never hand-edit.
- **Pipeline run outputs belong in `pipeline/runs/`.** Not in project root, not in `assignments/`. Dated filenames.

---

## 8. Quick Reference — Runbook

**Add new topics to the backlog.**

```bash
# Export Keyword Gap CSV from SEMrush, save as downloads/raw-gap.csv
node .agents/skills/keyword-gap-to-assignments/scripts/cluster-keywords-by-url.js downloads/raw-gap.csv --out downloads
node .agents/skills/keyword-gap-to-assignments/scripts/generate-content-assignments.js downloads/raw-gap-url-keywords.csv --out downloads
node .agents/skills/keyword-gap-to-assignments/scripts/csv-to-backlog.js downloads/raw-gap-content-assignments.csv
```

**Start the serial guide pipeline.**

```bash
bash .claude/run-pipeline.sh
# Stop: touch .claude/stop-pipeline
```

**Start the parallel guide pipeline for five specific slugs.**

```bash
MAX_PARALLEL=5 bash .claude/parallel/run-guide-pipeline-parallel.sh \
  track-saw dado-stack dovetail-saw jointer-vs-planer sanding-basics
```

**Retrofit diagrams across the corpus.**

```bash
bash .claude/parallel/run-diagram-pipeline-parallel.sh
# Stop: touch .claude/stop-parallel-diagrams
```

**Repair heading formats.**

```bash
bash .claude/parallel/run-fix-parts-parallel.sh --all
```

**Validate SVGs and headings locally before a commit.**

```bash
pnpm validate:svg
.claude/validate-parts.sh --all
```

**Ship.**

```bash
# Inside a Claude Code session:
/ship "Add track saw guide"
```

**Rebuild the assignment index after manual moves.**

```bash
node .agents/skills/keyword-gap-to-assignments/scripts/build-assignment-index.js
```

---

## 9. File Map (one-line summary per file)

### Agent runners and prompts

- `.claude/run-pipeline.sh` — serial loop for the guide pipeline.
- `.claude/pipeline-prompt.md` — the prompt the loop feeds to Claude.
- `.claude/run-diagram-pipeline.sh` — serial loop for the diagram pipeline, with safety-net `git push`.
- `.claude/diagram-pipeline-prompt.md` — diagram-pipeline prompt with priority-1 (fix under-diagrammed) and priority-2 (new guide) target selection.
- `.claude/parallel/run-guide-pipeline-parallel.sh` — three-phase parallel guide pipeline with state-based crash recovery.
- `.claude/parallel/run-diagram-pipeline-parallel.sh` — parallel diagram pipeline with inventory-based progress tracking.
- `.claude/parallel/run-fix-parts-parallel.sh` — parallel heading-format repair.
- `.claude/parallel/guide-worker-phase1-prompt.md` — per-worker prompt for Steps 2–9.
- `.claude/parallel/crosslink-prompt.md` — coordinator prompt for Step 10 across a batch.
- `.claude/parallel/guide-worker-phase3-prompt.md` — per-worker prompt for Steps 11–13.
- `.claude/parallel/diagram-worker-prompt.md` — per-worker diagram-pipeline prompt (Steps 1–6).
- `.claude/parallel/fix-parts-worker-prompt.md` — per-worker heading-repair prompt.

### Skills — `.agents/skills/`

- `guide-pipeline/SKILL.md` — orchestrator for the 13-step guide pipeline.
- `guide-pipeline/01-assignment-to-brief/SKILL.md` through `13-push-to-live/SKILL.md` — the twelve step-skills.
- `diagram-pipeline/SKILL.md` — 7-step diagram pipeline.
- `diagram-pipeline/SVG-STYLE-GUIDE.md` — visual rules.
- `diagram-pipeline/GUIDE-INVENTORY.md` — ⬜/✅ status table.
- `diagram-pipeline/TRACKING.md` — completed-diagram log.
- `keyword-gap-to-assignments/SKILL.md` — three-stage keyword-gap pipeline.
- `research-to-study-guide/SKILL.md` — deep research skill.
- `stop-slop/SKILL.md` + `references/` — AI-writing-pattern stripper.
- `writing/SKILL.md` — general writing skill.
- `shadcn/SKILL.md` — shadcn/ui CLI and patterns.
- `vercel-react-best-practices/SKILL.md` + `rules/` — 65 React/Next.js performance rules.

### Skills — `.claude/skills/`

- `ship/SKILL.md` — pre-flight checks + commit + push + SEO audit.
- `push-commit/SKILL.md` — alias for `/ship`.
- `refresh-youtube-list/SKILL.md` + `update.py` + `channels.json` — monthly YouTube refresh.
- `deep-research/SKILL.md` — user-facing deep-research skill.
- `vercel-react-best-practices/SKILL.md` — mirror of the one in `.agents/skills/`.

### Scripts

- `scripts/validate-svg-viewbox.mjs` — three-check SVG validator; runs on `prebuild`.
- `scripts/fix-svg-viewbox.mjs` — auto-repair viewBox overflow.
- `.claude/validate-parts.sh` — `## Part N:` heading convention validator.
- `.claude/parallel/section-needs-diagram.py` — H2-section classifier for diagram planning.
- `.agents/skills/keyword-gap-to-assignments/scripts/cluster-keywords-by-url.js` — Stage 1.
- `.agents/skills/keyword-gap-to-assignments/scripts/generate-content-assignments.js` — Stage 2.
- `.agents/skills/keyword-gap-to-assignments/scripts/csv-to-backlog.js` — Stage 3.
- `.agents/skills/keyword-gap-to-assignments/scripts/build-assignment-index.js` — index rebuilder.
- `check.mts`, `check2.mjs`, `check3.mjs` — ad-hoc taxonomy-coverage diagnostics (root).

### Context files

- `context/audience.md` — three personas (Matt, Jess, Derek).
- `context/writing-style.md` — voice and sentence rules.
- `context/manifesto.md` — five publication principles.
- `context/content-types.md` — seven content-type patterns.
- `context/taxonomy.md` — 13-category canonical taxonomy.
- `context/assignments-pipeline.md` — assignment lifecycle and YAML schema.
- `context/guide-production-pipeline.md` — narrative version of the 13-step pipeline.

### Pipeline directories

- `assignments/00-archived/` through `05-published/` — six-stage assignment pipeline.
- `assignments/INDEX.md` — generated summary table.
- `pipeline/scratchpad/` — research working files.
- `pipeline/outputs/` — intermediate deliverables (study guides).
- `pipeline/runs/` — dated batch outputs (enrichment reports, completion summaries).
- `knowledge/` — reusable research study-guide deliverables.
- `content/guides/` — published MDX guide source (filename = slug).

---

## 10. What This Guide Doesn't Cover

- The Next.js app itself (covered in `CLAUDE.md`).
- SEO infrastructure details (sitemap, robots, OG images, JSON-LD — covered in `knowledge/seo-sitemap-best-practices-study-guide-v1.md`).
- The specific SVG style conventions (font sizes, color palette, class prefixing — see `.agents/skills/diagram-pipeline/SVG-STYLE-GUIDE.md`).
- Per-step editorial rubrics inside each guide-pipeline sub-skill (each step's `SKILL.md` has its own detailed rubric).

Read those when you need them. This document's job is to explain the automation that sits on top of all of it.
