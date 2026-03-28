# Context OS — Starter Kit

**The quality of your context determines the quality of your AI outputs.**

Every AI agent, copilot, and assistant you use is only as good as the context you give it. Most teams dump unstructured docs into a folder and wonder why AI sounds generic. Context OS gives you a better way — a structured, opinionated system for organizing everything AI needs to know about you and your company.

The result: AI that writes in your voice, thinks with your frameworks, and makes decisions like someone who actually works there.

---

## The Problem

AI tools are powerful, but they start from zero every time. They don't know your voice, your strategy, your customers, or how you make decisions. So you get:

- **Generic outputs** that could have been written by anyone
- **Repeated prompting** — re-explaining the same context over and over
- **Inconsistent quality** — some outputs are great, most are mediocre
- **Knowledge trapped in people's heads** — when someone leaves, the context leaves with them

The fix isn't better prompts. It's better context.

---

## What Context OS Does

Context OS is a starter kit — a ready-to-fork repository structure that organizes your company's knowledge into a format AI agents can actually use. You fill in the templates with your information, and every AI tool you connect to it immediately gets smarter about your business.

**Built for Claude Code, Claude Cowork, and Cursor.** The context is structured in plain markdown, so it works with any AI tool that can read files — but these three get first-class support.

### What's inside

```
├── context/           How AI should behave (voice, roles, personal style)
├── docs/              What's true about your company (handbook, strategy, products)
├── knowledge/         Deep reference material (study guides, domain expertise)
├── agent-docs/        Task-specific agent configurations
├── pipeline/          Work-in-progress (research → scratchpad → outputs)
├── records/           Historical archives (transcripts, customer notes)
├── sources/           Trusted people and sources indexes
├── prompts/           Reusable prompt templates
├── scripts/           Automation scripts
├── tests/             Context smoke tests
├── CLAUDE.md          Claude Code entry point (loaded automatically)
├── AGENTS.md          Cross-platform agent config
└── SETUP.md           Setup guide
```

---

## Why This Structure Matters

Most knowledge bases are flat — a pile of docs with no hierarchy. AI agents waste tokens reading irrelevant content, miss important context, and produce inconsistent results.

Context OS is designed around three principles:

1. **Prescriptive context** (`context/`) tells agents HOW to act — your voice, your decision-making frameworks, your leadership style. This is what makes outputs sound like you instead of sounding like AI.

2. **Reference context** (`docs/`, `knowledge/`) tells agents WHAT IS true — your business model, your customers, your strategy. This is what makes outputs accurate instead of generic.

3. **Progressive disclosure** — agents scan summaries first, then load full files only when needed. Every directory has a `README.md` (what's here) and `INDEX.md` (file listing with summaries). No token waste.

The result is AI that has the right context at the right time, without being overwhelmed by everything at once.

---

## Quick Start (15 Minutes)

1. **Fork or clone this repo**
2. **Open `CLAUDE.md`** — replace `Bespoke Woodcraft Studio` with your company name and fill in the placeholders
3. **Define your voice** — fill in `context/voice/writing-style-context-v1.md` with how you write and speak
4. **Add your basics** — fill in `docs/company/mission-and-vision.md` with your mission and vision
5. **Create your first role** — copy `context/roles/executive-role-template-v1.md` and customize it for your most-needed AI persona
6. **Test it** — open Claude Code, Claude Cowork, or Cursor pointed at your repo and ask it a question about your company

For the full setup guide, see [SETUP.md](SETUP.md).

---

## How It Works

### For AI Agents
AI agents read `CLAUDE.md` first (loaded automatically). Based on the task, they load a specific agent config from `agent-docs/` which tells them exactly which context files to read. Agents only load what's relevant — no wasted tokens on irrelevant context.

### For Humans
Every directory has `README.md` (what's here, why) and `INDEX.md` (file listing with summaries). Start at `docs/start-here.md` for onboarding.

### The Pipeline
Work flows forward only: `research/` → `scratchpad/` → `outputs/`. Raw research gets refined into working drafts, then polished into final deliverables. This mirrors how good thinking actually works.

---

## Cross-Platform Support

| Tool | Configuration |
|------|---------------|
| Claude Code | `CLAUDE.md` (loaded automatically) |
| Claude Cowork | `CLAUDE.md` (loaded automatically) |
| Cursor | `.cursor/rules/` and `.cursor/skills/` |
| Other AI tools | `AGENTS.md` (cross-platform standard) |

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
