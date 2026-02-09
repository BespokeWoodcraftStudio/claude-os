# GrowthX CEO OS

Knowledge base for GrowthX. Not a codebase — no app, no build step. The product is context.

## What We Do

- **GrowthX (services)**: B2B content marketing. $200k+/year engagements. Main revenue driver.
- **CheckThat (software)**: Open AI visibility index for B2B. Strategic bet.

## Where Things Live

| Directory | What's There | Load When |
|-----------|-------------|-----------|
| `docs/` | The Handbook — company, business, delivery, EPD, finance, products | Understanding GrowthX or answering company questions |
| `context/voice/` | How we write — style guide, LinkedIn style | Any writing or content task |
| `context/roles/` | How we think — 9 AI executive personas | Decision support, analysis, reasoning |
| `context/personal/` | Who Marcel is — user manual, psych profile | Working directly with Marcel |
| `knowledge/` | Study guides, reference materials, AEO research | Deep research or learning tasks |
| `pipeline/` | research/ → scratchpad/ → outputs/ (flows forward only) | Creating any deliverable |
| `records/` | Transcripts, customers, downloads | Search only — never bulk-load |
| `sources/` | People and sources indexes | Finding experts or references |
| `prompts/` | Reusable prompt templates | Building AI workflows |

## When to Load More Context

Don't load everything. Read what you need for the task:

- **Writing content?** Read `context/voice/writing-style-context-v2.md` first. It's the definitive guide.
- **Company questions?** Start at `docs/start-here.md`, then drill into the relevant `docs/` subdirectory.
- **Making decisions?** Load a role from `context/roles/` (e.g., `cfo-v1.md` for financial decisions).
- **AEO / AI visibility?** Start at `knowledge/aeo/README.md` — consolidated hub with 103 indexed sources.
- **Client work?** Search `records/customers/` for client context, `records/transcripts/` for meeting notes.
- **Creating deliverables?** Save drafts to `pipeline/scratchpad/`, finished work to `pipeline/outputs/`.

For detailed routing, task stacks, and sensitivity rules, see `docs/context-routing.md`.

## Universal Rules

1. **Don't invent facts** about GrowthX not in these docs
2. **Don't bulk-load** records/ or downloads/ — search them
3. **Newer docs win** when information conflicts
4. **Flag sensitive content** — don't generate legal, compliance, or financial content without asking
5. **File naming**: `descriptive-name-v1.md` (lowercase, hyphens, version suffix)
6. **Voice**: Direct, clear, real. Like a smart friend explaining something important. No jargon, no filler, no passive voice.

## File Structure

Every directory has `README.md` (what's here, why) and `INDEX.md` (complete file listing). Root `INDEX.md` is the global sitemap.

Files use `<metadata>` tags for machine-readable context: purpose, audience, related files, domain, confidence, last_updated.

**Versioning:** Minor updates edit in place. Major changes create `-v2`, old goes to `/archive`.
