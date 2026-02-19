# [YOUR COMPANY] Context OS

<!-- TEMPLATE: Replace [YOUR COMPANY] and [BRACKETED] placeholders. Delete this comment when done. -->

Knowledge base for [YOUR COMPANY]. Not a codebase — the product is context.

## What We Do

- **[YOUR COMPANY]**: [FILL IN: One-line description of your company and what you do]

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

1. **Don't invent facts** about [YOUR COMPANY] not in these docs
2. **Don't bulk-load** records/ or downloads/ — search them
3. **Newer docs win** when information conflicts
4. **Flag sensitive content** — don't generate legal, compliance, or financial content without asking
5. **File naming**: `descriptive-name-v1.md` (lowercase, hyphens, version suffix)
6. **Voice**: [FILL IN: Your voice in one sentence. Example: "Direct, clear, real. Like a smart friend explaining something important."]

## File Structure

Every directory has `README.md` (what's here, why) and `INDEX.md` (file listing with summaries).

Files use `<metadata>` tags: purpose, audience, summary, domain, confidence, context_tier, last_updated.

**Versioning:** Minor updates edit in place. Major changes create `-v2`, old goes to `/archive`.
