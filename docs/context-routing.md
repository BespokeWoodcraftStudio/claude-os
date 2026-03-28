# Context Routing Guide

<metadata>
purpose: Detailed routing rules for AI agents navigating this knowledge base
audience: AI agents (Cursor, Claude Code) and humans designing agent workflows
summary: Explains HOW to load context efficiently — tiered loading, task stacks, sensitivity rules, and navigation patterns.
token_estimate: large
depends_on: []
related: ../CLAUDE.md, ../context/README.md, ../pipeline/README.md
domain: company
confidence: canonical
context_tier: 1
last_updated: 2026-03-27
</metadata>

CLAUDE.md tells agents what exists and when to load it. This doc explains HOW to load context efficiently and what to watch out for.

---

## Tiered Context Loading

Not all files are equal. Load the minimum context needed for the task.

| Tier | When Loaded | What's There | Token Budget |
|------|------------|--------------|-------------|
| **0 — Always** | Every conversation | CLAUDE.md (~50 lines) | ~500 tokens |
| **1 — Task-triggered** | When task type is identified | Style guide, relevant role, key docs | 2,000-5,000 tokens |
| **2 — On-demand** | When agent hits a specific question | Individual docs, study guides, research | 1,000-3,000 per file |
| **3 — Search-only** | Only via grep/search, never bulk-loaded | Transcripts, downloads, customer records | Variable |

**The rule:** Start at Tier 0. Escalate only when you need more information. Never skip to Tier 3 without checking Tier 1-2 first.

---

## Task Routing Stacks

Each task type has a recommended loading sequence. Load files in order — stop when you have enough context.

### Writing Content

```
1. context/voice/writing-style-context-v2.md     (always — the definitive guide)
2. context/voice/social-media-voice-v1.md          (if social media or short-form content)
3. docs/business/business-model.md                (if about Bespoke Woodcraft Studio)
4. docs/products/product-overview-template.md     (if about a specific product)
5. knowledge/domain/                              (if about your domain expertise)
```

### Answering Company Questions

```
1. docs/start-here.md                             (orientation)
2. docs/company/strategy-overview.md              (if strategy question)
3. docs/business/business-model.md                (if business model question)
4. docs/business/ideal-customer-profile.md        (if ICP/sales question)
5. docs/delivery/                                 (if about how we deliver)
6. docs/finance/                                  (if financial — flag sensitivity)
```

### Making Strategic Decisions

```
1. context/roles/[relevant-role]-v1.md            (load the right persona)
2. docs/company/strategy-overview.md              (strategic context)
3. docs/business/business-model.md                (business context)
4. docs/finance/fiscal-plan-template.md           (if financial implications)
5. context/personal/[user-manual].md              (if advising the founder directly)
```

### Research / Deep Dives

```
1. knowledge/[relevant-topic]/README.md           (start at the hub)
2. pipeline/research/                             (check existing research)
3. sources/sources-index.md                       (find reference material)
4. records/downloads/                             (search — don't bulk-load)
```

### Client Work

```
1. records/customers/[client]/[client]-client-context-v1.md  (client context)
2. records/transcripts/                           (search for relevant meetings)
3. docs/delivery/                                 (how we deliver)
4. context/voice/writing-style-context-v2.md      (if writing for client)
```

### Creating Deliverables

```
1. Load the relevant task stack above FIRST
2. Save drafts to: pipeline/scratchpad/
3. Save finished work to: pipeline/outputs/
4. Never save directly to docs/ or knowledge/ without explicit instruction
```

---

## Sensitivity Classification

Some content requires caution. When in doubt, ask before generating.

| Level | What It Means | Directories | Action |
|-------|--------------|-------------|--------|
| **Public** | Can be shared externally | knowledge/, docs/products/[public content] | Generate freely |
| **Internal** | Company-internal, not secret | docs/company/, docs/business/, docs/delivery/, context/ | Generate freely, don't share externally |
| **Leadership-only** | Financial, strategic, sensitive | docs/finance/, context/personal/ | Flag before generating. Don't include in outputs without asking. |

**Hard rules:**
- Never generate legal, compliance, or financial content without flagging
- Never include fiscal plans, board meeting content, or valuation data in client-facing outputs
- Never share personal context (psych profile, user manual) externally
- When information conflicts between docs, prefer the newer document

---

## Pipeline Rules

Files flow forward through the pipeline. Never backward.

```
pipeline/research/  →  pipeline/scratchpad/  →  pipeline/outputs/
    (raw material)       (working drafts)        (finished work)
```

| Stage | What Goes Here | What "Done" Means | Next Step |
|-------|---------------|-------------------|-----------|
| `research/` | Raw research, competitive briefs, data gathering | Material is organized and ready to inform a deliverable | Move key findings to scratchpad/ as a draft |
| `scratchpad/` | Drafts, working docs, experiments | Document is polished enough to share or publish | Graduate to outputs/ |
| `outputs/` | Finished deliverables, published content | Delivered to client or published externally | Archive or reference |

**Process traces:** When a skill produces output, include a trace in the file's metadata:

```xml
<metadata>
source_skill: research-to-study-guide
input_files: [pipeline/research/topic-raw-notes.md]
output_stage: scratchpad
last_updated: 2026-02-18
</metadata>
```

---

## Records: Search Protocol

The `records/` directory can contain hundreds of files. Never bulk-load them.

| Directory | How to Access |
|-----------|--------------|
| `records/transcripts/` | Search by date (YYYY-MM-DD prefix) or grep for keywords |
| `records/customers/` | Navigate to `records/customers/[client]/` for client context |
| `records/downloads/` | Grep for topics. Never read all at once. |

**Search strategy:**
1. Use grep/search with specific keywords — never `read *`
2. Start with README.md or INDEX.md in each directory to understand what's there
3. Read only the specific files that match your query
4. If you need meeting context, search by date or participant name

---

## Navigation Patterns

### "I don't know where to look"

1. Read CLAUDE.md (Tier 0 — you already have this)
2. Check the root INDEX.md for a global sitemap
3. Check the README.md in the most relevant directory
4. Search/grep for keywords across the repo

### "I need to understand Bespoke Woodcraft Studio"

Start at `docs/start-here.md`. It links to everything else.

### "I need to write something"

Always load `context/voice/writing-style-context-v2.md` before writing anything. No exceptions.

### "I need a persona for analysis"

Pick from `context/roles/`. The README.md lists all roles with when to use each one.

### "I found conflicting information"

1. Check `last_updated` in metadata — newer wins
2. Check `confidence` in metadata — canonical > current > research > aspirational
3. If still unclear, flag the conflict and ask

---

## Metadata Schema

Files use `<metadata>` XML tags for machine-readable context:

```xml
<metadata>
purpose: [What this file does]
audience: [Who reads this]
summary: [ONE sentence summary]
token_estimate: [small/medium/large]
depends_on: [Files that must co-load, if any]
related: [Cross-references]
domain: [company/product/writing/etc.]
confidence: [canonical/current/draft]
context_tier: [0/1/2/3]
last_updated: [YYYY-MM-DD]
</metadata>
```

**Confidence levels:**
- **canonical** — Source of truth, actively maintained
- **current** — Accurate as of last_updated, may drift
- **research** — Findings and analysis, not official position
- **aspirational** — Future plans, not yet implemented
