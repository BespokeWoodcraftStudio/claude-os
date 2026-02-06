# AEO Prompt Methodology & Pattern Library

*The definitive methodology for building prompt tracking libraries that map the full B2B buyer journey. Built for CheckThat's open index and any brand serious about AI visibility.*

---

## Why This Document Exists

AI is eating the funnel. 94% of B2B buyers now use AI during purchasing. Half start in a chatbot before they ever touch Google. The buyers who used to spend weeks compiling vendor lists now prompt ChatGPT and build a shortlist in minutes.

The problem: most AEO tools hand you an empty dashboard and say "guess which prompts matter." They track mentions without understanding intent. They give you data dumps, not direction.

This document is the methodology behind how we think about prompts at CheckThat. It's how we build prompt libraries that actually map to how buyers think, search, and decide. It's the system that turns "track some prompts" into "understand your entire market's AI visibility."

We're making this a living document. The patterns here will power:
- CheckThat's shared prompt library (100,000+ prompts across 172 categories)
- The prompt generation engine for new categories and brands
- The editorial framework our team uses to evaluate prompt quality
- The methodology we teach customers to build their own tracking

---

## Part 1: The Foundational Model

### The Buyer Journey Has Collapsed

The traditional B2B funnel was linear: awareness → consideration → evaluation → decision. AI compressed it. A buyer can go from "I have a problem" to "here's my shortlist of three vendors" in a single prompt session.

The data:
- 67% of B2B buyers start with AI assistants before traditional search
- AI-referred visitors convert 4.4-5x better than Google organic
- 73% of the purchase decision is complete before first sales contact
- Companies need 58% less time to make informed supplier decisions thanks to AI
- By 2028, 90% of B2B buying ($15 trillion) will be AI agent intermediated (Gartner)

But the journey isn't gone. It's compressed and non-linear. Buyers still move through stages—they just do it faster and jump between them freely within a single AI conversation.

### The Five-Stage Model for AI-Era Buying

We use five stages. Not because buying is linear, but because prompt intent clusters around these stages. Understanding the stage tells you what the buyer is really asking, which tells you how to track and optimize.

```
┌─────────────────────────────────────────────────────────────────┐
│  STAGE 1: PROBLEM RECOGNITION                                   │
│  "Do I have this problem? How bad is it?"                       │
│  Intent: Informational │ Volume: Highest │ Conversion: Lowest   │
├─────────────────────────────────────────────────────────────────┤
│  STAGE 2: SOLUTION EXPLORATION                                   │
│  "What types of solutions exist? What approach should I take?"  │
│  Intent: Commercial │ Volume: High │ Conversion: Low-Medium     │
├─────────────────────────────────────────────────────────────────┤
│  STAGE 3: EVALUATION & SHORTLISTING                             │
│  "Which specific tools/vendors should I consider?"              │
│  Intent: High Commercial │ Volume: Medium │ Conversion: Medium  │
├─────────────────────────────────────────────────────────────────┤
│  STAGE 4: DECISION & VALIDATION                                 │
│  "Should I buy this? What are the risks?"                       │
│  Intent: Transactional │ Volume: Lower │ Conversion: Highest    │
├─────────────────────────────────────────────────────────────────┤
│  STAGE 5: POST-PURCHASE & ADVOCACY                              │
│  "How do I implement? Was this the right call?"                 │
│  Intent: Navigational │ Volume: Lowest │ Conversion: Retention  │
└─────────────────────────────────────────────────────────────────┘
```

### The Three Dimensions of Every Prompt

Every prompt we track sits at the intersection of three dimensions:

| Dimension | What It Determines | Examples |
|-----------|-------------------|----------|
| **Stage** | What the buyer is trying to accomplish | Problem recognition, evaluation, decision |
| **Context** | Who the buyer is and what constrains them | Industry, company size, role, tech stack, budget |
| **Category** | What type of information they're seeking | Comparison, alternatives, pricing, features, risk |

A prompt like "Best CRM for a 50-person healthcare startup with Salesforce integration" is:
- **Stage:** Evaluation (building a shortlist)
- **Context:** Healthcare, startup, 50 people, Salesforce user
- **Category:** Best-of with integration constraint

Understanding all three dimensions is what separates useful tracking from noise.

---

## Part 2: The Prompt Category Taxonomy

We've identified 16 distinct prompt categories across the full buyer journey. The original AEO playbook covered six (comparison, alternatives, best-of, reviews, pricing, features). That's incomplete. It only covers the evaluation stage.

Here's the full taxonomy:

### Stage 1: Problem Recognition Prompts

#### 1.1 Problem Definition Prompts
**What they are:** Buyers trying to understand and frame a problem they suspect they have.

**Pattern:** `What is [problem]?` / `How do I know if [condition]?` / `What causes [business challenge]?`

**Examples:**
```
"What are the main challenges with managing expenses at a growing startup?"
"How do I know if my team needs a dedicated project management tool?"
"What causes data silos in mid-market companies?"
"Signs your content operations are broken"
"Why do marketing teams struggle with attribution?"
```

**Why it matters:** 80% of B2B content targets late-stage buyers. Brands that show up at problem recognition build trust before competition enters the picture. Only 20% of companies are present during this stage.

**Tracking value:** Lower direct conversion but establishes the brand as a thought leader. AI systems that cite you here are more likely to recommend you later.

#### 1.2 Category Education Prompts
**What they are:** Buyers learning what category of solution might address their problem.

**Pattern:** `What is [category]?` / `Do I need a [category] tool?` / `What does [category] software do?`

**Examples:**
```
"What is AEO and why does it matter?"
"Do I need a CDP or is my CRM enough?"
"What's the difference between a CMS and a content operations platform?"
"When should a company invest in observability tools?"
"What is AI visibility monitoring?"
```

**Why it matters:** This is where buyers form their mental model of the solution space. The brand that defines the category has an enormous advantage. CheckThat's play here is defining "AI visibility" as a category.

