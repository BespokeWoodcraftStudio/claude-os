# GrowthX Context

GrowthX's organizational knowledge base. Everything we know about how we work, who we serve, what we're building, and how we write -- codified for humans and AI agents.

---

## Why This Exists

1. **Onboarding takes too long.** New hires spend weeks absorbing tribal knowledge. This repository gets them productive faster.
2. **AI can't match our voice.** Generic AI output sounds generic. Feed it this context, and it writes like us.
3. **Knowledge lives in heads.** When people leave, knowledge leaves. This captures it.

The goal: anyone (human or AI) can understand GrowthX and produce on-brand work by reading this repository.

---

## Directory Map

```
growthx-context/
├── docs/                    # The GrowthX Handbook (company, business, delivery, EPD, finance)
├── context/                 # Prescriptive files (how to act)
│   ├── voice/               # How we write -- style guide, LinkedIn style
│   ├── roles/               # How we think -- 9 AI executive personas
│   └── personal/            # Who Marcel is -- user manual, psych profile
├── knowledge/               # Study guides and learning materials
│   └── aeo/                 # AEO & AI Visibility knowledge hub (7 docs, 103 sources)
├── pipeline/                # Where work happens (flows forward only)
│   ├── research/            # Raw material and competitive intelligence
│   ├── scratchpad/          # Work-in-progress documents
│   └── outputs/             # Completed research deliverables
├── records/                 # Historical archives (search only, never bulk-load)
│   ├── customers/           # Client documentation and transcripts
│   ├── transcripts/         # Meeting transcripts (55+ files)
│   └── downloads/           # External content archives (Lenny's Podcast)
├── prompts/                 # Reusable AI prompt templates
├── scripts/                 # Utility scripts (Fireflies, Fathom)
├── sources/                 # People and sources indexes
├── CLAUDE.md                # AI agent root context file
└── INDEX.md                 # Global sitemap of every directory and file
```

---

## Quick Start

### For Onboarding
1. [docs/start-here.md](docs/start-here.md) -- Your comprehensive onboarding guide
2. [docs/company/](docs/company/) -- Who we are (mission, vision, values)
3. [docs/business/](docs/business/) -- How we make money
4. [context/voice/writing-style-context-v2.md](context/voice/writing-style-context-v2.md) -- How we write

### For AI Content Generation
1. Load [CLAUDE.md](CLAUDE.md) as system context
2. Load [context/voice/writing-style-context-v2.md](context/voice/writing-style-context-v2.md)
3. Load relevant docs from [docs/](docs/) based on the task
4. Generate content

### For AEO & AI Visibility
Start at [knowledge/aeo/README.md](knowledge/aeo/README.md) -- the consolidated hub with guides, research, and 103 indexed sources.

### For AI Executive Personas
See [context/roles/README.md](context/roles/README.md) -- 9 AI personas from Performance Coach to CTO.

---

## Directory Overview

| Directory | What's There | README | INDEX |
|---|---|---|---|
| [docs/](docs/) | The GrowthX Handbook -- company, business, delivery, EPD, finance, products | [README](docs/README.md) | [INDEX](docs/INDEX.md) |
| [context/](context/) | Prescriptive files -- voice, roles, personal | [README](context/README.md) | -- |
| [context/voice/](context/voice/) | How we write -- style guide, LinkedIn style | [README](context/voice/README.md) | [INDEX](context/voice/INDEX.md) |
| [context/roles/](context/roles/) | How we think -- 9 AI executive personas | [README](context/roles/README.md) | [INDEX](context/roles/INDEX.md) |
| [context/personal/](context/personal/) | Who Marcel is -- user manual, psych profile | [README](context/personal/README.md) | [INDEX](context/personal/INDEX.md) |
| [knowledge/](knowledge/) | Study guides (AEO, writing, operations, leadership, LinkedIn) | [README](knowledge/README.md) | [INDEX](knowledge/INDEX.md) |
| [pipeline/research/](pipeline/research/) | Raw research material, competitive briefs | [README](pipeline/research/README.md) | [INDEX](pipeline/research/INDEX.md) |
| [pipeline/scratchpad/](pipeline/scratchpad/) | Work-in-progress documents | [README](pipeline/scratchpad/README.md) | [INDEX](pipeline/scratchpad/INDEX.md) |
| [pipeline/outputs/](pipeline/outputs/) | Completed research deliverables | [README](pipeline/outputs/README.md) | [INDEX](pipeline/outputs/INDEX.md) |
| [records/customers/](records/customers/) | Client docs and transcripts | [README](records/customers/README.md) | [INDEX](records/customers/INDEX.md) |
| [records/transcripts/](records/transcripts/) | Meeting transcripts (55+ files) | [README](records/transcripts/README.md) | [INDEX](records/transcripts/INDEX.md) |
| [records/downloads/](records/downloads/) | External content archives (Lenny's Podcast) | [README](records/downloads/README.md) | [INDEX](records/downloads/INDEX.md) |
| [prompts/](prompts/) | Reusable AI prompt templates | [README](prompts/README.md) | [INDEX](prompts/INDEX.md) |
| [scripts/](scripts/) | Utility scripts | [README](scripts/README.md) | [INDEX](scripts/INDEX.md) |
| [sources/](sources/) | People and sources indexes | [README](sources/README.md) | [INDEX](sources/INDEX.md) |

---

## Navigation

Every directory has:
- **README.md** -- Overview of what's in the directory and why it exists
- **INDEX.md** -- Complete file listing (sitemap) for the directory

For the full project sitemap, see [INDEX.md](INDEX.md).

---

## File Naming & Versioning

- **Format:** `descriptive-name-v1.md` (lowercase, hyphens, version suffix)
- **Minor updates:** Edit in place, update `last_updated` in header
- **Major changes:** Create new version (`-v2`), move old to `/archive`

---

**Last updated:** February 2026
