# The Context Engineering Study Guide

<metadata>
purpose: Study guide on context engineering for AI agents
audience: AI practitioners, engineers
related: ../docs/context-routing.md
domain: research
confidence: research
sensitivity: public
context_tier: 3
last_updated: 2026-02-09
</metadata>

Context engineering is the discipline of giving AI systems exactly the right information to accomplish tasks reliably. This guide synthesizes the most influential voices on the craft into principles you can apply today.

---

## Part 1: The Foundation

### Tobi Lütke: Naming the Skill

Shopify CEO Tobi Lütke sparked the terminology shift in mid-2025 when he declared he preferred "context engineering" over "prompt engineering" because it "describes the core skill better: the art of providing all the context for the task to be plausibly solvable by the LLM."

The distinction matters. Prompt engineering implied success came from clever wording—finding the right "magic words." This created a misconception that working with AI was about linguistic tricks. Context engineering reframes the challenge: **success comes from giving the AI everything it needs**, not from phrasing requests cleverly.

Lütke's framing caught on because it matched what practitioners already knew. Building reliable AI systems requires far more than writing good instructions. It requires assembling the right information from multiple sources: system instructions, conversation history, retrieved documents, tool definitions, user preferences, execution state.

**Core insight:** The skill isn't writing clever prompts. It's constructing the complete information environment an AI needs to succeed.

---

### Andrej Karpathy: The Operating System Analogy

Former OpenAI researcher Andrej Karpathy amplified the shift by reframing how we think about AI systems entirely. He positioned LLMs as "a new kind of operating system" where the model is like a CPU and **the context window is like RAM**—the model's working memory with limited capacity.

This analogy clarifies the engineering challenge. Just as software developers must manage RAM carefully—loading the right data at the right time, freeing memory when no longer needed—AI practitioners must manage context deliberately. Every token consumes attention that could go elsewhere.

Karpathy described context engineering as "the delicate art and science of filling the context window with just the right information for the next step." The word "delicate" is intentional. Getting this balance wrong has consequences:

- **Too little context** leaves the model without necessary information
- **Too much context** increases costs and degrades performance
- **Wrong context** actively misleads the model

Research bears this out. The NoLiMa benchmark found that 11 of 12 tested models dropped below 50% accuracy once context exceeded 32,000 tokens—even though their context windows were much larger. Bigger windows don't mean better results.

**Core insight:** Context is a finite resource. Manage it like RAM—load what's needed, clear what's not, and never assume more is better.

---

### Anthropic: From Prompt to System

Anthropic, the company behind Claude, formally endorsed the evolution in September 2025: "Context engineering is the natural progression of prompt engineering. Prompt engineering refers to methods for writing and organizing LLM instructions. Context engineering refers to the set of strategies for curating and maintaining the optimal set of tokens during LLM inference."

But Anthropic went further. They identified context quality as the primary determinant of AI agent success:

> "The main thing that determines whether an Agent succeeds or fails is the quality of the context you give it. Most agent failures are not model failures anymore—they are context failures."

This is a profound shift. When AI fails, the instinct is to blame the model. Anthropic's research suggests the opposite: blame the context. The model likely could have succeeded with better information.

Anthropic breaks context into six interdependent pillars:

| Pillar | Description |
|--------|-------------|
| **Instructions** | System prompts, behavioral rules, task definitions |
| **User Input** | The immediate query or task |
| **State/History** | Short-term memory, conversation context |
| **Long-Term Memory** | Persistent knowledge across sessions |
| **Retrieved Information** | RAG results, documents, external data |
| **Tools** | Functions the model can call |

Every pillar requires active management. Instructions must be clear but not rigid. History must be preserved but not overwhelming. Tools must be defined but not excessive.

**Core insight:** Context engineering is a system design discipline, not a writing exercise. Each component must be architected deliberately.

---

## Part 2: The AI Labs on Practice

### Anthropic's Documentation: Treat the AI Like an Intern

Anthropic's engineering guides offer a simple mental model: "Think of the AI as an intern on their first day of the job: provide clear, explicit instructions with all the necessary detail."

This framing eliminates the temptation to be clever. You wouldn't assume a new hire knows your company's implicit conventions. You'd spell them out. Same with AI.

**Key techniques:**

1. **Be explicit about constraints.** Don't assume the model understands implicit requirements. Instead of "write something about our product," specify "write a 200-word announcement for existing customers emphasizing time-saving benefits in an enthusiastic but professional tone."