---

### Stage 2: Solution Exploration Prompts

#### 2.1 Approach Comparison Prompts
**What they are:** Buyers comparing solution approaches, not specific vendors.

**Pattern:** `[Approach A] vs [Approach B]` / `Best practices for [solution type]` / `How do companies typically [solve X]?`

**Examples:**
```
"In-house content team vs agency vs AI content tools"
"Build vs buy for marketing automation"
"Self-hosted vs cloud CRM: which approach is better?"
"How do enterprise companies handle expense management?"
"Open source vs commercial observability platforms"
```

**Why it matters:** Buyers are choosing their approach before they choose a vendor. If your approach isn't represented, you're not in the conversation.

#### 2.2 Landscape / Market Map Prompts
**What they are:** Buyers trying to understand the market structure and key players.

**Pattern:** `Who are the main players in [category]?` / `[Category] market landscape` / `Types of [category] solutions`

**Examples:**
```
"Who are the main players in the AEO space?"
"Map the expense management software market"
"What types of CRM solutions exist?"
"How does the AI content tools market break down?"
"Emerging players in AI visibility monitoring"
```

**Why it matters:** These prompts shape the buyer's mental map of the market. Being named as a "main player" here sets the context for all downstream evaluation.

---

### Stage 3: Evaluation & Shortlisting Prompts

This is the most prompt-dense stage. Six subcategories.

#### 3.1 Direct Comparison Prompts
**What they are:** Head-to-head matchups. The most common evaluation-stage prompts.

**Pattern:** `[Brand A] vs [Brand B]` / `[Brand A] vs [Brand B] for [use case]` / `Compare [Brand A], [Brand B], [Brand C]`

**Examples:**
```
"HubSpot vs Salesforce for a 50-person SaaS company"
"Profound vs Scrunch vs Peec AI for AEO monitoring"
"Ramp vs Brex vs Mercury for series A startups"
"Notion vs Confluence for engineering documentation"
"Compare top 5 CRM tools for healthcare"
```

**Tracking imperative:** Track your brand vs each major competitor. Also track competitor vs competitor matchups where you're not named—you want to break into those conversations.

#### 3.2 "Alternatives To" Prompts
**What they are:** The highest-intent evaluation signal. Buyers actively looking to switch or expand their shortlist.

**Pattern:** `Alternatives to [Brand]` / `[Brand] replacement` / `What can I use instead of [Brand]?`

**Examples:**
```
"Alternatives to Profound for AI visibility"
"Best Salesforce alternatives for small teams"
"What can I use instead of Semrush for AEO?"
"Open source alternatives to [commercial tool]"
"Cheaper alternatives to [premium competitor]"
```

**Why it matters:** These are the highest-conversion prompts. If you're not appearing as an alternative to your competitors, you're leaving pipeline on the table.

#### 3.3 Best-of-Category Prompts
**What they are:** The "best of" queries. Where shortlists are born.

**Pattern:** `Best [category] for [constraint]` / `Top [category] tools for [role/team]`

**Examples:**
```
"Best AI visibility tools for B2B SaaS"
"Best CRM for healthcare companies"
"Best expense management software for startups"
"Top content operations platforms for enterprise"
"Best AEO tools under $300/month"
```

**Key variables to track:**
- By industry (healthcare, SaaS, fintech, manufacturing, etc.)
- By company size (startup, SMB, mid-market, enterprise)
- By role (CMO, VP Marketing, Head of Growth, CTO)
- By feature constraint (with [specific capability])
- By integration (works with [platform])

#### 3.4 Review & Reputation Prompts
**What they are:** Trust-building queries. Validating brands already on the shortlist.

**Pattern:** `[Brand] reviews` / `Is [Brand] good for [use case]?` / `[Brand] pros and cons`

**Examples:**
```
"CheckThat reviews 2026"
"Is Profound worth the price?"
"Scrunch AI pros and cons"
"What do people say about Peec AI?"
"[Brand] customer complaints"
"Top-rated AEO tools"
```

**Why it matters:** Negative or missing information here knocks you off shortlists. G2 dominates review citations (8.25% of ChatGPT citations for review queries). Active review management is non-optional.

#### 3.5 Pricing & Cost Prompts
**What they are:** Budget-stage evaluation. Comparing value, not just features.

**Pattern:** `[Brand] pricing` / `Best [category] under $X` / `[Brand] vs [Brand] pricing`

**Examples:**
```
"CheckThat pricing"
"How much does Profound cost?"
"Best AEO tools under $500/month"
"Profound vs Peec AI pricing comparison"
"Free AEO monitoring tools"
"[Brand] free tier vs paid"
```

**Critical note:** If AI returns outdated or incorrect pricing, it eliminates you. Transparent, structured pricing pages with schema markup are essential.

#### 3.6 Feature & Integration Prompts
**What they are:** Capability-check queries. Validating you can do what they need.

**Pattern:** `Does [Brand] have [feature]?` / `Which [category] has [capability]?` / `[Brand] integrations`

**Examples:**
```
"Does CheckThat track Google AI Mode?"
"Which AEO tools support Claude monitoring?"
"Does Profound have a free tier?"
"CheckThat API documentation"
"Best AEO tool with Slack integration"
"Which AI visibility tool tracks the most engines?"
```

**Why it matters:** A "no" or incomplete answer kills deals. You need to know if AI accurately represents your capabilities.

---

### Stage 4: Decision & Validation Prompts

#### 4.1 Implementation & Migration Prompts
**What they are:** Buyers validating that switching or adopting is feasible.

**Pattern:** `How hard is it to [implement/switch to] [Brand]?` / `[Brand] onboarding time` / `Migrate from [Brand A] to [Brand B]`

**Examples:**
```
"How long does it take to set up CheckThat?"
"Migrate from Semrush to Profound for AEO tracking"
"Implementation timeline for enterprise CRM"
"What does onboarding look like for [Brand]?"
"How hard is it to switch from [competitor] to [your brand]?"
```

