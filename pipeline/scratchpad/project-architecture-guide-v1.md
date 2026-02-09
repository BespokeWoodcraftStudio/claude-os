# GrowthX Context: Project Architecture Guide

<metadata>
purpose: Explain how this project is structured, how everything connects, and how AI agents use it
audience: Marcel, new contributors, and AI agents orienting themselves
related: CLAUDE.md, docs/context-routing.md, .cursor/skills/
domain: company
confidence: current
last_updated: 2026-02-07
</metadata>

This is a knowledge base, not a codebase. There's no app to run, no build step. The "product" is context -- organized information that AI agents (and humans) can navigate to understand GrowthX, write in our voice, research topics, and make decisions.

---

## The Three-Second Version

AI agent opens this project. It reads CLAUDE.md (~60 lines). That file tells it what GrowthX is, where to find things, and when to load more context. The agent only pulls in what it needs for the current task. That's it.

---

## What This Project Contains

Everything GrowthX knows, organized into three layers:

### Layer 1: Knowledge (what exists)

| Directory | What's In It |
|-----------|-------------|
| `docs/` | The company handbook. Strategy, business model, ICP, delivery, finance, products, people policies. Organized by function. |
| `knowledge/` | Study guides and reference materials. Writing craft, AEO research, PMM fundamentals. Things we've learned. |
| `roles/` | AI executive personas. CFO, COO, CTO, CMO, etc. Each is a complete persona with expertise, reasoning style, and decision frameworks. |
| `writing-guidelines/` | Voice, tone, and style rules. The definitive guide to writing like GrowthX. |
| `sources/` | Indexes of external sources. Podcast transcripts, article databases, expert directories. |
| `personal-context/` | Marcel's personal context. LinkedIn style, communication preferences, background. |

### Layer 2: Process (how work happens)

| Directory | What's In It |
|-----------|-------------|
| `.cursor/skills/` | Agent workflows. Step-by-step instructions for tasks like research, writing, posting to Slack, updating Notion. |
| `prompts/` | Standalone prompt templates not tied to a specific skill. |
| `research/` | Active research in progress. Raw material being gathered. |
| `scratchpad/` | Work in progress. Drafts, analysis, notes. The workbench. |
| `outputs/` | Finished work. Completed research, deliverables, final versions. |

