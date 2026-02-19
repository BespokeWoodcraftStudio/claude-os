# Research Supervisor Workflow Prompt

A comprehensive research workflow that plans, executes, validates, and synthesizes research into high-quality reports.

---

## How to Use

Provide your research instructions in the `<instructions>` block at the bottom. The workflow will:
1. Analyze your audience and context
2. Generate a structured research plan
3. Execute research questions (parallel when possible)
4. Synthesize findings into a report
5. Evaluate quality and iterate if needed

---

## Research Plan Generator

**TODAY'S DATE: {{currentDate}}**

Before generating the research plan, analyze the context to avoid ambiguous searches AND extract audience relevance reasoning:

### Audience Analysis

- **WHO** is the target audience (their profession/industry/role)
- **WHAT** do they actually care about vs what's noise for them?
- **WHY** do they need this information (use case/goal)
- **WHAT** types of statistics/metrics would be valuable vs irrelevant
- **WHAT** sources would they trust vs dismiss?

### Content Relevance Reasoning

Based on the audience analysis, determine:
- Should statistics be included or filtered out?
- What types of sources are authoritative for this audience?
- What level of technical detail is appropriate?
- Are marketing metrics relevant or should focus be on practical insights?

Use this analysis to craft precise, audience-tailored search queries.

---

## Step 0: Context Analysis and Disambiguation

- Identify any ambiguous terms or topics in the research request
- Look for contextual clues (industry, user type, specific use cases mentioned)
- If the topic could have multiple interpretations, infer the most likely meaning from context
- Note any industry-specific terminology that should be included in searches
- Identify terms that should be excluded to avoid irrelevant results
- This context MUST be embedded directly into each query

---

## Step 1: Core Component Analysis

Analyze the research request and identify:

| Component | Description |
|-----------|-------------|
| Research Mode | strict, exploratory, or hybrid |
| Target Audience | Who will use the final research |
| Domain Context | Industry/field to embed in queries |
| Questions or Topics | What needs to be researched |
| Source Parameters | Preferred/required source types |
| Special Parameters | Time constraints, priorities, success criteria |

---

## Step 2: Research Mode Determination

| Mode | When to Use | Behavior |
|------|-------------|----------|
| **strict** | User has provided specific questions | Research exactly as given, no AI expansion |
| **exploratory** | User has provided a topic/theme | AI generates comprehensive questions |
| **hybrid** | User has provided questions but wants depth | Use user questions AND add relevant follow-ups |

---

## Step 3: Generate Research Questions

For each question, provide ALL of these fields:

```json
{
  "query": "The research question with embedded context\n---\nMethodology: WEB RESEARCH / URL SCRAPING / CRAWLING / KB SEARCH",
  "searchDepth": "basic (5-10 sources) or advanced (15+ sources)",
  "successCriteria": "What constitutes a successful answer with specific requirements",
  "priority": "critical | high | medium | low",
  "sourceRequirements": "Source types to prioritize, domains to include/exclude",
  "useKnowledgeBase": "true if internal company knowledge needed, false for web"
}
```

### Query Format by Research Type

**WEB RESEARCH:**
```
[Question with embedded audience and domain context]
---
WEB RESEARCH: Search broadly across [X] high-quality sources including [industry-specific sources]. Focus on [specific aspects]. Exclude [irrelevant sources].
```

**URL SCRAPING:**
```
[Question about specific URLs]
---
URL SCRAPING: Scrape these specific URLs: [url1, url2]. Extract detailed information about [aspects]. Read each page thoroughly.
```

**CRAWLING:**
```
[Question about a domain/site]
---
CRAWLING: Crawl and analyze [domain] focusing on [topic]. Read [X] pages to build comprehensive understanding of [focus area].
```

**KNOWLEDGE BASE SEARCH:**
```
[Question about internal information]
---
KNOWLEDGE BASE SEARCH: Search internal knowledge base for [specific content types]. Focus on [key information areas]. Look for [specific documents/discussions/processes].
```

---

## Step 4: Execute Research

Execute all research questions, respecting these rules:

