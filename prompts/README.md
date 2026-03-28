# Prompts

<metadata>
purpose: Reusable prompt templates for AI workflows at Bespoke Woodcraft Studio
audience: AI agents and team members building AI-powered content workflows
summary: Directory for reusable prompt templates, with guidance on co-locating prompts with skills.
token_estimate: small
related: .cursor/skills/
domain: workflow
confidence: canonical
context_tier: 1
last_updated: 2026-03-27
</metadata>

Reusable prompt templates for AI workflows.

## Where Prompts Live

Prompts can live in two places:

1. **Here (`prompts/`)** -- For standalone, reusable prompt templates that aren't tied to a specific skill
2. **Co-located with skills (`.claude/commands/` or `.cursor/skills/`)** -- For prompts that belong to a specific skill or workflow

The general principle: **co-locate prompts with the skill that uses them** when the prompt is tightly coupled. Keep prompts here when they're reusable across multiple skills or workflows.

## Prompt Template Pattern

Every prompt file should include:

1. **Metadata block** -- Purpose, audience, related files
2. **System context** -- What the AI should know before executing
3. **Task instructions** -- Step-by-step instructions for the AI
4. **Output format** -- Expected structure of the response
5. **Examples** -- (Optional) Input/output examples

See [prompt-template-v1.md](prompt-template-v1.md) for the standard format.

## File Naming

Use descriptive names with version suffix: `task-description-prompt-v1.md`