#### 4.2 Risk & Compliance Prompts
**What they are:** Buyers assessing risk before committing.

**Pattern:** `Is [Brand] [compliance standard] compliant?` / `[Brand] security` / `Risks of [Brand/Category]`

**Examples:**
```
"Is [Brand] SOC2 compliant?"
"Does [Brand] support SSO/SAML?"
"[Brand] data privacy policy"
"GDPR compliance for [category] tools"
"Security risks of using AI visibility tools"
"[Brand] uptime and reliability"
```

#### 4.3 ROI & Business Case Prompts
**What they are:** Buyers building the internal case for purchase.

**Pattern:** `What's the ROI of [Brand/Category]?` / `How to justify [purchase] to leadership` / `[Brand] case studies`

**Examples:**
```
"What's the ROI of investing in AEO monitoring?"
"How to justify AEO spend to the CMO"
"[Brand] case studies for B2B SaaS"
"Cost of not monitoring AI visibility"
"Payback period for AEO tools"
```

#### 4.4 Expert Opinion & Social Proof Prompts
**What they are:** Buyers seeking external validation from analysts, communities, or experts.

**Pattern:** `What do analysts say about [Brand]?` / `[Brand] on Reddit` / `Expert reviews of [Brand]`

**Examples:**
```
"What does Gartner say about AI visibility tools?"
"Reddit opinions on AEO monitoring tools"
"What do marketing experts recommend for AEO?"
"[Brand] community feedback"
"Industry analyst recommendations for [category]"
```

**Why it matters:** Reddit is cited in 40%+ of Perplexity responses and is a top-10 most-cited domain across all AI engines. Community presence is not optional.

---

### Stage 5: Post-Purchase & Advocacy Prompts

#### 5.1 Implementation & How-To Prompts
**What they are:** New customers learning to use the product.

**Pattern:** `How to [use feature] in [Brand]` / `[Brand] tutorial` / `[Brand] best practices`

**Examples:**
```
"How to set up custom prompts in CheckThat"
"Best practices for AEO prompt tracking"
"[Brand] beginner's guide"
"How to interpret AI visibility data"
"[Brand] advanced features tutorial"
```

#### 5.2 Trend & Future Prompts
**What they are:** Existing users and potential buyers evaluating long-term viability.

**Pattern:** `Is [Brand/Category] the future of [domain]?` / `[Category] trends [year]` / `Will [Brand] survive?`

**Examples:**
```
"Is AEO the future of marketing?"
"AI visibility trends 2026"
"Will traditional SEO tools add AEO features?"
"Future of B2B software discovery"
"Is [Brand] growing or declining?"
```

---

## Part 3: The Context Variables Matrix

Every prompt pattern above can be multiplied across context variables. This is how 16 categories become 10,000+ prompts.

### The Eight Dimensions

| Dimension | What It Captures | Example Values |
|-----------|-----------------|----------------|
| **1. Industry Vertical** | Buyer's business domain | Healthcare, FinTech, SaaS, Manufacturing, Legal, Education, Government, Retail, Real Estate |
| **2. Company Size** | Scale and complexity of org | Startup (1-50), SMB (50-200), Mid-market (200-1000), Enterprise (1000+) |
| **3. Buyer Role / Persona** | Who is asking | CMO, VP Marketing, Head of Growth, CTO, CFO, Procurement, Founder, IC Marketer |
| **4. Use Case** | Specific problem or workflow | Content optimization, competitive monitoring, brand reputation, lead gen, market research |
| **5. Geographic / Regulatory** | Location constraints | US, EU/GDPR, UK, APAC, specific country regulatory requirements |
| **6. Tech Stack / Integration** | Current tools and platforms | HubSpot, Salesforce, Semrush, GA4, Slack, custom integrations |
| **7. Budget** | Price sensitivity | Free, under $100/mo, $100-500/mo, $500-2K/mo, enterprise budget |
| **8. Timeline / Urgency** | How fast they need to act | Immediate, this quarter, planning for next year, exploring |

### How to Generate Prompts from the Matrix

Take any prompt pattern and cross it with relevant context variables:

**Pattern:** `Best [category] for [constraint]`

**Generated prompts:**
```
# By industry:
"Best AI visibility tools for healthcare companies"
"Best AEO monitoring for fintech startups"
"Best AI visibility platform for B2B SaaS"

# By company size:
"Best AEO tools for startups"
"Best AI visibility monitoring for enterprise"
"AI visibility tools for mid-market companies"

# By role:
"Best AI visibility tools for CMOs"
"AEO monitoring for growth marketers"
"AI visibility dashboard for content teams"

# By integration:
"Best AEO tool that integrates with HubSpot"
"AI visibility tool with Slack notifications"
"AEO monitoring that connects to Google Analytics"

# By budget:
"Free AI visibility monitoring tools"
"Best AEO tools under $300/month"
"Enterprise AI visibility platforms"

# Combined:
"Best AI visibility tool for a Series B SaaS company under $500/month"
"Top AEO platform for healthcare mid-market companies using HubSpot"
```

### The Combinatorial Math

For a single category with:
- 16 prompt categories
- 9 industry verticals
- 4 company sizes
- 8 buyer roles
- 5 use cases

That's 16 × 9 × 4 × 8 × 5 = **23,040 possible prompts** per category.

Not all combinations are meaningful. The methodology section below explains how to prioritize.

---

## Part 4: Persona-Injected Prompts

### What They Are

Persona-injected prompts add buyer context to the beginning of the prompt. They change what AI recommends because the AI tailors its answer to the stated persona.

### Why They Matter

The same question from different personas gets different answers:

**Without persona:**
```
"Best AI visibility tool"
→ Generic list of tools, probably alphabetical or by market share
```

