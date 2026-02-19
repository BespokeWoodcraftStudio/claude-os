Deep research on any topic, synthesized into a comprehensive study guide.

## Inputs / Outputs

- **Input:** Topic and learner profile from user
- **Working file:** `pipeline/scratchpad/[topic]-research-scratchpad.md`
- **Output:** `knowledge/[subdirectory]/[topic]-study-guide-v1.md`

## Phase 0: Setup

Ask the user (or infer from context):
- Topic: what to research
- Learner profile: who is learning, their role, experience level
- Goal: what they want to achieve
- Context: why now, what they'll use it for

Before ANY research, answer: Who is learning this? What do they care about vs noise? Why do they need this? What sources would they trust? What should be excluded?

## Phase 1: Generate Research Questions

Create 3-5 questions per category:

1. **Foundations** (Critical) — What is it, why it matters, core concepts, mental models, misconceptions
2. **Frameworks & Models** (Critical) — Established frameworks, processes, templates and tools
3. **Key Practitioners** (High) — Recognized experts, key contributions, where experts agree/disagree
4. **Source Discovery** (High) — Essential books, blogs, newsletters, podcasts, videos, courses
5. **Real Examples** (High) — Best documented examples, instructive failures, before/after transformations
6. **Skills & Practice** (Medium) — Distinguishing skills, what to practice, learning sequence

## Phase 2: Execute Research

Use web search to answer each question. For each, document: findings, sources (with quality score 1-5), and gaps.

Source quality: 5 = authoritative expert with unique insights; 4 = respected, actionable; 3 = decent coverage; 2 = surface-level or dated; 1 = low quality.

Save all research to `pipeline/scratchpad/[topic]-research-scratchpad.md`.

## Phase 3: Quality Checkpoint

Before synthesis, evaluate:
- Foundations covered? Yes/No
- Frameworks found: target 3+
- Experts identified: target 5+
- Sources discovered: target 30+
- Examples documented: target 5+

Quality bands: Bad (0-0.4) must iterate; Acceptable (0.4-0.7) can proceed; Great (0.7-1.0) proceed to synthesis.

If gaps exist, generate follow-up questions and iterate (max 3 times).

## Phase 4: Synthesis

Create study guide at `knowledge/[subdirectory]/[topic]-study-guide-v1.md` with structure:
- Header with learner profile, goal, time investment, date
- How to Use This Guide
- Part 1: Foundations
- Part 2: Frameworks & Process
- Parts 3-4: Topic-specific sections
- Part 5: Skills & Practice
- Appendix A: Curated Source Library
- Appendix B: Templates & Tools
- Appendix C: Learning Path

## Subdirectory Routing

- `knowledge/content/` — writing, style, content creation
- `knowledge/building/` — company ops, leadership, scaling
- `knowledge/product/` — product strategy, engineering, technical
- `knowledge/domain/` — industry-specific or specialized knowledge

If unclear, ask the user.

## Anti-Hallucination Rules

1. NEVER guess URLs — only cite verified sources
2. NEVER invent sources — no fabricated books, authors, or frameworks
3. NEVER fake statistics — say "not found" if you don't have data
4. Trust web research — don't flag recent info as dubious
5. Cite everything — every claim needs a source