The pipeline flows in one direction: **research/ -> scratchpad/ -> outputs/**

### Layer 3: Activity Traces (what actually happened)

| Directory | What's In It |
|-----------|-------------|
| `transcripts/` | Meeting transcripts pulled from Fireflies. Sales calls, team meetings, board prep. |
| `customers/` | Client-specific documentation. Account context, engagement history, deliverables. |
| `downloads/` | External content. 270+ Lenny's Podcast transcripts and other reference material. |

These directories are large. Search them, never bulk-load them.

---

## How Everything Connects

```
CLAUDE.md (entry point, ~60 lines)
    |
    |-- "What We Do" -> Quick orientation
    |-- "Directory Map" -> Find the right directory
    |-- "When to Load Context" -> Task-specific pointers
    |
    v
docs/context-routing.md (detailed routing, loaded on demand)
    |
    |-- Tiered loading rules (what to load when)
    |-- Task routing stacks (writing, research, decisions, client work)
    |-- Sensitivity classification (public, internal, leadership-only)
    |
    v
Directory READMEs -> INDEX files -> Individual files with <metadata> tags
```

The pattern is **progressive disclosure**. Start narrow, go deeper only as needed:

1. **CLAUDE.md** -- orientation in seconds (always loaded)
2. **Directory README** -- what's in this section (loaded when entering a directory)
3. **INDEX** -- every file listed (loaded when searching within a directory)
4. **File metadata** -- purpose, audience, related files (at top of each document)
5. **File content** -- the actual information (loaded last)

An agent doing a writing task never needs to read finance docs. An agent analyzing Q4 numbers never needs writing guidelines. Progressive disclosure keeps the context window focused.

---

## The File System

Every file follows the same conventions:

**Naming:** `descriptive-name-v1.md` -- lowercase, hyphens, version suffix.

**Versioning:** Minor edits update in place (change `last_updated` in metadata). Major rewrites create a new version (`-v2`) and move the old one to `archive/`.

**Archives:** Every directory has an `archive/` subdirectory for outdated files. Agents should not read archived files unless specifically asked for historical context.

**Metadata:** Most files have a `<metadata>` block at the top:

```xml
<metadata>
purpose: One sentence explaining what this file is for
audience: Who reads this
related: Paths to 2-4 related files
domain: company|business|delivery|product|finance|writing|research
confidence: canonical|current|research|aspirational
sensitivity: public|internal|leadership-only
context_tier: 0|1|2|3
last_updated: 2026-02-07
</metadata>
```

The `context_tier` field tells agents how eagerly to load the file:
- **Tier 0:** Always loaded (just CLAUDE.md)
- **Tier 1:** Load when task matches (writing guide, relevant role persona)
- **Tier 2:** Load when referenced (study guides, source indexes)
- **Tier 3:** Search only, never bulk-load (transcripts, downloads)

---

## Skills: How Agents Do Work

Skills live in `.cursor/skills/`. Each skill is a self-contained directory:

```
.cursor/skills/research-to-study-guide/
    SKILL.md              # Workflow definition with input/output contract
    prompts/              # Prompt templates used by this skill
        research-to-study-guide-prompt-v1.md
```

### Current Skills

| Skill | What It Does | Input | Output |
|-------|-------------|-------|--------|
| `research-to-study-guide` | Deep research on any topic, synthesized into a study guide | Topic + learner profile | Scratchpad file + study guide in knowledge/ |
| `growthx-writing` | Write or review content in GrowthX voice | Content type + brief | Draft content |
| `post-to-slack` | Post messages to Slack channels | Channel + message | Slack message posted |
| `update-notion-doc` | Sync local markdown to a Notion page | Notion URL + source file | Notion page updated |

Each SKILL.md has:
- **YAML frontmatter** with name and description (for agent discovery)
- **Input/Output** declaring what the skill expects and produces
- **Quick Start** with the 5-step overview
- **Detailed phases** with instructions, templates, and quality checks
- **Deep Reference** linking to related prompt templates and context files

Skills are inspired by Output.ai's workflow architecture: each skill is a self-contained module. Everything the agent needs to execute the workflow lives in the skill directory.

---

## Roles: AI Executive Personas

The `roles/` directory contains 10 executive AI personas:

| Role | Expertise |
|------|-----------|
| CFO | Financial analysis, board prep, fiscal planning |
| COO | Operations, delivery, process optimization |
| CTO | Technical strategy, architecture, engineering |
| CMO | Marketing strategy, brand, content |
| CRO | Revenue, sales, customer acquisition |
| Chief of Staff | Cross-functional coordination, priorities |
| Consigliere | Strategic counsel, pattern matching |
| VP People | Culture, hiring, team development |
| Performance Coach | Personal effectiveness, leadership |
| AEO Expert | AI Engine Optimization, visibility |

Each role file is a complete persona: expertise, reasoning style, decision frameworks, what they push back on. Use them for decision support ("What would our CFO say about this?") or task execution ("Analyze this as our CTO would").

Roles can be stacked. A board prep task might combine CFO (numbers) + COO (operations) + Chief of Staff (narrative).

---

## How Cursor Uses This Project

Cursor loads context through three mechanisms:

### 1. CLAUDE.md (automatic)

Cursor reads `CLAUDE.md` at the start of every conversation. This is the only file that's always in context. It provides orientation and tells the agent when to load more.

### 2. .cursor/rules/ (automatic or on-demand)

Rules are `.mdc` files with YAML frontmatter that control when they activate:

| Rule | Type | What It Does |
|------|------|-------------|
| `file-naming.mdc` | Always-on | Enforces naming conventions for any file creation |
| `readme-maintenance.mdc` | Always-on | Maintains README/INDEX when directories change |
| `context-navigation.mdc` | Agent-requested | Guides the agent on how to navigate the knowledge base |

**Always-on rules** (`alwaysApply: true`) load into every conversation. Keep them short.

**Agent-requested rules** have a `description` field. Cursor reads all descriptions and decides whether to pull in the full rule based on the current task.

### 3. .cursor/skills/ (on-demand)

When a user's request matches a skill's description, Cursor loads the SKILL.md and follows its workflow. The skill's prompts and context files load as needed during execution.

### How Cursor navigates a typical task

User says: "Research context engineering and create a study guide."

1. Cursor reads CLAUDE.md (always loaded, ~60 lines)
2. CLAUDE.md's "When to Load Context" section says: "If doing research, read the relevant skill in `.cursor/skills/`"
3. Cursor matches the request to `research-to-study-guide` skill (via YAML description)
4. Loads SKILL.md, reads Input section, asks user for topic + learner profile
5. Follows the phased workflow, loading co-located prompts as needed
6. Writes scratchpad to `/scratchpad/`, study guide to `/knowledge/`

At no point does Cursor load the entire repo. It follows the progressive disclosure chain.

---

## How Claude Code Uses This Project

Claude Code (the CLI agent) loads context through two mechanisms:

### 1. CLAUDE.md (automatic)

Claude Code reads `CLAUDE.md` at startup. The file `claude.md` (lowercase) is a symlink to `CLAUDE.md`, ensuring both casings work. Claude Code wraps this file with "this context may or may not be relevant" -- so keeping it lean (~60 lines) ensures the model actually follows the instructions.

### 2. .skills/skills/ (on-demand)

Claude Code discovers skills in `.skills/skills/`. This directory is symlinked to `.cursor/skills/`, so both tools read the same skill definitions from a single source of truth.

When Claude Code encounters a task matching a skill description, it loads the SKILL.md and follows the workflow.

### 3. docs/ and other directories (on-demand)

Claude Code navigates the repo like any agent: CLAUDE.md points to directories, READMEs orient within directories, INDEX files list contents, metadata tags describe individual files.

### How Claude Code navigates a typical task

User says: "Write a LinkedIn post about our content marketing approach."

1. Claude Code reads CLAUDE.md (auto-loaded)
2. CLAUDE.md says: "If generating content or matching our voice, read `writing-guidelines/writing-style-context-v2.md` first"
3. Claude Code loads the style guide
4. CLAUDE.md also says: "For detailed context loading rules, read `docs/context-routing.md`"
5. Context routing says LinkedIn writing loads: writing guide -> personal-context/marcel-linkedin-style -> relevant product docs
6. Claude Code loads those files, writes the post

### Key difference from Cursor

Cursor has `.cursor/rules/*.mdc` as an extra layer of always-on and auto-attached rules. Claude Code doesn't have this. Claude Code relies entirely on CLAUDE.md + docs/context-routing.md for guidance, plus skills for workflows.

The `docs/context-routing.md` file is the shared brain. Both tools read it when they need detailed routing instructions.

---

## Cross-Tool Compatibility

| Component | Cursor | Claude Code | How It Works |
|-----------|--------|-------------|-------------|
| Root context | CLAUDE.md | claude.md (symlink) | Single source of truth |
| Cross-tool compat | AGENTS.md (symlink) | AGENTS.md (symlink) | Works in Zed, Windsurf, Copilot too |
| Skills | `.cursor/skills/` | `.skills/skills/` (symlink) | One set of skills, two discovery paths |
| Rules | `.cursor/rules/*.mdc` | Not applicable | Cursor-only layer |
| Routing | `.cursor/rules/` + `docs/context-routing.md` | `docs/context-routing.md` | Shared routing doc |
| Metadata | `<metadata>` XML tags | `<metadata>` XML tags | Same format, both tools read it |

---

## The Pipeline: How Content Gets Made

Work flows through three directories in order:

```
research/          ->        scratchpad/        ->        outputs/
(raw material)               (work in progress)           (finished work)
```

**research/** -- Active research. Raw search results, source material, data gathering. Files here are messy and incomplete. That's fine.

**scratchpad/** -- Working drafts. Analysis, synthesis, drafts in progress. This is the workbench. Files here are being actively shaped.

**outputs/** -- Finished deliverables. Completed research summaries, final versions, published content. Files here are done.

Files move forward, never backward. A scratchpad file that's finished becomes an output. Research that's been synthesized stays in research/ as a reference but the synthesis lives in scratchpad/ or outputs/.

---

## What Not to Do

1. **Don't bulk-load transcripts/ or downloads/.** They contain hundreds of files. Search them with grep. Load individual files when you find a match.

2. **Don't invent facts about GrowthX.** If it's not in these docs, say so. Don't extrapolate.

3. **Don't ignore metadata sensitivity tags.** Files marked `leadership-only` should not appear in external-facing content without explicit approval.

4. **Don't skip the style guide when writing.** Any content generation starts with `writing-guidelines/writing-style-context-v2.md`. No exceptions.

5. **Don't read archived files** unless specifically asked for historical context. They're outdated.

6. **Don't load everything.** The whole point of this architecture is progressive disclosure. Load what you need, when you need it.

---

## Quick Reference

| I want to... | Start here |
|--------------|-----------|
| Understand GrowthX | `docs/company/vision-and-strategy.md` |
| Write content | `writing-guidelines/writing-style-context-v2.md` |
| Research a topic | `.cursor/skills/research-to-study-guide/SKILL.md` |
| Prepare for a board meeting | `roles/cfo-v1.md` + `docs/finance/` |
| Work on a client | `customers/[client-name]/` |
| Find a meeting transcript | Search `transcripts/` by keyword |
| Understand the business model | `docs/business/overview.md` |
| Check product strategy | `docs/products/ecosystem-strategy.md` |
| Post to Slack | `.cursor/skills/post-to-slack/SKILL.md` |
| Update a Notion page | `.cursor/skills/update-notion-doc/SKILL.md` |