**With VP Marketing persona:**
```
"I'm a VP of Marketing at a 200-person B2B SaaS company ($50M ARR).
We currently use Semrush for SEO and HubSpot for marketing automation.
We're seeing declining organic traffic from AI search and need to
understand our AI visibility. What AEO tools should I evaluate?"
→ Tailored response: enterprise-grade tools, integration with HubSpot,
   strategic insights focus, likely mentions Profound, Conductor, CheckThat
```

**With Startup Founder persona:**
```
"I'm a first-time founder at a 15-person seed-stage startup.
We have no marketing team yet. I keep hearing about AEO and
AI visibility but don't know where to start. What's the simplest
way to understand how AI sees my brand?"
→ Tailored response: free tools, simple setup,
   likely mentions CheckThat free tier, HubSpot AEO Grader
```

### The Persona Variable Stack

When constructing persona-injected prompts, include these variables in order of impact:

1. **Title/Role** — Most impactful. Determines complexity and focus area.
2. **Company size** — Revenue or headcount. Determines scale of recommendation.
3. **Current tools** — What they already use. Determines integration recommendations.
4. **Specific pain point** — What's not working. Determines which features get highlighted.
5. **Budget stage** — "Exploring" vs "ready to buy." Determines how actionable the response is.
6. **Timeline** — When they need it. Determines urgency framing.

### Persona Templates for B2B Software

**The CMO / VP Marketing:**
```
"I'm a [VP of Marketing / CMO] at a [company size]-person [industry] company
([revenue range] ARR). My team is [team size] people. We use [current tools].
[Specific pain point]. [Question]."
```

**The CTO / Technical Leader:**
```
"I'm the [CTO / VP Engineering] at a [company size]-person [industry] company.
Our stack includes [tech stack]. We need [technical requirement].
Security and compliance are [priority level]. [Question]."
```

**The CFO / Financial Decision-Maker:**
```
"I'm the [CFO / Head of Finance] at a [company size]-person company
([revenue range]). We spend [budget] annually on [category].
I need to understand [ROI / TCO / cost comparison]. [Question]."
```

**The Founder / CEO:**
```
"I'm the [founder / CEO] of a [stage]-stage [industry] startup.
We have [team size] people and [funding level] in funding.
I'm trying to figure out [strategic question]. [Question]."
```

**The IC / Practitioner:**
```
"I'm a [title: growth marketer, content strategist, etc.] at a [industry] company.
My day-to-day involves [workflow description]. I'm looking for a tool that
[specific need]. [Question]."
```

### When to Use Persona-Injected Prompts

Not every prompt needs persona injection. Use this framework:

| Prompt Type | Persona Injection Value | When to Use |
|-------------|----------------------|-------------|
| Problem definition | Medium | When industry context matters |
| Category education | Low | Usually generic enough without persona |
| Best-of category | **High** | Different personas get different recommendations |
| Direct comparison | Medium | When company size affects the comparison |
| Alternatives | Medium | When use case context matters |
| Pricing | Low | Price is price, but budget context helps |
| Features | Medium | When technical role context matters |
| Implementation | **High** | Implementation varies wildly by company size/type |
| Risk/compliance | **High** | Industry-specific compliance requirements |
| ROI/business case | **High** | ROI framing varies by role and company stage |

---

## Part 5: Multi-Turn Prompt Sequences

### Why Multi-Turn Matters

Real buyers don't ask one prompt. They have conversations with AI. A typical B2B evaluation involves 5-8 turns. Tracking single prompts misses the journey.

### The Canonical Sequences

#### Sequence 1: The Classic Evaluation Flow
```
Turn 1: "What is [category]?"
Turn 2: "Best [category] tools for [use case]"
Turn 3: "[Tool A] vs [Tool B]"
Turn 4: "[Tool A] pricing"
Turn 5: "[Tool A] reviews"
Turn 6: "How to set up [Tool A]"
```

#### Sequence 2: The Problem-First Flow
```
Turn 1: "Why is our [metric] declining?"
Turn 2: "How do companies solve [problem]?"
Turn 3: "What tools help with [solution approach]?"
Turn 4: "Best [category] for [our situation]"
Turn 5: "Compare [top 3 recommendations]"
Turn 6: "Should we buy [Tool A]?"
```

#### Sequence 3: The Competitive Switch Flow
```
Turn 1: "[Current tool] alternatives"
Turn 2: "Why are companies leaving [current tool]?"
Turn 3: "[Current tool] vs [Alternative A] vs [Alternative B]"
Turn 4: "How hard is it to migrate from [current tool] to [alternative]?"
Turn 5: "[Alternative] pricing for [our size]"
Turn 6: "[Alternative] implementation timeline"
```

#### Sequence 4: The Persona-Driven Deep Dive
```
Turn 1: "I'm a [persona]. I need help with [problem]."
Turn 2: "Which of those options works best for [constraint]?"
Turn 3: "Tell me more about [recommended tool]"
Turn 4: "What are the downsides of [recommended tool]?"
Turn 5: "How does [recommended tool] compare to [alternative]?"
Turn 6: "What would implementation look like for a company like mine?"
```

### How to Track Sequences

For CheckThat's shared index:
1. Track individual prompts at each stage
2. Tag prompts by their position in typical sequences
3. Measure how brand visibility changes across the sequence
4. Identify drop-off points (where you appear in turn 2 but disappear by turn 4)

A brand might be visible at "best [category] for [use case]" but invisible at "[Brand] vs [Competitor]" — that's a content gap in the comparison stage.

---

## Part 6: The Prompt Quality Framework

### Not All Prompts Are Equal

The difference between a useful prompt library and noise is quality. Here's how we evaluate prompt quality at CheckThat.

### The Five-Point Quality Score

Rate each prompt 1-5 on these dimensions:

| Dimension | Score 1 (Low) | Score 5 (High) |
|-----------|--------------|-----------------|
| **Buyer Realism** | Nobody would actually ask this | Verbatim from sales call transcripts |
| **Commercial Intent** | Pure information, no buying signal | Active purchase decision |
| **Brand Differentiation** | Every competitor shows up the same way | Clear winners and losers in AI response |
| **Actionable Signal** | Response is generic, nothing to optimize | Clear gaps you can close with content |
| **Volume Proxy** | Niche query, low search volume equivalent | High-volume search term equivalent |