2. **Show, don't tell.** Examples are "your secret weapon shortcut for getting exactly what you need." Two or three examples of the desired format and quality bypass the ambiguity of verbal descriptions.

3. **Structure with clear boundaries.** Use consistent formatting to separate components—XML-style tags like `<instructions>`, `<context>`, and `<examples>`, or markdown headers. The format matters less than consistency.

4. **Let the AI think.** For complex tasks, explicitly asking the AI to "think through this step by step" before answering dramatically improves accuracy. Use tags like `<thinking>` to separate reasoning from the final answer.

5. **Position critical information strategically.** AI models attend most strongly to information at the beginning and end of the context. Content in the middle gets less attention. Place critical instructions at both extremes.

**On system prompts:** Find the "Goldilocks zone"—specific enough to guide behavior, flexible enough to provide useful heuristics rather than brittle rules. Overly rigid prompts break on edge cases. Overly vague prompts provide no guidance.

**Core insight:** Clarity beats cleverness. Explicit beats implicit. Examples beat explanations.

---

### OpenAI's Playbook: Practical Implementation

OpenAI's documentation emphasizes concrete implementation over theory. Their approach separates local context (code dependencies, file contents) from agent/LLM context (what models actually see), recognizing that context management is a software engineering problem.

**Key techniques:**

1. **Exact trimming rules.** Define precisely when and how to remove messages from context. Don't leave it to intuition.

2. **Summarization injection.** Periodically compress conversation history while retaining key decisions and facts.

3. **Concurrency safety.** When multiple processes update context simultaneously, implement guards against race conditions.

4. **Evaluation loops.** Build metrics for context quality and monitor them in production.

OpenAI also introduced a **developer role** in their newer models—system-level instructions that persist regardless of what users request. This matters for product builders who need to maintain certain behaviors (safety guardrails, brand voice) that shouldn't be overridden.

**Core insight:** Context engineering is software engineering. Apply the same rigor—version control, testing, monitoring.

---

## Part 3: Production Practitioners

### Manus: Lessons from Building Real Agents

Manus (now part of Meta) built a production AI agent platform and documented what they learned. Their core bet: leverage frontier models' in-context learning abilities rather than training custom models. This allowed them to ship improvements in hours instead of weeks.

**Key production lessons:**

1. **The KV-cache hit rate is everything.** This metric—measuring how much previous computation the system can reuse—directly affects latency and cost. Manus achieves high rates through stable prefixes, append-only context updates, and deterministic serialization.

2. **Mask unavailable tools; don't remove them.** Dynamically removing tools breaks the KV-cache and forces expensive recomputation. Instead, manipulate token probabilities to make unavailable tools unlikely to be chosen while preserving context integrity.

3. **Use the file system as external memory.** Treat the file system as "the ultimate context: unlimited in size, persistent by nature, directly operable by the model." Save large information pieces and reference them by path, creating effectively infinite context.

4. **Introduce controlled diversity.** Highly uniform context causes agents to fall into repetitive patterns and hallucinate. Vary how information is formatted—different serialization templates, varied phrasing—to maintain robustness.

5. **Preserve errors for learning.** When the model sees a failed action and the resulting observation, it implicitly updates its beliefs. Hiding errors removes evidence the model needs to adapt.

**Core insight:** Context engineering in production is about caching, persistence, and controlled variation. The elegant theory meets messy reality.

---

### Drew Breunig: How Contexts Fail

Drew Breunig (cited extensively by Simon Willison) identified four distinct patterns of context failure:

**Context Poisoning:** Hallucinations or errors become embedded in context and get repeatedly referenced, causing cascading failures. A model confidently states something false, future responses treat it as fact, and the error compounds.

**Context Distraction:** Accumulated context grows so large that the model over-focuses on it, neglecting its training knowledge. Research showed that beyond 100k tokens, agents exhibited diminished reasoning quality, favoring repetition of past actions over novel strategies.

**Context Confusion:** Superfluous information influences responses inappropriately. The model can't distinguish relevant from irrelevant, so everything affects the output.

**Context Clash:** Conflicting information within the context creates incoherent behavior. The model tries to satisfy contradictory requirements and fails at both.

**Breunig's solutions:**

- **Tool loadouts:** Limit available tools to ~20 per task. More tools means more confusion.
- **Context quarantine:** Isolate different contexts in separate threads to prevent contamination.
- **Context pruning:** Actively remove outdated or irrelevant information.
- **Summarization:** Compress history while preserving key decisions.
- **Offloading:** Move information to external storage, retrieving only when needed.

