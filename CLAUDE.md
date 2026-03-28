# Bespoke Woodcraft Studio Context OS

Knowledge base for Bespoke Woodcraft Studio. Not a codebase — the product is context.

## What We Do

- **Bespoke Woodcraft Studio**: Content creation agency specializing in woodworking and craft — we tell the stories behind handmade work.

## Where Things Live

| Directory | What's There | Load When |
|-----------|-------------|-----------|
| `docs/` | The Handbook — company, business, delivery, products, finance | Company questions or onboarding |
| `context/voice/` | How we write — style guide, social media voice | Any writing or content task |
| `context/roles/` | How we think — AI executive personas | Decision support, analysis |
| `context/personal/` | Who the founder is — user manual | Working directly with the founder |
| `knowledge/` | Study guides, reference materials | Deep research or learning tasks |
| `pipeline/` | research/ → scratchpad/ → outputs/ (forward only) | Creating any deliverable |
| `records/` | Transcripts, customers, downloads | Search only — never bulk-load |
| `sources/` | People and sources indexes | Finding experts or references |
| `agent-docs/` | Task-specific agent configs | Loaded by task type (see below) |

## Task Routing

Load the right agent config for your task:

- **Writing content?** Load `agent-docs/writing-agent.md`
- **Researching a topic?** Load `agent-docs/research-agent.md`
- **Making decisions?** Load `agent-docs/decision-agent.md`
- **Onboarding someone?** Load `agent-docs/onboarding-agent.md`

## Universal Rules

1. **Don't invent facts** about Bespoke Woodcraft Studio not in these docs
2. **Don't bulk-load** records/ or downloads/ — search them
3. **Newer docs win** when information conflicts
4. **Flag sensitive content** — don't generate legal, compliance, or financial content without asking
5. **File naming**: `descriptive-name-v1.md` (lowercase, hyphens, version suffix)
6. **Voice**: Warm, calm, and clear. Like a craftsman walking you through how something works — no rush, no jargon, just genuine knowledge shared generously.
7. **Research tasks follow the pipeline.** When asked to research, learn about, deep dive, or study any topic:
   a. First ask: raw research only, or full study guide? Clarify scope and audience.
   b. Present a research plan (questions + output locations) and get user approval before starting.
   c. Save raw research to `pipeline/research/`. If doing full study guide, continue to `pipeline/scratchpad/` then `knowledge/`.
   d. Never skip steps. Never save directly to `knowledge/` without going through `pipeline/` first.
   e. Load `agent-docs/research-agent.md` for full instructions.

## File Structure

Every directory has `README.md` (what's here, why) and `INDEX.md` (file listing with summaries).

Files use `<metadata>` tags: purpose, audience, summary, domain, confidence, context_tier, last_updated.

**Versioning:** Minor updates edit in place. Major changes create `-v2`, old goes to `/archive`.