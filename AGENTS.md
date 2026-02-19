# Context OS — Agent Configuration

<!-- TEMPLATE: Replace [YOUR COMPANY] and [BRACKETED] placeholders. Delete this comment when done. -->

## Project Overview

This is a structured knowledge base for [YOUR COMPANY]. It is not a codebase — there is no app, no build step, no dependencies. The product is context.

AI agents use this repository to understand the company, write in its voice, make decisions using executive personas, and produce on-brand work.

## Project Structure

```
├── docs/              Company handbook (company, business, delivery, products, finance)
├── context/           Prescriptive AI context (voice, roles, personal)
├── knowledge/         Study guides and reference materials
├── pipeline/          Work management (research → scratchpad → outputs)
├── records/           Historical archives (search only, never bulk-load)
├── sources/           Trusted people and sources indexes
├── agent-docs/        Task-specific agent configurations
├── prompts/           Reusable prompt templates
├── scripts/           Utility scripts
└── tests/             Context smoke tests
```

## Conventions

- **File naming**: `descriptive-name-v1.md` (lowercase, hyphens, version suffix)
- **Versioning**: Minor updates edit in place. Major changes create `-v2`, old goes to `/archive`
- **Navigation**: Every directory has `README.md` (overview) and `INDEX.md` (file listing with summaries)
- **Metadata**: Every content file uses `<metadata>` tags with: purpose, audience, summary, domain, confidence, context_tier, last_updated
- **Pipeline flow**: research/ → scratchpad/ → outputs/ (forward only, never backward)
- **Records**: Search only — never bulk-load transcripts, customers, or downloads

## Context Loading Rules

1. Start with `CLAUDE.md` (always loaded automatically)
2. Load the task-specific agent config from `agent-docs/` based on what you're doing
3. Load context files referenced by the agent config
4. Load additional docs as needed — one file at a time, never entire directories
5. Newer docs win when information conflicts

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI agent entry point — directory map and universal rules |
| `context/voice/writing-style-context-v1.md` | Definitive writing voice and style guide |
| `context/roles/` | AI executive personas for decision support |
| `context/personal/founder-user-manual-template-v1.md` | How the founder works and communicates |
| `docs/start-here.md` | Onboarding entry point for new team members |
| `docs/context-routing.md` | Detailed routing rules for context loading |
