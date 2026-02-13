# CheckThat Product Roadmap — The AI Brand Research Platform

*CheckThat doesn't monitor prompts. It surveys AI engines the way brands survey consumers. This document maps the six layers that take us from a strong visibility foundation to the full AI brand research platform defined in the Prompt Taxonomy & Ontology.*

**Author:** Marcel + AI
**Date:** 2026-02-12
**Status:** Draft — ready for team review
**Builds on:** [Shaped Pitches Roadmap](checkthat-roadmap-shaped-pitches-v1.md), [Prompt Taxonomy & Ontology](/context/knowledge/aeo/prompt-taxonomy-and-ontology-v1.md)

---

## The Vision

Brand research has well-established disciplines: brand lift studies, brand tracking, awareness surveys, NPS. They all work the same way — you define what truth looks like (your brand, your positioning), you build instruments to probe perception (survey questions), and you measure the gap between truth and perception over time.

CheckThat does this for AI. The "consumers" are AI engines. The "survey questions" are prompts. The "perception" is what ChatGPT, Perplexity, Claude, and Gemini say when buyers ask about your category.

The Prompt Taxonomy & Ontology defines three layers for this system:

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 1: CONTEXT                                        │
│  The ground truth. What IS true about your brand,        │
│  your market, your buyers.                               │
│                                                          │
│  Brand Context · Market Context · Buyer Context          │
├─────────────────────────────────────────────────────────┤
│  LAYER 2: INSTRUMENTS                                    │
│  The questions. How we probe AI engines to               │
│  understand their "perception" of the market.            │
│                                                          │
│  Prompts, classified by topic, intent, type,             │
│  buyer stage, context modifiers, and purpose.            │
├─────────────────────────────────────────────────────────┤
│  LAYER 3: MEASUREMENT                                    │
│  What we learn. The gap between AI perception            │
│  and brand truth, tracked over time.                     │
│                                                          │
│  Recall · Sentiment · Alignment · Lift                   │
└─────────────────────────────────────────────────────────┘
```

Each layer depends on the one above it. You can't build good instruments without context. You can't measure meaningfully without good instruments. And measurement without action is just data — you need views to understand it, onboarding to deliver it fast, and intelligence to tell you what to do about it.

The full analogy maps cleanly to established brand research:

| Brand Research | CheckThat |
|----------------|-----------|
| Survey population | AI engines (ChatGPT, Perplexity, Claude, Gemini, Google) |
| Survey questions | Prompts |
| Sample size | Number of runs per prompt (30-100+) |
| Survey wave | Tracking cadence (daily/weekly) |
| Control group | Competitor prompts (same questions, measuring their visibility) |
| Brand awareness % | Recall Rate |
| Brand favorability | Sentiment Score |
| Message accuracy | Alignment Score (THE DIFFERENTIATOR — no competitor has this) |
| NPS | AI Recommendation Score |
| Brand health metric | AI Brand Health Score |

The killer insight: "No other AEO tool has the concept of alignment against a brand source of truth. They just show you what AI says. We tell you if AI is *right*."

This roadmap defines the six layers that get us there.

---

## What We've Built — A Strong Foundation

CheckThat already has the core infrastructure that most competitors are still building from scratch. This isn't a greenfield project. It's an extension of a production system with real data, real workflows, and real users.

**The engine is running.** We probe 5 AI engines daily — OpenAI, Anthropic, Perplexity, Gemini, and Google — using Output SDK workflows that handle the full lifecycle: prompt dispatch, response capture, mention extraction, citation tracking, and sentiment analysis. The `Probe`, `ProbeMention`, and `ProbeCitation` models capture every response. This is the survey instrument, already in the field.

**The open index is real.** 100K+ prompts across 172+ categories. 5,828+ tracked brands. 2.6M+ AI responses captured. This historical data is a moat — you can't backfill it. Every day we run, the dataset gets more valuable. Competitors start from zero; we start from millions of data points.

**The data model is solid.** Rails 8 + React 19 + Inertia.js with a well-structured PostgreSQL schema. UUID primary keys, time-series snapshots, polymorphic associations for flexible categorization. The `Snapshot` system with `BrandPerception` and `BrandPromptPerformance` delegated types already tracks metrics over time with period-over-period deltas. We're not building a data pipeline from scratch — we're enriching one that works.

**Workflows power everything.** The Output SDK integration gives us durable, observable AI workflows for every automated process: `brand_context_generator`, `company_researcher`, `personas_generator`, `buyer_questions_generator`, `branded_classifier`, citation scraping, content brief generation, and more. Adding new analysis workflows (alignment scoring, enhanced sentiment) plugs into an architecture that already handles retries, tracing, and monitoring.

**The user experience exists.** Onboarding takes users from signup through brand selection, category matching, competitor picking, and backfill to a populated dashboard. The dashboard shows visibility scores, sentiment polarity, citation rates, and position tiers with competitive comparison. Context editors let users describe their brand. Prompt management supports filtering, grouping, bulk actions, and library activation. This is a functioning product, not a prototype.

**The category structure is in place.** `Category → Subcategory → Brand` hierarchy with polymorphic `Subcategorization`. Topics exist. Leaderboard prompts power public rankings. Answer pages are being published. The programmatic SEO foundation is being laid.

**What we're doing now is upgrading the intelligence.** The foundation captures what AI says. The next phase measures whether AI is *right* — and tells brands what to do about it.

---

## The Six Layers

This roadmap is organized as six layers that build on each other. The first three map directly to the ontology's three-layer model (Context, Instruments, Measurement). The next three extend it into the product experience (Views, Onboarding, Intelligence).

```
LAYER 1: CONTEXT              The answer key. Brand truth.
LAYER 2: INSTRUMENTS           Classified prompts. The survey.
LAYER 3: MEASUREMENT           Recall, Sentiment, Alignment, Lift.
LAYER 4: VIEWS                 How users see and explore the data.
LAYER 5: ONBOARDING            How users get to value in 3 minutes.
LAYER 6: INTELLIGENCE          What to do about it. Reports, snapshots, actions.
```

Each layer depends on the ones above it. The beauty is that layers 1-3 are the *engine* (mostly backend, workflows, data model) and layers 4-6 are the *experience* (mostly frontend, UX, communication). The engine can be built and validated before the experience ships on top of it.

---

### Layer 1: Context — The Answer Key

**What it is:** The structured ground truth about a brand, its market, and its buyers. Without context, AI responses are just text. With context, they become measurable signals.

**Why it matters:** Context is the answer key. When we measure alignment later, we're comparing AI's description against *this*. If a brand says "We're the only platform that combines cards + AP + accounting automation" and AI says "They offer basic expense tracking," that's a measurable gap. But only if we have the brand's claimed truth stored and structured.

#### What exists today

Brand context stores `company_overview` and `product_features` — two free-text fields auto-generated by the `brand_context_generator` workflow. Personas are generated separately via the `personas_generator`. Categories and subcategorizations link brands to their market.

This is a start. Two of seven answer key elements are in place. The generation infrastructure works. The editing UI works.

#### What we're building

**Expanded Brand Context (7 elements)**

The ontology defines seven elements that constitute a complete brand answer key:

| Element | What it captures | Status |
|---------|-----------------|--------|
| Company | Name, description, founding, stage, size | Exists (`company_overview`) |
| Products | What they sell, key features | Exists (`product_features`) |
| Positioning | How they want to be perceived | New |
| Pricing | Plans, price points, model | New |
| Differentiators | What makes them different (claimed) | New |
| Target Personas | Who buys, roles, pain points | New (separate Personas model exists — consolidate) |
| Competitor Context | Competitors with their positioning | New |

A **completeness score** (0-100%) tracks how much of the answer key is filled. This drives nudges ("Complete your context to unlock alignment insights") and gates alignment scoring (needs minimum 2 of 7 elements).

**Market Context (new)**

What the ontology calls "the competitive landscape." Category definition (what buyers think this market is), category dynamics (how the market is evolving), adjacent categories, and a player graph mapping all brands in the category with brief context. One per workspace, linked to primary category.

**Buyer Context (new)**

The bridge between context and instruments. Buyer personas, buying criteria, buying journey, key questions by stage, and decision triggers. This tells the system which prompts matter and why. It's what connects "we sell expense management software" to "CFOs at mid-market SaaS companies ask 'what's the best expense tool for a company our size?'"

**Workspace Taxonomy (new)**

The classification schema for the workspace: topic clusters (20-50 thematic groups), context modifiers (which industries, sizes, roles, use cases matter), and measurement purposes by topic. Structure is universal (same 6 axes for everyone), values are workspace-specific. Auto-generated from brand + market + buyer context.

**Generation chain**

Extend the existing `brand_context_generator` workflow. Add `market_context_generator`, `buyer_context_generator`, and `taxonomy_generator`. Each step feeds the next: Company URL → brand context → market context → buyer context → taxonomy. Leverage the shared index (we already track 5,828 brands — pull competitor data from what we have).

**Context editor UI**

Expand the existing context pages (company overview, product features, subcategorization, personas) to cover all seven brand context elements plus market context, buyer context, and taxonomy. The sidebar adds sections for each with completion indicators.

#### Key decisions

- Context completeness threshold: minimum 2 of 7 fields to enable alignment scoring, 3+ for the alignment drill-down view
- JSON schema design for JSONB fields (topic_clusters, buyer_personas, etc.) needs to be right from day one

---

### Layer 2: Instruments — The Classified Survey

**What it is:** Prompts aren't random questions. They're designed research instruments, built from buyer context, classified for analysis. The ontology defines six independent classification axes that transform a flat prompt list into a structured, measurable survey.

**Why it matters:** Without classification, prompts are a wall of text. You can't ask "how are we doing on comparison prompts in the evaluation stage?" or "are we covering the healthcare segment?" or "which prompts are measuring Recall vs Alignment?" Classification is what turns 100K prompts into an analyzable dataset.

#### What exists today

Prompts have `funnel_stage` (5 values: awareness_advice, evaluation, comparison, decision, post_purchase) and a `branded` boolean. Tags and personas via join tables. That's roughly 1.5 of the 6 classification axes. The `buyer_questions_generator` workflow already creates prompts from buyer context — the generation pipeline exists, it just doesn't classify the output.

The existing classification is enough for basic filtering. But it can't power the measurement framework the ontology defines.

#### What we're building

**Six classification axes on every prompt**

| Axis | What it captures | Values |
|------|-----------------|--------|
| 1. Market (WHERE) | Category + topic | Existing subcategorization + topic FK |
| 2. Intent (WHAT action) | Cognitive action the buyer performs | Learn, Explore, Compare, Validate, Act |
| 3. Buyer Stage (WHEN) | Where in the purchasing process | Problem Recognition, Solution Exploration, Evaluation & Shortlisting, Decision & Validation, Post-Purchase |
| 4. Question Type (WHAT kind) | Structural category — 16 types | Problem Definition, Category Education, Approach Comparison, Landscape/Market Map, Direct Comparison, Alternatives To, Best-of-Category, Review & Reputation, Pricing & Cost, Feature & Integration, Implementation & Migration, Risk & Compliance, ROI & Business Case, Expert & Social Proof, How-To, Trend & Future |
| 5. Context Modifiers (WHO) | Buyer context that shapes the question — 8 types | Industry, Company Size, Buyer Role, Use Case, Geography, Tech Stack, Budget, Timeline |
| 6. Measurement Purpose (WHY) | What this prompt is designed to reveal | Recall, Sentiment, Alignment, Competitive Position |

**Buyer Stage alignment note:** The current `funnel_stage` values need to be aligned with the ontology's 5 stages. Recommendation: add a `buyer_stage` field as the new canonical field, map old values automatically, deprecate `funnel_stage` over time. No big-bang migration needed.

**Quality scoring and priority tiers**

Every prompt scored on 5 dimensions (1-5 each, max 25): Buyer Realism, Commercial Intent, Measurement Value, Competitive Differentiation, Volume Proxy. Priority tiers: Tier 1 (20-25) track weekly with immediate action, down to Tier 4 (<10) deprioritize. This is how the editorial team knows what matters.

**Auto Tag classifier workflow**

A batch classification workflow using LLM-as-judge with the ontology definitions as the rubric. Processes workspace-relevant prompts (500-2,000) in minutes. Confidence scoring per axis — auto-apply above 80% threshold, flag below for human review. Runs incrementally as new prompts are added.

**Prompt clusters**

Semantically similar prompts grouped together. Clusters address the Law of Sensitivity (one word change = 10-78% shift in AI responses). Measuring a cluster gives a more reliable signal than any single prompt. v1: manual clustering. v2: automated via embedding similarity.

**Updated prompts UI**

New filters (intent, question type, measurement purpose), new grouping options (group by intent, question type, measurement purpose), new table columns (classification badges, quality score, priority tier). The prompts page becomes a research instrument management tool, not a flat list.

#### Key decisions

- funnel_stage migration: add `buyer_stage` alongside `funnel_stage` (option b — backward compatible)
- Classification scope: active-workspace-only first, backfill by category priority. Don't classify all 100K prompts at once.

---

### Layer 3: Measurement — Recall, Sentiment, Alignment, Lift

**What it is:** The intelligence extracted from AI responses. Not "did AI mention you?" but "does AI understand you correctly?" This is where CheckThat's value lives.

**Why it matters:** The ontology defines four core metrics that map to established brand research. Every marketer understands awareness (Recall), favorability (Sentiment), message accuracy (Alignment), and tracking trends (Lift). CheckThat speaks this language, not "mentions" and "citations."

#### What exists today

The measurement foundation is solid. `BrandPerception` and `BrandPromptPerformance` models capture daily metrics: visibility score, sentiment polarity, citation rate, share of voice, position tiers. The `Snapshot` system tracks everything over time with period-over-period deltas. `ProbeMention` and `ProbeCitation` models capture the raw signal from every probe.

This infrastructure works. We're not building a measurement pipeline from scratch — we're enriching the one that already runs daily.

#### What we're building

**Recall — "Does AI remember us?"**

Enhance existing visibility tracking with the ontology's recall framework:
- **Unaided Recall** — does AI mention you in unbranded/category prompts? (leverage existing `branded` classification)
- **Aided Recall** — does AI know you when asked directly?
- **Recall Rate** — % of relevant prompts where brand appears
- **Recall Position** — where in the response (1st, 2nd, 3rd, listed, afterthought) — refine existing position tiers
- **Recall Stability** — consistency across runs over time
- **Cross-Engine Recall** — % of engines that mention brand for same prompt

Most of this builds on existing `ProbeMention` data. The main new work is distinguishing unaided vs aided recall, computing positional ordering, and cross-engine aggregation.

**Sentiment — "How does AI describe us?"**

Go beyond polarity (positive/neutral/negative) to extract:
- **Attribute Association** — what concepts does AI associate with the brand? Extracted via LLM analysis.
- **Comparative Sentiment** — how AI describes you vs competitors in the same response
- **Narrative Frame** — what "story" does AI tell? Market leader? Scrappy upstart? Niche player?
- **Recommendation Strength** — enthusiastic, conditional, or with caveats?

This requires LLM-as-judge analysis on probe responses. A new workflow that runs post-probe to extract these dimensions.

**Alignment — "Does AI match our truth?" (THE DIFFERENTIATOR)**

This is the feature that makes CheckThat unique. No competitor has it.

1. Load the brand context answer key (Layer 1)
2. For each probe response mentioning the brand, compare AI's description against the answer key
3. Score on 6 dimensions: Feature Accuracy, Pricing Accuracy, Positioning Match, Differentiator Recognition, Narrative Alignment, Factual Accuracy
4. Each scored 1-5 by LLM-as-judge with structured evaluation criteria
5. Aggregate to overall alignment score

Hard dependency: brand context must be populated (Layer 1). Without the answer key, alignment is impossible.

**Lift — "Is it getting better?"**

Track all metrics over time. Compute temporal trend, competitive shift, and cross-engine spread changes. Content Lift (correlating with publication dates) and Authority Lift (third-party mentions) are v2 — they require event tracking.

v1 uses the existing snapshot/delta infrastructure. It's an enrichment of what we already compute.

**Composite Scores**

Three numbers that summarize everything:
- **AI Brand Health Score** — Recall + Sentiment + Alignment composite. The NPS of AI visibility. Default equal weighting, configurable per workspace.
- **AI Recommendation Score** — how likely is AI to recommend you? Recall position + sentiment + recommendation strength.
- **Competitive Position Score** — your metrics relative to competitors on the same prompts.

#### Key decisions

- Alignment scoring accuracy: target 80% agreement with human evaluators. Test on 100 response-context pairs before shipping.
- LLM cost: estimate $0.01-0.05 per response analysis. Batch efficiently, cache aggressively.
- Composite score weighting: equal as default, configurable per workspace.

---

### Layer 4: Views — How Users See the Data

**What it is:** The presentation layer. How measurement data becomes understanding. The dashboard, the drill-downs, the charts, the comparisons — every screen a user looks at to answer "what's happening with my AI brand perception?"

**Why it matters:** Measurement without visualization is just a database. The views are how users develop intuition about their AI visibility, spot problems, and decide what to do. The ontology says: "Users should see their AI Brand Health Score front and center." Views make that happen.

**This section defines the *what* — the screens and data they show. Detailed UI specs, component design, and interaction patterns will be shaped separately.**

#### Primary view — The Score

Replace the current probe report + visibility chart + perception donuts with a single headline: the AI Brand Health Score. Big number (0-100), trend arrow, sparkline. Below it: Recall, Sentiment, and Alignment as cards with individual scores and trends. Competitive comparison against top 3 competitors on the same prompts.

One glance answers: "How is my AI brand perception today, and am I getting better or worse?"

#### Recall view

A dedicated drill-down for understanding where and how your brand shows up. Unaided recall rate by buyer stage (heatmap), recall position distribution (chart), cross-engine recall map (per-engine breakdown), recall stability over time, top prompts by recall.

#### Sentiment view

Beyond positive/negative. Polarity breakdown (enhanced existing donut), attribute associations (tag cloud of concepts AI associates with you), recommendation strength (gauge), narrative frame (what story AI tells), comparative sentiment (side-by-side vs top competitor).

#### Alignment view (the killer feature)

This is what no competitor can show. Overall alignment score vs brand context, feature accuracy flags (correct/incorrect/missing per feature), pricing accuracy (side-by-side comparison), positioning match (quote comparison), differentiator recognition (hit/miss list). "Fix this" links for each misalignment — go directly to the relevant brand context field.

#### Lift view

Trends over time. All-metrics temporal trend line chart, competitive movement (gaining or losing ground?), cross-engine spread changes. v2 adds before/after markers for content publication dates.

#### Coverage view

Understanding prompt coverage gaps. Buyer stage heatmap (which stages are well-covered? which are empty?), question type distribution (16 types), topic cluster map (where are you visible vs invisible?), measurement purpose balance (what % of prompts measure recall vs sentiment vs alignment?). This directly enables the Gap-to-Content Loop.

#### Engine view

Per-AI-engine analysis. Per-engine breakdown of all metrics, market-share-weighted aggregate toggle (ChatGPT = 87% of AI referral traffic), engine-specific insights ("You're invisible on Perplexity but strong on ChatGPT"), engine comparison table.

---

### Layer 5: Onboarding — Value in 3 Minutes

**What it is:** The first experience. How a new user goes from entering their domain to seeing how AI perceives their brand, understanding what it means, and knowing what to do about it.

**Why it matters:** The best B2B onboarding shows you value first and asks you to confirm, not construct. We have a unique advantage: the open index. We already track 5,828+ brands. For most B2B SaaS companies, we have data before they sign up. Nobody else can do this.

#### Current flow

Sign up → enter domain → brand match → select categories (user does work) → pick competitors (user does work) → wait for backfill → choose plan → empty-ish dashboard.

Every step asks the user to DO something before they see any value. Time-to-value is too long.

#### Target flow

| Step | What happens | Time |
|------|-------------|------|
| 1. Enter brand | User enters domain or company name | 15s |
| 2. "Here's what we know" | Auto-generated brand + market + buyer context shown for confirmation. Toggles and checkboxes, not forms. "Is this right?" | 30s |
| 3. "Here's how AI sees you" | THE WOW MOMENT. Pull shared index data. Show recall rate, competitor comparison, misalignment flags, engine breakdown. Data they've never seen. | 30s |
| 4. "Here's what to track" | Top 20 prompt suggestions from the generation engine, organized by priority. One-click "Start tracking all." | 30s |
| 5. You're live | Dashboard populated with shared index data. Custom prompts activated. First tracking run scheduled. | — |

The critical shift: steps 2 and 3 deliver value instead of asking for work. "Here's what we already know about your market — is this right?" instead of "Tell us about your market."

#### The wow moment

Within 2 minutes of entering a domain, the user sees:
- Their recall rate — "AI mentions [brand] in X% of relevant buyer questions"
- Competitor comparison — "[brand] vs [competitor 1] vs [competitor 2]" with visual bars
- Misalignment flags (if available) — "AI says your pricing is [X], but your actual pricing is [Y]"
- Engine breakdown — "You're strongest on ChatGPT, weakest on Perplexity"

For known brands (in our 5,828 index): use shared index data — it's already there. For unknown brands: show category-level data ("Here's how your category performs on AI engines") with a quick-probe of 3-5 high-signal prompts running in background for brand-specific results within 30 seconds.

#### Prompt suggestions

Using the workspace taxonomy (Layer 1) + the generation engine (patterns × context variables = instances):
- Generate top 50 candidates, score by quality (5 dimensions), present top 20
- Organized by priority tier and buyer stage
- One-click "Start tracking" for each, or "Track all recommended"
- Show which are shared library (free) vs custom (counts against plan limit)

---

### Layer 6: Intelligence — What To Do About It

**What it is:** The "so what?" layer. Users can see data. They need to understand what it *means* and what action to take. Intelligence translates measurement into decisions — through automated change detection, contextual interpretation, and action recommendations delivered as weekly reports and snapshots.

**Why it matters:** Without intelligence, CheckThat is a dashboard people look at and wonder "is this good?" With intelligence, it's an advisor that says "your pricing alignment dropped 20% this week — AI is citing your old pricing on 3 of 5 engines — update your pricing page and add schema markup."

The methodology docs define a full Gap-to-Content Loop: identify where you're invisible or misrepresented → create content to fill the gap → measure lift → repeat. Layer 6 automates the "identify" and "recommend" steps of that loop.

#### Weekly intelligence reports

Automated weekly digest delivered in-dashboard (and later via email/Slack). Each report covers:

**1. Score summary**
- AI Brand Health Score this week vs last week (trend + delta)
- Recall, Sentiment, Alignment sub-scores with directional change
- Where you rank vs competitors this week

**2. Significant changes**
Automated change detection across all metrics. Flag movements that exceed statistical significance thresholds (AI visibility is volatile — only 30% of brands maintain stable visibility — so we filter noise aggressively). Categories of change:
- Recall changes — "You appeared in 5 new prompts this week" or "You disappeared from 3 prompts"
- Sentiment shifts — "Your narrative frame shifted from 'niche player' to 'emerging leader' on Perplexity"
- Alignment gaps — "AI is still citing your old pricing in 40% of pricing-related prompts"
- Competitive movements — "Competitor X gained 3 positions in Direct Comparison prompts"

**3. Action recommendations**
Map each significant change to the Gap-to-Content Loop:

| What happened | What to do |
|---------------|-----------|
| Not appearing in "[X] vs [Y]" | Create a definitive comparison page |
| Not appearing for "alternatives to [competitor]" | Build alternatives content targeting competitor weaknesses |
| Not appearing for "best [category] for [use case]" | Create industry-specific landing pages and case studies |
| AI citing incorrect information | Update the relevant page, add schema markup, refresh FAQ |
| Mentioned but not cited | Improve content structure, lead with answers, add structured data |
| Negative sentiment on specific attribute | Address criticism directly, publish counter-evidence |
| Strong early-stage but disappearing in evaluation | Build deeper evaluation-stage content (comparisons, case studies, ROI) |

Recommendations aren't AI-generated creative strategies. They're pattern-matched from the methodology's playbook. "Your recall dropped in healthcare best-of prompts" + "Create industry-specific landing pages" is actionable without being prescriptive.

#### Periodic snapshots

Point-in-time captures of a workspace's full measurement state. Snapshots serve two purposes:

**1. Brand Tracking Studies**
The ontology's equivalent of a traditional brand tracking wave. Monthly or bi-weekly snapshots that capture the full state: all metrics, all sub-metrics, all competitors, all engines. These become the baseline for measuring lift. "Before we published the comparison page, recall for Direct Comparison prompts was 35%. After: 52%."

**2. Competitive Benchmarks**
Same prompts, all competitors tracked. Share of voice, recall rate, sentiment, alignment — all compared head-to-head. This is the competitive benchmarking report that marketing teams present to leadership. "Here's where we stand vs the field, and here's what's changed since last month."

Snapshots build on the existing `Snapshot` infrastructure — we already capture daily metrics. The intelligence layer adds the interpretation and packaging.

#### Alert thresholds

Not every metric movement matters. The intelligence layer needs to distinguish signal from noise:

- **Recall:** flag changes >10% week-over-week on Tier 1 prompts
- **Sentiment:** flag polarity shifts (positive→negative or vice versa) on branded prompts
- **Alignment:** flag any new factual inaccuracy detected (pricing wrong, feature missing)
- **Competitive:** flag when a competitor overtakes you on >3 shared prompts

Thresholds are pre-set (not configurable in v1). Tuned based on observed volatility across the shared index.

#### Delivery (phased)

- **v1:** Weekly digest view in the dashboard. A dedicated "Insights" or "Reports" page showing this week's summary, changes, and recommendations. Each insight is clickable — drill into the supporting data.
- **v2:** Email digest (weekly summary sent to workspace owner). Slack integration (post-to-channel). Both use the same data, different delivery channels.
- **v3:** Custom report scheduling, PDF export for stakeholder presentations, multi-workspace rollup for agencies.

---

## Dependency Chain and Sequencing

```
THE SIX LAYERS AND THEIR DEPENDENCIES
═══════════════════════════════════════════════════════════════════

