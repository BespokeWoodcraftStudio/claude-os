---
name: your-skill-name
description: One-line description of what this skill does and when to trigger it. Include keywords that help the AI match user requests to this skill. Example trigger phrases like "write a post", "research this topic", "pull data from X".
---

# [Skill Name]

[One sentence describing what this skill does.]

## Inputs / Outputs

| | What | Example |
|---|---|---|
| **Input** | [What the user provides] | [Example input] |
| **Context** | [Context files to load — always specify paths] | [Path to file] |
| **Tool** | [External tool if needed — MCP server, API, etc.] | [Tool name] |
| **Output** | [What gets produced] | [Example output or path] |

## Quick Start

1. [Step 1 — what to do first]
2. [Step 2 — load context or tools]
3. [Step 3 — execute the main task]
4. [Step 4 — quality check or save output]

## Workflow

### Step 1: [Name]

[Describe what happens in this step. Be specific — the AI needs to know exactly what to do.]

### Step 2: [Name]

[Continue describing steps. Include decision points, edge cases, and what to do when things go wrong.]

### Step 3: [Name]

[Final steps, including output format and where to save.]

## Quality Checks

Before finishing, verify:

- [ ] [Check 1]
- [ ] [Check 2]
- [ ] [Check 3]

## Edge Cases

- **[Situation 1]:** [How to handle it]
- **[Situation 2]:** [How to handle it]

## Example Usage

**User request:** "[Example prompt]"

**Steps taken:**
1. [What the skill did]
2. [What it loaded]
3. [What it produced]

## Deep Reference

- [Link to relevant context files or documentation]
- [Link to prompt templates if this skill has a `prompts/` subdirectory]

---

<!--
INSTRUCTIONS FOR CREATING A NEW SKILL:

1. Copy this entire SKILL-TEMPLATE directory to a new directory under .cursor/skills/
2. Rename the directory to match your skill name (lowercase, hyphens)
3. Fill in all [BRACKETED] sections above
4. If your skill uses prompt templates, create a prompts/ subdirectory
5. Update the name and description in the YAML frontmatter
6. Test the skill by triggering it with the keywords in the description

SKILL NAMING CONVENTION:
- Directory: lowercase-with-hyphens (e.g., write-content, research-topic)
- Name field: same as directory name
- Description: Include trigger keywords the AI should match on

OPTIONAL SUBDIRECTORIES:
- prompts/  — Prompt templates used by this skill
- scripts/  — Helper scripts (Python, shell, etc.)
-->
