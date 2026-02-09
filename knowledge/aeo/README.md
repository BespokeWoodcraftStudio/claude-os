# AEO & AI Visibility Knowledge Base

<metadata>
purpose: AEO and AI visibility knowledge hub with 103 indexed sources
audience: Product, content, and strategy teams
related: ../../docs/products/checkthat/product-vision-v1.md
domain: aeo
confidence: canonical
sensitivity: public
context_tier: 2
last_updated: 2026-02-09
</metadata>

> Everything GrowthX knows about Answer Engine Optimization (AEO), AI visibility, brand mentions in AI responses, prompt tracking methodology, and measurement frameworks -- consolidated in one place.

This directory contains the core knowledge base for AEO strategy, methodology, and research. It is organized into **guides** (actionable playbooks and study guides) and **research** (deep research, methodology documentation, and research notes). Related documents that live elsewhere in the project (product docs, competitive intel, client work, strategy) are cross-referenced below.

---

## How to Use This Directory

| I want to... | Read this |
|---|---|
| **Understand CheckThat's prompt taxonomy and measurement framework** | [prompt-taxonomy-and-ontology-v1.md](prompt-taxonomy-and-ontology-v1.md) |
| **Build a prompt tracking library from scratch** | [guides/buyer-evaluation-prompt-playbook.md](guides/buyer-evaluation-prompt-playbook.md) |
| **Learn how to write monitoring prompts correctly** | [guides/prompt-writing-methodology.md](guides/prompt-writing-methodology.md) |
| **Understand buyer evaluation prompt categories** | [guides/buyer-evaluation-prompts-study-guide.md](guides/buyer-evaluation-prompts-study-guide.md) |
| **Understand AEO metrics, tools, ROI, and industry data** | [research/metrics-deep-research.md](research/metrics-deep-research.md) |
| **Build a full buyer-journey prompt methodology** | [research/prompt-methodology-and-pattern-library.md](research/prompt-methodology-and-pattern-library.md) |
| **See the research behind the prompt writing guide** | [research/prompt-writing-research-notes.md](research/prompt-writing-research-notes.md) |
| **See the research behind the buyer eval guide** | [research/buyer-evaluation-research-notes.md](research/buyer-evaluation-research-notes.md) |

---

## Core Guides

Actionable playbooks and study guides for practitioners.

| File | Summary | Lines | When to Read |
|---|---|---|---|
| [buyer-evaluation-prompt-playbook.md](guides/buyer-evaluation-prompt-playbook.md) | Complete playbook for tracking AI visibility during B2B buyer evaluation. Covers 6 prompt categories (comparison, alternatives, best-of, reviews, pricing, features), building prompt libraries, tracking workflows, alert thresholds, content gap loops, and tool recommendations. | ~439 | You're building or auditing a prompt tracking program |
| [prompt-writing-methodology.md](guides/prompt-writing-methodology.md) | How to write prompts that generate reliable competitive intelligence from AI engines. Covers the three laws (sensitivity, sycophancy, entropy), prompt architecture (intent/context/constraint), the Prompt Matrix method, engine-specific dialects (ChatGPT, Perplexity, Gemini, Claude), Generated Knowledge Prompting, and managing variability with sample sizes. | ~158 | You're writing monitoring prompts and need to avoid bias |
| [buyer-evaluation-prompts-study-guide.md](guides/buyer-evaluation-prompts-study-guide.md) | Study guide on creating and prioritizing prompts for the buyer evaluation stage. Covers topics vs. prompts, evaluation-stage mental models, the six prompt categories with templates, prioritization frameworks (value/effort matrix), and sourcing prompts from real buyer behavior. | ~282 | You're designing prompt categories and need the framework |

---

## Research

Deep research, methodology documentation, and supporting research notes.