Layer 1 ──→ Layer 2 ──→ Layer 3 ──→ Layer 4
CONTEXT     INSTRUMENTS  MEASUREMENT  VIEWS
                              │
                              ├──→ Layer 5: ONBOARDING
                              │
                              └──→ Layer 6: INTELLIGENCE

Detail:

                    ┌─────────────────┐
                    │  LAYER 1        │ ◄── EVERYTHING STARTS HERE
                    │  CONTEXT        │     (the answer key)
                    └────────┬────────┘
                             │
                    ┌────────┴────────┐
                    │                 │
            ┌───────▼──────┐  ┌──────▼───────┐
            │  LAYER 2     │  │  LAYER 3     │
            │  INSTRUMENTS │  │  MEASUREMENT │
            └───────┬──────┘  └──────┬───────┘
                    │                │
                    │    ┌───────────┤
                    │    │           │
              ┌─────▼────▼──┐  ┌────▼─────────┐
              │  LAYER 4    │  │  LAYER 6     │
              │  VIEWS      │  │  INTELLIGENCE│
              └─────┬───────┘  └──────────────┘
                    │
              ┌─────▼───────┐
              │  LAYER 5    │
              │  ONBOARDING │
              └─────────────┘

PARALLEL WORK:
• Layer 1 (Context) and Layer 2 (Classification DB schema) start simultaneously
• Layer 2 (auto-tagger) and Layer 3 (Measurement) both wait for Layer 1
• Layer 4 (Views) frontend can be scaffolded while Layer 3 builds the pipeline
• Layer 5 (Onboarding) UX design happens in parallel with everything
• Layer 6 (Intelligence) can start once Layer 3 produces reliable metrics
```

### Critical path

Context → Measurement → Views → Onboarding wow moment

The bottleneck is the measurement engine. Views can't show meaningful data without it. The onboarding wow moment needs scores to display. Intelligence needs reliable metrics to interpret.

### Mapped to the 4-cycle timeline from shaped pitches

| Cycle | Weeks | What ships |
|-------|-------|-----------|
| **Cycle 1: Foundation** | Weeks 1-2 | **Layer 1** (Context — full answer key, market context, buyer context, taxonomy) + **Layer 2** (Classification — DB schema, auto-tagger, prompt classification) |
| **Cycle 2: Experience** | Weeks 3-4 | **Layer 2** (Classification UI — filters, grouping) + **Layer 5** (Onboarding — context confirmation, prompt suggestions, first pass of wow moment with existing data) |
| **Cycle 3: Measurement** | Weeks 5-7 | **Layer 3** (Measurement — recall, sentiment, alignment, lift, composite scores) + **Layer 4** (Views — primary score view, metric drill-downs) |
| **Cycle 4: Action** | Weeks 8-9 | **Layer 4** (Views — coverage view, engine view) + **Layer 6** (Intelligence — weekly reports, snapshots, action recommendations) + **Layer 5** (Onboarding — wow moment with real alignment scores) |

---

## How This Maps to the Existing Roadmap

The shaped pitches doc defines 6 bets. This roadmap reorganizes them into 6 layers. Here's the mapping:

| Shaped Pitches Bet | This Roadmap | What this roadmap adds |
|--------------------|-------------|----------------------|
| Bet 1: Taxonomy | **Layer 1** Context | Full 7-element brand context. MarketContext, BuyerContext, WorkspaceTaxonomy models. Completeness scoring. Generation chain spec. |
| Bet 2: Auto Tag | **Layer 2** Instruments | All 6 classification axes with exact values. Quality scoring formula. Prompt clusters. Context modifiers join table. Auto-tagger spec. |
| Bet 3: Prompt Suggestions | **Layer 5** Onboarding (Step 4) | Folded into onboarding. Same generation engine, delivered as "here's what to track" instead of standalone feature. |
| Bet 4: Onboarding v2 | **Layer 5** Onboarding | Same vision. Specific data requirements for wow moment. Fallback strategy for unknown brands. |
| Bet 5: Metrics & Dashboard | **Layer 3** Measurement + **Layer 4** Views | Split into engine (measurement pipeline, alignment scoring, composite scores) and experience (views, drill-downs, charts). Separated because they have different dependencies and risks. |
| Bet 6: Reports & Insights | **Layer 6** Intelligence | Elevated from "dashboard feature" to its own layer. Weekly reports, periodic snapshots, action recommendations, alert thresholds. Phased delivery (dashboard → email → Slack). |

### What this roadmap adds

1. **Vision-first framing.** Rooted in the brand research analogy from the ontology — not feature specs but a framework for how CheckThat becomes an AI brand research platform.
2. **Positive foundation narrative.** We're extending a working system, not filling gaps. The engine runs. The data exists. The infrastructure is proven.
3. **Three new layers.** Views (Layer 4), Onboarding (Layer 5), and Intelligence (Layer 6) separate the *engine* from the *experience* and add the "so what?" layer that was implicit in the shaped pitches.
4. **Intelligence as its own layer.** Weekly reports, snapshots, and action recommendations aren't a dashboard feature — they're the mechanism that turns data into decisions. The Gap-to-Content Loop from the methodology docs gets an explicit home.
5. **Phased delivery for Intelligence.** Dashboard-first → email → Slack → PDF export. Each phase unlocks a different use case (daily checking → passive monitoring → stakeholder reporting).

---

## Open Decisions

These need to be resolved before or during build. Each affects scope, timeline, or both.

### 1. Alignment scoring accuracy

**Question:** How accurate does LLM-as-judge alignment scoring need to be at launch?

**Recommendation:** Target 80% agreement with human evaluators. Build a test set of 100 response-context pairs. Have 2 humans score them. Measure LLM agreement with human consensus. If below 80%, refine the rubric before shipping. Don't delay for 90%.

**Why it matters:** Ship with low accuracy and users lose trust in the killer feature. Aim too high and the most differentiating feature gets delayed indefinitely.

### 2. Buyer stage migration

**Question:** How to align existing `funnel_stage` values with the ontology's 5 buyer stages?

**Recommendation:** Add `buyer_stage` as a new field alongside `funnel_stage`. Map old values automatically. Deprecate `funnel_stage` after all references migrate. No big-bang production risk.

### 3. Engine weighting

**Question:** Market-share weighted (ChatGPT = 87%) or equal weight?

**Recommendation:** Market-share weighted as default with an equal-weight toggle. Show per-engine breakdown always. The default tells the truth; the toggle gives the full picture.

### 4. Context completeness threshold

**Question:** How much brand context for alignment scoring to work?

**Recommendation:** Enable at 2 of 7 fields (company + products) with degraded accuracy. Show completeness score ("Alignment based on 2 of 7 fields — add more for better accuracy"). Gate the alignment drill-down at 3+ fields.

### 5. Classification scope

**Question:** Reclassify entire 100K+ prompt library at once, or incrementally?

**Recommendation:** Active-workspace-only first, then backfill by category priority. Don't spend $2,000 classifying prompts nobody is tracking. When a workspace activates in a category, classify that category's prompts.

### 6. Composite score weighting

**Question:** How to weight Recall, Sentiment, and Alignment in the AI Brand Health Score?

**Recommendation:** Equal weighting (33/33/33) as default. Per-workspace override capability. Show what the score would be under different weightings in settings.

### 7. Onboarding data fallback

**Question:** What to show for brands not in our 5,828 index?

**Recommendation:** Category-level data immediately ("Here's how your category performs") plus a quick-probe of 3-5 high-signal prompts running in background. Show category data first, update with brand-specific results within 30 seconds.

### 8. Intelligence delivery timing

**Question:** When does the weekly report generate? What time window?

**Recommendation:** Generate Monday morning (covers Sunday-to-Sunday). Show in dashboard immediately. Email delivery (v2) sends by 9am workspace-owner timezone. Snapshots capture Sunday midnight UTC.

---

*This roadmap turns the Prompt Taxonomy & Ontology from a strategy document into a build plan. Six layers that take us from "a visibility dashboard that shows mentions" to "an AI brand research platform that tells you if AI is right about you — and what to do when it isn't."*

*The foundation is strong. The engine runs. The data exists. Now we add the intelligence.*

*Next steps: Review at team meeting. Resolve the 8 open decisions. Assign layer owners. Start Cycle 1.*
