# Research to Study Guide — Agent Prompt

A comprehensive agent workflow for deep research on any topic, synthesized into a structured study guide. Designed for use with Claude or Cursor agents with web search and file system access.

---

## Overview

This prompt turns any topic into a comprehensive study guide through systematic research, quality validation, and audience-focused synthesis. It combines the rigor of the Research Supervisor workflow with practical study guide creation.

**Input:** A topic and learner profile
**Output:** A curated, structured study guide with sources, frameworks, and learning path

---

## Phase 0: Setup

### Define Your Research

```yaml
topic: "[Your topic]"
learner_profile:
  role: "[Who is learning this — job title, experience level]"
  goal: "[What they want to achieve with this knowledge]"
  context: "[Why now, what they'll use it for]"
  time_available: "[How much time to invest in learning]"
research_mode: "exploratory"  # strict | exploratory | hybrid
target_sources: 100  # Final curated count
search_depth: "advanced"  # basic (5-10 sources) | advanced (15+ sources per question)
```

### Audience Analysis (Complete Before Research)

Before any research, answer these questions:

| Question | Your Answer |
|----------|-------------|
| WHO is learning this? | |
| WHAT do they actually care about vs noise? | |
| WHY do they need this knowledge? | |
| WHAT depth is appropriate? | |
| WHAT sources would they trust? | |
| WHAT should be excluded? | |

**This analysis shapes every research question and filters the final output.**

---

## Phase 1: Research Planning

### Generate Research Questions

Transform your topic into structured, self-contained research questions. Each question must include:

```json
{
  "id": "Q1",
  "query": "[Specific question with embedded context]\n---\n[Research methodology]",
  "category": "foundations | frameworks | practitioners | sources | examples | skills",
  "searchDepth": "basic | advanced",
  "successCriteria": "[What makes this answer complete — be specific]",
  "priority": "critical | high | medium | low",
  "sourceRequirements": "[Types to prioritize, domains to include/exclude]",
  "targetCount": "[Number of items/sources expected]"
}
```

### Required Question Categories

Generate 3-5 questions per category:

#### 1. Foundations (Critical Priority)
- What is [topic] and why does it matter for [audience]?
- What are the core concepts and vocabulary?
- What mental models do experts use to think about this?
- What are the common misconceptions?

#### 2. Frameworks & Models (Critical Priority)
- What are the established frameworks for [topic]?
- What processes do practitioners follow?
- What templates and tools are commonly used?
- Which frameworks are most practical vs theoretical?

#### 3. Key Practitioners & Authorities (High Priority)
- Who are the recognized experts in [topic]?
- What are their key contributions and perspectives?
- Where do experts agree? Where do they disagree?
- Who are the emerging voices worth following?

#### 4. Source Discovery (High Priority)
- What are the essential books on [topic]?
- What blogs/newsletters cover this deeply?
- What podcasts feature expert discussions?
- What courses/workshops teach this?
- What academic research exists?
- What conference talks are must-watch?

#### 5. Real Examples & Case Studies (High Priority)
- What are the best documented examples of [topic] done well?
- What are instructive failures or mistakes?
- What before/after transformations demonstrate impact?
- What companies are known for excellence in this area?

#### 6. Skills & Practice (Medium Priority)
- What skills distinguish great practitioners?
- What should someone practice to improve?
- What's the recommended learning sequence?
- How do you know when you're getting good?

---

## Phase 2: Research Execution

### Execution Rules

1. **Execute by priority** — Critical first, then high, medium, low
2. **Parallel when possible** — Run independent questions simultaneously
3. **Track everything** — Every source, every finding, every gap
4. **Quality over quantity** — Better to have 50 great sources than 200 mediocre ones

### For Each Question

```markdown
## [Question ID]: [Question Text]

### Research Methodology
[How you're searching — web, specific sites, etc.]

### Findings
[What you discovered]

### Sources Found
| Source | Type | Quality (1-5) | Notes |
|--------|------|---------------|-------|
| [Title](URL) | Book/Blog/Podcast/etc | 4 | Why it's valuable |

### Gaps Identified
[What's missing or needs deeper research]

### Confidence Score
[0-1] — [Reasoning]
```