| File | Summary | Sources | Scope |
|---|---|---|---|
| [metrics-deep-research.md](research/metrics-deep-research.md) | Comprehensive AEO metrics research across 19 sections and 4 parts. Covers prompt-level metrics, brand citation types, share of voice, source attribution, competitive benchmarking, intent mapping, tools landscape, KPI dashboards, platform-specific citation mechanics, training data influence, technical AEO signals (schema/structured data), third-party amplifiers (Reddit/Wikipedia/reviews), statistical methodology, ROI attribution, content architecture, temporal dynamics, practitioner case studies, industry analyst data, and academic foundations. | 103 indexed sources | Full AEO measurement landscape |
| [prompt-methodology-and-pattern-library.md](research/prompt-methodology-and-pattern-library.md) | The definitive methodology for building prompt tracking libraries across the full B2B buyer journey. Covers 16 prompt categories across 5 stages, context variables matrix, persona-injected prompts, multi-turn sequences, quality frameworks, measurement approaches, AI engine differences, visibility signals, and step-by-step library building. Built for CheckThat's open index. | Internal methodology | Prompt library architecture |
| [prompt-writing-research-notes.md](research/prompt-writing-research-notes.md) | Research scratchpad documenting findings behind the prompt writing study guide. Covers generated knowledge prompting, engine dialects, measurement primitives, and synthesis plan. | Research notes | Prompt writing research |
| [buyer-evaluation-research-notes.md](research/buyer-evaluation-research-notes.md) | Research scratchpad for the buyer evaluation prompts study guide. Documents audience analysis, research questions, AEO foundations, frameworks, practitioners, examples, and quality checkpoints. | Research notes | Buyer evaluation research |

---

## Key Statistics (from research)

These headline numbers are sourced from the [metrics deep research](research/metrics-deep-research.md) with 103 indexed sources:

- **89% of B2B buyers** have adopted generative AI as a primary self-service research tool (Forrester)
- **AI referral traffic grew 527% YoY** in early 2025 across tracked GA4 properties
- **AI-referred leads convert at 14.2%** vs. 2.8% for traditional Google search -- a 5x advantage
- **85% of brand mentions** in AI search stem from third-party domains, not brand-owned sites (AirOps)
- **Only 30% of brands** maintain visibility from one AI answer to the next
- The probability of identical recommendation lists across two runs is **less than 1 in 100** (SparkToro)
- Pages with complete JSON-LD schema markup see **22% higher citation rates** by ChatGPT
- Reddit accounts for **40.1% of AI-generated citations** across major models

---

## Cross-References

Related AEO content that lives elsewhere in the project. These files serve broader purposes (product, strategy, client work) but contain significant AEO context.

### Competitive Intelligence

| File | What's There |
|---|---|
| [/research/Unusual_AI_Competitive_Brief.md](/research/Unusual_AI_Competitive_Brief.md) | Deep competitive brief on Unusual.ai -- Y Combinator-backed AEO competitor positioning as "AI brand alignment" |
| [/scratchpad/checkthat-positioning-vs-unusual-brief.md](/scratchpad/checkthat-positioning-vs-unusual-brief.md) | CheckThat vs Unusual.ai positioning analysis: "open AI visibility index" vs "AI Relations" |

### CheckThat Product Docs

CheckThat is GrowthX's AI visibility monitoring product. All product documentation lives in `/docs/products/checkthat/`:

| File | What's There |
|---|---|
| [/docs/products/checkthat/product-vision-v1.md](/docs/products/checkthat/product-vision-v1.md) | Product vision: "open AI visibility index for B2B" |
| [/docs/products/checkthat/overview-v1.md](/docs/products/checkthat/overview-v1.md) | Product overview and strategy |
| [/docs/products/checkthat/messaging-and-positioning-v1.md](/docs/products/checkthat/messaging-and-positioning-v1.md) | Messaging framework: "Buyer intent intelligence meets AEO" |
| [/docs/products/checkthat/organic-growth-strategy-v1.md](/docs/products/checkthat/organic-growth-strategy-v1.md) | Content and organic growth strategy for AI visibility category |
| [/docs/products/checkthat/pricing-and-monetization-v1.md](/docs/products/checkthat/pricing-and-monetization-v1.md) | Freemium pricing model and positioning vs 160+ AEO vendors |
| [/docs/products/checkthat/README.md](/docs/products/checkthat/README.md) | CheckThat product overview |

### Strategy & Company Docs