**Priority Tiers:**
- **Tier 1 (Score 20-25):** Track weekly, immediate content action
- **Tier 2 (Score 15-19):** Track weekly, content queue
- **Tier 3 (Score 10-14):** Track bi-weekly, monitor
- **Tier 4 (Score <10):** Deprioritize or remove

### Sources for High-Quality Prompts

Don't guess. Mine actual buyer language from these sources, ranked by quality:

| Source | Quality | What to Extract |
|--------|---------|----------------|
| **Sales call transcripts** | Highest | Exact questions prospects ask during discovery and evaluation |
| **Customer support tickets** | High | Post-sale questions that mirror pre-sale evaluation |
| **Reddit threads** | High | Raw, unfiltered buyer language (Reddit cited in 40%+ of Perplexity responses) |
| **G2 / Capterra reviews** | High | How buyers describe your product and competitors in their own words |
| **LinkedIn discussions** | Medium-High | How industry professionals frame comparisons and debates |
| **Quora threads** | Medium | Longer-form questions with more context |
| **Search Console data** | Medium | Query patterns from people already finding you |
| **Competitor content** | Medium | What questions competitors are answering |
| **Internal brainstorming** | Low-Medium | Good for coverage but often doesn't match buyer language |

### The "Would a Buyer Say This?" Test

Before adding any prompt to the library, ask:

1. **Is this how a human talks?** — "Best CRM for mid-market B2B SaaS companies in the healthcare vertical with Salesforce integration requirements" is not how humans talk. "I need a CRM that works with Salesforce for our healthcare startup—what are my options?" is.

2. **Does this reflect a real buying moment?** — "Compare the API documentation quality of [Brand A] vs [Brand B]" might be real for developer tools. For marketing software, probably not.

3. **Would this prompt appear in a sales discovery call?** — If a prospect wouldn't ask this question to a sales rep, it's probably not a prompt worth tracking.

---

## Part 7: The Measurement Framework

### What to Measure Per Prompt

For each prompt tracked, capture:

| Metric | What It Is | Why It Matters |
|--------|-----------|----------------|
| **Mentioned** | Was your brand named? (yes/no) | Basic visibility signal |
| **Cited** | Was your content linked? (yes/no) | Authority signal |
| **Position** | Where in response (1st, 2nd, listed, afterthought) | First mention carries 3-5x more weight |
| **Sentiment** | Positive, neutral, negative | Brand perception quality |
| **Positioning** | Primary solution, viable alternative, or afterthought | Competitive strength |
| **Competitors** | Which competitors were mentioned? | Share of voice context |
| **Sources cited** | What URLs did AI reference? | Tells you where to focus content efforts |
| **Accuracy** | Is the information about you correct? | Wrong info kills deals |
| **Engine** | Which AI engine (ChatGPT, Perplexity, Claude, Gemini, Grok) | Different engines, different visibility |

### Aggregate Metrics

| Metric | Calculation | Target |
|--------|------------|--------|
| **Inclusion Rate** | % of tracked prompts where brand appears | >60% for evaluation-stage prompts |
| **Citation Rate** | % of mentions with a link to your content | Higher = authority signal |
| **Share of Voice** | Your mentions / (your mentions + all competitor mentions) × 100 | Lead in core segments |
| **First Mention Rate** | % of appearances where you're mentioned first | Higher = stronger positioning |
| **Sentiment Score** | Weighted positive/neutral/negative breakdown | >80% positive or neutral |
| **Accuracy Rate** | % of responses with correct information | Target 100%. Fix inaccuracies immediately |
| **Stability Index** | Week-to-week fluctuation in visibility | Lower = stronger AI positioning |
| **Cross-Engine Coverage** | % of engines where you appear for same prompt | Aim for presence across all major engines |

### The Stability Problem

Only 30% of brands stayed visible from one AI answer to the next. Just 20% held presence across five consecutive runs. This volatility is why weekly tracking is the minimum cadence.

High-authority domains maintain <10% volatility. Building authority signals (brand search volume, Wikipedia presence, review platform presence, structured data) reduces volatility.

---

## Part 8: AI Engine Differences

### Why Multi-Engine Tracking Matters

Each AI engine has different citation patterns, source preferences, and biases. A brand visible on ChatGPT may be invisible on Perplexity.

### Engine-by-Engine Breakdown

#### ChatGPT
- **Market share:** 87.4% of AI referral traffic, 800M weekly active users
- **Source bias:** Heavy Wikipedia reliance (12.1% of citations). Strong UGC presence (Reddit, LinkedIn, Medium).
- **Citation style:** Citations present but variable formatting. Not always inline.
- **Key insight:** Dominates volume. If you're visible on ChatGPT, you reach the most buyers.

#### Perplexity
- **Differentiator:** Real-time web retrieval. Cites by default with inline numbered references [1], [2], [3].
- **Source bias:** Favors Reddit, recent articles, academic sources. Strong recency preference.
- **Citation style:** Most transparent. Numbered inline citations are core to the product.
- **Key insight:** Best for research-oriented buyers. Strong Reddit signal.

#### Claude
- **Differentiator:** Lowest hallucination rate. Careful, methodical reasoning.
- **Source bias:** Careful about source quality. Growing in specialized B2B contexts. Developer-favored.
- **Citation style:** Will not cite unless explicitly asked and provided source material. No default web browsing.
- **Key insight:** Growing 8-10x faster than ChatGPT. Especially strong with technical buyers.

#### Google Gemini / AI Mode
- **Differentiator:** Integrated into Google Search. AI Overviews appear in 25% of searches.
- **Source bias:** Diversified cross-platform. 99% of URLs in AI Mode appear in top 20 organic results.
- **Citation style:** Sources listed separately, less inline attribution.
- **Key insight:** Largest potential reach. Traditional SEO still matters for Gemini visibility.

