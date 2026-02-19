---
name: research-to-study-guide
description: Deep research on any topic, synthesized into a comprehensive study guide. Use when the user asks to research a topic, create a study guide, learn about something, or needs to become an expert in an area. Triggers on keywords like "research", "study guide", "learn about", "deep dive", "become expert", "master", "understand".
---

# Research to Study Guide

Transform any topic into a comprehensive, curated study guide through systematic research, quality validation, and audience-focused synthesis.

## Inputs / Outputs

| | What | Path |
|---|---|---|
| **Input** | Topic and learner profile from user | Conversational |
| **Working file** | Research scratchpad (created by skill) | `pipeline/scratchpad/[topic]-research-scratchpad.md` |
| **Output** | Finished study guide | `knowledge/[topic]-study-guide-v1.md` |
| **Prompts** | Full prompt templates for this workflow | `prompts/` subdirectory in this skill |

## Quick Start

1. **Get the topic and learner profile** from the user
2. **Create scratchpad** at `/pipeline/scratchpad/[topic]-research-scratchpad.md`
3. **Execute research** using web search
4. **Evaluate quality** — iterate if gaps exist
5. **Synthesize** into study guide at `/knowledge/[topic]-study-guide-v1.md`

## Phase 0: Setup

Ask the user (or infer from context):

```yaml
topic: "[The subject to research]"
learner_profile:
  role: "[Who is learning — job title, experience level]"
  goal: "[What they want to achieve]"
  context: "[Why now, what they'll use it for]"
target_sources: 50  # Adjust based on topic breadth
```

### Audience Analysis (Do This First)

Before ANY research, answer:

| Question | Answer |
|----------|--------|
| WHO is learning this? | |
| WHAT do they care about vs noise? | |
| WHY do they need this? | |
| WHAT sources would they trust? | |
| WHAT should be excluded? | |

## Phase 1: Generate Research Questions

Create 3-5 questions per category:

### Required Categories

1. **Foundations** (Critical)
   - What is [topic] and why does it matter?
   - Core concepts and vocabulary
   - Mental models experts use
   - Common misconceptions

2. **Frameworks & Models** (Critical)
   - Established frameworks
   - Processes practitioners follow
   - Templates and tools

3. **Key Practitioners** (High)
   - Recognized experts
   - Their key contributions
   - Where experts agree/disagree

4. **Source Discovery** (High)
   - Essential books
   - Blogs/newsletters
   - Podcasts and videos
   - Courses

5. **Real Examples** (High)
   - Best documented examples
   - Instructive failures
   - Before/after transformations

6. **Skills & Practice** (Medium)
   - Skills that distinguish great practitioners
   - What to practice
   - Learning sequence

### Question Format

Each question needs:
- Clear query with context
- Success criteria (what makes it complete)
- Priority (critical/high/medium/low)
- Source requirements

## Phase 2: Execute Research

Use web search to answer each question. For each:

```markdown
## Q[N]: [Question]

### Findings
[What you discovered]

### Sources
| Source | Type | Quality (1-5) | Notes |
|--------|------|---------------|-------|

### Gaps
[What's missing]
```

### Source Quality Rubric

| Score | Criteria |
|-------|----------|
| 5 | Authoritative expert, unique insights, practical |
| 4 | Respected source, solid content, actionable |
| 3 | Decent coverage, some value |
| 2 | Surface-level, generic, or dated |
| 1 | Low quality, unsupported claims |

## Phase 3: Quality Checkpoint

Before synthesis, evaluate:

| Metric | Target |
|--------|--------|
| Foundations covered | Yes |
| Frameworks found | 3+ |
| Experts identified | 5+ |
| Sources discovered | 30+ |
| Examples documented | 5+ |

**Quality Bands:**
- **Bad (0-0.4):** Must iterate — critical gaps
- **Acceptable (0.4-0.7):** Can proceed with limitations
- **Great (0.7-1.0):** Proceed to synthesis

If gaps exist, generate follow-up questions and iterate (max 3 times).

## Phase 4: Synthesis

Create study guide with audience filtering:

```markdown
# [Topic] Study Guide

> **For:** [Learner profile]
> **Goal:** [What they'll achieve]
> **Time Investment:** [Estimated hours]
> **Last Updated:** [Date]

## How to Use This Guide
[Brief instructions]

## Part 1: Foundations
[Core concepts, mental models, misconceptions]

## Part 2: Frameworks & Process
[Key frameworks with attribution and examples]

## Part 3-4: [Topic-Specific Sections]
[Adapt based on topic]

## Part 5: Skills & Practice
[How to get good]

## Appendix A: Curated Source Library
[Best sources organized by type]

## Appendix B: Templates & Tools
[Ready-to-use resources]

## Appendix C: Learning Path
[Recommended sequence]
```

## Anti-Hallucination Rules

1. **NEVER guess URLs** — Only cite verified sources
2. **NEVER invent sources** — No fabricated books, authors, or frameworks
3. **NEVER fake statistics** — Say "not found" if you don't have data
4. **Trust web research** — Don't flag recent info as dubious
5. **Cite everything** — Every claim needs a source

## File Outputs

| File | Purpose |
|------|---------|
| `/pipeline/scratchpad/[topic]-research-scratchpad.md` | Living research notes |
| `/knowledge/[subdirectory]/[topic]-study-guide-v1.md` | Final study guide |

### Subdirectory Routing

Place the final study guide in the subdirectory that matches its primary use case:

| Subdirectory | When to use | Examples |
|-------------|-------------|---------|
| `content/` | Writing, style, content creation | writing craft, hooks, engagement |
| `building/` | Company ops, leadership, scaling | handbooks, operator frameworks |
| `product/` | Product strategy, engineering, technical topics | product leadership, architecture |
| `domain/` | Industry-specific or specialized knowledge | market research, competitive analysis |

If the topic doesn't clearly fit one subdirectory, ask the user which one to use.

## Example Usage

User: "I want to become an expert in company handbooks"

1. Create scratchpad: `/pipeline/scratchpad/company-handbook-research-scratchpad.md`
2. Audience: Founders at 10-100 person companies
3. Research: Public handbooks (Basecamp, GitLab, Valve, Netflix), structure patterns, expert advice
4. Evaluate: 24 sources, 6 frameworks, 10+ examples = Great (0.85)
5. Synthesize: `/knowledge/building/company-handbook-study-guide-v1.md`

User: "Research [industry topic] for our team"

1. Create scratchpad: `/pipeline/scratchpad/[topic]-research-scratchpad.md`
2. Define audience from user context
3. Research: Web search across trusted sources, follow citation trails
4. Evaluate: Score against quality bands
5. Synthesize: `/knowledge/domain/[topic]-study-guide-v1.md`

## Deep Reference

Full prompt template: [research-to-study-guide-prompt-v1.md](prompts/research-to-study-guide-prompt-v1.md)