The core principle: **"Context is not free—every token influences the model's behavior."**

**Core insight:** Context fails in predictable patterns. Name them, watch for them, build defenses against them.

---

### Simon Willison: The Consensus Definition

Simon Willison, prolific blogger and AI observer, noted that by late 2025 a consensus definition had emerged for AI agents: **"An LLM agent runs tools in a loop to achieve a goal."**

This matters for context engineering because agents accumulate context with every tool call and every loop iteration. A typical agent task might require 50 tool calls. Each call adds to context. Without active management, context bloats and fails.

Willison endorsed context engineering as superior to prompt engineering specifically because its inferred definition—"the substantial work of constructing proper LLM inputs"—will stick better than prompt engineering, which people dismiss as "typing into chatbots."

**Core insight:** Agents are context accumulation machines. The longer they run, the more critical context management becomes.

---

## Part 4: The Four Core Strategies

LangChain's research synthesized production practices into four fundamental strategies. The key insight: **combine all four rather than relying on any single approach**.

### 1. Write: Persist Context Externally

Save critical information outside the context window so it can be retrieved when needed.

**Techniques:**
- **Scratchpads:** Working notes that agents update and reference
- **File-based memory:** Structured data (JSON often works better than markdown for status tracking)
- **Artifact preservation:** Store URLs instead of full web content, file paths instead of full documents

Why it matters: Your institutional knowledge—processes, decisions, preferences—shouldn't consume precious tokens. Store it externally, retrieve it just-in-time.

---

### 2. Select: Surface Only What's Relevant

Intelligent filtering to pull only the most relevant context for each specific task.

**Techniques:**
- **Semantic search:** Retrieve based on meaning, not just keywords
- **Just-in-time retrieval:** Fetch at runtime based on current needs
- **Relevance scoring:** Rank and filter before including

**Critical insight from production:** "Sending every email with a contact performs worse than sending only emails semantically related to the active opportunity. Models can hallucinate close dates by pulling information from a different, unrelated deal."

The golden rule: **A focused 300-token context often outperforms an unfocused 128,000-token context. What you remove matters as much as what you keep.**

---

### 3. Compress: Distill Without Losing Signal

Reduce token count while preserving essential information.

**Techniques:**
- **Rolling summarization:** Periodically compress conversation history
- **Hierarchical summarization:** Summarize chunks, then summarize the summaries
- **Selective trimming:** Remove filler words, redundant phrases, non-essential details

**When to summarize:**
- Every 5-10 exchanges in chatbots
- Every 3-5 steps in multi-step agents
- When accumulated context exceeds 50% of target window

**Warning:** Summarization can lose specific events or decisions. The Cognition team (builders of Devin) uses a fine-tuned model specifically for high-fidelity summarization.

---

### 4. Isolate: Divide Context Across Agents

Split work across multiple specialized agents, each with focused context.

**Techniques:**
- **Sub-agent decomposition:** Break complex tasks into sub-tasks handled by specialists
- **State-based isolation:** Expose only relevant context fields to each component
- **Agent-agent boundaries:** Summarize when passing context between agents

**Why it works:** Anthropic research found that "many agents with isolated contexts outperformed single-agent, largely because each subagent context window can be allocated to a more narrow sub-task."

Google's research: For financial analysis tasks, a centralized multi-agent system performed 80% better than a single agent.

---

## Part 5: Essential Techniques

### RAG: Giving AI Access to Your Knowledge

Retrieval Augmented Generation addresses AI's fundamental limitation: models only know their training data. IBM Research offers the clearest analogy: RAG is "the difference between an open-book and a closed-book exam."

**How it works:**
1. **Chunk:** Split documents into meaningful sections
2. **Embed:** Convert chunks to vector representations
3. **Index:** Store in vector database for efficient retrieval
4. **Retrieve:** Find most relevant chunks for current query
5. **Augment:** Add retrieved context to prompt
6. **Generate:** LLM produces response grounded in retrieved content

**Why it matters:**
- Access **current information** that didn't exist when the model was trained
- Reduce **hallucination** by grounding responses in actual sources
- Enable **domain-specific expertise** without custom model training

**The engineering challenge:** Retrieve too little, and the AI lacks necessary information. Retrieve too much, and you dilute context with irrelevant content. There's no one-size-fits-all solution—effective RAG requires experimentation with chunking strategies, embedding models, and relevance scoring.

---

### Few-Shot Prompting: Learning from Examples

Provide 2-8 input-output examples to demonstrate desired behavior before the actual task.

