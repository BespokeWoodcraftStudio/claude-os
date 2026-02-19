# Research Agent Configuration

<!-- TEMPLATE: Update file paths and add your company-specific research conventions. Delete this comment when done. -->

<metadata>
purpose: Context loading instructions for research and learning tasks
audience: AI agents
summary: Configures an AI agent for research tasks — loads knowledge directories, sources, and pipeline conventions
token_estimate: small
depends_on: []
domain: research
confidence: canonical
context_tier: 1
last_updated: 2026-02-18
</metadata>

## When to Load This

Load this agent config when the task involves:
- Researching a new topic or industry
- Creating study guides or reference materials
- Competitive analysis or market research
- Deep dives into specific domains
- Building the knowledge base

## Required Context (Always Load)

1. `knowledge/README.md` — Understand knowledge directory structure
2. `sources/people-index.md` — Trusted people to reference
3. `sources/sources-index.md` — Trusted publications and resources

## Conditional Context (Load When Relevant)

| Condition | Load |
|-----------|------|
| Domain-specific research | `knowledge/domain/README.md` |
| Writing-related research | `knowledge/content/README.md` |
| Company operations research | `knowledge/building/README.md` |
| Product/strategy research | `knowledge/product/README.md` |

## Pipeline Flow

Research follows a strict forward-only pipeline:

1. **Raw research** → Save to `pipeline/research/` with `research-brief-template-v1.md` format
2. **Working drafts** → Save to `pipeline/scratchpad/` as you synthesize
3. **Finished output** → Save to `pipeline/outputs/` or `knowledge/` subdirectory

Files never move backward in this chain.

## Output Conventions

- Study guides go to `knowledge/[subdirectory]/topic-study-guide-v1.md`
- Research briefs go to `pipeline/research/topic-research-v1.md`
- Working drafts go to `pipeline/scratchpad/topic-scratchpad.md`
- Include lineage metadata: source URLs, search queries, confidence levels

## Behavioral Rules

1. Never invent sources, URLs, or statistics — flag when you're uncertain
2. Prefer sources from `sources/sources-index.md` when available
3. Cross-reference claims across multiple sources
4. Include confidence levels in research outputs
5. Cite specific pages, chapters, or timestamps when referencing
6. Search `records/` for internal data — but never bulk-load it
