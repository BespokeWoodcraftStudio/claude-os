# Context Engineering Guide

<metadata>
purpose: Teaches how to write content that AI agents can effectively use
audience: Anyone adding to or maintaining this knowledge base
summary: Practical guide to writing for AI agents — token budgets, progressive disclosure, metadata, and common failure modes
token_estimate: medium
domain: meta
confidence: canonical
context_tier: 2
last_updated: 2026-02-18
</metadata>

## The Core Principle

> "Find the smallest set of high-signal tokens that maximize the likelihood of your desired outcome."
> — Anthropic, Context Engineering for AI Agents

Every word in this knowledge base costs tokens. Unnecessary words, redundant descriptions, and stale data actively degrade agent performance. Write with precision.

---

## Token Budget Awareness

AI agents have finite context windows. Here's how the budget typically breaks down:

| Category | % of Budget | What It Includes |
|----------|-------------|------------------|
| System instructions | 10-15% | CLAUDE.md, agent configs, rules |
| Knowledge context | 30-40% | Docs, roles, voice guide loaded for the task |
| Conversation history | 20-30% | The back-and-forth with the user |
| Buffer reserve | 10-15% | Room for the agent to think and respond |

**Practical guidelines:**
- Keep individual files under 500 lines when possible
- The `token_estimate` metadata field helps agents budget: `small` (<200 lines), `medium` (200-500), `large` (500+)
- If a file is `large`, consider splitting it or adding a summary section at the top

---

## Progressive Disclosure

Don't dump everything into context at once. Layer information so agents load what they need:

**Layer 1 — Summaries (always available):**
- The `summary` field in every file's metadata
- INDEX.md tables with one-line descriptions per file
- README.md overviews of what's in each directory

**Layer 2 — Working context (loaded for the task):**
- The specific docs referenced by the agent config
- Role files and voice guides relevant to the task

**Layer 3 — Deep reference (loaded on demand):**
- Study guides, research notes, detailed procedures
- Only loaded when the agent specifically needs them

**Layer 4 — Archives (search only):**
- Records, transcripts, downloads
- Never bulk-loaded — agents search and load individual files

---

## Writing for AI Agents

### Structure for machines, not just humans

1. **Front-load key information** — Put the most important point in the first 2 sentences of any section
2. **Use clear section headers** — Agents scan headers to decide what to read
3. **One concept per section** — Don't mix topics in a single section
4. **Use tables for structured data** — Agents parse tables more reliably than paragraphs
5. **Use XML-style tags for semantic blocks** — `<metadata>`, `<example>`, `<important>` help agents identify content types

### The metadata block

Every content file should have a metadata block at the top:

```xml
<metadata>
purpose: What this file does (one line)
audience: Who should read this
summary: ONE sentence summary — this is what agents see in INDEX files
token_estimate: small/medium/large
depends_on: Files that MUST be loaded alongside this one
related: Cross-references to related files
domain: company/product/writing/operations/finance/etc.
confidence: canonical (source of truth) / current (up to date) / draft (work in progress)
context_tier: 0 (always) / 1 (task-triggered) / 2 (on-demand) / 3 (search-only)
last_updated: YYYY-MM-DD
</metadata>
```

### Key metadata fields explained

- **summary**: The single most important field. Agents read this in INDEX files to decide whether to load the full document. Make it specific and informative.
- **depends_on**: Explicit dependency graph. If loading this file without another creates confusion, list the dependency. Example: A role file might depend on specific financial docs.
- **token_estimate**: Helps agents budget their context window. Don't load a `large` file if a `small` one answers the question.
- **context_tier**: Controls when files get loaded. Tier 0-1 files are always/often loaded. Tier 3 files are only searched, never bulk-loaded.

---

## Context Failure Modes

Watch for these common problems:

### Context Poisoning
**What:** Wrong or outdated information in the knowledge base
**Fix:** Keep `last_updated` dates current. Archive outdated docs instead of leaving them alongside current ones. Use `confidence: draft` for unverified content.

### Context Distraction
**What:** Irrelevant information loaded alongside the task
**Fix:** Use task-specific agent configs (agent-docs/) so only relevant context loads. Keep files focused — one topic per file.

### Context Confusion
**What:** Contradictory information across multiple files
**Fix:** Establish canonical sources with `confidence: canonical`. Follow the rule: newer docs win. When information conflicts, the file with the more recent `last_updated` takes precedence.

### Context Clash
**What:** Conflicting instructions that paralyze the agent
**Fix:** Keep CLAUDE.md universal — no task-specific rules. Put task-specific behavior in agent-docs/. If two instructions conflict, the more specific one wins.

---

## The INDEX File Format

INDEX files are the primary navigation tool for agents. Use this format:

```markdown
# [Directory Name] — Index

| File | Summary | Tier |
|------|---------|------|
| `filename.md` | One specific sentence about what this file contains | 1 |
```

The summary column is what agents scan to decide what to load. Make each summary:
- **Specific** — "Company mission statement and 7 core beliefs" not "About the company"
- **Informative** — Include what's actually in the file, not just the topic
- **Concise** — One sentence maximum

---

## File Naming Conventions

- Format: `descriptive-name-v1.md` (lowercase, hyphens, version suffix)
- Minor updates: edit in place, update `last_updated`
- Major changes: create `-v2`, move old version to `/archive`
- Templates: include `template` in the name: `role-template-v1.md`

---

## Checklist for New Files

Before adding a file to the knowledge base:

- [ ] Does it have a `<metadata>` block with all fields?
- [ ] Is the `summary` field specific and informative?
- [ ] Is it in the right directory?
- [ ] Is it listed in the directory's `INDEX.md`?
- [ ] Does the `depends_on` field list any required companion files?
- [ ] Is the `context_tier` set correctly?
- [ ] Does it follow the naming convention?
- [ ] Is the content front-loaded (key point in first 2 sentences of each section)?