**Best practices:**

1. **Diverse, representative examples:** Show the range of possible inputs
2. **Consistent formatting:** Every example follows identical structure
3. **Clear patterns:** Make the task obvious from the examples
4. **Avoid biases:** Balance label distribution, vary example order

**Quality over quantity:** 3-5 excellent examples beat 10 mediocre ones.

**When to use what:**
| Approach | Best For |
|----------|----------|
| **Zero-shot** | Simple tasks, reasoning models |
| **Few-shot** | Formatting, classification, structured output |
| **Many-shot** | Complex reasoning, domain-specific patterns |

---

### Chain of Thought: Let the AI Reason

Explicitly ask models to produce intermediate reasoning steps before giving a final answer.

**Why it works:** Decomposing reasoning into sub-steps helps models avoid collapsing complex problems into single surface replies. The effect is strongest in large language models.

**Key methods:**

1. **Basic CoT:** Include "Let's think step by step" as a trigger
2. **Self-Consistency:** Sample multiple reasoning chains, select the most frequent answer
3. **Least-to-Most:** Decompose into subproblems solved sequentially
4. **Tree of Thoughts:** Explore candidate solutions, evaluate, backtrack—ideal for planning tasks

**Trade-offs:** Higher cost, higher latency, and occasional hallucinated reasoning steps. Worth it for complex tasks; overkill for simple ones.

---

## Part 6: Universal Patterns

Despite different contexts and use cases, practitioners converge on consistent principles:

1. **Context is finite.** Treat it like RAM. Load what's needed, clear what's not.

2. **More context ≠ better context.** Performance degrades beyond ~32k tokens regardless of window size. Focus on relevance, not volume.

3. **Clarity beats cleverness.** Explicit instructions outperform clever phrasing. Examples outperform explanations.

4. **Structure creates clarity.** Consistent formatting—headers, tags, delimiters—helps models parse components correctly.

5. **Position matters.** Critical information goes at the beginning and end. The middle gets less attention.

6. **Context fails predictably.** Watch for poisoning, distraction, confusion, and clash. Build defenses.

7. **Validate before persisting.** Don't let errors become embedded facts.

8. **Combine strategies.** Write, Select, Compress, Isolate—use all four, not one.

9. **Measure and iterate.** Context engineering is empirical. What works varies by use case.

10. **The skill generalizes.** Stating a problem with enough context that it becomes "plausibly solvable"—whether by AI or human—is valuable far beyond AI applications.

---

## Quick Reference: Principles to Apply Today

**Before you engage the AI:**
- Define what information the AI actually needs
- Gather relevant context from appropriate sources
- Decide what to include and what to leave out

**When constructing context:**
- Put instructions at the beginning and end
- Use consistent formatting to separate components
- Include 2-3 examples of desired output
- Remove anything that doesn't directly serve the task

**For complex tasks:**
- Ask the AI to think step by step
- Break into sub-tasks with focused context each
- Preserve important intermediate results externally

**During ongoing work:**
- Summarize history every 5-10 exchanges
- Watch for context poisoning—correct errors immediately
- Clear irrelevant information before it accumulates

**When things fail:**
- Diagnose the context failure mode (poisoning, distraction, confusion, clash)
- Apply the appropriate fix (prune, quarantine, summarize, isolate)
- Remember: most agent failures are context failures, not model failures

---

## Further Reading

**Primary Sources:**
- Anthropic, "Effective Context Engineering for AI Agents" (anthropic.com)
- OpenAI, "GPT-4.1 Prompting Guide" (cookbook.openai.com)
- Manus, "Context Engineering for AI Agents: Lessons from Building Manus" (manus.im)

**Practitioner Writing:**
- Simon Willison, "Context Engineering" (simonwillison.net)
- Drew Breunig, "How Long Contexts Fail" (dbreunig.com)
- Phil Schmid, "Context Engineering: The New Skill in AI" (philschmid.de)

**Frameworks:**
- LangChain, "Context Engineering for Agents" (blog.langchain.com)
- Model Context Protocol documentation (modelcontextprotocol.io)

**Research:**
- "A Survey of Context Engineering for LLMs" (arxiv.org) — taxonomy of 1400+ papers
- NoLiMa benchmark on context length performance degradation

**Origin Points:**
- Tobi Lütke's original post defining context engineering (X, June 2025)
- Andrej Karpathy's endorsement and operating system analogy

---

The path is the same for everyone: construct context deliberately, measure what works, iterate based on results. There are no magic prompts. Only good engineering.