| File | What's There |
|---|---|
| [/scratchpad/board-prep-q4-2025-v1.md](/scratchpad/board-prep-q4-2025-v1.md) | Board prep with AEO/GEO category positioning and market landscape |
| [/docs/company/ai-growth-system-vision.md](/docs/company/ai-growth-system-vision.md) | AI growth system vision: answer engines, AI visibility monitoring |
| [/docs/company/growthx-eos-v1.md](/docs/company/growthx-eos-v1.md) | GrowthX EOS with CheckThat as AI visibility software |
| [/docs/finance/q4-2025-board-meeting.md](/docs/finance/q4-2025-board-meeting.md) | Q4 2025 board meeting: CheckThat, AEO category, AI visibility |
| [/docs/finance/q3-2025-board-meeting.md](/docs/finance/q3-2025-board-meeting.md) | Q3 2025 board meeting: AEO opportunity and category |

### Client Work

| File | What's There |
|---|---|
| [/outputs/GetAccept-AEO-Prompt-Database.xlsx](/outputs/GetAccept-AEO-Prompt-Database.xlsx) | GetAccept AEO prompt database (client deliverable) |
| [/customers/lovable/lovable-client-context-v1.md](/customers/lovable/lovable-client-context-v1.md) | Lovable client context with AEO/LLM performance tracking |
| [/customers/lovable/transcripts/2025-11-24-scrunch-lovable.md](/customers/lovable/transcripts/2025-11-24-scrunch-lovable.md) | Scrunch/AEO platform discussion, prompt pruning, competitive analysis |
| [/customers/lovable/transcripts/2025-10-28-lovable-site-audit-review.md](/customers/lovable/transcripts/2025-10-28-lovable-site-audit-review.md) | AI Visibility Audit using Scrunch baseline |

### Key Meeting Transcripts

| File | What's There |
|---|---|
| [/transcripts/2026-02-03-marcel-office-hours.md](/transcripts/2026-02-03-marcel-office-hours.md) | AI visibility, AEO tracking, websites as knowledge graphs |
| [/transcripts/2026-02-04-shaping-with-ryan-singer.md](/transcripts/2026-02-04-shaping-with-ryan-singer.md) | AI visibility, AEO layer, LLM navigation |
| [/transcripts/2026-01-30-ashley-paston-gc-marcel-santilli.md](/transcripts/2026-01-30-ashley-paston-gc-marcel-santilli.md) | CheckThat launch, AI visibility data tool, AEO category |
| [/transcripts/2026-01-28-onboarding-strategy-and-vision.md](/transcripts/2026-01-28-onboarding-strategy-and-vision.md) | CheckThat AI, AI visibility monitoring, buyer intent signals |
| [/transcripts/2026-01-28-growthx-coralogix.md](/transcripts/2026-01-28-growthx-coralogix.md) | AI visibility monitoring across 27,000+ AI responses |
| [/transcripts/2026-01-29-strategy-sprint-standup.md](/transcripts/2026-01-29-strategy-sprint-standup.md) | Prompt tracking methodology, pricing tiers, GEO |

---

## Source Catalog

The full 103-source index with name, URL, summary, relevance category, and quality score (1-10) is in:

**[research/metrics-deep-research.md -- Appendix: Source Index](research/metrics-deep-research.md#appendix-source-index)**

Sources span: peer-reviewed academic papers (arxiv, ACL, EMNLP, Nature Communications), tier-1 analyst reports (Gartner, Forrester, McKinsey, Bain, IDC, Edelman, Deloitte, Accenture), vendor studies with methodology, practitioner case studies, and industry analyses.

---

## Directory Structure

```
knowledge/aeo/
  README.md                                              # This file
  prompt-taxonomy-and-ontology-v1.md                     # CheckThat prompt taxonomy, ontology, and measurement framework
  guides/
    buyer-evaluation-prompt-playbook.md                  # Playbook: 6 prompt categories, templates, metrics
    prompt-writing-methodology.md                        # How to write unbiased monitoring prompts
    buyer-evaluation-prompts-study-guide.md              # Framework for evaluation-stage prompt design
  research/
    metrics-deep-research.md                             # 103-source deep research on AEO metrics
    prompt-methodology-and-pattern-library.md            # Full buyer-journey prompt methodology (1,190 lines)
    prompt-writing-research-notes.md                     # Research notes for prompt writing guide
    buyer-evaluation-research-notes.md                   # Research notes for buyer evaluation guide
```

---

*Last updated: February 2026*