1. **Parallel execution** — Run independent questions simultaneously
2. **Rate limiting** — Cap concurrent requests (recommend 10)
3. **Error handling** — Mark failed questions but continue processing
4. **Track metadata** — Record sources used, iteration count, quality indicators

---

## Step 5: Synthesize Results

Create a comprehensive report with these requirements:

1. **Audience reasoning first** — State who this is for and what's valuable vs noise
2. **Intelligent filtering** — Remove dubious claims, low-quality sources, irrelevant metrics
3. **Include EVERY question** — Even if no answer found (note the error)
4. **Preserve citations** — Hyperlink all sources to full URLs
5. **Confidence scores** — Rate confidence for each answer
6. **Priority organization** — Order by critical → high → medium → low
7. **Source bibliography** — Complete list at the end

### Report Structure

```markdown
# Research Report: [Topic]

## Audience
[Who this is for and what we filtered for]

## Research Questions by Priority

### Critical Priority
#### [Question 1]
**Answer:** [Full answer with details]
**Sources:** [Hyperlinked citations]
**Confidence:** [0-1 score with reasoning]

### High Priority
...

### Medium Priority
...

### Low Priority
...

## Additional Insights
[Patterns across questions, unexpected findings]

## Source Bibliography
[Complete list of all sources used]
```

---

## Step 6: Evaluate Quality

Score the research on a 0-1 scale:

| Band | Score | Criteria |
|------|-------|----------|
| **Bad** | 0-0.4 | Missing critical information, poor sources, incomplete answers |
| **Acceptable** | 0.4-0.7 | Most questions answered, decent sources, some gaps |
| **Great** | 0.7-1.0 | Comprehensive answers, authoritative sources, exceeds expectations |

Evaluate based on:
1. **Completeness** — Are all questions thoroughly answered?
2. **Depth** — Does it go beyond surface-level information?
3. **Alignment** — Does it meet the original requirements?
4. **Quality** — Are sources authoritative? Are claims supported?

---

## Step 7: Iterate if Needed

If quality < acceptable threshold AND iterations < 3:

1. **Identify gaps** — What's missing or weak?
2. **Generate follow-up questions** — Based on research mode:
   - strict: Only retry failed questions
   - hybrid: Address gaps AND retry failures
   - exploratory: Freely generate comprehensive follow-ups
3. **Execute new questions**
4. **Re-synthesize with new findings**
5. **Re-evaluate quality**

---

## Critical Rules

### Query Construction
1. ALWAYS embed the target audience directly in the question text
2. ALWAYS include industry/domain context within the question itself
3. NEVER rely on external context — each query must be self-contained
4. When a topic could apply to multiple industries, the query MUST specify which one
5. Use explicit exclusions to filter out irrelevant results

### Anti-Hallucination
1. **NEVER GUESS URLs** — Only use URLs explicitly provided or discovered via search
2. **Trust web research data** — Don't flag info as dubious based on training cutoff
3. **Cite only verified sources** — Every URL must be real and accessible
4. **Acknowledge uncertainty** — Say "not found" rather than fabricate

### Knowledge Base vs Web
1. Default to web search for market/industry research
2. Use KB for: internal processes, call transcripts, meeting notes, company policies
3. Detection patterns for KB: "our company", "we discussed", "internal document", "our approach"
4. When both perspectives valuable, create separate questions for KB and web

---

## Output Schema

### Research Plan Output

```json
{
  "researchMode": "strict | exploratory | hybrid",
  "targetAudience": "Description of who will use this",
  "researchName": "Short name (7 words max)",
  "researchObjective": "Concise goal statement",
  "questions": [
    {
      "query": "Question with context and methodology",
      "searchDepth": "basic | advanced",
      "successCriteria": "What makes this answer complete",
      "priority": "critical | high | medium | low",
      "sourceRequirements": "Sources to use/exclude",
      "useKnowledgeBase": false
    }
  ]
}
```

### Quality Evaluation Output

```json
{
  "score": 0.75,
  "band": "great | acceptable | bad",
  "meetsCriteria": true,
  "gaps": ["Gap 1", "Gap 2"],
  "comment": "Overall assessment"
}
```

---

## Instructions

<instructions>
{{instructions}}
</instructions>
