<metadata>
purpose: Raw research consolidation - Master reference for Claude ecosystem (Skills, Plugins, MCP, Desktop Config)
audience: Internal research and reference
summary: Comprehensive multi-source synthesis of Claude product ecosystem research, skills architecture, plugin systems, MCP protocol, desktop configuration, chat features, API ecosystem, and practical installation steps
domain: Claude AI Platform, Developer Tools, Automation
confidence: High (multi-source synthesis, official documentation primary)
context_tier: Raw Research (pipeline/research/)
last_updated: March 31, 2026
sources: 100+ authoritative sources with direct URLs
</metadata>

# Claude Skills & Ecosystem - Master Research Consolidation

**Consolidated Date:** March 31, 2026
**Source Files:** 4 comprehensive research documents synthesized
**Status:** Raw research stage - ready for study guide development

---

## Table of Contents

1. [Claude Product Ecosystem](#1-claude-product-ecosystem)
2. [Skills in Claude Code](#2-skills-in-claude-code)
3. [Plugins & Skills in Cowork](#3-plugins--skills-in-cowork)
4. [MCP Protocol](#4-mcp-protocol)
5. [Claude Desktop Config](#5-claude-desktop-config)
6. [Claude Chat Features](#6-claude-chat-features)
7. [API & Developer Ecosystem](#7-api--developer-ecosystem)
8. [Practical Installation Steps](#8-practical-installation-steps)

---

## 1. Claude Product Ecosystem

### Products in the Claude Ecosystem

Claude is Anthropic's flagship AI assistant, distributed across multiple products:

- **Claude Chat** (claude.ai) - Web and mobile conversational interface
- **Claude Desktop App** - Native desktop application for macOS and Windows
- **Claude Code CLI** - Terminal-based agentic coding tool
- **Claude Cowork** - GUI-based tool for non-technical knowledge work automation
- **Claude API** - Programmatic access for developers
- **Claude Agent SDK** - Framework for building custom agents
- **Claude in Chrome** - Browser extension for web automation
- **Claude in Excel** - Integration within Microsoft Excel

**Source:** [Claude Products Overview - Anthropic](https://claude.com) and [Claude Code Docs](https://code.claude.com/docs/en/overview)

### Product Availability

| Product | Status | Platform | Users |
|---------|--------|----------|-------|
| Claude Chat | Available | Web, iOS, Android | Free, Pro, Team, Enterprise |
| Claude Desktop | Available | macOS, Windows | Pro, Team, Enterprise |
| Claude Code | Available | CLI | Pro, Team, Enterprise |
| Claude Cowork | Research Preview | macOS, Windows (Feb 2026) | Pro, Team, Enterprise |
| Claude API | Available | Programmatic | Developers (API keys) |
| Claude Agent SDK | Available | Framework | Developers |

**Source:** [Claude Help Center - Product Availability](https://support.claude.com)

### Key Differences Between Products

#### Claude Chat (Web/Mobile)

- **Single-turn interactions** - Responds to prompts one at a time
- **For all users** - No coding required
- **Read-only access** - Cannot execute commands or modify files
- **Web interface** - Works in any modern browser

**Source:** [Claude Chat - claude.ai](https://claude.ai)

#### Claude Desktop App

- **Multi-surface integration** - Unified native application
- **File system access** - Can read and write local files
- **Plugin support** - Access to 2,300+ skills, 770+ MCP servers
- **Cowork preview** - Agentic knowledge work automation
- **Availability:** macOS and Windows

**Source:** [Claude Desktop App - Help Center](https://support.claude.com/en/articles/13345190-get-started-with-cowork)

#### Claude Code CLI

- **Command-line agentic tool** - For developers
- **Full file system access** - Read/write/execute
- **Git integration** - Direct version control
- **Skill and hook support** - Custom automation
- **Workspace exploration** - Visual sidebar navigation

**Source:** [Claude Code Docs - Overview](https://code.claude.com/docs/en/overview)

#### Claude Cowork

- **Multi-step task execution** - Complex workflows
- **For non-coders** - Knowledge work automation
- **GUI interface** - Desktop application
- **Plugin system** - 23+ official plugins with 85+ skills
- **Sandboxed VM** - Secure isolated container
- **Research preview** - Continuous feature development

**Source:** [Get started with Cowork - Claude Help Center](https://support.claude.com/en/articles/13345190-get-started-with-cowork)

#### Claude API

- **Programmatic access** - For application integration
- **Fine-grained control** - Custom system prompts, parameters
- **Scaling** - Enterprise-grade deployments
- **Batch processing** - High-volume request handling

**Source:** [Claude API - platform.anthropic.com](https://platform.anthropic.com)

### Model Lineup

**Current Models (March 2026):**

| Model | Context | Strengths | Best For |
|-------|---------|-----------|----------|
| claude-3-5-sonnet | 200K tokens | Speed + capability balance | Most use cases |
| claude-3-5-haiku | 200K tokens | Fast, lightweight | Real-time applications |
| claude-3-opus | 200K tokens | Most capable | Complex reasoning |

**Capacity:**
- All Claude 3.5 models support 200K context window
- Updated with latest training data March 2026

**Source:** [Claude Models - platform.anthropic.com](https://platform.anthropic.com/docs/about/models)

---

## 2. Skills in Claude Code

### What is a Skill?

A **Skill** is a modular capability that extends Claude's functionality. Skills are structured, auto-discovered capabilities—often a directory of supporting files—that Claude may apply when relevant to a user's task.

**Key Definition:** Skills are **reusable packages of instructions, scripts, and resources** that tell Claude HOW to do something and WHEN to do it.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### How Skills Work

#### Automatic Invocation

If you're working on something and a skill is relevant, Claude will use it automatically based on:
- Skill name and description matching task context
- The `auto-invoke` setting in frontmatter
- Relevance scoring in Claude's decision-making

#### Explicit Invocation

Type `/` in Claude Code to see available skills, or use `/skill-name` to invoke directly.

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### SKILL.md Format and Structure

Each skill is defined by a single `SKILL.md` file with YAML frontmatter and Markdown body:

```yaml
---
name: my-skill
description: Brief description of what this skill does
version: 1.0.0
disable-model-invocation: false
user-invocable: true
allowed-tools:
  - Bash
  - Read
  - Write
context: fork
agent: Explore
---

# Skill Instructions

This section contains the actual instructions...
```

**Frontmatter Fields:**

- `name` (required) - Internal identifier, max 64 chars, lowercase with hyphens only
- `description` (required) - What the skill does (critical for auto-discovery)
- `version` - Semantic versioning
- `disable-model-invocation` - When to prevent auto-invocation
- `user-invocable` - Whether to show in `/` menu
- `allowed-tools` - Pre-approved tools this skill can access
- `context` - Set to `fork` to run in isolated subagent
- `agent` - Which agent type (Explore, Plan, general-purpose)
- `hooks` - Event handlers for workflow automation

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### File Structure and Directory Organization

Skills live in the `.claude/` directory with this structure:

```
project-root/
├── .claude/
│   ├── skills/
│   │   ├── skill-1/
│   │   │   └── SKILL.md
│   │   ├── skill-2/
│   │   │   └── SKILL.md
│   │   └── my-category/
│   │       └── nested-skill/
│   │           └── SKILL.md
│   ├── agents/
│   ├── commands/
│   ├── CLAUDE.md
│   └── settings.json
```

**Scoping Rules:**

- **~/.claude/skills/** - Personal skills (all projects)
- **./.claude/skills/** - Project-level skills
- **Monorepo packages** - Package-specific skills in `packages/*/skills/`

**Source:** [How Claude remembers your project - Claude Code Docs](https://code.claude.com/docs/en/memory)

### Skill Naming Conventions

**Naming Rules:**

- **Lowercase only** - `my-skill`, not `My-Skill`
- **Hyphens for separation** - `skill-name`, not `skill_name`
- **Gerund form (verb+ing)** - `explaining-code`, `reviewing-tests`
- **Max 64 characters** - Hard limit
- **Valid characters** - Lowercase letters, numbers, hyphens only
- **No leading/trailing/consecutive hyphens**

**Examples of Good Names:**
- `explaining-code`
- `reviewing-pull-request`
- `generating-tests`
- `summarizing-documents`

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

### Invocation Control Matrix

How frontmatter fields affect invocation:

| Configuration | User Can Invoke | Claude Can Invoke | Context |
|--------------|-----------------|------------------|---------|
| (default) | Yes | Yes | Description always; full skill on invocation |
| `disable-model-invocation: true` | Yes | No | Not in context; loads when user invokes |
| `user-invocable: false` | No | Yes | Description always; loads when Claude invokes |

**Use `disable-model-invocation: true` for:**
- `/commit` - User controls when to commit
- `/deploy` - You don't want Claude auto-deploying
- `/send-message` - Prevent accidental message sends

**Use `user-invocable: false` for:**
- Reference knowledge without explicit command
- Guidelines that only influence decisions
- Context data not meant to be invoked directly

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Description Best Practices

The description is critical because Claude uses it to decide relevance:

- **Be specific** - Describe what the skill does AND when to use it
- **Include keywords** - Words users naturally say when they need this skill
- **Be "pushy"** - Claude tends to undertrigger skills
- **Front-load use cases** - Most important use case first
- **Max 1024 characters** - But 250 chars truncated in listings

**Good example:**
```
Apply Acme Corp brand guidelines to presentations and documents, including official colors, fonts, and logo usage. Use when creating branded materials, updating presentations, or when the user mentions brand consistency.
```

**Poor example:**
```
Brand guidelines tool
```

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Content Strategy

- **SKILL.md body**: 1,500-2,000 words target
- **Keep under 500 lines**: Absolute maximum
- **Move detailed content**: To separate reference files
- **Organize logically**: Step-by-step instructions, examples, edge cases

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Slash Commands vs Skills vs Tools vs Hooks

| Aspect | Skills | Commands | Tools | Hooks |
|--------|--------|----------|-------|-------|
| **Purpose** | Internal instruction packages | Explicit user actions | External system access | Event-driven automation |
| **Invocation** | Auto or explicit | Explicit (/) | Auto (model decides) | Automatic (on event) |
| **When Used** | "How to do something" | "Do this now" | "Access external system" | "Monitor and enforce" |
| **Example** | "Code review methodology" | "/deploy" | GitHub API, Slack API | Validate before commit |

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### CLAUDE.md Files

**Three levels of CLAUDE.md:**

1. **Global** - `~/.claude/CLAUDE.md` - Personal instructions for all projects
2. **Project** - `./.claude/CLAUDE.md` - This repository's standards
3. **Enterprise** - Organization-wide guidelines

**Purpose:** Persistent context about how your organization/project works. Unlike skills (auto-triggered), CLAUDE.md is always loaded.

**Example content:**
- Code style guidelines
- Company standards
- Architectural patterns
- Naming conventions
- Process documentation

**Source:** [How Claude remembers your project - Claude Code Docs](https://code.claude.com/docs/en/memory)

### Context Fork and Subagents

#### Running Skills in Subagents

Add `context: fork` to run a skill in isolation:

```yaml
---
name: deep-research
description: Research a topic thoroughly
context: fork
agent: Explore
---

Research thoroughly...
```

**What Context Fork Does:**
- Isolates skill execution in separate subagent context
- Creates independent conversation history
- Subagent won't have access to main conversation
- Picks an agent type to execute the skill

**Built-in Agent Types:**
- `Explore` - Read-only tools, codebase exploration
- `Plan` - Strategic planning and analysis
- `general-purpose` - Full capabilities (default)

**Use Context Fork when:**
- You want a skill to run in isolation
- You want read-only exploration (use Explore agent)
- You want strategic planning without operational constraints
- You need policy islands for safety

**Don't use Context Fork when:**
- Your skill is guidelines without explicit task
- You need access to conversation history
- You want output to stay in main conversation

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Installing Skills from Others

#### From Official Marketplaces

```bash
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

#### From Community Repositories

First, add the marketplace:
```bash
/plugin marketplace add alirezarezvani/claude-skills
```

Then install:
```bash
/plugin install engineering-skills@claude-code-skills
```

#### Local Installation

```bash
# Copy skills
cp -r my-skill ~/.claude/skills/

# Copy agents
cp -r my-agent ~/.claude/agents/

# Copy commands
cp -r my-command ~/.claude/commands/
```

**After installing:**
1. Mention it in your request - Claude auto-discovers it
2. Type `/` to see available skills
3. Select and invoke, or use `/skill-name`

**Source:** [How to Install Claude Skills from GitHub (2026 Guide) - Agensi](https://www.agensi.io/learn/how-to-install-claude-skills-from-github)

### Marketplace Ecosystem

**Statistics (March 2026):**
- **2,300+ skills** available across marketplaces
- **770+ MCP servers** for external integrations
- **95+ plugin marketplaces** across different communities

**Key Resources:**
- [GitHub - anthropics/skills](https://github.com/anthropics/skills) - Official Anthropic repository
- [GitHub - alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) - 220+ community skills
- [Claude Code Plugins Directory](https://claudemarketplaces.com/) - Official marketplace directory
- [awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) - Community curated list

**Source:** [Claude Code Skills vs MCP vs Plugins: Complete Guide 2026 - morphllm.com](https://www.morphllm.com/claude-code-skills-mcp-plugins)

### Skills Integration with MCP Servers

**Skills vs MCP Servers:**

| Aspect | Skills | MCP Servers |
|--------|--------|------------|
| **What They Are** | Internal instruction packages | External tool integrations |
| **Purpose** | Methodology and workflows | System connectivity |
| **Configuration** | Filesystem (skills directory) | MCP registry + config files |
| **Context Model** | Descriptions pre-loaded; content on-demand | Tools are tools; called when needed |
| **Use Case** | "How to do something" | "Connect to external system" |
| **Token Cost** | Minimal for descriptions; content on-demand | Per-tool-call basis |

**Key Insight:** Skills are the AI's **internal playbook**. MCP servers are the AI's **nervous system** connecting to the outside world.

**A Skill Can Use MCP Tools:**

Most workflows benefit from both:
- **MCP for connectivity**: External system access
- **Skills for methodology**: Workflows and best practices

**Example:**
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

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

### Advanced Pattern: Allowed Tools

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

### Agent Skills Open Standard

#### What is Agent Skills?

**Agent Skills** is an **open standard** for giving agents new capabilities. Anthropic released it on **December 18, 2024**, enabling portability across AI platforms.

**Key Principle:** Skills you create are **portable** and work across any skills-compatible agent. You aren't locked into a single AI provider.

**Adoption:**
Major platforms have adopted Agent Skills:
- Microsoft (VS Code Copilot)
- OpenAI (ChatGPT)
- Atlassian
- Figma
- Cursor
- GitHub

A skill you write for Claude Code can be used across any other platform supporting the standard.

**Official Specification:** https://agentskills.io/specification
**Source Code:** https://github.com/agentskills/agentskills

**Source:** [Agent Skills – Codex | OpenAI Developers](https://developers.openai.com/codex/skills) and [Anthropic Opens Agent Skills Standard](https://www.unite.ai/anthropic-opens-agent-skills-standard-continuing-its-pattern-of-building-industry-infrastructure/)

#### Core Spec Requirements

The spec defines:

1. **Directory structure** - At minimum, a `SKILL.md` file in a directory
2. **SKILL.md format** - YAML frontmatter + Markdown body
3. **Frontmatter fields** - `name`, `description` (required), plus optional fields
4. **Validation** - Use `skills-ref` tool to validate compliance

**Naming Requirements (Agent Skills Standard):**
- 1-64 characters
- Lowercase letters and hyphens only
- Must NOT start or end with hyphen
- Must NOT have consecutive hyphens
- Must match parent directory name

**Source:** [Specification - Agent Skills](https://agentskills.io/specification)

---

## 3. Plugins & Skills in Cowork

### What is Cowork Mode?

**Cowork** is a research preview that brings Claude Code's agentic capabilities to Claude Desktop for knowledge work beyond coding. It is an agentic tool built into the Claude desktop app that automates complex, multi-step tasks for non-coders.

**Key Capabilities:**
- Describe an outcome, step away, and come back to finished work
- Instead of one-turn responses, multi-step autonomous execution
- Analyze requests, create plans, break complex work into subtasks
- Monitor progress, provide direction mid-task, or let Claude run independently

**Availability:**
- Research preview for paid plans (Pro, Max, Team, Enterprise)
- Launched on Windows February 10, 2026, with full feature parity
- All features including plugins, file access, MCP connectors available

**Source:** [Get started with Cowork - Claude Help Center](https://support.claude.com/en/articles/13345190-get-started-with-cowork)

### How Cowork Differs from Chat and Code

#### Chat vs Cowork vs Code

| Aspect | Chat | Cowork | Code |
|--------|------|--------|------|
| **Response Model** | Responds to prompts | Executes tasks | Executes tasks |
| **Task Execution** | Single interaction | Multi-step autonomous | Multi-step autonomous |
| **Target Users** | All users | Non-coders | Developers |
| **Interface** | Web chat | Desktop GUI | CLI |
| **Execution Context** | Browser-based | Sandboxed VM | Direct filesystem |

**Cowork vs Claude Code:**
- **Cowork** is for knowledge workers automating repetitive file and cross-application desktop workflows
- **Claude Code** is a command-line agent for developers operating on file system

Both use the same underlying agentic architecture. Cowork is Claude Code's execution engine wrapped in a GUI.

**Fundamental Difference in How Skills Work:**

In Chat, skills were useful. In Cowork, skills are operational. They shape autonomous work. Your brand guidelines skill doesn't just influence a reply. It governs every file Claude creates.

**Source:** [Get started with Cowork - Claude Help Center](https://support.claude.com/en/articles/13345190-get-started-with-cowork) and [Claude Cowork Guide for Power Users - Substack](https://karozieminski.substack.com/p/claude-cowork-guide-plugins-memory-sub-agents-tips)

### The Plugin System Architecture

A Claude plugin bundles together the following components into a single installable package:

1. **Skills** - Domain knowledge and procedural workflows
2. **Commands** - Slash commands for explicit actions
3. **MCP Servers** - Tool integrations via Model Context Protocol
4. **Sub-Agents** - Specialized agents for specific task types
5. **Hooks** - Event handlers and workflow automation
6. **Output Styles** - Custom rendering and formatting (optional)
7. **LSP Servers** - Language server protocol integration (optional)

**Source:** [Create plugins - Claude Code Docs](https://code.claude.com/docs/en/plugins)

### Plugin Manifest (plugin.json)

The `.claude-plugin/plugin.json` file is the entry point for any plugin:

```json
{
  "name": "plugin-name",              # Required: unique identifier
  "version": "1.0.0",                 # Semantic versioning
  "description": "What this plugin does",
  "author": {
    "name": "Author Name",
    "email": "email@example.com",
    "url": "https://example.com"
  },
  "homepage": "https://plugin-homepage.com",
  "repository": "https://github.com/user/repo",
  "license": "MIT",
  "keywords": ["keyword1", "keyword2"],
  "commands": "./commands",           # Path to commands directory
  "agents": "./agents",               # Path to agents/subagents
  "skills": "./skills",               # Path to skills directory
  "hooks": "./hooks",                 # Path to hooks configuration
  "mcpServers": "./mcp-servers",      # MCP server definitions
  "outputStyles": "./output-styles"   # Custom output rendering
}
```

**Key Requirements:**
- Only `name` is required
- `.claude-plugin/` directory must be at plugin root level
- All other directories must be at plugin root, NOT inside .claude-plugin/
- Use kebab-case for all directory and file names

**Source:** [Create plugins - Claude Code Docs](https://code.claude.com/docs/en/plugins)

### Installing Plugins

#### In Cowork (Web Interface)

1. Open Claude Cowork at claude.com
2. Click "Browse plugins" to open modal
3. Search for or browse available plugins
4. Click "Install" on selected plugin
5. Review permissions authorization screen
6. Click "Authorize"
7. Plugin is active immediately

**Source:** [Use plugins in Cowork - Claude Help Center](https://support.claude.com/en/articles/13837440-use-plugins-in-cowork)

#### In Claude Code (CLI)

Install from official marketplace:
```bash
/plugin install <plugin-name>@claude-plugins-official
```

Alternatively:
1. Run `/plugin` and go to Discover tab
2. View full catalog at [claude.com/plugins](https://claude.com/plugins)
3. Run `/plugins` to browse and batch install

**Adding Custom Marketplaces:**
```bash
/plugin marketplace add <owner>/<repository>
```

**Source:** [Discover and install prebuilt plugins - Claude Code Docs](https://code.claude.com/docs/en/discover-plugins)

### Plugin File Structure

Typical Claude plugin structure:

```
plugin-name/
├── .claude-plugin/
│   └── plugin.json              # Manifest file
├── skills/
│   ├── skill-name-1/
│   │   └── SKILL.md
│   └── skill-name-2/
│       └── SKILL.md
├── commands/
│   ├── command-name-1.md
│   └── command-name-2.md
├── agents/
│   ├── subagent-name-1.md
│   └── subagent-name-2.md
├── hooks/
│   └── hooks.json               # Event handler configuration
├── .mcp.json                    # MCP server definitions
├── output-styles/
│   └── styles.css               # Custom output rendering
└── scripts/
    └── helper.sh                # Helper utilities
```

**Critical Rules:**
- All component directories MUST be at plugin root, NOT nested inside .claude-plugin/
- Only plugin.json goes in .claude-plugin/
- Use kebab-case for all directory and file names
- Plugin can be packaged as .plugin file (zip archive with different extension)

**Source:** [Create plugins - Claude Code Docs](https://code.claude.com/docs/en/plugins)

### SKILL.md Format in Plugins

```markdown
---
name: "Skill Display Name"
description: "What this skill does"
permission: "read"  # or "write", "execute"
auto-invoke: true   # When Claude should auto-trigger this skill
allowed-tools:
  - "file_read"
  - "file_write"
version: "1.0.0"
---

# Instructions for Claude

This section contains instructions that tell Claude what to do when invoked.
```

**Source:** [Plugins reference - Claude Code Docs](https://code.claude.com/docs/en/plugins-reference)

### Customizing Plugins

#### How to Customize a Plugin

1. While viewing installed plugin, click "Customize" in upper right
2. Opens new Cowork task with prompt asking Claude to customize the plugin
3. Click "Let's go" to start working with Claude

#### Customization Options

**1. Connector Configuration**
- Swap connectors by editing `.mcp.json`
- Map to your specific tool stack
- If connector missing, Claude adjusts workflow

**2. Adding Company Context**
- Drop terminology, org structure, processes into skill files
- Adjust workflows to match how your team works
- Add industry-specific knowledge

**3. Managing Components**
- See everything inside a plugin individually
- Open any skill to edit directly
- Browse and manage connectors directly

**Source:** [How to customize plugins in Cowork - Claude](https://claude.com/resources/tutorials/how-to-customize-plugins-in-cowork)

### Official Plugins (23 Total)

#### Original 11 Plugins

1. **Productivity** - Task management, workplace memory, visual dashboard
2. **Enterprise Search** - Search across organizational knowledge
3. **Data** - SQL queries, data exploration, visualization, dashboards
4. **Marketing** - Content creation, campaigns, performance reporting
5. **Sales** - Pipeline management, call prep, competitive intelligence
6. **Product Management** - Feature tracking, roadmap planning
7. **Customer Support** - Ticket management, issue resolution
8. **Finance** - Reconciliation, variance analysis, financial statements
9. **Legal** - Contract review, NDA triage, compliance
10. **Bio Research** - Scientific research and analysis
11. **Plugin Create** - Build custom plugins from scratch

#### Expanded 12+ Plugins (February 24, 2026)

12. **HR** - Human resources and talent management
13. **Engineering** - Software development, code review, documentation
14. **Design** - Design systems, accessibility, visual design
15. **Operations** - Process management, vendor evaluation, compliance tracking
16. **Financial Services** - Banking, investment, asset management
17-23. Plus 6+ more domain-specific plugins

**Total:** Approximately 23 official Anthropic plugins, providing 85+ skills, 69+ commands, and 40+ unique MCP connectors.

**Source:** [Use plugins in Cowork - Claude Help Center](https://support.claude.com/en/articles/13837440-use-plugins-in-cowork)

### Sub-Agents and Multi-Agent Workflows

#### What are Sub-Agents?

Sub-agents are specialized AI assistants handling specific types of tasks. Each runs in its own context with:
- Custom system prompt tailored to specialty
- Specific tool access (not all tools available)
- Independent permissions and execution model
- Ability to work without main agent interference

**Source:** [Create custom subagents - Claude Code Docs](https://code.claude.com/docs/en/sub-agents)

#### Sub-Agent Configuration

Sub-agents are Markdown files stored in `agents/` directory:

```markdown
---
name: "Research Agent"
description: "Specializes in synthesizing research from multiple sources"
tools:
  - "web_search"
  - "document_analysis"
  - "content_generation"
instructions: |
  You are a specialized research agent focused on...
---

# Research Agent Role

You handle research tasks, synthesizing information from multiple sources...
```

**Components:**
- `name` - Display name
- `description` - What agent specializes in
- `tools` - Tools agent can access
- `instructions` - Custom system prompt
- `model` - (Optional) Which Claude model to use

**Source:** [Create custom subagents - Claude Code Docs](https://code.claude.com/docs/en/sub-agents)

### Plugin Hooks and Events

#### What are Hooks?

Hooks are user-defined shell commands, HTTP endpoints, or LLM prompts that execute automatically at specific points in Claude Code's lifecycle. They enable:
- Validation and enforcement of rules
- Automation of repetitive tasks
- Integration with external systems
- Workflow customization and control

**Source:** [Hooks reference - Claude Code Docs](https://code.claude.com/docs/en/hooks)

#### Common Hook Events

**Pre-Action Hooks:**
- **PreToolUse** - Runs before Claude performs an action (write file, run command)
  - Perfect for validation or blocking dangerous operations
  - Can inspect action parameters and reject if needed

**Post-Action Hooks:**
- **PostToolUse** - Runs after Claude completes an action
  - Good for cleanup tasks, formatting code, running tests
  - Can process output or trigger workflows

**Lifecycle Hooks:**
- **UserPromptSubmit** - When you submit a prompt to Claude
- **SessionStart** - Beginning of new session
- **SessionEnd** - When session closes

**Source:** [Hooks reference - Claude Code Docs](https://code.claude.com/docs/en/hooks)

#### Hook Configuration Example

```json
{
  "hooks": {
    "preToolUse": [
      {
        "matcher": {
          "tool": "bash"
        },
        "handlers": [
          {
            "type": "command",
            "command": "npm run security-check",
            "blocking": true
          }
        ]
      }
    ]
  }
}
```

**Source:** [Hooks reference - Claude Code Docs](https://code.claude.com/docs/en/hooks)

### Creating Custom Plugins

#### Using Plugin Create

Claude Code includes **Plugin Create**, a built-in plugin that walks through custom plugin creation:

1. Invoke Plugin Create in Cowork
2. Claude asks about your role and tasks
3. Claude generates file structure and skill documents
4. You refine generated plugin by editing skills
5. Test in Cowork and make iterative refinements
6. Share with team (on Team/Enterprise plans)

**Source:** [How to build a plugin from scratch in Cowork - Claude](https://claude.com/resources/tutorials/how-to-build-a-plugin-from-scratch-in-cowork)

#### Manual Creation

1. Create directory structure with `.claude-plugin/`
2. Create `plugin.json` manifest
3. Create skills in `skills/*/SKILL.md`
4. Create commands in `commands/` (optional)
5. Package as `.plugin` file (zip archive)

**Source:** [Create plugins - Claude Code Docs](https://code.claude.com/docs/en/plugins)

---

## 4. MCP Protocol

### What is MCP?

The **Model Context Protocol (MCP)** is an open standard that enables developers to build secure, two-way connections between data sources and AI-powered tools. It provides a standardized way to connect AI applications to external systems, similar to how USB-C provides a standardized connector for electronic devices.

**Core Principle:** Instead of n applications needing m custom integrations, each service publishes one MCP server and any AI application can use it.

**Source:** [Introducing the Model Context Protocol | Anthropic](https://www.anthropic.com/news/model-context-protocol)

### Architecture and Components

MCP follows a **client-host-server architecture**:

#### 1. Hosts
- Applications users interact with directly (Claude Desktop, VS Code, Cursor)
- Create and manage MCP clients
- Enforce security policies
- Manage application context

#### 2. MCP Clients
- Connectors living within host applications
- Maintain 1:1 stateful sessions with MCP servers
- Implement the client-side of the protocol
- Manage connections to specific servers

#### 3. MCP Servers
- Standalone external programs exposing capabilities
- Each typically focuses on one integration (GitHub, PostgreSQL, Slack, etc.)
- Expose three core primitives: Tools, Resources, and Prompts
- Can be local (stdio) or remote (HTTP/SSE)

**Communication:** All MCP messages follow **JSON-RPC 2.0 specification**

**Transport-Agnostic:** MCP can be implemented on any channel supporting bidirectional message exchange

**Source:** [What is the Model Context Protocol (MCP)? | Model Context Protocol](https://modelcontextprotocol.io/)

### Three Core Primitives

#### Tools

**Definition:** Actions that the AI model decides to take, similar to function calling in traditional APIs.

**Characteristics:**
- Model-controlled (the AI decides when and how to use them)
- Each tool has:
  - A descriptive name
  - A detailed description (used by LLM to decide when to call)
  - An input schema (defining parameters and types)
  - Implementation logic that performs the action

**Examples:**
- Writing files to disk
- Making database queries
- Calling external APIs
- Executing shell commands
- Sending messages to external services

**Source:** [Connect Claude Code to tools via MCP | Claude Code Docs](https://code.claude.com/docs/en/mcp)

#### Resources

**Definition:** Application-controlled context provided to the AI, similar to GET endpoints in REST API.

**Characteristics:**
- Provide data/information to the AI without performing computation
- No side effects (read-only by nature)
- Can be accessed using `@` reference syntax
- Examples: file contents, database schemas, documentation, knowledge bases

**Source:** [Getting Started with Model Context Protocol Part 2: Prompts and Resources](https://www.danliden.com/posts/20250921-mcp-prompts-resources.html)

#### Prompts

**Definition:** Pre-defined templates for optimally using tools or resources in specific scenarios.

**Characteristics:**
- User-invoked (not automatically triggered by AI)
- Provide structured workflows or templates
- Can combine tools and resources
- Examples: code review workflows, analysis templates, testing procedures

**Source:** [How to Use Model Context Protocol (MCP) with Claude | Codecademy](https://www.codecademy.com/article/how-to-use-model-context-protocol-mcp-with-claude-step-by-step-guide-with-examples)

### MCP vs Traditional APIs

#### Integration Model

**Traditional APIs:**
- Custom integration for each API
- Hard-coded endpoints and authentication
- Direct API calls from application code

**MCP:**
- Standardized protocol for all integrations
- Dynamic server discovery
- AI model autonomously determines which tools to use

#### Complexity Problem

**For n applications connecting to m services:**

Traditional: Need n × m custom integrations
Example: 20 business systems × 10 AI applications = **200 custom integrations**

**MCP:** Each service publishes one MCP server
Example: 20 business systems × 1 server per system = **20 servers**

**Source:** [MCP vs Traditional API Integration: Why Enterprises Are Making the Switch | Palma AI](https://palma.ai/blog/mcp-vs-api)

#### State Management

**Traditional APIs:**
- Stateless by design (HTTP best practice)
- Application must manage context across multiple requests
- Difficult to track multi-step workflows

**MCP:**
- **Stateful sessions** built into protocol
- One session per client-server pair
- Server understands context of multiple actions
- Natural workflow support

**Source:** [Model Context Protocol (MCP) vs APIs: Architecture & Use Cases | Codecademy](https://www.codecademy.com/article/mcp-vs-api-architecture-and-use-cases)

#### Performance

**MCP Advantages:**
- 40-60% lower latency through compressed context serialization
- 50,000+ requests/second throughput capacity
- 99.95% uptime achievable
- 70% reduction in payload sizes

**Source:** [MCP vs API | APIeDeck](https://www.apideck.com/blog/mcp-vs-api)

### MCP Transport Protocols

MCP is **transport-agnostic** and defines three standard mechanisms:

#### 1. STDIO Transport (Local)

**How It Works:**
1. MCP client spawns MCP server as child process
2. Client writes JSON-RPC messages to server's STDIN
3. Server responds with JSON-RPC messages to STDOUT
4. Client reads responses from server's STDOUT

**Configuration:**
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["build/index.js"]
    }
  }
}
```

**Advantages:**
- Simple: Native process communication
- Reliable: Process handles message ordering
- Secure: No network exposure
- Most common: Widest ecosystem support

**Best Practices:**
- Write logs and debug output to **STDERR**, not STDOUT
- STDOUT is reserved exclusively for JSON-RPC protocol messages

**Source:** [Transports | Model Context Protocol](https://modelcontextprotocol.io/legacy/concepts/transports)

#### 2. Streamable HTTP Transport (Remote, Modern)

**Definition:** Modern standard for remote MCP connections, introduced March 2025

**How It Works:**
1. Client sends JSON-RPC messages via HTTP POST to single endpoint
2. Server responds with either single JSON response or SSE stream

**Configuration:**
```json
{
  "mcpServers": {
    "remote-server": {
      "url": "https://example.com/mcp",
      "type": "http"
    }
  }
}
```

**Advantages:**
- Stateless: Better for scalability
- Simplified: Single endpoint vs. two with SSE
- Efficient: Reduced connection overhead
- Web-ready: Works with serverless platforms
- Authentication: Native HTTPS/OAuth support

**Source:** [MCP Transport Protocols: stdio vs SSE vs StreamableHTTP | MCPcat](https://mcpcat.io/guides/comparing-stdio-sse-streamablehttp/)

#### 3. SSE Transport (Deprecated)

**Status:** Deprecated as of March 26, 2025
- Still supported for backward compatibility
- New implementations should use Streamable HTTP

**Source:** [Transports | Model Context Protocol](https://modelcontextprotocol.io/legacy/concepts/transports)

### MCP Registry and Marketplace

**Official MCP Registry:** https://registry.modelcontextprotocol.io/

**Purpose:**
- Centralized metadata repository for publicly accessible MCP servers
- Similar to an app store for MCP servers
- Community-driven with major contributors (Anthropic, GitHub, Microsoft)

**Key Features:**

**Trusted Contributors:**
- Anthropic
- GitHub
- Microsoft
- PulseMCP
- Open-source community

**Namespace Authentication:**
- Server names use reverse DNS format (e.g., `io.github.username/server`)
- Namespace binding ties servers to verified GitHub accounts or domains
- Only legitimate owner can publish servers under namespace
- Prevents impersonation and unauthorized distributions

**Registry Status:**
- API entered freeze (v0.1) in March 2025
- No breaking changes will be introduced
- Clients can rely on stable endpoints

**Source:** [Introducing the MCP Registry | Model Context Protocol Blog](https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/)

### Official MCP Servers

Anthropic publishes official servers for popular enterprise systems:

- **Filesystem** - Secure file read/write with configurable access controls
- **GitHub** - Manage issues, pull requests, repositories, workflows
- **Google Drive** - Access and work with Google Drive files
- **Slack** - Read channels, send messages, search conversation history
- **PostgreSQL** - Query PostgreSQL databases
- **Puppeteer** - Browser automation and web scraping

**Source:** [GitHub - modelcontextprotocol/servers | GitHub](https://github.com/modelcontextprotocol/servers)

### Popular MCP Servers (Ecosystem)

**Development:**
- @modelcontextprotocol/server-github - Full GitHub API
- @modelcontextprotocol/server-filesystem - File operations
- fast-filesystem-mcp - Advanced filesystem with large file handling

**Data & Databases:**
- @modelcontextprotocol/server-postgresql - PostgreSQL queries
- SchemaFlow - Real-time database schema access
- Couchbase MCP - Cluster data interaction

**Communication:**
- @modelcontextprotocol/server-slack - Slack workspace integration
- Email MCP - Email automation

**Browser & Web:**
- Puppeteer MCP Server - Browser automation and web interaction
- Brave Search MCP - Live web search integration

**Curated Lists:**
- [GitHub - wong2/awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers)
- [GitHub - appcypher/awesome-mcp-servers](https://github.com/appcypher/awesome-mcp-servers)
- [Example Servers | Model Context Protocol](https://modelcontextprotocol.io/examples)

**Source:** [10 Best MCP Servers for Developers in 2026 | Publora](https://publora.com/blog/10-best-mcp-servers-for-developers-2026)

### Building Custom MCP Servers

#### SDK Support

**Official SDKs:**
- **TypeScript/JavaScript** - [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
- **Python** - [@modelcontextprotocol/sdk (Python)](https://github.com/modelcontextprotocol/python-sdk)

**Benefits:**
- Tool/schema helpers for validation
- HTTP server scaffolding
- Resource registration utilities
- End-to-end type safety

**Source:** [How to Build a Custom MCP Server with TypeScript | FreeCodeCamp](https://www.freecodecamp.org/news/how-to-build-a-custom-mcp-server-with-typescript-a-handbook-for-developers/)

#### TypeScript/JavaScript Setup

**Project Initialization:**
```bash
mkdir my-mcp-server
cd my-mcp-server
npm init
npm install @modelcontextprotocol/sdk zod@3
npm install --save-dev @types/node typescript
```

**Basic Server Structure:**
```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

const server = new Server({
  name: "my-server",
  version: "1.0.0",
});

// Define tools
const tools: Tool[] = [{
  name: "add",
  description: "Add two numbers",
  inputSchema: {
    type: "object",
    properties: {
      a: { type: "number" },
      b: { type: "number" },
    },
    required: ["a", "b"],
  },
}];

// Handle tool listing
server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "add") {
    const args = request.params.arguments as { a: number; b: number };
    return { content: [{ type: "text", text: String(args.a + args.b) }] };
  }
  throw new Error("Unknown tool");
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```

**Source:** [How to Build a Custom MCP Server with TypeScript | FreeCodeCamp](https://www.freecodecamp.org/news/how-to-build-a-custom-mcp-server-with-typescript-a-handbook-for-developers/)

#### Python Setup with FastMCP

**Project Initialization:**
```bash
mkdir my-mcp-server
cd my-mcp-server
uv init
uv add "mcp[cli]" httpx
```

**Basic Server Structure:**
```python
from mcp.server.fastmcp import FastMCP

server = FastMCP("my-server")

@server.tool()
def add(a: int, b: int) -> str:
    """Add two numbers together."""
    return str(a + b)

@server.tool()
def multiply(a: int, b: int) -> str:
    """Multiply two numbers."""
    return str(a * b)

if __name__ == "__main__":
    server.run()
```

**Advantages of FastMCP:**
- Automatic tool definition from Python type hints
- Automatic schema generation from docstrings
- Minimal boilerplate code
- Type-safe implementation

**Source:** [MCP Explained: Build Your First MCP Server in TypeScript and Python | DEV Community](https://dev.to/deangrover/mcp-explained-build-your-first-mcp-server-in-typescript-and-python-3hp9)

### MCP Security Considerations

#### Major Security Risks

**1. Prompt Injection Attacks**
- Attackers embed malicious instructions in data flowing through MCP servers
- AI model misinterprets embedded instructions as legitimate commands

**Mitigation:**
- Treat all external data as untrusted input
- Use pre-call interceptors to validate arguments
- Implement safety classifiers for sensitive operations

**2. Supply Chain Vulnerabilities**
- Attackers upload malicious MCP servers with names similar to legitimate ones
- Users execute malicious code thinking they're installing legitimate servers

**Mitigation:**
- Only install servers from official MCP Registry
- Verify publisher identity and namespace
- Use signed packages
- Audit installed server code

**3. Server-Side Code Execution**
- Vulnerabilities in MCP server code allow arbitrary code execution

**Mitigation:**
- Keep server and dependencies updated
- Use input validation for all tool parameters
- Implement sandboxing for user-provided code
- Regular security audits

**4. Authentication Failures**
- MCP servers without proper authentication allow unauthorized access

**Mitigation:**
- Implement OAuth 2.1 or higher
- Implement server-side authorization checks
- Block requests to private IP ranges

**Source:** [MCP Security: Key Risks, Controls & Best Practices Explained | Reco AI](https://www.reco.ai/learn/mcp-security)

#### Best Practice Framework

**Least Privilege Access:**
- Grant only necessary permissions to each MCP server
- Separate read and write operations
- Regular access reviews and audits

**Network and Infrastructure Security:**
- All OAuth URLs must use HTTPS in production
- Block requests to private IP ranges
- Use mutual TLS (mTLS) for all MCP traffic

**Credential Management:**
- Never store secrets in environment variables
- Use system keychain (macOS Keychain, Windows Credential Manager)
- Implement credential expiration
- Rotate credentials regularly

**Code and Package Security:**
- Integrate SAST (Static Application Security Testing)
- Integrate SCA (Software Composition Analysis)
- Keep dependencies updated
- Use signed and verified packages

**Monitoring and Auditing:**
- Implement pre/post-call interceptors
- Log all tool invocations with timestamp, user, tool name, result
- Audit tool usage patterns
- Alert on suspicious activity

**Source:** [The complete guide to MCP security | WorkOS](https://workos.com/blog/mcp-security-risks-best-practices)

### MCP in Claude Cowork

**Integration:**
- Cowork can access MCP servers configured in `claude_desktop_config.json`
- Multiple connection types supported (stdio, HTTP, SSE)
- Automatic bridging of local servers into the Cowork VM

**How Cowork Uses MCP:**

1. MCP servers in `claude_desktop_config.json` are automatically available
2. Claude Desktop automatically bridges configured servers into Cowork VM environment
3. Cowork users can access all configured MCP tools

**Source:** [Claude Cowork MCP Integration Guide (2026 Setup) | Fast.io](https://fast.io/resources/claude-cowork-mcp-integration/)

---

## 5. Claude Desktop Config

### MCP Configuration in Claude Desktop

MCP servers are configured in `claude_desktop_config.json`:

**File Locations:**
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux:** `~/.config/Claude/claude_desktop_config.json`

**Configuration Example:**
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"]
    },
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token"
      }
    },
    "slack": {
      "command": "python",
      "args": ["-m", "slack_mcp"]
    }
  }
}
```

**Important:** Completely quit Claude Desktop and restart it for changes to take effect.

**Source:** [Getting Started with Local MCP Servers on Claude Desktop - Claude Help Center](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)

### Installation Methods

#### Method 1: Using Claude Desktop UI (Recommended)

As of 2026, Claude Desktop includes a built-in Connectors panel:

1. Open Claude Desktop
2. Click the "+" button at the bottom of chat window
3. Select "Connectors" from menu
4. Browse available MCP servers in marketplace
5. Click "Install" on desired servers

**Benefits:**
- No JSON editing required
- Graphical interface
- Error checking built-in
- One-click installation

**Source:** [Getting Started with Local MCP Servers on Claude Desktop | Claude Help Center](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)

#### Method 2: Desktop Extensions (.mcpb files)

Claude Desktop supports **Desktop Extensions** — pre-configured MCP server bundles:

1. Download the `.mcpb` file
2. Double-click to install (automatic, no JSON editing)
3. Extensions appear in Settings > Extensions
4. Toggle on/off in Connectors panel

**Benefits:**
- Zero configuration
- Automatic updates
- One-click installation
- Verified and signed by publishers

**Source:** [One-click MCP server installation for Claude Desktop | Anthropic Engineering](https://www.anthropic.com/engineering/desktop-extensions)

#### Method 3: Manual JSON Configuration

For advanced users or custom servers:

1. Open Settings > Developer > Edit Config (or edit file directly)
2. Add MCP server configuration to `mcpServers` object
3. Save the configuration file
4. Completely quit Claude Desktop and restart

**Important Notes:**
- Always use absolute paths (not relative paths or tilde paths)
- Check JSON syntax carefully
- Use environment variables for sensitive credentials
- Verify server is installed (run `npx @modelcontextprotocol/server-X --help`)

**Source:** [Connect to local MCP servers | Model Context Protocol](https://modelcontextprotocol.io/docs/develop/connect-local-servers)

### Requirements

- **Node.js:** Required to run many MCP servers. Download from nodejs.org. LTS version recommended.
- **Claude Desktop:** Updated to latest version
- **Permissions:** System allows MCP server process to run

**Source:** [How to Use Model Context Protocol (MCP) with Claude | Codecademy](https://www.codecademy.com/article/how-to-use-model-context-protocol-mcp-with-claude-step-by-step-guide-with-examples)

### Remote MCP Servers

#### Cloud-Based MCP Configuration

For cloud-based and remote servers:

**Configuration in Claude Desktop Settings:**
1. Navigate to Settings > Connectors
2. Click "Add custom connector" at bottom
3. Add your connector's remote MCP server URL

**Supported Transport Types:**
- HTTP (recommended for remote/cloud-based services)
- SSE (may be deprecated in coming months)

**Authentication:**
- Authless servers (public APIs)
- OAuth-based servers (secure, permission-scoped access)
- Optional: Click "Advanced settings" to specify OAuth Client ID and Secret

**Source:** [Get started with custom connectors using remote MCP - Claude Help Center](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)

#### Deployment Platforms

**Cloudflare Workers:**
- Cold start under 5ms
- Free tier: 100,000 requests/day
- Official support: Cloudflare maintains official MCP template
- Benefits: Auto-scaling, zero maintenance

**Vercel Serverless:**
- Free tier: Generous limits
- Auto-scaling based on demand
- Free HTTPS endpoint
- Zero infrastructure management

**AWS Lambda:**
- Python library for serverless HTTP handlers
- DynamoDB support for session management
- Full AWS ecosystem integration

**Netlify Functions:**
- Native Netlify CI/CD integration
- Serverless function deployment

**Koyeb:**
- Remote MCP server deployment tutorial available

**Source:** [How to Deploy a Remote MCP Server | Toolradar Blog](https://toolradar.com/blog/deploy-remote-mcp-server)

### Debugging MCP Connections

#### Common Error Categories

**Connection Errors:**

**ECONNREFUSED (Connection Refused)**
- Server process not running, transport path wrong, or port conflict
- Solution: Verify server running, check config path, check for port conflicts

**Server Disconnected**
- Server crashed, transport mismatch, or logging to stdout
- Solution: Check server logs (redirected to stderr), verify transport config

**HTTPS Certificate Errors**
- Self-signed or expired certificates in HTTP transport
- Solution: Use valid certificates in production

**Protocol Errors:**

**Error -32000 (Server Error)** - #1 Cause: Writing to stdout instead of stderr
- MCP's stdio transport uses stdout exclusively for JSON-RPC
- Non-protocol output corrupts message stream
- Solution: Use `console.error()` instead of `console.log()` in TypeScript

**Error -32602 (Invalid params)**
- Server sending unsupported capability requests
- Solution: Check capability negotiation, verify protocol version

**Source:** [How to Debug MCP Server Issues | Fast.io](https://fast.io/resources/mcp-server-debugging/)

#### Debugging Tools

**MCP Inspector:**
```bash
npx @modelcontextprotocol/inspector node build/index.js
```
Provides visual debugging interface, JSON-RPC message inspection, tool execution testing

**Debug Logging:**
```bash
DEBUG=mcp:* node build/index.js
```
Shows all JSON-RPC messages, connection establishment, capability negotiation, tool invocation

**Configuration Validation:**
```bash
# Validate JSON syntax
python -m json.tool claude_desktop_config.json
```

**Source:** [Debugging | Model Context Protocol](https://modelcontextprotocol.io/docs/tools/debugging)

---

## 6. Claude Chat Features

### Claude Chat Capabilities

**Claude Chat** (claude.ai) is the web and mobile conversational interface:

- **Models:** Claude 3.5 Sonnet, Haiku, Opus (200K context window)
- **File Upload:** Analyze PDFs, images, documents, code files
- **Web Search:** Real-time information retrieval (with Pro/Team/Enterprise)
- **Artifacts:** Visual editor for code and documents
- **Conversation Memory:** Chat history preserved across sessions
- **Project Mode:** Team collaboration with shared projects
- **Custom Instructions:** Persistent system-level preferences

**Source:** [Claude Chat - claude.ai](https://claude.ai)

### Skills in Chat

Skills are available in Claude Chat and influence responses:

- Skills are **useful** in Chat (they influence what Claude writes)
- Unlike Cowork, skills don't **govern** autonomous work
- Skills are auto-discovered based on name and description
- Skills can be explicitly invoked or suggested contextually

**Key Difference from Cowork:**
- Chat: Skills influence single response
- Cowork: Skills govern every file Claude creates

**Source:** [Claude Cowork Guide for Power Users - Substack](https://karozieminski.substack.com/p/claude-cowork-guide-plugins-memory-sub-agents-tips)

### File Handling

- **Supported formats:** PDFs, images (JPG, PNG, GIF, WebP), text files, code files
- **Size limits:** Varies by plan (generous for Pro/Team/Enterprise)
- **Processing:** Claude analyzes file contents and can reference specific sections
- **Security:** Files are processed securely and not retained

**Source:** [Claude Help Center - File Upload](https://support.claude.com)

---

## 7. API & Developer Ecosystem

### Claude API

**Official API:** https://platform.anthropic.com

Claude API provides programmatic access for developers:

- **Models:** claude-3-5-sonnet, claude-3-5-haiku, claude-3-opus (all 200K context)
- **Fine-tuning:** Custom model adaptation available
- **Batch Processing:** High-volume request handling
- **Streaming:** Real-time response generation
- **Vision:** Image and PDF analysis
- **Tool Use:** Function calling for integrations

**Authentication:**
- API keys managed through platform.anthropic.com
- Environment variable: `ANTHROPIC_API_KEY`

**Source:** [Claude API - platform.anthropic.com](https://platform.anthropic.com)

### Claude Agent SDK

An SDK for building custom agents:

- **Framework:** For creating specialized agent systems
- **Sub-agent support:** Delegation and task breakdown
- **Tool definition:** Easy tool integration
- **Context management:** Session and state handling

**Source:** [Claude Agent SDK | Anthropic](https://platform.anthropic.com/docs/agents)

### Developer Ecosystem

**Official Repositories:**
- [GitHub - anthropics/skills](https://github.com/anthropics/skills) - Official Anthropic skill repository
- [GitHub - anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) - Official plugin repository
- [GitHub - modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) - Official MCP servers

**Community Resources:**
- [awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) - Community curated skill list
- [awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers) - Community MCP directory
- [Claude Code Plugins Directory](https://claudemarketplaces.com/) - Official marketplace

**Learning Resources:**
- Claude Code Docs: [code.claude.com/docs](https://code.claude.com/docs)
- Claude Help Center: [support.claude.com](https://support.claude.com)
- Anthropic Blog: [claude.com/blog](https://claude.com/blog)

**Source:** [Anthropic Developer Resources](https://www.anthropic.com/developers)

---

## 8. Practical Installation Steps

### Installing Skills in Claude Code

#### Step 1: Install from Official Marketplace

```bash
/plugin install document-skills@anthropic-agent-skills
```

#### Step 2: Or Add Community Marketplace

```bash
/plugin marketplace add alirezarezvani/claude-skills
/plugin install engineering-skills@claude-code-skills
```

#### Step 3: Local Installation

```bash
# Copy to personal skills directory
cp -r my-skill ~/.claude/skills/

# Copy to project skills directory
cp -r my-skill ./.claude/skills/
```

#### Step 4: Verify Installation

```bash
# In Claude Code, type:
/

# See all available skills listed
```

**Source:** [How to Install Claude Skills from GitHub (2026 Guide) - Agensi](https://www.agensi.io/learn/how-to-install-claude-skills-from-github)

### Setting Up MCP in Claude Desktop

#### Step 1: Locate Configuration File

**macOS:**
```bash
~/Library/Application Support/Claude/claude_desktop_config.json
```

**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
```

**Linux:**
```bash
~/.config/Claude/claude_desktop_config.json
```

#### Step 2: Create or Edit Configuration

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/absolute/path/to/directory"]
    },
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token"
      }
    }
  }
}
```

#### Step 3: Verify JSON Syntax

```bash
python -m json.tool ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

#### Step 4: Restart Claude Desktop

Completely quit Claude Desktop and restart it for changes to take effect.

#### Step 5: Test Connection

Open Claude chat and ask:
```
List the files in my home directory
```

Claude should use the MCP tool and return results.

**Source:** [Getting Started with Local MCP Servers on Claude Desktop | Claude Help Center](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)

### Creating Your First Custom Skill

#### Step 1: Create Skill Directory

```bash
mkdir -p ~/.claude/skills/my-first-skill
cd ~/.claude/skills/my-first-skill
```

#### Step 2: Create SKILL.md

```markdown
---
name: my-first-skill
description: My first custom skill that demonstrates best practices
version: 1.0.0
---

# My First Skill

This is a simple skill that shows how to create custom capabilities for Claude Code.

## When to Use This Skill

Use this skill when you need to:
- Understand skill structure
- See best practices in action
- Get a template for your own skills

## Instructions

When this skill is invoked, follow these steps:

1. Read and understand the user's request
2. Apply the best practices shown in this skill
3. Deliver clear, well-structured responses
4. Include examples when appropriate

## Example Use Case

If someone says "I need to create a custom skill", this skill provides guidance.
```

#### Step 3: Activate in Claude Code

Type `/` in Claude Code and you should see `my-first-skill` in the list.

#### Step 4: Invoke Your Skill

```
/my-first-skill help me create a documentation skill
```

**Source:** [How to create custom Skills - Claude Support](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)

### Installing Plugins in Cowork

#### Step 1: Open Cowork

Navigate to [claude.com](https://claude.com) with Pro/Team/Enterprise plan.

#### Step 2: Browse Plugins

1. Click "Browse plugins" button
2. Search for desired plugin (e.g., "Data", "Sales", "Marketing")
3. Click "Install" on selected plugin

#### Step 3: Authorize Permissions

1. Review permissions on authorization screen
2. Click "Authorize" to confirm
3. Plugin is active immediately

#### Step 4: Use the Plugin

The plugin's skills are now available. Either:
- Ask Claude about work in that domain
- Click "+" button to explicitly select a plugin's skill

**Source:** [Use plugins in Cowork - Claude Help Center](https://support.claude.com/en/articles/13837440-use-plugins-in-cowork)

### Configuring MCP in Claude Code

#### Installation

MCP servers are already available to Claude Code if configured in `claude_desktop_config.json`

#### Adding New MCP Servers via Command Line

```bash
claude mcp add --transport http --url https://example.com/mcp --name my-server
```

#### Using Configured MCP Servers

MCP tools appear automatically in Claude Code when a skill or command needs them. Type `/` to see available tools.

**Source:** [Connect Claude Code to tools via MCP | Claude Code Docs](https://code.claude.com/docs/en/mcp)

### Building Your First MCP Server

#### TypeScript Setup

```bash
# Create project
mkdir my-mcp-server
cd my-mcp-server
npm init

# Install dependencies
npm install @modelcontextprotocol/sdk zod
npm install --save-dev @types/node typescript
```

#### Create src/index.ts

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server({
  name: "hello-mcp",
  version: "1.0.0",
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "greet",
    description: "Greet someone by name",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Name to greet" },
      },
      required: ["name"],
    },
  }],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "greet") {
    const args = request.params.arguments as { name: string };
    return {
      content: [{
        type: "text",
        text: `Hello, ${args.name}!`,
      }],
    };
  }
  throw new Error("Unknown tool");
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

#### Build and Test

```bash
npm run build
npx @modelcontextprotocol/inspector node build/index.js
```

The MCP Inspector opens a debugging interface where you can test your server.

**Source:** [Build an MCP server | Model Context Protocol](https://modelcontextprotocol.io/docs/develop/build-server)

---

## Master Bibliography

All unique source URLs from consolidated research:

**Official Anthropic Documentation:**
- https://claude.ai
- https://code.claude.com/docs/en/overview
- https://code.claude.com/docs/en/skills
- https://code.claude.com/docs/en/memory
- https://code.claude.com/docs/en/mcp
- https://code.claude.com/docs/en/hooks-guide
- https://code.claude.com/docs/en/sub-agents
- https://code.claude.com/docs/en/discover-plugins
- https://code.claude.com/docs/en/plugins
- https://code.claude.com/docs/en/plugins-reference
- https://support.claude.com/en/articles/13345190-get-started-with-cowork
- https://support.claude.com/en/articles/13837440-use-plugins-in-cowork
- https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization
- https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop
- https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp
- https://support.claude.com/en/articles/12512180-use-skills-in-claude
- https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
- https://platform.anthropic.com
- https://platform.anthropic.com/docs/about/models
- https://claude.com/blog/cowork-research-preview
- https://claude.com/blog/cowork-plugins
- https://claude.com/resources/tutorials/claude-cowork-a-research-preview
- https://claude.com/resources/tutorials/how-to-customize-plugins-in-cowork
- https://claude.com/resources/tutorials/how-to-build-a-plugin-from-scratch-in-cowork

**Agent Skills & Skills Standard:**
- https://agentskills.io/specification
- https://agentskills.io
- https://github.com/agentskills/agentskills
- https://anthropic.com/news/model-context-protocol
- https://github.com/anthropics/skills
- https://github.com/anthropics/claude-plugins-official
- https://github.com/anthropics/knowledge-work-plugins
- https://claude.com/plugins

**Model Context Protocol (Official):**
- https://modelcontextprotocol.io/
- https://modelcontextprotocol.io/docs/develop/connect-local-servers
- https://modelcontextprotocol.io/docs/develop/build-server
- https://modelcontextprotocol.io/docs/tools/debugging
- https://modelcontextprotocol.io/registry/about
- https://registry.modelcontextprotocol.io/
- https://registry.modelcontextprotocol.io/docs
- https://docs.claude.com/en/docs/mcp
- https://github.com/modelcontextprotocol
- https://github.com/modelcontextprotocol/servers
- https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/
- https://modelcontextprotocol.io/legacy/concepts/transports
- https://modelcontextprotocol.io/examples

**Community & Technical Resources:**
- https://www.agensi.io/learn/how-to-install-claude-skills-from-github
- https://medium.com/@yunusemresalcan/claude-vs-claude-code-vs-cowork-which-one-do-you-actually-need-66d3952a2eb4
- https://blog.dailydoseofds.com/p/claude-vs-claude-code-vs-cowork
- https://karozieminski.substack.com/p/claude-cowork-guide-plugins-memory-sub-agents-tips
- https://dev.to/alanwest/how-to-build-custom-claude-code-skills-that-actually-work-2e1f
- https://mikhail.io/2025/10/claude-code-skills/
- https://www.morphllm.com/claude-code-skills-mcp-plugins
- https://alexop.dev/posts/understanding-claude-code-full-stack/
- https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder
- https://dev.to/murat-a-a/how-we-got-local-mcp-servers-working-in-claude-cowork-the-missing-guide-nbc
- https://fast.io/resources/claude-cowork-mcp-integration/
- https://fast.io/resources/mcp-server-debugging/
- https://mcpcat.io/guides/comparing-stdio-sse-streamablehttp/
- https://medium.com/@sainitesh/what-is-the-difference-between-mcp-model-context-protocol-transport-types-stdio-vs-sse-6d376e4c22be
- https://medium.com/@vkrishnan9074/mcp-clients-stdio-vs-sse-a53843d9aabb
- https://medium.com/@techofhp/claude-code-and-subagents-how-to-build-your-first-multi-agent-workflow-3cdbc5e430fa
- https://medium.com/@Micheal-Lanham/developing-claude-cowork-plugins-is-easier-than-you-think-28d197e50677
- https://medium.com/@richardhightower/from-approval-hell-to-just-do-it-how-agent-skills-fork-governed-sub-agents-in-claude-code-2-1-c0438416433a
- https://www.datacamp.com/tutorial/how-to-build-claude-code-plugins
- https://www.unite.ai/anthropic-opens-agent-skills-standard-continuing-its-pattern-of-building-industry-infrastructure/
- https://intuitionlabs.ai/articles/claude-skills-vs-mcp
- https://claudelab.net/en/articles/claude-code/claude-mcp-connection-error-troubleshooting
- https://www.deployhq.com/blog/6-must-have-mcp-servers-for-web-developers-in-2025
- https://www.codecademy.com/article/how-to-use-model-context-protocol-mcp-with-claude-step-by-step-guide-with-examples
- https://www.codecademy.com/article/mcp-vs-api-architecture-and-use-cases
- https://dev.to/raxxostudios/best-mcp-servers-for-claude-code-in-2026-5e6k
- https://dev.to/deangrover/mcp-explained-build-your-first-mcp-server-in-typescript-and-python-3hp9
- https://www.freecodecamp.org/news/how-to-build-a-custom-mcp-server-with-typescript-a-handbook-for-developers/
- https://www.truefoundry.com/blog/claude-code-mcp-integrations-guide
- https://publora.com/blog/10-best-mcp-servers-for-developers-2026
- https://github.com/wong2/awesome-mcp-servers
- https://github.com/appcypher/awesome-mcp-servers
- https://github.com/travisvn/awesome-claude-skills
- https://github.com/alirezarezvani/claude-skills
- https://claudemarketplaces.com/

**MCP Security & Best Practices:**
- https://www.reco.ai/learn/mcp-security
- https://workos.com/blog/mcp-security-risks-best-practices
- https://techcommunity.microsoft.com/blog/microsoft-security-blog/understanding-and-mitigating-security-risks-in-mcp-implementations/4404667
- https://www.datadoghq.com/blog/monitor-mcp-servers/
- https://www.docker.com/blog/mcp-security-explained/
- https://mcpplaygroundonline.com/blog/mcp-server-troubleshooting-common-errors-fix
- https://www.stainless.com/mcp/error-handling-and-debugging-mcp-servers
- https://github.com/slowmist/MCP-Security-Checklist

**MCP API & Integration:**
- https://treblle.com/blog/mcp-vs-traditional-apis-differences
- https://dev.to/0n/mcp-vs-traditional-api-integration-why-mcp-wins-1kfp
- https://palma.ai/blog/mcp-vs-api
- https://www.apideck.com/blog/mcp-vs-api
- https://www.speakeasy.com/mcp/deploying-mcp-servers
- https://www.danliden.com/posts/20250921-mcp-prompts-resources.html
- https://mcp-framework.com/docs/Transports/sse/
- https://toolradar.com/blog/deploy-remote-mcp-server
- https://developers.netlify.com/guides/write-mcps-on-netlify/
- https://www.koyeb.com/tutorials/deploy-remote-mcp-servers-to-koyeb-using-streamable-http-transport
- https://www.anthropic.com/engineering/desktop-extensions
- https://nodejs.org
- https://www.lowcode.agency/blog/claude-cowork-vs-claude-code

**Skills & Plugin Examples:**
- https://github.com/VoltAgent/awesome-claude-code-subagents
- https://www.youngleaders.tech/p/claude-skills-commands-subagents-plugins

---

**Document Type:** Raw Research Consolidation
**Consolidation Date:** March 31, 2026
**Next Stage:** Study guide development (knowledge/)
**Status:** Ready for analysis and organization into study guides