### Source Quality Rubric

Rate each source 1-5:

| Score | Criteria |
|-------|----------|
| 5 | Authoritative expert, unique insights, practical, well-cited |
| 4 | Respected source, solid content, actionable |
| 3 | Decent coverage, some value, not exceptional |
| 2 | Surface-level, generic, or dated |
| 1 | Low quality, unsupported claims, or irrelevant |

---

## Phase 3: Quality Checkpoint

After completing research, evaluate before synthesis:

### Quality Evaluation

```json
{
  "score": 0.0,
  "band": "bad | acceptable | great",
  "completeness": {
    "foundations_covered": true,
    "frameworks_found": 5,
    "practitioners_identified": 10,
    "sources_discovered": 150,
    "examples_documented": 8
  },
  "gaps": [
    "Gap 1: [What's missing]",
    "Gap 2: [What needs more depth]"
  ],
  "recommendation": "proceed | iterate | pivot"
}
```

### Quality Bands

| Band | Score | Action |
|------|-------|--------|
| **Bad** | 0-0.4 | Must iterate — critical gaps exist |
| **Acceptable** | 0.4-0.7 | Can proceed with noted limitations |
| **Great** | 0.7-1.0 | Proceed to synthesis |

### If Iteration Needed

1. Identify specific gaps
2. Generate targeted follow-up questions
3. Execute additional research
4. Re-evaluate quality
5. Maximum 3 iterations

---

## Phase 4: Synthesis & Curation

### Audience-Filtered Synthesis

Before synthesizing, explicitly state:

```markdown
## Synthesis Reasoning

**Target Learner:** [Restate from Phase 0]

**Valuable for this learner:**
- [What types of content to include]
- [What depth level]
- [What source types they trust]

**Noise to filter out:**
- [What to exclude and why]
- [What's too advanced/basic]
- [What's tangential]
```

### Curation Process

From all sources discovered → Select top [target_sources]:

**Selection Criteria (apply in order):**

1. **Authority** — Is this person/source respected in the field?
2. **Practicality** — Can the learner apply this immediately?
3. **Uniqueness** — Does it offer a distinct perspective not covered elsewhere?
4. **Depth** — Is it substantive or surface-level?
5. **Recency** — Is it current (or intentionally timeless)?
6. **Proof** — Are there real examples or case studies?

**For each included source, note:**
- Why it made the cut
- What it uniquely contributes
- Where it fits in the learning path

---

## Phase 5: Study Guide Assembly

### Final Deliverable Structure

```markdown
# [Topic] Study Guide

> **For:** [Learner profile]
> **Goal:** [What they'll be able to do after completing this]
> **Time Investment:** [Estimated hours]
> **Last Updated:** [Date]

---

## How to Use This Guide

[Brief instructions on how to approach the material]

---

## Part 1: Foundations

### What is [Topic]?
[Clear, accessible explanation]

### Core Concepts
[Essential vocabulary and ideas]

### Mental Models
[How experts think about this]

### Common Misconceptions
[What to unlearn]

---

## Part 2: Frameworks & Process

### Framework 1: [Name]
**Source:** [Attribution with link]
**When to use:** [Context]
**How it works:** [Explanation]
**Example:** [Real application]

### Framework 2: [Name]
...

---

## Part 3: [Topic-Specific Section]
[Adapt based on topic — e.g., for PMM this might be "Positioning" or "Go-to-Market"]

---

## Part 4: [Topic-Specific Section]
...

---

## Part 5: Skills & Practice

### What Great Practitioners Do
[Observable behaviors and skills]

### How to Practice
[Specific exercises and projects]

### How to Know You're Improving
[Markers of progress]

---

## Appendix A: Curated Source Library

### Books (X selected)
| Title | Author | Why It's Essential |
|-------|--------|-------------------|
| [Title](link) | Author | [1-sentence reason] |

### Blogs & Newsletters (X selected)
...

### Podcasts & Videos (X selected)
...

### Courses & Workshops (X selected)
...

### Case Studies & Examples (X selected)
...

---

## Appendix B: Templates & Tools

[Ready-to-use frameworks, checklists, templates]

---

## Appendix C: Learning Path

### Recommended Sequence

**Week 1-2: Foundations**
- [ ] Read: [Source 1]
- [ ] Watch: [Source 2]
- [ ] Practice: [Exercise]

**Week 3-4: [Next Phase]**
...

### Quick Start (If You Only Have 5 Hours)
[The absolute essentials]

### Deep Dive (If You Want Mastery)
[Extended curriculum]

---

## Appendix D: Research Notes

[Link to full research scratchpad for transparency]
```