#### Grok
- **Differentiator:** Native access to X/Twitter data in real-time.
- **Source bias:** Considers recent X discussions, trending topics, influential user commentary.
- **Key insight:** Minor player currently, but unique advantage for brands with strong Twitter presence.

### Cross-Engine Strategy

67.4% of domains tracked are cited by exactly one AI platform. Only 6.5% achieve presence across 5+ platforms. Multi-engine visibility requires:

1. **Wikipedia presence** → Cited across all engines
2. **Reddit presence** → Especially important for Perplexity and Google AI
3. **Review platforms (G2)** → Feeds multiple engines' evaluation responses
4. **Structured content** → Makes it easy for any engine to extract and cite
5. **Brand search volume** → The strongest cross-engine signal (0.334 correlation)

---

## Part 9: AI Visibility Signals — What Makes Brands Appear

Understanding what signals cause LLMs to mention a brand is essential for both tracking and optimization.

### The Signal Hierarchy

Ranked by impact:

| Signal | Correlation / Impact | Action |
|--------|---------------------|--------|
| **Brand search volume** | 0.334 correlation (strongest predictor) | Invest in brand awareness campaigns, PR, thought leadership |
| **Semantic completeness** | 0.87 correlation with citation | Build comprehensive, multi-angle content covering topics fully |
| **Content freshness** | 65% of citations from <1yr old content | Update content regularly; 90-day refresh cycle |
| **Wikipedia presence** | 12.1% of ChatGPT citations; 50% of top-cited agencies have Wikipedia pages | Ensure accurate, current Wikipedia page |
| **Metadata & structured data** | 0.68 correlation | Implement JSON-LD schema: Organization, Product, FAQPage, HowTo |
| **Semantic HTML** | 0.65 correlation | Use proper heading hierarchy, semantic elements, clear structure |
| **Organic keywords** | 0.41 correlation (outperforms backlinks) | Traditional SEO keyword strategy still matters |
| **Reddit presence** | Top-10 most-cited domain across engines | Authentic participation in relevant subreddits |
| **Review platform presence** | G2 = 8.25% of ChatGPT citations | Actively manage G2, Capterra, TrustRadius profiles |
| **Backlinks** | 0.37 correlation (weaker than expected) | Still matters but less than in traditional SEO |
| **Third-party mentions** | 85% of brand mentions come from third-party pages | PR, guest posts, analyst coverage, partnerships |
| **Answer-first content structure** | 340% higher inclusion for semantic completeness >8.5/10 | Lead with answers in first 40-60 words of each section |

### The Content Structure That Gets Cited

LLMs prefer content that's easy to chunk and extract:

```
H1: [Question the buyer is asking]

[Direct answer: 30-60 words]

H2: Why This Matters
[2-3 bullet points on outcomes/importance]

H2: How It Works
[Numbered steps or detailed explanation]

H2: [Comparison or examples]
[Table, list, or structured data]

H2: FAQ
[3-5 related questions with direct answers]
```

**Each section must be self-contained.** AI extracts passages, not full pages. If a section doesn't make sense pulled out of context, it won't get cited.

---

## Part 10: Building the Prompt Library — Step by Step

### Step 1: Define Your Category and Competitive Set

Before writing a single prompt:
- Name your category (e.g., "AI visibility platform", "expense management software")
- List your top 5-10 competitors
- List 3-5 key industries you serve
- List 3-5 buyer personas
- List your top 5 differentiating features

### Step 2: Generate the Stage-Category Matrix

Cross the 16 prompt categories with relevant context variables:

```
For each of the 16 prompt categories:
  For each major competitor (5-10):
    For each key industry (3-5):
      For each company size (4):
        For each buyer persona (3-5):
          → Generate the prompt
```

### Step 3: Filter for Realism and Value

Apply the five-point quality score. Cut anything below Tier 3 (score <10).

### Step 4: Prioritize with the Value/Effort Matrix

| Quadrant | Value | Effort | Action |
|----------|-------|--------|--------|
| **Quick Wins** | High | Low | Track immediately. Content exists or needs light optimization. |
| **Strategic Bets** | High | High | Track and queue for new content creation. |
| **Easy Adds** | Low | Low | Track as background. Opportunistic optimization. |
| **Deprioritize** | Low | High | Skip for now. Revisit quarterly. |

### Step 5: Set Starting Volume by Maturity

| Stage | Prompt Count | Focus |
|-------|-------------|-------|
| **Just starting** | 50-100 | Top 3 competitors, primary use case, evaluation stage only |
| **Growing program** | 200-500 | Add personas, industries, expand to all funnel stages |
| **Mature program** | 500-2,000 | Full matrix coverage, persona-injected variants, multi-language |
| **Enterprise** | 2,000+ | Multi-region, multi-product line, competitive intelligence |

### Step 6: Establish Tracking Cadence

| Cadence | When to Use |
|---------|-------------|
| **Weekly** | Standard. Start here. Frequent enough for trends, not drowning. |
| **Near-daily** | Launches, crisis, fast-moving competitive situations. |
| **Bi-weekly** | Slow-moving categories. |
| **Monthly** | Long-term trend layer on top of weekly. |

---

## Part 11: From Tracking to Content Action

The whole point of tracking is to close gaps. Here's the action framework.

### The Gap-to-Content Loop

