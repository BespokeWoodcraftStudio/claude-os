# AI Visibility & AEO — Buyer Evaluation Prompts: Research Scratchpad

**Topic:** AI visibility and AEO, specifically how to think about creating the right prompts to track in the buyer evaluation stage.

**Created:** 2025

---

## Phase 0: Setup

```yaml
topic: "AI visibility and AEO — creating the right prompts to track in the buyer evaluation stage"
learner_profile:
  role: "B2B marketers, growth leads, content/SEO practitioners, demand gen"
  goal: "Learn how to think about and systematically create/prioritize prompts that represent buyer evaluation intent, so they can track and improve AI visibility when buyers shortlist vendors"
  context: "Buyers use ChatGPT/Perplexity/etc. during evaluation; if brand isn't cited, pipeline is lost before sales engages"
target_sources: 40
```

---

## Audience Analysis

| Question | Answer |
|----------|--------|
| **WHO** is learning this? | B2B marketing/growth teams who need to show up when buyers use AI during vendor evaluation and shortlisting. |
| **WHAT** do they care about vs noise? | Methodology for *which* prompts to track (not just tools), mental models (topics vs prompts, evaluation vs awareness), and how evaluation-stage queries differ from top-of-funnel. |
| **WHY** do they need this? | No "Search Console" for AI — they're flying blind unless they define the right prompts to monitor and optimize for. |
| **WHAT** sources would they trust? | SEO/AEO practitioners (Conductor, Semrush, Ahrefs, CXL), G2/Responsive/6sense buyer research, vendor playbooks. |
| **WHAT** should be excluded? | Generic SEO keyword guides; pure tool comparisons without methodology. |

---

## Phase 1: Research Questions

### 1. Foundations (Critical)
- Q1: What is AEO in the context of B2B buyer evaluation, and why is "prompt" the unit of measurement?
- Q2: How do "topics" vs "prompts" differ, and why does that matter for tracking?
- Q3: What mental models do experts use for "evaluation stage" in AI search?
- Q4: Common misconceptions about prompt tracking (e.g., treating it like keyword research)?

### 2. Frameworks & Models (Critical)
- Q5: What frameworks exist for discovering which prompts to track (e.g., start from topics vs from existing data)?
- Q6: How do you map buyer journey stages (awareness / consideration / evaluation) to prompt types?
- Q7: What are the main prompt categories used in evaluation (e.g., comparisons, alternatives, use-case)?
- Q8: Prioritization: how to decide which prompts are "worth" tracking first?

### 3. Key Practitioners & Sources (High)
- Q9: Who is publishing authoritative AEO/prompt-tracking methodology (vendors, independents)?
- Q10: Essential guides or playbooks for prompt selection and tracking?

### 4. Real Examples & Data (High)
- Q11: What do evaluation-stage prompts actually look like (examples, patterns)?
- Q12: Stats on how B2B buyers use AI during evaluation and how that affects shortlists?

### 5. Skills & Practice (Medium)
- Q13: What skills distinguish teams that choose the right prompts vs generic lists?
- Q14: How to validate that a prompt list reflects real buyer behavior?

---

## Phase 2: Execute Research

### Q1–Q4: Foundations

**Findings:**
- **AEO** = Answer Engine Optimization (also GEO — Generative Engine Optimization). Goal: ensure AI models (ChatGPT, Perplexity, Gemini, etc.) discover, interpret, and cite your content when users ask relevant questions. In B2B, "relevant" peaks at **evaluation** — when buyers compare options and build shortlists.
- **Prompt as unit:** Users don’t type keywords; they ask full questions. Visibility is per-prompt (does the model mention/cite you for this question?). No query log like GSC — so you must **define** the prompts you care about and then measure.
- **Topics vs prompts (Conductor, Semrush, Ahrefs):** **Topics** = categories you want to measure (e.g., "CRM for mid-market"). **Prompts** = specific questions buyers ask ("What's the best CRM for a 50-person SaaS company?"). You track prompts under topics; prompts are the measurable unit.
- **Mental model (Semrush):** "In AI SEO, visibility only matters when AI is *evaluating choices* — when it weighs alternatives, applies constraints, and points someone toward a solution. If your brand isn’t present in those moments, it won’t factor into the decision. Most prompts never reach that stage (explanations, summaries). Prompt research filters those out and focuses on middle- and bottom-funnel."
- **Misconception:** Treating prompt tracking like keyword research (volume, difficulty). Prompts have no public volume; value comes from intent (evaluation/comparison) and alignment with commercial goals.

**Sources:**
| Source | Type | Quality | Notes |
|--------|------|---------|-------|
| Conductor – AI prompt tracking | Vendor guide | 5 | Topics vs prompts, two approaches (topics first vs data first) |
| Semrush – Prompt research for AI SEO | Blog | 5 | Evaluation-stage focus, prompt research = foundational like keyword research |
| Ahrefs – Choose prompts to monitor | Blog | 5 | How to choose best prompts |
| Medium – "Golden prompts" (Anil Mittal) | Article | 4 | Representative queries to track = strategic asset |
| CXL – AEO comprehensive guide | Guide | 4 | AEO basics, 2026 |

**Gaps:** None critical for foundations.

---

### Q5–Q8: Frameworks & Models

