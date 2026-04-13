# Claude Code Skills Research - Executive Summary

**Research Date:** March 31, 2026  
**Status:** Complete  
**Document Location:** `pipeline/research/claude-code-skills-complete-research.md`

---

## Quick Reference

### What is a Skill?
A reusable, modular instruction package that extends Claude's capabilities. Skills are auto-discovered based on description matching, can be invoked manually or automatically, and often include supporting scripts and reference files.

### Core SKILL.md Structure
```yaml
---
name: skill-name              # Required: lowercase, hyphens only, max 64 chars
description: What it does     # Required: max 1024 chars, include when to use it
---

# Markdown instructions for Claude to follow
```

### Two .claude/ Directories
- **~/.claude/** - Personal skills/config (all projects)
- **./.claude/** - Project skills/config (this repo only)

### Key Distinctions
| Component | Manual | Auto-Trigger | Purpose |
|-----------|--------|--------------|---------|
| Slash Commands | Yes | No | Deprecated - merged into Skills |
| Skills | Yes | Yes | Instruction packages with optional files |
| MCP Tools | No | Yes | External system integration |
| Hooks | No | Yes | Event-driven workflow automation |

### Built-in Skills (Always Available)
- `/batch` - Parallel codebase changes
- `/simplify` - Code quality review
- `/debug` - Enable debug logging
- `/loop` - Run on interval
- `/claude-api` - API reference material

---

## Critical Best Practices

### Description Field (Most Important)
The description is how Claude decides whether to use your skill:
- Must include **what it does** AND **when to use it**
- Include specific **keywords** users would say
- Make it slightly **"pushy"** (Claude undertriggers skills)
- Descriptions >250 chars get truncated in listings

**Good:** "Extracts text from PDFs, fills forms, merges files. Use when working with PDFs or document extraction."  
**Bad:** "Helps with PDFs."

### Directory Structure
```
my-skill/
├── SKILL.md           # Required - main instructions
├── scripts/           # Optional - executable code
├── references/        # Optional - detailed documentation
└── assets/            # Optional - templates, images
```

### Size Guidelines
- SKILL.md body: 1,500-2,000 words target
- Keep main file <500 lines
- Move detailed content to separate reference files
- Progressive disclosure: descriptions always loaded, content on-demand

---

## File Locations

| Scope | Location | Access | Priority |
|-------|----------|--------|----------|
| Enterprise | Managed settings | Organization-wide | Highest |
| Personal | ~/.claude/skills/ | All projects | High |
| Project | ./.claude/skills/ | This project | Medium |
| Plugin | plugin-dir/skills/ | Where installed | Low |

**Monorepo Support:** Nested `.claude/skills/` directories are auto-discovered based on file location.

---

## CLAUDE.md Hierarchy

Files load in order (later overrides earlier):
1. `~/.claude/CLAUDE.md` (global)
2. `./CLAUDE.md` (project root)
3. `./.claude/CLAUDE.md` (project directory)
4. `./.claude/rules/*.md` (project rules - highest priority)
5. Enterprise managed settings (cannot be overridden)

**Best Practice:** Keep each CLAUDE.md under 200 lines. Split larger contexts into `.claude/rules/` subdirectories.

---

## Advanced Features

### Control Skill Invocation
```yaml
disable-model-invocation: true    # Only user can invoke
user-invocable: false              # Only Claude can invoke
```

### Run Skills in Subagents
```yaml
context: fork         # Isolate skill execution
agent: Explore        # Which agent type (Explore, Plan, general-purpose)
```

### Dynamic Context Injection
```yaml
PR diff: !`gh pr diff`            # Shell commands run before sending to Claude
```

### Pre-Approved Tools
```yaml
allowed-tools: Read, Grep, Glob   # Limited tool access when skill active
```

---

## Hooks System

**Hooks** execute shell commands at specific lifecycle points for deterministic automation.

### Types
- **PreToolUse** - Before Claude action (validation, blocking)
- **PostToolUse** - After Claude action (cleanup, testing)

### Communication
- Exit 0 = Approve/proceed
- Exit 2 = Block/deny (write reason to stderr)
- stdout/stderr for messages

### Configuration
Interactive: `/hooks` command  
Manual: `~/.claude/settings.json` or `.claude/settings.json`

---

## Skills vs MCP Servers

| Aspect | Skills | MCP |
|--------|--------|-----|
| **Purpose** | Methodology & workflows | System integration |
| **Scope** | Internal instruction | External tools |
| **Example** | "Deploy application" | GitHub API, database |
| **Token Cost** | Descriptions pre-loaded | Per-tool basis |

**Key insight:** Skills are the playbook. MCP servers are the hands.

---

## Installation & Distribution

### Install from Marketplace
```bash
/plugin install skill-name@marketplace-name
/plugin install engineering-skills@claude-code-skills
```

### Marketplace Ecosystem
- 2,300+ skills available
- 770+ MCP servers available
- 95+ plugin marketplaces
- Completely free and open

---

## Agent Skills Open Standard

**What:** Industry-wide standard for portable skills (December 2024)  
**Who:** Anthropic, Microsoft, OpenAI, Figma, Cursor, GitHub, Atlassian  
**Where:** [https://agentskills.io](https://agentskills.io)  
**Benefit:** Skills are portable across all supporting platforms

### Spec Validation
```bash
skills-ref validate ./my-skill
```

---

## Key Takeaways

1. **Skills are modular** - Instructions + optional scripts/references
2. **Descriptions matter most** - Claude uses descriptions to trigger skills
3. **Directory structure scales** - Nested discovery for monorepos
4. **Complementary tools** - Skills (how) + MCP (external) + Hooks (automate)
5. **Portable and open** - Agent Skills standard across platforms
6. **2,300+ ready-made** - Marketplace ecosystem eliminates rebuilding

---

## Research Sources

**Complete research document** includes 50+ sources with full URLs:
- Official Claude Code docs (code.claude.com)
- Claude Help Center
- Agent Skills specification (agentskills.io)
- GitHub repositories (anthropics/)
- Technical blogs and community resources
- Real-world examples and guides

All sources are cited with direct URLs in the full research document.

---

**For complete details:** See `pipeline/research/claude-code-skills-complete-research.md`