| Gap Identified | Content Action |
|---------------|---------------|
| Not appearing for "[X] vs [Y]" comparisons | Create definitive comparison page. Lead with answer, use tables, address both sides fairly. |
| Not appearing for "alternatives to [competitor]" | Build alternatives content. Differentiate clearly. Target competitor's weaknesses. |
| Not appearing for "best [category] for [use case]" | Create industry-specific landing pages and case studies. |
| Appearing with incorrect info | Update pricing pages. Add schema markup. Refresh FAQ content. Correct Wikipedia if applicable. |
| Mentioned but not cited (no link) | Improve content structure: lead with direct answers, add schema, make content more extractable. |
| Competitor cited from third-party source | Create your own version of that content type, or build relationship with that source. |
| Negative sentiment | Address the criticism directly in your content. Publish counter-evidence. Improve the product. |
| Appear in turn 1 but drop off by turn 3 | You have awareness but not depth. Build deeper evaluation-stage content. |

### Content Formatting for AI Extraction

1. **Lead with the answer.** First 40-60 words of each section should contain the key claim.
2. **Use headers as questions.** Rewrite H2s/H3s to match how buyers actually prompt AI.
3. **Make sections standalone.** Each section should make sense if pulled out of context.
4. **Use structured formats.** Comparison tables, pros/cons lists, FAQ blocks are naturally extractable.
5. **Implement schema markup.** Product, FAQ, Comparison, Review schema. This is not optional.
6. **Update regularly.** Content updated within 90 days receives 78% more citations.

### Authority Building for AI Visibility

| Signal | Action | Timeline |
|--------|--------|----------|
| Brand search volume | Brand awareness campaigns, thought leadership, PR | Ongoing, compounds over time |
| Wikipedia | Ensure accurate Wikipedia page (if notable). Don't try to create one if you don't qualify—focus on notability signals. | 3-6 months |
| Reddit | Authentic participation in 3-5 relevant subreddits. Consistency > volume. | Ongoing, weekly cadence |
| Review platforms | Actively grow G2, Capterra profiles. Respond to reviews. | Ongoing, quarterly review pushes |
| Structured data | Implement JSON-LD schema across all content types | One-time setup + maintenance |
| Third-party mentions | PR, guest posts, podcast appearances, analyst relationships | Ongoing, monthly cadence |
| Content freshness | 90-day refresh cycle for key pages | Quarterly |

---

## Part 12: Prompt Pattern Templates (Ready to Use)

### Template Format

Each template below follows this structure:
```
PATTERN: The generalized prompt structure
VARIABLES: What to customize
STAGE: Where it sits in the buyer journey
PRIORITY: How important for most B2B companies
```

### Problem Recognition Templates

```
PATTERN: "What are the main challenges with [problem area] at [company type]?"
VARIABLES: problem area, company type
STAGE: Problem Recognition
PRIORITY: Medium (builds early trust)

PATTERN: "How do I know if my [team/company] needs [category]?"
VARIABLES: team type, category
STAGE: Problem Recognition
PRIORITY: Medium

PATTERN: "What causes [business problem] in [industry] companies?"
VARIABLES: business problem, industry
STAGE: Problem Recognition
PRIORITY: Low-Medium
```

### Solution Exploration Templates

```
PATTERN: "[Approach A] vs [Approach B] for [use case]"
VARIABLES: two solution approaches, use case
STAGE: Solution Exploration
PRIORITY: Medium-High

PATTERN: "Who are the main players in the [category] space?"
VARIABLES: category
STAGE: Solution Exploration
PRIORITY: High

PATTERN: "How do [company type] companies typically handle [problem]?"
VARIABLES: company type, problem
STAGE: Solution Exploration
PRIORITY: Medium
```

### Evaluation Templates (Highest Priority)

```
PATTERN: "[Brand A] vs [Brand B]"
VARIABLES: your brand, each competitor
STAGE: Evaluation
PRIORITY: Critical

PATTERN: "[Brand A] vs [Brand B] for [use case]"
VARIABLES: your brand, competitor, use case
STAGE: Evaluation
PRIORITY: Critical

PATTERN: "Alternatives to [Competitor]"
VARIABLES: each major competitor
STAGE: Evaluation
PRIORITY: Critical

PATTERN: "Best [Competitor] alternatives for [use case]"
VARIABLES: competitor, use case
STAGE: Evaluation
PRIORITY: Critical

PATTERN: "Best [category] for [industry]"
VARIABLES: category, each target industry
STAGE: Evaluation
PRIORITY: Critical

PATTERN: "Best [category] for [company size]"
VARIABLES: category, company size tier
STAGE: Evaluation
PRIORITY: High

PATTERN: "Best [category] with [key feature/integration]"
VARIABLES: category, differentiating feature or integration
STAGE: Evaluation
PRIORITY: High

PATTERN: "Top [category] tools for [role/team]"
VARIABLES: category, buyer role
STAGE: Evaluation
PRIORITY: High

PATTERN: "[Brand] reviews [year]"
VARIABLES: your brand, current year
STAGE: Evaluation
PRIORITY: High

PATTERN: "Is [Brand] good for [use case]?"
VARIABLES: your brand, each use case
STAGE: Evaluation
PRIORITY: High

PATTERN: "[Brand] pricing"
VARIABLES: your brand and each competitor
STAGE: Evaluation
PRIORITY: High

PATTERN: "[Brand] vs [Brand] pricing"
VARIABLES: your brand, competitor
STAGE: Evaluation
PRIORITY: Medium-High

PATTERN: "Best [category] under $[price point] per month"
VARIABLES: category, relevant price points
STAGE: Evaluation
PRIORITY: Medium-High

PATTERN: "Does [Brand] have [feature]?"
VARIABLES: your brand, each top feature
STAGE: Evaluation
PRIORITY: High

PATTERN: "[Brand] integrations"
VARIABLES: your brand
STAGE: Evaluation
PRIORITY: Medium-High

PATTERN: "Which [category] has the best [differentiator]?"
VARIABLES: category, your key differentiator
STAGE: Evaluation
PRIORITY: High
```

### Decision & Validation Templates

