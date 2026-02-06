# AEO Monitoring Prompt Writing: Research Scratchpad

**Topic:** The art and science of writing AEO monitoring prompts.
**Source Material:** User provided a detailed draft citing CHI 2025, SparkToro 2025, Overthink Group 2026, etc.
**Goal:** Create a study guide on *how to write* these prompts effectively.

---

## Phase 0: Setup

```yaml
topic: "Writing AEO Monitoring Prompts"
learner_profile:
  role: "B2B Marketing Leaders, AEO/SEO Specialists, Competitive Intelligence Pros"
  goal: "Master the craft of writing prompts that generate reliable, actionable competitive intelligence from AI engines."
  context: "User provided deep research on 'why' and 'what' (variability, sensitivity). Need to operationalize this into 'how'."
target_sources: 20 (supplementary to provided text)
```

## Phase 1: Research Questions

### 1. Foundations (Validate & Expand)
- Q1: How do "neutral" vs "leading" prompts specifically differ in structure? (Need concrete examples).
- Q2: What are the specific "modifiers" that have the highest impact? (User text says Persona, Size, Tech - can we find more examples?).
- Q3: How do engine-specific dialects manifest? (e.g. ChatGPT vs Perplexity phrasing).

### 2. Frameworks (Operationalize)
- Q4: "Trackerly's three measurement primitives" (Entity Recall, Semantic Centrality, Authority Resolution) - How do we write prompts for each?
- Q5: "Gumshoe's persona-driven methodology" - Examples of persona modifiers.
- Q6: "Conductor's buyer journey prompt mapping" - Examples for each of the 7 stages.

### 3. Practical Application (Templates)
- Q7: What does a "Prompt Matrix" look like for a real B2B SaaS company?
- Q8: How to structure a "Competitor Parity" prompt set?

---

## Phase 2: Execute Research (Supplementing User Text)

*Note: The user provided text is rich with specific 2025/2026 citations. I will treat these as established facts for the study guide. My research will focus on finding **structural patterns** and **examples** to make the guide practical.*

### Search Queries
1. "AEO prompt engineering frameworks for brand monitoring"
2. "writing neutral prompts for AI market research"
3. "examples of persona modifiers in AI search prompts"
4. "how to structure competitive intelligence prompts for LLMs"

### Findings (from Exa Search)

**1. Generated Knowledge Prompting (Stability Technique)**
- **Concept:** Ask the LLM to generate relevant facts/criteria *before* answering the main question. This reduces hallucination and stabilizes output.
- **Single Prompt Approach:** "Generate 4 key criteria for evaluating [Category], then use these criteria to recommend the top 3 tools."
- **Dual Prompt Approach:** (1) "Retrieve travel restrictions..." (2) "Based on restrictions, can I fly?" -> For monitoring: (1) "What are the key requirements for [Persona] buying [Category]?" (2) "Based on those requirements, which tools are best?"
- **Relevance:** This is a "power user" technique for monitoring. It forces the model to "show its work" and anchors the recommendation in logic rather than just probability.

**2. Engine Dialects (2026 Nuances)**
- **ChatGPT:** Favors "Conversational & Contextual" prompts. It "loves" back-and-forth and detailed personas. Use "Generated Knowledge" here.
- **Perplexity:** Favors "Search-First & Fact-Based" prompts. It indexes new content fast (hours/days). Use specific, search-like queries ("Best project management tools 2026 reddit").
- **Google AI Overviews:** Favors "Keyword-Anchored" queries. It behaves like a search enhancement. Use "People Also Ask" style questions ("What is the best software for X?").
- **Claude:** "Analytical & Cautious." Tends to refuse "advice" but will "analyze." Frame prompts as analysis ("Analyze the market landscape...") rather than direct recommendation ("Recommend X...").

**3. Measurement Primitives (Trackerly & Others)**
- **Entity Recall:** "What tools are used for X?" (Testing if you are even in the consideration set).
- **Semantic Centrality:** "Define [Category] and list examples." (Testing if you are part of the category definition).
- **Authority Resolution:** "Who are the trusted experts for [Category]?" (Testing if you are a source of truth).
- **Context Stability:** Testing the same question with escalating context (No context -> Generic context -> Specific context). Brands that survive all 3 levels have "semantically anchored" visibility.

**4. "Fan-out" Strategy (Shopify/Vivek Raina)**
- **Concept:** One user intent splits into multiple sub-queries.
- **Strategy:** Don't just track the "head term." Track the "fan-out" variations: "Best X," "X vs Y," "Is X worth it?", "X pricing."
- **Goal:** "Own the answer" across the entire fan-out, not just the main keyword.

---

## Phase 3: Synthesis Plan

Create `/knowledge/aeo/guides/prompt-writing-methodology.md` with:
1.  **The Physics:** Sensitivity, Sycophancy, Entropy.
2.  **Architecture:** Intent + Context + Constraint.
3.  **The Matrix:** Templates for Recall, Centrality, Comparative.
4.  **Dialects:** Specific advice for each engine.
5.  **Advanced:** Generated Knowledge Prompting.
6.  **Data Science:** Sample sizes (n=30-100).
