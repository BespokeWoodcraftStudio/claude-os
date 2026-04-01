# Exhaustive Research: Skills in Claude Code CLI Tool

**Research Date:** March 31, 2026  
**Status:** Complete - Comprehensive multi-source research compiled

---

## Table of Contents

1. [What is a Skill? Definitions and Core Concepts](#what-is-a-skill-definitions-and-core-concepts)
2. [SKILL.md Format and Structure](#skillmd-format-and-structure)
3. [How to Create Custom Skills](#how-to-create-custom-skills)
4. [File Structure and Directory Organization](#file-structure-and-directory-organization)
5. [Slash Commands vs Skills vs Tools vs Hooks](#slash-commands-vs-skills-vs-tools-vs-hooks)
6. [Built-in Skills vs User-Created Skills](#built-in-skills-vs-user-created-skills)
7. [The .claude/ Directory Structure](#the-claude-directory-structure)
8. [CLAUDE.md Files: Project, User, and Enterprise Levels](#claudemd-files-project-user-and-enterprise-levels)
9. [Hooks System: Pre/Post Command Hooks](#hooks-system-prepost-command-hooks)
10. [Skill Naming Conventions and Best Practices](#skill-naming-conventions-and-best-practices)
11. [Installing Skills from Others](#installing-skills-from-others)
12. [Skills Integration with MCP Servers](#skills-integration-with-mcp-servers)
13. [Advanced Patterns: Context Fork and Subagents](#advanced-patterns-context-fork-and-subagents)
14. [Plugins and Skill Distribution](#plugins-and-skill-distribution)
15. [Agent Skills Open Standard](#agent-skills-open-standard)

---

## 1. What is a Skill? Definitions and Core Concepts

### Definition

A **Skill** is a modular capability that extends Claude's functionality in Claude Code. Skills are structured, auto-discovered capabilities—often a directory of supporting files—that Claude may apply when relevant to a user's task.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### How Skills Work

- Skills are **reusable, filesystem-based resources** that provide Claude with domain-specific expertise: workflows, context, and best practices that transform general-purpose agents into specialists.
- Unlike **prompts** (conversation-level instructions for one-off tasks), **Skills load on-demand** and eliminate the need to repeatedly provide the same guidance across multiple conversations.
- When you give Claude a task, it **reviews available skill descriptions** to find relevant ones. If a skill's description field matches the task context, Claude **loads the full skill instructions** and applies them.
- Skills can be **invoked manually** with `/skill-name` or **loaded automatically** when their description matches your task context.

**Source:** [Skills explained: How Skills compares to prompts, Projects, MCP, and subagents | Claude](https://claude.com/blog/skills-explained)

### Key Distinction from Commands

- **Slash commands** are templates for frequently-used prompts that require manual triggering.
- **Slash commands were merged into the Skills system**, meaning their functionality is now part of the broader Skills architecture. Files in `.claude/commands/` still work but skills are recommended.
- The fundamental difference: **Slash commands require manual triggering** — you type `/command-name` to run them. **Skills can auto-trigger** based on context.

**Source:** [Claude Code Skills vs MCP vs Plugins: Complete Guide 2026 - morphllm.com](https://www.morphllm.com/claude-code-skills-mcp-plugins)

### Use Case Indicators

Build a skill when:
- The task involves **knowledge specific to your context** — knowledge an off-the-shelf tool can't have
- Your **team does the same multi-step task more than twice a week** — it's a skill candidate
- You find yourself **giving Claude the same instructions over and over** — that's a sign it should be a Skill

**Source:** [How to Build Custom Claude Code Skills That Actually Work - DEV Community](https://dev.to/alanwest/how-to-build-custom-claude-code-skills-that-actually-work-2e1f)

---

## 2. SKILL.md Format and Structure

### Overview

Every skill requires a `SKILL.md` file with two parts:
1. **YAML frontmatter** (between `---` markers) that tells Claude when to use the skill
2. **Markdown content** with instructions Claude follows when the skill is invoked

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Basic Structure Example

```yaml
---
name: my-skill
description: A clear description of what this skill does and when to use it
---

# My Skill Name

[Add your instructions here that Claude will follow when this skill is active]

## Examples
- Example usage 1
```

**Source:** [How to create custom Skills | Claude Help Center](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)

### Minimal Frontmatter Fields

| Field | Required | Constraints |
|-------|----------|-------------|
| `name` | No | Display name for the skill. If omitted, uses the directory name. Lowercase letters, numbers, and hyphens only (max 64 characters). |
| `description` | Recommended | What the skill does and when to use it (max 1024 characters). Claude uses this to decide when to apply the skill. |

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Complete Frontmatter Reference (Claude Code Extensions)

| Field | Required | Description |
|-------|----------|-------------|
| `name` | No | Display name for the skill. If omitted, uses the directory name. Lowercase letters, numbers, and hyphens only (max 64 characters). |
| `description` | Recommended | What the skill does and when to use it. Claude uses this to decide when to apply the skill. If omitted, uses the first paragraph of markdown content. Front-load the key use case: descriptions longer than 250 characters are truncated in the skill listing to reduce context usage. |
| `argument-hint` | No | Hint shown during autocomplete to indicate expected arguments. Example: `[issue-number]` or `[filename] [format]`. |
| `disable-model-invocation` | No | Set to `true` to prevent Claude from automatically loading this skill. Use for workflows you want to trigger manually with `/name`. Default: `false`. |
| `user-invocable` | No | Set to `false` to hide from the `/` menu. Use for background knowledge users shouldn't invoke directly. Default: `true`. |
| `allowed-tools` | No | Tools Claude can use without asking permission when this skill is active. |
| `model` | No | Model to use when this skill is active. |
| `effort` | No | Effort level when this skill is active. Overrides the session effort level. Default: inherits from session. Options: `low`, `medium`, `high`, `max` (Opus 4.6 only). |
| `context` | No | Set to `fork` to run in a forked subagent context. |
| `agent` | No | Which subagent type to use when `context: fork` is set. |
| `hooks` | No | Hooks scoped to this skill's lifecycle. |
| `paths` | No | Glob patterns that limit when this skill is activated. |
| `shell` | No | Shell to use for `` !`command` `` blocks in this skill. Accepts `bash` (default) or `powershell`. |

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Agent Skills Open Standard Fields

The Agent Skills specification defines:

| Field | Required | Constraints |
|-------|----------|-------------|
| `name` | Yes | Max 64 characters. Lowercase letters, numbers, and hyphens only. Must not start or end with a hyphen. |
| `description` | Yes | Max 1024 characters. Non-empty. Describes what the skill does and when to use it. |
| `license` | No | License name or reference to a bundled license file. |
| `compatibility` | No | Max 500 characters. Indicates environment requirements. |
| `metadata` | No | Arbitrary key-value mapping for additional metadata. |
| `allowed-tools` | No | Space-delimited list of pre-approved tools the skill may use. (Experimental) |

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Description Field Best Practices

The description is critical because Claude **scans descriptions to decide relevance**:

- Must be **1-1024 characters**
- Should **describe both what the skill does and when to use it**
- Should **include specific keywords** that help agents identify relevant tasks
- Claude has a tendency to "undertrigger" skills, so **make descriptions a little bit "pushy"**
- **Front-load the key use case**: descriptions longer than 250 characters are truncated in the skill listing

**Example of good description:**
```
Extracts text and tables from PDF files, fills PDF forms, and merges multiple PDFs. Use when working with PDF documents or when the user mentions PDFs, forms, or document extraction.
```

**Source:** [Specification - Agent Skills](https://agentskills.io/specification) and [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Size Recommendations

- Keep `SKILL.md` **under 500 lines**
- Target **1,500-2,000 words** for the SKILL.md body
- Move **detailed reference material to separate files**
- Recommended sections: step-by-step instructions, examples, edge cases

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

---

## 3. How to Create Custom Skills

### Step-by-Step Creation

#### Step 1: Create the Skill Directory

Personal skills are available across all your projects:

```bash
mkdir -p ~/.claude/skills/my-skill-name
```

Project-specific skills are stored in the repository:

```bash
mkdir -p .claude/skills/my-skill-name
```

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

#### Step 2: Create the SKILL.md File

Create `~/.claude/skills/explain-code/SKILL.md`:

```yaml
---
name: explain-code
description: Explains code with visual diagrams and analogies. Use when explaining how code works, teaching about a codebase, or when the user asks "how does this work?"
---

When explaining code, always include:

1. **Start with an analogy**: Compare the code to something from everyday life
2. **Draw a diagram**: Use ASCII art to show the flow, structure, or relationships
3. **Walk through the code**: Explain step-by-step what happens
4. **Highlight a gotcha**: What's a common mistake or misconception?

Keep explanations conversational. For complex concepts, use multiple analogies.
```

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

#### Step 3: Test the Skill

**Let Claude invoke it automatically** by asking something that matches the description:
```
How does this code work?
```

**Or invoke it directly** with the skill name:
```
/explain-code src/auth/login.ts
```

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Creating Skills with Arguments

Skills can accept arguments passed via `$ARGUMENTS` placeholder:

```yaml
---
name: fix-issue
description: Fix a GitHub issue
disable-model-invocation: true
---

Fix GitHub issue $ARGUMENTS following our coding standards.

1. Read the issue description
2. Understand the requirements
3. Implement the fix
4. Write tests
5. Create a commit
```

When you run `/fix-issue 123`, Claude receives "Fix GitHub issue 123 following our coding standards..."

**Access individual arguments:**
```yaml
---
name: migrate-component
---

Migrate the $ARGUMENTS[0] component from $ARGUMENTS[1] to $ARGUMENTS[2].
```

Or use the shorter syntax: `$0`, `$1`, `$2`

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Dynamic Context Injection

Use `` !`<command>` `` to run shell commands before skill content is sent to Claude:

```yaml
---
name: pr-summary
description: Summarize changes in a pull request
context: fork
agent: Explore
allowed-tools: Bash(gh *)
---

## Pull request context
- PR diff: !`gh pr diff`
- PR comments: !`gh pr view --comments`
- Changed files: !`gh pr diff --name-only`

## Your task
Summarize this pull request...
```

This is **preprocessing, not something Claude executes**. Claude only sees the final result with actual data.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Using the Skill Creator Skill

Claude Code includes a `/skill-creator` skill to guide you through creating skills interactively:

**Source:** System output from Claude Code CLI

---

## 4. File Structure and Directory Organization

### Basic Directory Structure

Each skill is a directory with `SKILL.md` as the entrypoint:

```
my-skill/
├── SKILL.md           # Main instructions (required)
├── template.md        # Template for Claude to fill in
├── examples/
│   └── sample.md      # Example output showing expected format
└── scripts/
    └── validate.sh    # Script Claude can execute
```

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Recommended Structure

The standard structure uses three directories, each serving a specific purpose:

```
my-skill/
├── SKILL.md              # Core prompt and instructions
├── scripts/              # Executable Python/Bash scripts
├── references/           # Documentation loaded into context
└── assets/               # Templates and binary files
```

**Source:** [Inside Claude Code Skills: Structure, prompts, invocation | Mikhail Shilkov](https://mikhail.io/2025/10/claude-code-skills/)

### Agent Skills Standard Structure

According to the official specification:

```
skill-name/
├── SKILL.md          # Required: metadata + instructions
├── scripts/          # Optional: executable code
├── references/       # Optional: documentation
├── assets/           # Optional: templates, resources
└── ...               # Any additional files or directories
```

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Optional Directories

#### scripts/
Contains executable code that agents can run. Scripts should:
- Be self-contained or clearly document dependencies
- Include helpful error messages
- Handle edge cases gracefully
- Support languages: Python, Bash, JavaScript (depending on implementation)

#### references/
Contains additional documentation that agents can read when needed:
- `REFERENCE.md` - Detailed technical reference
- `FORMS.md` - Form templates or structured data formats
- Domain-specific files (`finance.md`, `legal.md`, etc.)

Keep individual reference files focused. Agents load these on demand, so smaller files mean less use of context.

#### assets/
Contains static resources:
- Templates (document templates, configuration templates)
- Images (diagrams, examples)
- Data files (lookup tables, schemas)

**Source:** [Specification - Agent Skills](https://agentskills.io/specification) and [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### File Referencing

When referencing other files in your skill, use relative paths from the skill root:

```markdown
See [the reference guide](references/REFERENCE.md) for details.

Run the extraction script:
scripts/extract.py
```

Keep file references one level deep from `SKILL.md`. Avoid deeply nested reference chains.

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Documentation

As your skills library grows, add a top-level `README.md` that lists:
- Available skills
- What they do
- What inputs they require
- Which shared reference files they use

**Source:** [Anatomy of the .claude/ Folder - by Avi Chawla](https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder)

---

## 5. Slash Commands vs Skills vs Tools vs Hooks

### Terminology Clarification

| Component | Invocation | Purpose | Scope |
|-----------|-----------|---------|-------|
| **Slash Commands** | Manual: `/command-name` | Templates for frequently-used prompts | Merged into Skills system (legacy) |
| **Skills** | Manual: `/skill-name` OR Auto-triggered | Structured, auto-discovered capabilities with optional supporting files | Task-specific or knowledge-based |
| **Tools (MCP)** | Automatic (via Claude) | Atomic functions for I/O operations | External system integration |
| **Hooks** | Automatic (event-driven) | Shell commands that execute at specific lifecycle points | Deterministic control over workflow |

**Source:** [Claude Code Skills vs MCP vs Plugins: Complete Guide 2026 - morphllm.com](https://www.morphllm.com/claude-code-skills-mcp-plugins)

### Slash Commands vs Skills

- **Slash commands** require **manual triggering** — you type `/command-name` to run them
- **Skills** can **auto-trigger** based on context matching their description
- **Custom commands** have been merged into the **Skills system**
- A file at `.claude/commands/deploy.md` and a skill at `.claude/skills/deploy/SKILL.md` both create `/deploy` and work the same way
- If a skill and command share the same name, **the skill takes precedence**

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Skills vs Tools (MCP)

| Aspect | Skills | Tools (MCP) |
|--------|--------|-----------|
| **What They Are** | Structured instruction packages with optional scripts | Atomic functions exposed via Model Context Protocol |
| **Purpose** | Provide domain-specific methodology and workflows | Perform I/O operations and system integration |
| **Integration** | Internal to Claude Code; filesystem-based | External systems via standardized protocol |
| **Context Cost** | Pre-loaded descriptions; full content on-demand | Tools are tools; called by Claude when needed |
| **Use Case** | "How to do something" methodology | "Hands" for the AI to access external systems |
| **Example** | "Deploy the application" workflow | GitHub API access, database queries, API calls |

**A Skill can use MCP tools. Most workflows benefit from both:** MCP for connectivity, Skills for methodology.

**Source:** [Understanding Claude Code's Full Stack: MCP, Skills, Subagents, and Hooks Explained | alexop.dev](https://alexop.dev/posts/understanding-claude-code-full-stack/)

### Skills vs Hooks

| Aspect | Skills | Hooks |
|--------|--------|-------|
| **Trigger** | Manual (`/name`) or auto (context match) | Event-driven (PreToolUse, PostToolUse) |
| **Purpose** | Provide instructions and workflows | Execute deterministic actions |
| **Invocation** | User or model-driven | Automatic at lifecycle events |
| **Control** | Flexible, optional | Deterministic, enforced |
| **Example** | "Explain code" skill | "Run tests after every file write" |

**Source:** [Automate workflows with hooks - Claude Code Docs](https://code.claude.com/docs/en/hooks-guide)

### When to Use Each

- **Slash commands**: Simple prompt templates, always user-invoked
- **Skills**: Can include scripts, resources, and auto-trigger based on context
- **MCP Tools**: External system integration and I/O operations
- **Hooks**: Enforce deterministic behaviors around tool execution

**Source:** [Claude Code Skills vs Tools & Commands: Which Should You Use? (2026) - Verdent Guides](https://www.verdent.ai/guides/claude-skills-vs-tools-commands)

---

## 6. Built-in Skills vs User-Created Skills

### Built-in Skills

Built-in skills **ship with Claude Code** and are available in every session. Unlike built-in commands which execute fixed logic directly, **they are prompt-based** and give Claude a detailed playbook to orchestrate work using its tools.

**Key characteristics:**
- **Prompt-based**: Give Claude detailed playbooks
- **Orchestration**: Can spawn parallel agents, read files, adapt to codebase
- **Always available**: No installation needed
- **Invoke same way**: Type `/skill-name` or auto-trigger

**Built-in skills include:**
- `/batch` - Orchestrate large-scale changes across a codebase in parallel
- `/claude-api` - Load Claude API reference material
- `/debug` - Enable debug logging and troubleshoot issues
- `/loop` - Run a prompt repeatedly on an interval
- `/simplify` - Review changed files for reuse and quality issues

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Custom Skills

**Custom Skills** are ones you create yourself, tailored to your own workflows and tasks.

**Key characteristics:**
- **User-created**: Tailored to your needs
- **Flexible**: Can be as simple as a few lines or as complex as multi-file packages
- **Scope-specific**: Can be personal (all projects) or project-specific
- **Discoverable**: Auto-discovered from nested directories in monorepos

**Source:** [How to Build Custom Claude Code Skills That Actually Work - DEV Community](https://dev.to/alanwest/how-to-build-custom-claude-code-skills-that-actually-work-2e1f)

### When to Build vs Use Built-in

Build a custom skill when:
- The **task involves knowledge specific to your context**
- Your **team does the same multi-step task more than twice a week**
- You find yourself **giving Claude the same instructions over and over**
- You need **organization or domain-specific workflows**

Use built-in skills when:
- The task is **general-purpose** (debugging, code simplification)
- You need **multi-agent orchestration** (batch operations)
- You want **API reference material** (Claude API skill)

**Source:** [How to Build Custom Claude Code Skills That Actually Work - DEV Community](https://dev.to/alanwest/how-to-build-custom-claude-code-skills-that-actually-work-2e1f)

---

## 7. The .claude/ Directory Structure

### Overview

The .claude folder is the **control center** for how Claude behaves in your project. It holds instructions, custom commands, permission rules, and Claude's memory across sessions.

**Important:** There are **two .claude directories**, not one, with different scopes and purposes.

**Source:** [Anatomy of the .claude/ Folder - by Avi Chawla](https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder)

### Home Directory ~/.claude/

The **global configuration** directory available across all projects.

#### Contents:

- **`~/.claude/CLAUDE.md`** - Personal global instructions loaded into every Claude Code session, across all your projects. Good place for your personal coding principles, preferred style, or anything you want Claude to remember regardless of which repo you're in.

- **`~/.claude/skills/`** - Personal skills directory. Skills available across all your projects.

- **`~/.claude/commands/`** - Personal commands directory (legacy, merged with skills).

- **`~/.claude/agents/`** - Personal subagent definitions available across projects.

- **`~/.claude/projects/`** - Session transcripts and auto-memory per project. Claude Code automatically saves notes to itself as it works: commands it discovers, patterns it observes, and architecture insights.

- **`~/.claude/settings.json`** - Global configuration for permissions, environment variables, and tool behavior.

**Source:** [How Claude remembers your project - Claude Code Docs](https://code.claude.com/docs/en/memory)

### Project Directory ./.claude/

The **project-level configuration** directory checked into your repository.

#### Contents:

- **`./.claude/CLAUDE.md`** - Project-level instructions. Loaded automatically when you work in this project. This is where you document your codebase architecture, contribution guidelines, and project-specific practices.

- **`./.claude/rules/`** - Additional markdown files with configuration rules. Every markdown file inside `.claude/rules/` gets loaded alongside your CLAUDE.md automatically.

- **`./.claude/skills/`** - Project-specific skills that auto-trigger and support nested discovery in monorepos.

- **`./.claude/agents/`** - Project-specific subagent definitions.

- **`./.claude/settings.json`** - Project-level settings (permissions, tool configuration).

- **`./.claude/output-styles/`** - Custom output formatting styles.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Nested .claude/ in Monorepos

Claude Code **automatically discovers skills** from nested `.claude/skills/` directories when you work with files in subdirectories.

**Example monorepo structure:**
```
project/
├── .claude/
│   └── skills/
│       ├── shared-skill/SKILL.md
│       └── CLAUDE.md
├── packages/
│   ├── frontend/
│   │   └── .claude/
│   │       └── skills/
│   │           └── react-skill/SKILL.md
│   └── backend/
│       └── .claude/
│           └── skills/
│               └── api-skill/SKILL.md
```

When editing `packages/frontend/`, Claude discovers skills from both `packages/frontend/.claude/skills/` and the root `.claude/skills/`.

**Benefits:**
- **Reduced configuration**: No need to explicitly register package-level skills
- **Context optimization**: Only skill descriptions load initially
- **Teams can maintain their own skills**: Each package team can define domain-specific skills

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills) and [Claude Code in Monorepos: Hierarchical CLAUDE.md and Package-Scoped Instructions - DEV Community](https://dev.to/myougatheaxo/claude-code-in-monorepos-hierarchical-claudemd-and-package-scoped-instructions-1il9)

### Skill Location and Scope

| Location | Path | Applies to |
|----------|------|-----------|
| Enterprise | (Managed settings) | All users in your organization |
| Personal | `~/.claude/skills/<skill-name>/SKILL.md` | All your projects |
| Project | `.claude/skills/<skill-name>/SKILL.md` | This project only |
| Plugin | `<plugin>/skills/<skill-name>/SKILL.md` | Where plugin is enabled |

When skills share the same name across levels, **higher-priority locations win**: enterprise > personal > project. Plugin skills use a `plugin-name:skill-name` namespace, so they cannot conflict with other levels.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Load Priority for CLAUDE.md Files

CLAUDE.md and `.claude/rules/*.md` files in each directory from the filesystem root down to your current directory are **loaded in order of priority**:

1. **`~/.claude/CLAUDE.md`** — Your personal, global preferences (applied to all projects) [LOWEST PRIORITY]
2. **`./CLAUDE.md`** — Project-level instructions (checked into your repo)
3. **`./.claude/CLAUDE.md`** — Project-level configuration directory
4. **`./.claude/rules/*.md`** — Additional project rules [HIGHEST PRIORITY]

Files in directories **closer to your CWD are loaded later** (higher priority).

**Source:** [CLAUDE.md - Claude Code Docs](https://www.mintlify.com/VineeTagarwaL-code/claude-code/configuration/claudemd)

---

## 8. CLAUDE.md Files: Project, User, and Enterprise Levels

### What is CLAUDE.md?

**CLAUDE.md** is a Markdown file you place in the root of your project (or in specific subdirectories) that gives Claude Code **persistent instructions about your codebase**.

It's Claude's "system prompt" for your project—where you document architecture, conventions, patterns, and anything Claude should know about your work.

**Source:** [Using CLAUDE.MD files: Customizing Claude Code for your codebase | Claude](https://claude.com/blog/using-claude-md-files)

### User-Level CLAUDE.md (~/.claude/CLAUDE.md)

The **global, personal instructions** loaded into every Claude Code session across all your projects.

**Good content:**
- Your personal coding principles
- Preferred style and approach
- General preferences (language, frameworks, tools)
- Anything you want Claude to remember regardless of project

**Best practices:**
- Target **under 200 lines** per CLAUDE.md file
- Longer files consume more context and reduce adherence

**Source:** [How Claude remembers your project - Claude Code Docs](https://code.claude.com/docs/en/memory)

### Project-Level CLAUDE.md (./.claude/CLAUDE.md)

The **project-specific instructions** checked into your repository.

**Good content:**
- Codebase architecture and structure
- Key components and how they interact
- Contribution guidelines and standards
- Project-specific patterns and conventions
- Technology stack and versions
- Links to documentation
- Known limitations or edge cases

**Best practices:**
- Target **under 200 lines** per file
- For larger contexts, split into **`.claude/rules/`** subdirectory files
- Document your "why" not just your "what"

**Source:** [How to Write a Good CLAUDE.md File - builder.io](https://www.builder.io/blog/claude-md-guide)

### Rules Directory (./.claude/rules/)

Additional **configuration rules** that extend your CLAUDE.md.

**Structure:**
```
.claude/
├── CLAUDE.md         # Main project instructions
└── rules/
    ├── testing.md    # Testing conventions
    ├── api.md        # API design patterns
    ├── database.md   # Database patterns
    └── security.md   # Security guidelines
```

**How it works:**
- Every markdown file inside `.claude/rules/` gets **loaded alongside your CLAUDE.md automatically**
- Keeps main CLAUDE.md focused
- Allows granular, topic-specific guidance

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Enterprise-Level Managed Settings

For organizations that need centralized control, Claude Code supports **multiple delivery mechanisms**:

#### Server-Managed Settings
Delivered from Anthropic's servers via the Claude.ai admin console:
- Applied organization-wide
- Cannot be overridden by users or projects
- Includes tool permissions, file access restrictions, MCP server configurations

#### MDM/OS-Level Policies
Delivered through native device management:
- **macOS**: `com.anthropic.claudecode` managed preferences domain
- **Windows**: `HKLM` registry key
- Enforced at the OS level

#### Admin Capabilities
Administrators can:
- Deploy and enforce settings across all Claude Code users
- Match internal policies without MDM
- Configure tool permissions centrally
- Restrict file access
- Configure MCP servers organization-wide

**Source:** [Claude Code settings - Claude Code Docs](https://code.claude.com/docs/en/settings) and [Use Claude Code with your Team or Enterprise plan | Claude Help Center](https://support.claude.com/en/articles/11845131-use-claude-code-with-your-team-or-enterprise-plan)

### Load Priority Summary

Files are loaded in this order (later files override earlier ones):

1. `~/.claude/CLAUDE.md` (user global)
2. `./CLAUDE.md` (project root)
3. `./.claude/CLAUDE.md` (project directory)
4. `./.claude/rules/*.md` (project rules - highest priority)
5. Enterprise managed settings (not overrideable)

**Source:** [How Claude remembers your project - Claude Code Docs](https://code.claude.com/docs/en/memory)

---

## 9. Hooks System: Pre/Post Command Hooks

### What Are Hooks?

**Hooks** are user-defined shell commands that execute at **specific points in Claude Code's lifecycle**. They provide **deterministic control** over Claude Code's behavior, ensuring certain actions always happen rather than relying on the LLM to choose to run them.

**Source:** [Automate workflows with hooks - Claude Code Docs](https://code.claude.com/docs/en/hooks-guide)

### Hook Types

Claude Code supports hooks for various lifecycle events:

| Hook Type | Trigger | Use Case |
|-----------|---------|----------|
| **PreToolUse** | Before Claude performs an action (write file, run command) | Validation, blocking dangerous operations |
| **PostToolUse** | After Claude completes an action | Cleanup, formatting, testing |
| **PreCommand** | Before a command executes | Pre-command validation |
| **PostCommand** | After a command completes | Post-execution tasks |

**Source:** [Claude Code Hooks: A Practical Guide to Workflow Automation | DataCamp](https://www.datacamp.com/tutorial/claude-code-hooks)

### PreToolUse Hooks (Most Powerful)

**PreToolUse** runs before Claude performs an action like writing a file or running a command.

**Perfect for:**
- **Validation**: Check file paths, syntax, safety
- **Blocking dangerous operations**: Prevent accidental destructive actions
- **Approval workflows**: Gate sensitive operations

**Key feature:** If your hook returns a **deny signal**, Claude **cannot proceed** with that tool use.

**Source:** [Automate workflows with hooks - Claude Code Docs](https://code.claude.com/docs/en/hooks-guide)

### PostToolUse Hooks

**PostToolUse** runs after Claude completes an action.

**Perfect for:**
- **Cleanup tasks**: Remove temp files, cleanup state
- **Formatting**: Run formatters or linters
- **Testing**: Auto-run tests after file changes
- **Notifications**: Notify systems of changes

**Source:** [Automate workflows with hooks - Claude Code Docs](https://code.claude.com/docs/en/hooks-guide)

### Communication Mechanism

**Command hooks communicate through stdout, stderr, and exit codes only.**

Your script tells Claude Code what to do next by:
- Writing to **stdout** or **stderr**
- Exiting with a **specific code**

#### Exit Codes

- **Exit 0**: The action proceeds (approved)
- **Exit 2**: The action is blocked (denied). Write a reason to stderr, and Claude receives it as feedback so it can adjust
- **Any other exit code**: The action proceeds

**Source:** [Automate workflows with hooks - Claude Code Docs](https://code.claude.com/docs/en/hooks-guide)

### Configuration

#### Interactive Configuration

The easiest method is using the interactive `/hooks` command in Claude Code:
1. Walks you through selecting an event (PreToolUse, PostToolUse, etc.)
2. Choose a matcher pattern (Write for file writes, Run for shell commands)
3. Specify your command

**Source:** [Automate workflows with hooks - Claude Code Docs](https://code.claude.com/docs/en/hooks-guide)

#### Manual Configuration (JSON)

Configure hooks in:
- **Global**: `~/.claude/settings.json`
- **Project**: `.claude/settings.json`

**Source:** [Automate workflows with hooks - Claude Code Docs](https://code.claude.com/docs/en/hooks-guide)

### Hooks in Skills and Agents

Hooks can be scoped to specific skills and agents using the `hooks` frontmatter field:

```yaml
---
name: my-skill
hooks:
  - event: PreToolUse
    match: Write
    command: ./scripts/validate.sh
---
```

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

---

## 10. Skill Naming Conventions and Best Practices

### Naming Conventions

#### General Principles

- **Use lowercase**: `my-skill`, not `My-Skill`
- **Use hyphens for word separation**: `skill-name`, not `skill_name` or `skillName`
- **Gerund form (verb + -ing)**: Clearly describes the activity (`explaining`, `testing`, `building`)
- **Max 64 characters**: Cannot exceed this length
- **Valid characters**: Lowercase letters, numbers, and hyphens only
- **No leading/trailing hyphens**: Cannot start or end with `-`
- **No consecutive hyphens**: Cannot use `--`

**Examples of good skill names:**
- `explaining-code`
- `reviewing-pull-request`
- `generating-tests`
- `summarizing-documents`

**Examples of poor skill names:**
- `Explain Code` (uppercase)
- `explain_code` (underscores)
- `code-explanation` (noun instead of gerund)
- `-code-explain` (starts with hyphen)

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

#### Directory Name Requirement

The `name` field in YAML frontmatter **must match the parent directory name**:

```
my-skill/
├── SKILL.md
```

With frontmatter:
```yaml
---
name: my-skill
```

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Description Best Practices

The **description is critical** because Claude scans descriptions to decide relevance:

- **Be specific**: Describe both what the skill does AND when to use it
- **Include keywords**: Words users would naturally say when they need this skill
- **Be "pushy"**: Claude tends to "undertrigger" skills, so make descriptions more explicit
- **Front-load use cases**: Put the most important use case first
- **Max 1024 characters**: But descriptions longer than 250 characters are truncated in skill listings

**Good description example:**
```
Apply Acme Corp brand guidelines to presentations and documents, including official colors, fonts, and logo usage. Use when creating branded materials, updating presentations, or when the user mentions brand consistency.
```

**Poor description example:**
```
Brand guidelines tool
```

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills) and [Skill authoring best practices - Claude API Docs](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)

### Frontmatter Field Best Practices

#### Disabling Auto-Invocation

Use `disable-model-invocation: true` for workflows with side effects or that you want to control:

```yaml
---
name: deploy
description: Deploy the application to production
disable-model-invocation: true
---
```

**Use cases:**
- `/commit` - You control when to commit
- `/deploy` - You don't want Claude deciding when it's ready
- `/send-slack-message` - Prevent accidental messages

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

#### Hiding from User Menu

Use `user-invocable: false` for reference knowledge only:

```yaml
---
name: legacy-system-context
description: Documentation of the deprecated legacy system
user-invocable: false
---
```

Claude knows about this skill when relevant, but `/legacy-system-context` doesn't appear in the `/` menu since it's not actionable as a command.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

#### Content Strategy

- **SKILL.md body**: 1,500-2,000 words target for main instructions
- **Keep under 500 lines**: Absolute maximum
- **Move detailed content**: To separate reference files
- **Organize logically**: Step-by-step instructions, examples, edge cases

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Invocation Control Matrix

How frontmatter fields affect what can happen:

| Configuration | User Can Invoke | Claude Can Invoke | When Loaded into Context |
|--------------|-----------------|------------------|-------------------------|
| (default) | Yes | Yes | Description always; full skill on invocation |
| `disable-model-invocation: true` | Yes | No | Not in context; full skill loads when user invokes |
| `user-invocable: false` | No | Yes | Description always; full skill loads when Claude invokes |

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

---

## 11. Installing Skills from Others

### Two Main Approaches

#### 1. Install from Official Marketplaces

You can register a repository as a Claude Code Plugin marketplace:

```bash
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

**Source:** [GitHub - anthropics/skills: Public repository for Agent Skills](https://github.com/anthropics/skills)

#### 2. Add Custom Marketplace Then Install

First, add the marketplace:
```bash
/plugin marketplace add alirezarezvani/claude-skills
```

Then install specific skill bundles:
```bash
/plugin install engineering-skills@claude-code-skills
/plugin install marketing-skills@claude-code-skills
```

**Example with popular skills repo:**
```bash
/plugin marketplace add alirezarezvani/claude-skills
/plugin install engineering-skills@claude-code-skills
```

**Source:** [How to Install Claude Skills from GitHub (2026 Guide) - Agensi](https://www.agensi.io/learn/how-to-install-claude-skills-from-github)

### Local Installation

You can also manually copy skill files to local directories:

```bash
# Copy skills
cp -r my-skill ~/.claude/skills/

# Copy agents
cp -r my-agent ~/.claude/agents/

# Copy commands
cp -r my-command ~/.claude/commands/
```

**Source:** [How to Install Claude Skills from GitHub (2026 Guide) - Agensi](https://www.agensi.io/learn/how-to-install-claude-skills-from-github)

### Using Installed Skills

After installing:

1. **Mention it in your request**: Claude automatically recognizes installed skills matching your task
2. **Type `/` to see available skills**: Sidebar shows all available skills
3. **Select and invoke**: Click to use any skill, or type `/skill-name`

**Source:** [Use Skills in Claude | Claude Help Center](https://support.claude.com/en/articles/12512180-use-skills-in-claude)

### Security Considerations

**Important:** Only install skills from **trusted sources**. When installing from a less-trusted source:

1. **Review before enabling**: Read the contents of files bundled in the skill
2. **Understand what it does**: Check scripts, permissions, and external calls
3. **Check for side effects**: Look for code that modifies files, runs commands, or accesses sensitive data

**Source:** [How to Install Claude Skills from GitHub (2026 Guide) - Agensi](https://www.agensi.io/learn/how-to-install-claude-skills-from-github)

### Marketplace Ecosystem

There are **2,300+ skills**, **770+ MCP servers**, and **95+ plugin marketplaces** available.

**Popular resources:**
- [GitHub - anthropics/skills](https://github.com/anthropics/skills) - Official Anthropic repository
- [GitHub - alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) - 220+ community skills
- [Claude Code Plugins Directory](https://claudemarketplaces.com/) - Official marketplace directory
- [awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) - Community curated list

**Source:** [Claude Code Skills vs MCP vs Plugins: Complete Guide 2026 - morphllm.com](https://www.morphllm.com/claude-code-skills-mcp-plugins)

---

## 12. Skills Integration with MCP Servers

### Overview

**Claude Code can connect to hundreds of external tools and data sources through the Model Context Protocol (MCP)**, an open source standard for AI-tool integrations.

**Source:** [Connect Claude Code to tools via MCP - Claude Code Docs](https://code.claude.com/docs/en/mcp)

### Skills vs MCP Servers

| Aspect | Skills | MCP Servers |
|--------|--------|------------|
| **What They Are** | Internal instruction packages | External tool integrations |
| **Purpose** | Methodology and workflows | System connectivity |
| **Configuration** | Filesystem (skills directory) | MCP registry + config files |
| **Context Model** | Descriptions pre-loaded; content on-demand | Tools are tools; called when needed |
| **Use Case** | "How to do something" | "Connect to external system" |
| **Token Cost** | Minimal for descriptions; content on-demand | Per-tool-call basis |
| **Example** | "Deploy the application" skill | GitHub API, database queries, Slack API |

**Key insight:** Skills are the AI's **internal playbook**. MCP servers are the AI's **nervous system** connecting to the outside world.

**Source:** [Claude Skills vs. MCP: A Technical Comparison for AI Workflows | IntuitionLabs](https://intuitionlabs.ai/articles/claude-skills-vs-mcp)

### How Skills Use MCP Tools

A **Skill can use MCP tools**. Most workflows benefit from both:
- **MCP for connectivity**: External system access
- **Skills for methodology**: Workflows and best practices

**Example skill that uses MCP tools:**

```yaml
---
name: pr-summary
description: Summarize changes in a pull request
context: fork
agent: Explore
allowed-tools: Bash(gh *)
---

## Pull request context
- PR diff: !`gh pr diff`
- PR comments: !`gh pr view --comments`

## Your task
Summarize this PR...
```

The `allowed-tools: Bash(gh *)` grants pre-approved access to GitHub CLI commands.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### MCP Server Configuration

#### Adding MCP Servers

The primary way to add an MCP server:

```bash
claude mcp add <server-name>
```

Or edit configuration files directly:

**Global config**: `~/.claude/settings.json`
**Project config**: `.claude/settings.json`

**Source:** [Connect Claude Code to tools via MCP - Claude Code Docs](https://code.claude.com/docs/en/mcp)

### Available MCP Servers

There are **770+ MCP servers** available across multiple categories:

- **Development**: GitHub, GitLab, Jira, Linear
- **Data**: Databases, data warehouses, analytics
- **Communication**: Slack, email, messaging
- **Cloud**: AWS, GCP, Azure
- **Specialized**: Design tools, finance, legal, healthcare

**Directory:** https://mcpservers.org/

**Source:** [Connect Claude Code to tools via MCP - Claude Code Docs](https://code.claude.com/docs/en/mcp)

### Context Integration

When you enable MCP servers in Claude Code:
- Claude can **implement features from issue trackers**
- Claude can **analyze monitoring data**
- Claude can **query databases**
- Claude can **integrate with designs**
- Claude can **automate workflows**

**Source:** [Connect Claude Code to tools via MCP - Claude Code Docs](https://code.claude.com/docs/en/mcp)

### Allowed Tools in Skills

Skills can specify pre-approved tools using the `allowed-tools` frontmatter field:

```yaml
---
name: safe-reader
description: Read files without making changes
allowed-tools: Read, Grep, Glob
---
```

This restricts Claude to only the specified tools when the skill is active, enabling read-only modes and safety constraints.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

---

## 13. Advanced Patterns: Context Fork and Subagents

### Running Skills in Subagents

Add **`context: fork`** to your frontmatter when you want a skill to run in **isolation**:

```yaml
---
name: deep-research
description: Research a topic thoroughly
context: fork
agent: Explore
---

Research $ARGUMENTS thoroughly:

1. Find relevant files using Glob and Grep
2. Read and analyze the code
3. Summarize findings with specific file references
```

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### What Context Fork Does

- **Isolates skill execution** in a separate subagent context
- **Creates independent conversation history** - the subagent won't have access to your main conversation
- **Picks an agent type** to execute the skill
- **Simplifies coordination** - you don't need separate agent files for one-off isolated tasks

**Source:** [How to run a Skill in Isolated Subagent in Claude Code](https://aiengineerguide.com/til/run-skill-isolated-subagent-claude-code/)

### Agent Types

The `agent` field specifies which subagent configuration to use:

**Built-in agents:**
- `Explore` - Read-only tools, optimized for codebase exploration
- `Plan` - Strategic planning and analysis
- `general-purpose` - Full capabilities (default)

**Custom agents:**
- Any custom subagent from `.claude/agents/`

**Example with Explore agent:**

```yaml
---
name: research-codebase
description: Research a codebase thoroughly
context: fork
agent: Explore
---

Research the structure and patterns in this codebase:
1. Map the directory structure
2. Identify key components
3. Document the architecture
```

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Policy Islands

When Claude Code forks into an agent:
- It can **only use tools in that agent's allowed_tools list**
- This creates a **"policy island"** - a governed context with pre-approved capabilities
- This enables **safe, controlled execution** of potentially sensitive tasks

**Example:** An `Explore` agent provides read-only tools, creating a safe research context.

**Source:** [From Approval Hell to Just Do It: How Agent Skills Fork Governed Sub-Agents in Claude Code 2.1 | by Rick Hightower](https://medium.com/@richardhightower/from-approval-hell-to-just-do-it-how-agent-skills-fork-governed-sub-agents-in-claude-code-2-1-c0438416433a)

### When to Use Context Fork

**Use `context: fork` when:**
- You want a skill to run in **isolation** without conversation history
- You want **read-only exploration** (use `Explore` agent)
- You want **strategic planning** without operational constraints (use `Plan` agent)
- You need **policy islands** for safety

**Don't use `context: fork` when:**
- Your skill is **guidelines** without explicit task (subagent needs actionable instructions)
- You need **access to conversation history**
- You want **output to stay in main conversation**

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Skills vs Subagents

| Approach | System Prompt | Task | Also Loads |
|----------|---------------|------|-----------|
| **Skill with `context: fork`** | From agent type (Explore, Plan, etc.) | SKILL.md content | CLAUDE.md |
| **Subagent with `skills` field** | Subagent's markdown body | Claude's delegation message | Preloaded skills + CLAUDE.md |

For simpler cases, use skills with `context: fork`. For complex subagent orchestration, define custom subagents.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

---

## 14. Plugins and Skill Distribution

### What Are Plugins?

**Plugins** extend Claude Code with skills, agents, hooks, and MCP servers. Plugins solve the **distribution problem** by providing complete packages with:
- Versioning
- Documentation
- Automated installation
- No need for users to understand directory structures

**Source:** [Discover and install prebuilt plugins through marketplaces - Claude Code Docs](https://code.claude.com/docs/en/discover-plugins)

### Skills vs Plugins

| Aspect | Skills | Plugins |
|--------|--------|---------|
| **Scope** | Individual instruction packages | Bundled packages of skills, agents, hooks |
| **Distribution** | Direct filesystem or GitHub raw | Marketplaces with versioning |
| **Installation** | Manual or via `/plugin install` | Automated via marketplace |
| **Namespace** | Direct (`skill-name`) | Scoped (`plugin-name:skill-name`) |
| **Dependencies** | Can use MCP tools | Can bundle MCP servers |
| **Use Case** | Personal/project skills | Team/community distributions |

**Source:** [Understanding Claude Code: Skills vs Commands vs Subagents vs Plugins](https://www.youngleaders.tech/p/claude-skills-commands-subagents-plugins)

### Plugin Structure

A plugin can contain:

```
my-plugin/
├── skills/
│   ├── skill-1/SKILL.md
│   └── skill-2/SKILL.md
├── agents/
│   └── custom-agent.md
├── hooks.json
├── mcp-servers/
│   └── server-config.json
├── PLUGIN.md
└── README.md
```

**Source:** [Discover and install prebuilt plugins through marketplaces - Claude Code Docs](https://code.claude.com/docs/en/discover-plugins)

### Plugin Marketplaces

There are **95+ plugin marketplaces** with **2,300+ skills** and **770+ MCP servers**.

**Types of marketplaces:**
- **Official** (Anthropic-managed)
- **Community** (curated collections)
- **Domain-specific** (engineering, marketing, finance, etc.)
- **Organization-specific** (internal team marketplaces)

**Key marketplaces:**
- [Claude Code Plugins Directory](https://claudemarketplaces.com/) - Official directory
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) - Anthropic-managed repository
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) - 220+ community skills
- [Claude Skills Library](https://mcpservers.org/agent-skills) - Organized by category

**Source:** [Claude Code Plugins | Skills, MCP Servers & Marketplace Directory](https://claudemarketplaces.com/)

### Installing from Marketplaces

```bash
# Add a marketplace
/plugin marketplace add <github-username>/<repo-name>

# Install a skill bundle
/plugin install <skill-name>@<marketplace-name>

# Or install from official marketplace
/plugin install <skill-name>@anthropic-agent-skills
```

**Source:** [How to Install Claude Skills from GitHub (2026 Guide) - Agensi](https://www.agensi.io/learn/how-to-install-claude-skills-from-github)

### Creating and Sharing Plugins

You can create and distribute plugins:

1. **Create plugin directory** with skills, agents, hooks
2. **Push to GitHub**
3. **Register as marketplace** or submit to existing marketplace
4. **Users install via `/plugin install`**

**Source:** [Discover and install prebuilt plugins through marketplaces - Claude Code Docs](https://code.claude.com/docs/en/discover-plugins)

### Marketplace Ecosystem

**The marketplace ecosystem provides:**
- **2,300+ skills** covering diverse domains
- **770+ MCP servers** for external integrations
- **95+ marketplaces** across different communities
- **Free and open** - no cost for users or creators
- **Community voting** (coming soon) for quality assessment

**Source:** [Claude Code Plugins | Skills, MCP Servers & Marketplace Directory](https://claudemarketplaces.com/)

---

## 15. Agent Skills Open Standard

### What is Agent Skills?

**Agent Skills** is an **open standard for giving agents new capabilities and expertise**. Anthropic released Agent Skills as an open standard on **December 18, 2024**, enabling portability across AI platforms.

**Key principle:** Skills you create are **portable** and work across any skills-compatible agent. You aren't locked into a single AI provider.

**Source:** [Agent Skills – Codex | OpenAI Developers](https://developers.openai.com/codex/skills) and [Anthropic Opens Agent Skills Standard](https://www.unite.ai/anthropic-opens-agent-skills-standard-continuing-its-pattern-of-building-industry-infrastructure/)

### Adoption

**Major platforms have adopted Agent Skills:**
- Microsoft (VS Code Copilot)
- OpenAI (ChatGPT)
- Atlassian
- Figma
- Cursor
- GitHub

A skill you write for Claude Code can be used across any other platform that supports the standard.

**Source:** [Anthropic Opens Agent Skills Standard](https://www.unite.ai/anthropic-opens-agent-skills-standard-continuing-its-pattern-of-building-industry-infrastructure/)

### Official Specification

The complete specification is available at **[https://agentskills.io/specification](https://agentskills.io/specification)**

Source code is hosted at **[https://github.com/agentskills/agentskills](https://github.com/agentskills/agentskills)**

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Core Spec Requirements

The spec defines:

1. **Directory structure**: At minimum, a `SKILL.md` file in a directory
2. **SKILL.md format**: YAML frontmatter + Markdown body
3. **Frontmatter fields**: `name`, `description` (required), plus optional fields like `license`, `compatibility`, `metadata`
4. **Validation**: Use `skills-ref` tool to validate compliance

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Naming Requirements (Agent Skills Standard)

- **1-64 characters**
- **Lowercase letters** and **hyphens** only
- Must **not start or end with hyphen**
- Must **not have consecutive hyphens**
- Must **match parent directory name**

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Progressive Disclosure Architecture

The Agent Skills spec emphasizes efficient context usage:

1. **Metadata** (~100 tokens): Name and description loaded at startup for all skills
2. **Instructions** (<5000 tokens recommended): Full SKILL.md body loaded when activated
3. **Resources** (as needed): Supporting files loaded only when required

Keep `SKILL.md` under 500 lines. Move detailed reference material to separate files.

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Validation

Use the reference library to validate skills:

```bash
skills-ref validate ./my-skill
```

This checks that:
- SKILL.md frontmatter is valid
- All naming conventions are followed
- Directory structure is correct

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Ecosystem Resources

**Official Resources:**
- [https://agentskills.io](https://agentskills.io) - Official site
- [GitHub: agentskills/agentskills](https://github.com/agentskills/agentskills) - Specification source
- [GitHub: anthropics/skills](https://github.com/anthropics/skills) - Anthropic-maintained skills repository

**Community Resources:**
- [awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)
- [claude-skills (alirezarezvani)](https://github.com/alirezarezvani/claude-skills) - 220+ community skills
- [Claude Code Skills Library](https://mcpservers.org/agent-skills)

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

---

## Summary: Key Takeaways

### Skills are Modular Instructions
- **Reusable packages** of instructions, scripts, and resources
- **Auto-discoverable** when descriptions match task context
- **Manual or automatic** invocation options

### SKILL.md is the Foundation
- Simple format: **YAML frontmatter + Markdown**
- Critical fields: **name** and **description**
- Supports dynamic context injection and advanced patterns

### Directory Structure Matters
- **~/.claude/**: Personal skills (all projects)
- **./.claude/**: Project skills (this repo)
- **Nested discovery** in monorepos for package-specific skills

### Different Tools for Different Jobs
- **Skills**: Methodology and workflows (internal)
- **MCP Tools**: System integration and I/O (external)
- **Hooks**: Deterministic workflow automation (event-driven)
- **CLAUDE.md**: Persistent context and guidelines

### Enterprise Ready
- **Hierarchical CLAUDE.md** for organization-wide standards
- **Managed settings** for centralized configuration
- **Nested skills** for monorepo package governance

### Portable and Open
- **Agent Skills** is an open standard
- Skills are **portable** across platforms
- **95+ marketplaces** with 2,300+ skills available

---

## Source URLs Summary

**Official Documentation:**
- [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)
- [Connect Claude Code to tools via MCP - Claude Code Docs](https://code.claude.com/docs/en/mcp)
- [Automate workflows with hooks - Claude Code Docs](https://code.claude.com/docs/en/hooks-guide)
- [How Claude remembers your project - Claude Code Docs](https://code.claude.com/docs/en/memory)

**Claude Help Center:**
- [How to create custom Skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)
- [Use Skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude)
- [What are Skills?](https://support.claude.com/en/articles/12512176-what-are-skills)
- [Use Claude Code with your Team or Enterprise plan](https://support.claude.com/en/articles/11845131-use-claude-code-with-your-team-or-enterprise-plan)

**Agent Skills Official:**
- [Specification - Agent Skills](https://agentskills.io/specification)
- [GitHub: agentskills/agentskills](https://github.com/agentskills/agentskills)
- [GitHub: anthropics/skills](https://github.com/anthropics/skills)
- [GitHub: anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)

**Technical Blogs & Guides:**
- [Using CLAUDE.MD files: Customizing Claude Code for your codebase](https://claude.com/blog/using-claude-md-files)
- [Skills explained: How Skills compares to prompts, Projects, MCP, and subagents](https://claude.com/blog/skills-explained)
- [How to Build Custom Claude Code Skills That Actually Work - DEV Community](https://dev.to/alanwest/how-to-build-custom-claude-code-skills-that-actually-work-2e1f)
- [Inside Claude Code Skills: Structure, prompts, invocation | Mikhail Shilkov](https://mikhail.io/2025/10/claude-code-skills/)
- [Claude Code Skills vs MCP vs Plugins: Complete Guide 2026 - morphllm.com](https://www.morphllm.com/claude-code-skills-mcp-plugins)
- [Understanding Claude Code's Full Stack: MCP, Skills, Subagents, and Hooks Explained](https://alexop.dev/posts/understanding-claude-code-full-stack/)
- [Anatomy of the .claude/ Folder - by Avi Chawla](https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder)

**Community & Marketplace:**
- [Claude Code Plugins | Skills, MCP Servers & Marketplace Directory](https://claudemarketplaces.com/)
- [awesome-claude-skills - GitHub](https://github.com/travisvn/awesome-claude-skills)
- [claude-skills (220+ skills) - GitHub](https://github.com/alirezarezvani/claude-skills)
- [How to Install Claude Skills from GitHub (2026 Guide) - Agensi](https://www.agensi.io/learn/how-to-install-claude-skills-from-github)

**Enterprise & Advanced:**
- [Claude Code settings - Claude Code Docs](https://code.claude.com/docs/en/settings)
- [Skill authoring best practices - Claude API Docs](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [From Approval Hell to Just Do It: How Agent Skills Fork Governed Sub-Agents in Claude Code 2.1](https://medium.com/@richardhightower/from-approval-hell-to-just-do-it-how-agent-skills-fork-governed-sub-agents-in-claude-code-2-1-c0438416433a)

---

**Research completed on:** March 31, 2026