```
PATTERN: "How hard is it to switch from [Brand A] to [Brand B]?"
VARIABLES: competitor brand (from), your brand (to)
STAGE: Decision
PRIORITY: Medium-High

PATTERN: "Is [Brand] SOC2/GDPR/HIPAA compliant?"
VARIABLES: your brand, relevant compliance standards
STAGE: Decision
PRIORITY: High (for regulated industries)

PATTERN: "What's the ROI of [category/brand]?"
VARIABLES: category or your brand
STAGE: Decision
PRIORITY: Medium-High

PATTERN: "[Brand] case studies for [industry]"
VARIABLES: your brand, target industry
STAGE: Decision
PRIORITY: Medium

PATTERN: "What do [analysts/experts/Reddit] say about [Brand]?"
VARIABLES: source type, your brand
STAGE: Decision
PRIORITY: Medium-High

PATTERN: "[Brand] implementation timeline"
VARIABLES: your brand
STAGE: Decision
PRIORITY: Medium
```

### Persona-Injected Templates

```
PATTERN: "I'm a [title] at a [size]-person [industry] company.
We use [current tools]. We need [requirement]. [Question]."
VARIABLES: title, company size, industry, current tools, requirement
STAGE: Any (highest impact at Evaluation and Decision)
PRIORITY: High for enterprise-focused tracking

PATTERN: "I'm evaluating [category] tools for my team of [size]
in [industry]. Our budget is [range]. What should I consider?"
VARIABLES: category, team size, industry, budget range
STAGE: Evaluation
PRIORITY: High

PATTERN: "As a [role] at a [stage]-stage startup, should I invest
in [category] now or wait?"
VARIABLES: role, company stage, category
STAGE: Solution Exploration / Decision
PRIORITY: Medium-High
```

### Post-Purchase Templates

```
PATTERN: "How to [action] in [Brand]"
VARIABLES: specific feature/action, your brand
STAGE: Post-Purchase
PRIORITY: Low-Medium (retention signal)

PATTERN: "[Category] trends [year]"
VARIABLES: category, current year
STAGE: Post-Purchase / Problem Recognition
PRIORITY: Medium

PATTERN: "Is [Brand/Category] the future of [domain]?"
VARIABLES: brand or category, business domain
STAGE: Post-Purchase
PRIORITY: Low
```

---

## Part 13: Applying This to CheckThat

### CheckThat-Specific Application

As the AI visibility platform for B2B, CheckThat sits at a unique intersection:
- **Our category:** AI visibility platform / AEO platform
- **Our competitors:** Profound, Scrunch, Peec AI, Athena HQ, Conductor, Semrush
- **Our differentiation:** Open index, no cold start, buyer intent intelligence, human-reviewed prompt library, historical data moat
- **Our audience:** Marketing leaders at B2B software companies (Seed to Series C), growth and demand gen leaders at mid-market, marketing teams at public tech companies

### Priority Prompts for CheckThat

**Tier 1 — Track Immediately:**
```
"Best AEO tools for B2B SaaS"
"CheckThat vs Profound"
"CheckThat vs Scrunch"
"CheckThat vs Peec AI"
"Alternatives to Profound"
"Alternatives to Scrunch"
"Free AI visibility monitoring tools"
"Best AI visibility platform"
"How to track AI visibility for my brand"
"AEO monitoring tools comparison"
```

**Tier 2 — Track Weekly:**
```
"What is AI visibility?"
"How do I improve my brand's AI visibility?"
"Best AEO tools under $300/month"
"CheckThat pricing"
"CheckThat reviews"
"AI visibility tools for startups"
"How to do AEO for B2B"
"Profound pricing"
"Is CheckThat worth it?"
"AI visibility trends 2026"
```

**Tier 3 — Track Bi-weekly:**
```
"What is Answer Engine Optimization?"
"SEO vs AEO: what's the difference?"
"Do I need an AEO tool?"
"How does AI decide which brands to recommend?"
"AEO strategy for B2B companies"
```

---

## Part 14: Summary & Quick Reference

### The Methodology in One Page

1. **Map the buyer journey** across 5 stages: Problem Recognition → Solution Exploration → Evaluation → Decision → Post-Purchase

2. **Classify prompts** using 16 categories across all stages (not just the 6 evaluation categories)

3. **Multiply with context variables** (8 dimensions: industry, size, role, use case, geography, tech stack, budget, timeline)

4. **Add persona injection** for high-value prompts (especially evaluation and decision stage)

5. **Map multi-turn sequences** to understand how visibility changes across the buyer conversation

6. **Score prompt quality** using the 5-point framework (realism, intent, differentiation, actionability, volume)

7. **Prioritize** using value/effort matrix (quick wins first, strategic bets next)

8. **Measure** 9 per-prompt metrics + 8 aggregate metrics across all major AI engines

9. **Close gaps** with targeted content actions (comparison pages, alternatives content, schema markup, authority building)

10. **Iterate** weekly tracking cadence minimum. Expand prompt library monthly.

### The Golden Rules

- **Track what buyers actually ask, not what you wish they'd ask.** Mine sales calls, Reddit, G2 reviews for real language.
- **Cover the full funnel, not just evaluation.** Problem recognition prompts build the trust that evaluation prompts cash in.
- **Multi-engine is non-negotiable.** 67.4% of domains are cited by only one engine. Don't assume ChatGPT visibility = universal visibility.
- **Persona context changes everything.** The same question from a startup founder and enterprise CTO gets different AI recommendations.
- **Authority signals reduce volatility.** Brand search volume, Wikipedia, Reddit presence, review platforms, structured data—invest in these to stabilize your visibility.
- **Content structure matters as much as content quality.** Answer-first format, standalone sections, schema markup. Make it easy for AI to extract and cite.
- **Historical data is the moat.** Start tracking now. You can't backfill what you didn't collect.

---

*This document is maintained by the GrowthX team and updated as the AEO landscape evolves. It synthesizes research from Forrester, Gartner, Conductor, Omniscient Digital, Overthink Group, Profound, HubSpot, Search Engine Land, Search Engine Journal, CXL, MarTech, G2, and AEO practitioner case studies.*

*Last updated: February 2026*
