# Context OS — Setup Guide

## What Is Context OS?

Context OS is a structured knowledge base designed to be consumed by both humans and AI agents. It organizes everything your company knows — how you work, who you serve, what you build, and how you write — into a system that any AI tool can navigate.

Unlike a wiki or Google Drive, Context OS is **engineered for AI consumption**:
- Files have machine-readable metadata so agents know what to load and when
- A tier system prevents agents from drowning in irrelevant context
- Task-specific agent configs ensure the right context loads for the right task
- Progressive disclosure lets agents scan summaries before loading full documents

---

## Prerequisites

- **Git** — to clone and version your knowledge base
- **A text editor** — VS Code, Cursor, or any markdown editor
- **An AI agent** — Claude Code, Claude Cowork, or Cursor (first-class support)

No build step. No dependencies. No package manager. Just markdown files.

---

## 15-Minute Quickstart

### Step 1: Set Up the Basics

Open `CLAUDE.md` and replace all `Bespoke Woodcraft Studio` placeholders with your company name and a one-line description. Fill in the voice rule at the bottom.

### Step 2: Define Your Voice

Open `context/voice/writing-style-context-v1.md`. At minimum, fill in:
- Your voice definition (3 qualities that define how you write)
- 3-5 style anchors (writers whose style you want to emulate)
- Review the 6 core principles — they're universal, but adapt examples to your domain

### Step 3: Document Your Company

Open `docs/company/mission-and-vision.md` and fill in your mission, vision, and core beliefs. This is the most fundamental company context.

### Step 4: Create Your First Role

Copy `context/roles/executive-role-template-v1.md` to a new file (e.g., `cfo-v1.md`). Fill in the sections — leaders to channel, decision frameworks, key questions.

### Step 5: Test It

Open Claude Code, Claude Cowork, or Cursor, point it at this repo, and try these prompts:
- "What does Bespoke Woodcraft Studio do?"
- "Write a short blog intro about [topic] in our voice"
- "As CFO, should we [decision]?"

If the agent responds with your voice and references your docs, it's working.

---

## Detailed Directory Guide

### What to Fill In First (Priority Order)

| Priority | Directory | What to Do |
|----------|-----------|------------|
| 1 | `CLAUDE.md` | Company name, description, voice rule |
| 2 | `context/voice/` | Writing style guide — this affects all content |
| 3 | `docs/company/` | Mission, values, strategy — the fundamentals |
| 4 | `context/roles/` | Create 2-3 executive personas for decision support |
| 5 | `docs/business/` | Business model, ICP, customer lifecycle |
| 6 | `context/personal/` | Founder user manual — communication and decision style |
| 7 | `docs/delivery/` | How you deliver work to customers |
| 8 | Everything else | Fill in as needed based on your use cases |

### What You Can Skip

- `records/` — Empty until you start archiving transcripts and customer data
- `pipeline/` — Empty until you start producing deliverables
- `knowledge/` — Build over time as you research topics
- `scripts/` — Add utility scripts as needed

---

## Context Engineering Primer

### Token Budgets

AI agents have finite context windows. Every file you load costs tokens. The optimal allocation:

- **System instructions** (10-15%): CLAUDE.md, agent configs
- **Knowledge context** (30-40%): Docs, roles, voice guide
- **Conversation history** (20-30%): Back-and-forth with the user
- **Buffer** (10-15%): Room for the agent to think

**Rule of thumb:** Don't load more than 3-4 files for any single task. Use the agent-docs/ configs to identify exactly which files are needed.

### Progressive Disclosure

Don't dump everything into context. Layer it:

1. **CLAUDE.md** is always loaded (~50 lines, minimal)
2. **Agent config** loads next (task-specific, ~50-80 lines)
3. **Referenced files** load as needed (voice guide, role, specific docs)
4. **Archives** are searched, never bulk-loaded

### Writing for AI

See `agent-docs/context-engineering-guide.md` for the full guide. Key principles:
- Front-load key information in every section
- One concept per section
- Use tables for structured data
- Add metadata to every file
- Keep files under 500 lines when possible

---

## AI Agent Setup

### Claude Code
`CLAUDE.md` is loaded automatically. Slash commands live in `.claude/commands/` — type `/` in any session to see them.

### Claude Cowork
`CLAUDE.md` is loaded automatically. Same context system as Claude Code.

### Cursor
Rules in `.cursor/rules/` are loaded based on their `alwaysApply` and `description` settings. Skills in `.cursor/skills/` provide slash-command workflows. Every Claude Code command has a matching Cursor skill.

### Other AI Tools
`AGENTS.md` follows the cross-platform AGENTS.md spec. The underlying knowledge base (docs, context, knowledge) is plain markdown — any AI tool that can read project files can use it.

---

## Customization

### Adding a New Directory

1. Create the directory
2. Add `README.md` explaining what goes there
3. Add `INDEX.md` with the summary table format
4. Update `CLAUDE.md` directory map
5. Update `AGENTS.md` project structure
6. Update relevant agent-docs/ configs

### Creating a New Slash Command

**Claude Code:**
1. Create a new `.md` file in `.claude/commands/` (filename becomes the command)
2. Write the instructions the agent should follow

**Cursor:**
1. Copy `.cursor/skills/SKILL-TEMPLATE/SKILL.md` to a new directory under `.cursor/skills/`
2. Fill in the trigger keywords, inputs/outputs, and workflow
3. Add any prompt templates in a `prompts/` subdirectory

Keep both in sync — every Claude Code command should have a matching Cursor skill.

### Adding a New Role

1. Copy the appropriate template from `context/roles/`
2. Fill in all sections
3. Update `context/roles/INDEX.md`
4. Add the role to `agent-docs/decision-agent.md` role selection guide

---

## FAQ

**Q: Do I need to fill in everything before it's useful?**
A: No. Start with CLAUDE.md, the voice guide, and one company doc. The system is immediately useful with just those three.

**Q: How do I know if my context is working?**
A: Run the smoke tests in `tests/`. They give you sample prompts and describe what "good" output looks like.

**Q: Can I rename or reorganize directories?**
A: Yes. The directory structure is a suggestion, not a requirement. Just update CLAUDE.md, AGENTS.md, and the agent-docs/ configs to reflect your changes.

**Q: How do I handle sensitive content?**
A: Use the `sensitivity` metadata field (`public`, `internal`, `leadership-only`). Keep truly sensitive files (financial details, contracts) out of any shared repositories.

**Q: What if I use a different AI tool?**
A: The knowledge base is plain markdown — any AI tool that can read files can use it. Claude Code and Cursor get first-class support with slash commands and rules. For other tools, `AGENTS.md` provides a cross-platform entry point.
