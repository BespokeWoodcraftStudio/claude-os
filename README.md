# Context OS — Starter Kit

A structured knowledge base template for companies that want AI agents to truly understand their business. Clone it, fill it in, and every AI tool you use — Claude, Cursor, Copilot, or anything else — can write in your voice, make decisions with your frameworks, and navigate your company knowledge.

---

## Why This Exists

1. **AI can't match your voice.** Generic AI output sounds generic. Feed it structured context, and it writes like you.
2. **Onboarding takes too long.** New hires spend weeks absorbing tribal knowledge. This repository gets them productive faster.
3. **Knowledge lives in heads.** When people leave, knowledge leaves. This captures it.

The goal: anyone (human or AI) can understand your company and produce on-brand work by reading this repository.

---

## What's Inside

```
├── agent-docs/        Task-specific AI agent configurations
├── docs/              Company handbook (company, business, delivery, products, finance)
├── context/           Prescriptive AI context (voice, roles, personal)
├── knowledge/         Study guides and reference materials
├── pipeline/          Work management (research → scratchpad → outputs)
├── records/           Historical archives (search only)
├── sources/           Trusted people and sources indexes
├── tests/             Context smoke tests
├── CLAUDE.md          Claude Code entry point
├── AGENTS.md          Cross-platform agent config
└── SETUP.md           Comprehensive setup guide
```

---

## Quick Start (15 Minutes)

1. **Clone this repo** and open it in your editor
2. **Open `CLAUDE.md`** — replace `[YOUR COMPANY]` with your company name and description
3. **Fill in `context/voice/writing-style-context-v1.md`** — at minimum, define your voice and list 3-5 style anchors
4. **Fill in `docs/company/mission-and-vision.md`** — your mission, vision, and core beliefs
5. **Create your first role** — copy `context/roles/executive-role-template-v1.md` and fill it in for your most-needed executive persona
6. **Test it** — open Claude or Cursor, point it at your repo, and ask it a question about your company

For the full setup guide, see [SETUP.md](SETUP.md).

---

## How It Works

### For AI Agents
AI agents read `CLAUDE.md` first (loaded automatically). Based on the task, they load a specific agent config from `agent-docs/` which tells them exactly which context files to read. This means agents only load what's relevant — no wasted tokens on irrelevant context.

### For Humans
Every directory has `README.md` (what's here, why) and `INDEX.md` (file listing with one-line summaries). Start at `docs/start-here.md` for onboarding.

### The Key Patterns

- **Prescriptive context** (`context/`) tells agents HOW to act — voice, roles, personal style
- **Reference docs** (`docs/`, `knowledge/`) tell agents WHAT IS true about the company
- **Progressive disclosure** — agents scan summaries first, then load full files only when needed
- **Forward-only pipeline** — work flows research → scratchpad → outputs, never backward
- **Metadata everywhere** — every file has machine-readable tags for routing and navigation

---

## Cross-Platform Support

| Tool | Configuration |
|------|---------------|
| Claude Code | `CLAUDE.md` (loaded automatically) |
| Cursor | `.cursor/rules/` and `.cursor/skills/` |
| Other AI agents | `AGENTS.md` (cross-platform standard) |

---

## File Naming & Versioning

- **Format:** `descriptive-name-v1.md` (lowercase, hyphens, version suffix)
- **Minor updates:** Edit in place, update `last_updated` in metadata
- **Major changes:** Create new version (`-v2`), move old to `/archive`

---

## Learn More

- [SETUP.md](SETUP.md) — Full setup guide with context engineering primer
- [agent-docs/context-engineering-guide.md](agent-docs/context-engineering-guide.md) — How to write content that AI agents can effectively use
- [docs/context-routing.md](docs/context-routing.md) — Detailed routing rules for context loading