---

## Scratchpad Format

Maintain a living research document throughout:

```markdown
# [Topic] Research Scratchpad

## Research Configuration
- Topic: 
- Learner Profile:
- Research Mode:
- Started: [Date]

---

## Research Questions & Findings

### Q1: [Question]
**Status:** Complete | In Progress | Blocked
**Findings:** ...
**Sources:** ...
**Gaps:** ...

---

## Running Source List

| # | Source | Type | Quality | Category | Notes |
|---|--------|------|---------|----------|-------|
| 1 | [Title](URL) | Book | 5 | Frameworks | Essential positioning framework |

---

## Frameworks Discovered
1. [Framework Name] — [Source] — [Brief description]

---

## Key Practitioners
1. [Name] — [Why notable] — [Best content]

---

## Patterns Observed
- [Pattern 1]
- [Pattern 2]

---

## Expert Agreement/Disagreement
**Consensus on:**
- 

**Debate about:**
-

---

## Gaps & Questions
- [ ] Still need to research: [Gap]

---

## Quality Checkpoints

### Checkpoint 1 — [Date]
- Score: X.XX
- Gaps: [List]
- Action: [Iterate/Proceed]
```

---

## Anti-Hallucination Rules

1. **NEVER guess URLs** — Only cite URLs you've verified exist
2. **NEVER invent sources** — Don't fabricate book titles, author names, or frameworks
3. **NEVER fake statistics** — If you don't have data, say so
4. **Trust web research** — Don't flag recent info as dubious based on training cutoff
5. **Acknowledge uncertainty** — "Not found" is better than fabrication
6. **Cite everything** — Every claim needs a source or explicit "based on synthesis"

---

## Example: Applying to B2B Product Marketing

```yaml
topic: "B2B SaaS Product Marketing"
learner_profile:
  role: "Early-stage startup founder or first PMM hire"
  goal: "Develop positioning, messaging, and go-to-market capabilities"
  context: "Need to compete against established players with limited resources"
  time_available: "10-20 hours over 4 weeks"
research_mode: "exploratory"
target_sources: 100
search_depth: "advanced"
```

**Audience Analysis:**
- WHO: Non-PMM person who needs PMM skills fast
- WHAT they care about: Practical frameworks they can use this week, not theory
- WHAT's noise: Enterprise PMM tactics, academic marketing theory, B2C examples
- Sources they'd trust: Practitioners who've done it at startups (April Dunford, Lenny's guests)
- Exclude: Generic marketing blogs, outdated (pre-2018) content, B2C-focused material

---

## Usage Notes

**For Claude Projects:**
- Add this as a project instruction
- Use web search for research execution
- Use artifacts for scratchpad and final guide

**For Cursor:**
- This can become a skill with file system access
- Scratchpad saves to `/scratchpad/[topic]-research.md`
- Final guide saves to `/knowledge/[topic]-study-guide.md`

**Customization:**
- Adjust `target_sources` based on topic breadth
- Modify Part 3-4 section headers for topic-specific content
- Add/remove appendices based on learner needs