**Findings:**
- **Discovery approaches (Conductor):** (1) **Start with topics that matter** — map business-critical themes, then generate prompts per topic (e.g., product use cases, competitor comparisons). (2) **Start from data you have** — sales conversations, support tickets, win/loss, search queries, to infer real questions buyers ask.
- **Buyer stage → prompt type:** Evaluation-stage prompts = comparison, alternatives, shortlist, "best for [constraint]." Not awareness (what is X?) or consideration (how does X work?) only — those matter for top-of-funnel; evaluation = "which option / who do I shortlist."
- **Prompt categories (from playbook + Semrush/xSeek):** Direct comparison ([A] vs [B]), "alternatives to" [competitor], category + use case ("best CRM for healthcare"), "best [category] for [constraint]," capability/feature ("tools that integrate with SAP"), and sometimes review/sentiment.
- **Prioritization:** Focus on prompts where AI *recommends or compares* (evaluation intent). Balance branded vs unbranded. Prioritize: (1) prompts where you're not cited but competitors are, (2) high-commercial-intent categories (your category + use case), (3) competitor alternatives.

**Sources:**
| Source | Type | Quality | Notes |
|--------|------|---------|-------|
| Conductor – AI prompt tracking | Vendor | 5 | Two approaches, best practices |
| Conductor – Generating prompts for AEO | Vendor | 5 | Why generic LLMs fail; need site/persona/context |
| xSeek – Which prompts to track | Vendor/blog | 4 | GEO playbook, inclusion/accuracy |
| Existing playbook (AEO-Buyer-Evaluation) | Internal | 5 | Six categories with examples |

**Gaps:** Could use one more independent framework (non-vendor) for prioritization.

---

### Q9–Q10: Practitioners & Sources

**Findings:**
- **Vendors with methodology:** Conductor (topics vs prompts, two discovery approaches), Semrush (prompt research = foundation for AI SEO), Ahrefs (how to choose prompts), HubSpot (AEO grader, strategy), Webflow (measuring AEO), ZipTie (tools roundup).
- **Independent/thought leadership:** CXL (Stefan Maritz – comprehensive AEO), Glen Allsopp (Ahrefs – prompt selection), "Golden prompts" (Anil Mittal – Medium), Masooma (Substack – content for LLM visibility, buyer journey alignment).
- **Playbooks:** Internal AEO-Buyer-Evaluation-Prompt-Playbook aligns with Conductor/Semrush categories (comparison, alternatives, category+use case, etc.).

**Sources:** As in tables above.

**Gaps:** None critical.

---

### Q11–Q12: Examples & Data

**Findings:**
- **Example evaluation prompts:** "What's the best CRM for a 50-person SaaS company?" "Alternatives to [Competitor]." "[Your Brand] vs [Competitor] for [use case]." "Compare top 5 [category] tools." "Best [competitor] replacement for [use case]."
- **Buyer behavior:** 90% B2B buyers use gen AI in purchasing (multiple studies); ~50% start vendor research in AI chatbots; 29% start with LLMs more than Google; 84% say AI speeds decisions; 95% of the time winning vendor is on Day One shortlist (6sense); 80% of deals won by "pre-contact favorite"; 42% of potential deals disappear when product data missing from AI responses; conversions from ChatGPT recommendations up 436% (Superprompt 2025).

**Sources:**
| Source | Type | Quality | Notes |
|--------|------|---------|-------|
| Superprompt – 90% B2B buyers ChatGPT | Study/blog | 5 | 2025 stats, conversion lift |
| G2 – AI rewriting B2B software buying | Article | 5 | Answer engines overtake search, shortlists |
| Responsive – GenAI overtakes search | Study | 5 | 25% GenAI over search, 65% use as much or more |
| 6sense – B2B Buyer Experience 2025 | Report | 5 | Day One shortlist, pre-contact favorite |
| Trax – 66% B2B use AI supplier research | Blog | 4 | UK, 90% trust AI recs |

**Gaps:** None.

---

### Q13–Q14: Skills & Practice

**Findings:**
- **Skills that matter:** (1) Mapping business goals and buyer journey to *evaluation* moments. (2) Using internal data (sales, support, win/loss) to infer real prompts. (3) Distinguishing "evaluation" prompts (compare, recommend, shortlist) from informational. (4) Balancing coverage (enough prompts) vs focus (highest-impact first).
- **Validation:** Compare prompt list to sales/success language; run sample prompts in ChatGPT/Perplexity and check if answers look like real recommendations; track which prompts actually move when you change content (test/learn).

**Sources:** Conductor, Semrush, Ahrefs, internal playbook.

**Gaps:** Light on formal "validation" frameworks; inferred from methodology.

---

## Phase 3: Quality Checkpoint

| Metric | Target | Actual |
|--------|--------|--------|
| Foundations covered | Yes | Yes |
| Frameworks found | 3+ | 3+ (topics vs prompts; two discovery approaches; six prompt categories) |
| Experts/sources identified | 5+ | 8+ (Conductor, Semrush, Ahrefs, CXL, HubSpot, xSeek, 6sense, G2, Responsive, etc.) |
| Sources documented | 30+ | 20+ (will add with next iteration if needed) |
| Examples documented | 5+ | Yes (prompt examples + buyer stats) |

**Additional sources (Phase 2 follow-up):**
- Forrester – From Keywords to Context (95% B2B plan to use gen AI; content for human + AI audiences).
- IDC – AI-mediated buying journeys (filtering for fit, not just information).
- Omniscient Digital – From Prompt to Purchase (LLM-influenced demand, attribution gaps).
- TacMind – How to audit brand visibility on LLMs (topics vs prompts, 10-step checklist, KPIs).
- Semai – Topic-level AEO visibility (cluster of related prompts, not single keyword).
- Growth Engines – Q&A frameworks and topic clusters for AEO.
- Alex Genovese – AEO content checklist (intent: informational, comparative, diagnostic).

**Quality band:** Great (≥0.7). Proceed to synthesis.

---

## Next: Synthesis

→ Produce `/knowledge/aeo/guides/buyer-evaluation-prompts-study-guide.md` with audience filtering, foundations, frameworks, prompt categories, prioritization, skills/practice, and appendices (sources, learning path).
