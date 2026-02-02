# CheckThat Organic Growth Strategy

<metadata>
purpose: Details the SEO architecture, entity model, and site structure for CheckThat's organic growth
audience: Product, engineering, content teams working on CheckThat
related: checkthat-product-vision-v1.md, checkthat-pricing-and-monetization-v1.md
last_updated: 2026-02-01
</metadata>

---

## TL;DR

- Model after Canva (72x'd search traffic with 6,600 pages) and GoodRx (30K pages, 27M monthly visits).
- Core principle: structured database of entities exposed via repeatable page templates + editorial depth.
- Six entity types: Brands, Categories, Answers, Lists, Articles, Tools.
- Our moat: editorial depth (not thin programmatic SEO) + proprietary AI data (what ChatGPT, Perplexity, Claude actually say).
- Every page reachable through multiple paths. No orphan pages.

---

## The Opportunity

Canva went from 250 pages to 6,600 pages in 2015 and 72x'd their search traffic that year. Today they have 44,800+ pages generating 280M monthly visitors, traffic worth $100M+ per month.

GoodRx built a similar engine in healthcare with 30K pages generating 27M monthly search visits worth $50M+ monthly.

Their entire site revolves around a structured database of entities (drugs, conditions, side effects) exposed via repeatable page templates. Each entity links to related entities, creating a dense web that search engines reward. They blend programmatic scale with editorial depth, embedding medically-reviewed content throughout to build trust and differentiate from thin aggregator sites.

Our goal is to apply this model to AI visibility for B2B brands (primarily).

The challenge: not many people search for "AI visibility" yet. To grow organically now, we have to become the best answer to what people are currently searching for (brand research, software comparisons, buyer questions) while layering in our unique AI visibility data and editorial content. As awareness grows, we'll already own the category.

---

## The Core Model

Our organic growth engine will be built on a simple principle: a structured database of entities exposed via repeatable page templates, with editorial content embedded throughout.

**Our core entities:**

| Entity | What It Is | Example |
|--------|------------|---------|
| **Brand** | A company, product, or website we track | Ramp, Notion, Vercel |
| **Category** | A market segment or software type | Expense Management, CRM |
| **Answer** | A question buyers ask AI, with responses tracked | "Best expense tool for startups?" |
| **List** | A curated collection of brands | "Top YC-backed B2B SaaS" |
| **Article** | Editorial content on AI visibility topics | "What is AI Visibility?" |
| **Tool** | A free utility that demonstrates our data | AI Visibility Checker |

These entities connect through relationships:

- Brands belong to Categories
- Brands appear in Answers (when AI mentions them)
- Brands are grouped or featured into Lists
- Articles reference Brands, Categories, and Answers
- Tools generate data about Brands

Each relationship creates internal links. Each link strengthens the graph. The result is a site where every page is reachable through multiple logical paths, and where topical authority compounds.

**Note:** The content in our public pages does NOT need to match what we pull for the product experience. A brand context in a user's dashboard can differ from our editorialized public page. Over time, we might want to pull the public page because it will be more robust and higher quality.

---

## Our Advantage: Editorial Depth

The trap of programmatic SEO is building thousands of thin pages that Google ignores or penalizes. The sites that win (like GoodRx or G2) avoid this by embedding real editorial value into their templates.

Our advantage is the same: highly editorialized content throughout.

Every brand page includes our deep research and editorial review, not just AI visibility data. Every answer page includes our editorial take in addition to what AI's response means for buyers. Every list is curated with context on why these brands matter together.

We also have something no competitor can replicate: what AI engines actually say. Every site answering "what is Ramp" pulls from the same sources (company website, Crunchbase, G2). We show what ChatGPT, Perplexity, Claude, and Gemini say when asked about Ramp, and how those answers differ.

One way to think about it is we want to be *the* best answer, show how AI answers that, and give them the historical and stats on that question/answer.

This combination of editorial depth (via our workflows + editors-in-the-loop) plus proprietary AI data is the moat.

---

## Site Architecture

| Path | Entity Type | Purpose |
|------|-------------|---------|
| `/[brand]/` | Brand | Profiles and variants (pricing, alternatives, reviews) |
| `/categories/` | Category | Navigation hubs connecting related brands |
| `/answers/` | Answer | AI responses to buyer questions |
| `/lists/` | List | Curated collections of brands |
| `/learn/` | Article | Editorial content and guides |
| `/tools/` | Tool | Free utilities demonstrating our data |

---

## 1. Brands (`/[brand]/`)

Brands are the atomic unit. Every other entity exists to help users discover, evaluate, or understand brands.

**Brand types:**

Not all brands are the same. We define each brand as one of three types:

| Type | What It Is | Examples |
|------|------------|----------|
| **Organization** | A company or entity | Anthropic, Microsoft, Sequoia |
| **Product / App** | A specific product, possibly from a larger org | ChatGPT, Ramp, Linear, Notion |
| **Website** | A web property that isn't a company or product | Product Hunt, Hacker News, G2 |

The brand type determines which data points and page sections are relevant.

For example, "Ramp pricing" makes sense as a page. "Sequoia pricing" does not. The templates adapt based on type to match what users actually search for.

**Coverage approach:**

We build a base page for every brand in our database. But we selectively editorialize and expand into variant pages based on where we see actual search demand.

**Prioritization:**

For each brand, we assess which pages deserve editorial investment based on:

- Search volume for the brand name and its variants
- Competitive opportunity (can we rank?)
- Conversion potential (high-intent queries that lead to signups)

| If we see volume for... | We prioritize... |
|-------------------------|------------------|
| "[brand]" or "what is [brand]" | Editorial depth on main brand page |
| "[brand] pricing" | Pricing page (`/[brand]/pricing`) |
| "[brand] alternatives" | Alternatives page (`/[brand]/alternatives`) |
| "[brand] reviews" | Reviews page (`/[brand]/reviews`) |
| "[brand] vs [competitor]" | Comparison page (`/comparisons/`) |

We don't always start with the main brand page. If "[brand] alternatives" has 10x the search volume of "what is [brand]", we build the alternatives page first.

**Priority variant pages:**

| Path | Target Queries | Who Ranks Today |
|------|----------------|-----------------|
| `/[brand]/` | "what is [brand]", "[brand] overview" | Wikipedia, Crunchbase, LinkedIn |
| `/[brand]/pricing` | "[brand] pricing", "[brand] cost" | Vendr, G2, DealHub |
| `/[brand]/alternatives` | "[brand] alternatives", "tools like [brand]" | G2, Capterra, listicle blogs |
| `/[brand]/reviews` | "[brand] reviews", "is [brand] good" | G2, Trustpilot, NerdWallet, Gartner |
| `/[brand]/product` | "[brand] features", "what does [brand] do" | Brand website, G2, Capterra |
| `/[brand]/traffic` | "[brand] traffic", "[brand] ai visibility" | SimilarWeb, Semrush |

**Future variant pages:**

| Path | Target Queries | Who Ranks Today |
|------|----------------|-----------------|
| `/[brand]/vs` | Hub for all comparisons | G2, versus blogs |
| `/[brand]/funding` | "[brand] funding", "[brand] valuation" | Crunchbase, Sacra, GetLatka |
| `/[brand]/revenue` | "[brand] revenue", "[brand] ARR" | Sacra, GetLatka, news articles |
| `/[brand]/headquarters` | "[brand] headquarters", "[brand] office" | Clay, Exa, BuiltIn |
| `/[brand]/founders` | "[brand] founders", "[brand] CEO" | LinkedIn, Crunchbase, Wikipedia |
| `/[brand]/jobs` | "[brand] jobs", "[brand] careers" | LinkedIn, Indeed, Glassdoor |
| `/[brand]/logo` | "[brand] logo" | Brandfetch, brand website |
| `/[brand]/integrations` | "[brand] integrations" | Brand website, G2, integration directories |
| `/[brand]/customers` | "[brand] customers", "who uses [brand]" | Brand website, case study aggregators |
| `/[brand]/news` | "[brand] news" | Google News, TechCrunch, industry blogs |

---

## 2. Categories (`/categories/`)

Categories are navigational hubs. They don't drive massive direct traffic, but they're the glue that holds everything together.

Their job is to:

- Connect related brands through internal linking
- Help search engines understand topical relationships
- Capture "[category] software" head terms with "AI visibility rankings and analysis"

Every brand page links up to its category. Every category page links down to all its brands, plus related answers, comparisons, and lists. This creates the crawlable structure that makes the whole system work.

**Note:** We're not trying to get these pages to rank for things like "best CRM software" — those are reserved for `/lists` because we can have more editorial liberty. The category pages are for AI visibility rankings and navigational purposes primarily.

---

## 3. Answers (`/answers/`)

We collect data on thousands of prompts across AI engines. Answer pages are the editorialized layer on top of that data.

**The structure:**

Each answer page has two parts:

1. **Our answer**: The most comprehensive answer to the question, created through our editorial AI workflows with editors-in-the-loop. We're not summarizing what AI says; we're creating the definitive answer, better than what currently ranks anywhere.

2. **AI engine insights**: Alongside our answer, we surface data on how AI engines respond to the same question:
   - How ChatGPT, Perplexity, Claude, and Gemini each answer
   - Which brands they mention (and how often)
   - Which URLs they cite as sources
   - How answers have changed over time

These are two distinct layers of value. Our answer is the reason someone comes to the page. The AI insights are a unique addition no one else can provide.

**Why this matters:**

Someone searching "best expense tool for startups" wants an answer, not a report on what AI thinks. We give them the best answer on the internet. Then we show them something no one else can: how AI engines are answering this question, what sources they trust, and which brands are winning in AI recommendations.

The historical data is our moat. Once we've tracked a question for six months, no competitor can backfill that history.

**Question types:**

| Type | Example | Intent |
|------|---------|--------|
| Best for use case | "Best expense tool for startups" | Buyer research |
| Best for company type | "Best CRM for real estate agents" | Buyer research |
| Comparisons | "Ramp vs Brex" | Active evaluation |
| What is | "What is Ramp" | Early research |
| Factual | "Who is the CEO of Ramp" | Quick answer |
| How to | "How to set up Ramp" | Implementation |

**Prioritization:**

Not every prompt we track becomes an answer page. We editorialize and publish pages where:

- Search volume exists for that question
- We can write a genuinely better answer than what currently ranks
- The question involves brands we want to drive traffic to

**Internal linking:**

Every answer page links to the brands mentioned, creating cross-links back to brand profiles. If our answer to "best expense tools for startups" mentions Ramp, Brex, and Mercury, each gets a link to their `/[brand]/` page.

Each answers page will also link to related categories and related answers.

**Note:** Not every prompt tracked will be a public answers page and not every answers page will have the same level of editorial and depth. We'll prioritize answers pages that align to higher intent questions, where brands are more likely to show up.

---

## 4. Lists (`/lists/`)

Lists are curated collections that capture long-tail groupings:

- `/lists/best-expense-tools-for-startups/`
- `/lists/yc-backed-b2b-saas/`
- `/lists/fastest-growing-ai-visibility/`

Each list includes editorial context: why these brands belong together, what distinguishes them, who should care. This isn't auto-generated ranking; it's curated perspective backed by AI visibility data.

Lists also serve as linking hubs. Every brand in a list gets a link, strengthening the connection between brands and the topics they're relevant to.

---

## 5. Learn (`/learn/`)

Articles target top-of-funnel queries and establish thought leadership in AI visibility, SEO, AEO, and other relevant topics:

- What is AI visibility?
- How to improve your brand's AI visibility
- The complete guide to Answer Engine Optimization
- State of AI Visibility reports by category

This content builds authority while the "AI visibility" search category is still emerging. As more marketers search for these terms, we'll already rank.

Articles link liberally to brands, categories, answers, and tools, reinforcing the internal link graph.

---

## 6. Tools (`/tools/`)

Free utilities capture search traffic and demonstrate our core value:

- **AI Visibility Checker**: See how AI describes any brand across engines
- **Prompt Tester**: Enter any question, see how AI answers it

These are product demos disguised as free tools. Someone using the checker experiences our unique data, sees the value, and converts to tracking their own brand.

Tools also generate content opportunities. Popular queries and brands checked through tools surface demand we can turn into answer pages and list opportunities.

---

## Priorities to Get Right

The difference between programmatic SEO that works and programmatic SEO that gets ignored comes down to execution details.

**URL structure:**

- Descriptive slugs that include keywords: `/answers/best-expense-tool-for-startups/` not `/answers/q12847/`
- Flat hierarchy: most pages should be 1-2 levels deep from root
- Consistent patterns: `/[brand]/pricing`, `/[brand]/alternatives` not `/[brand]/pricing-info`, `/brands/[brand]/alt`
- Lowercase, hyphenated, no trailing slashes (pick a convention and enforce it)

**Internal linking:**

- Every page reachable through multiple logical paths
- Dynamic cross-link blocks on every template (related brands, related answers, related lists)
- Category pages as hubs that link to all brands within them
- Answer pages link to every brand mentioned
- Brand pages link to answers where they appear
- No orphan pages (every page has inbound links beyond just sitemap)

**Page titles and metadata:**

- Titles match the exact query intent: "What is Ramp?" not "Ramp Overview | CheckThat"
- One primary keyword target per page
- Meta descriptions written as compelling answers, not keyword stuffing
- H1 matches title intent (slight variation is fine, but same core query)

**Technical foundations:**

- Sectioned sitemaps by content type (`/sitemaps/brands.xml`, `/sitemaps/answers.xml`, `/sitemaps/lists.xml`)
- Schema markup per template (Organization/Product for brands, FAQPage for answers, ItemList for lists)
- Fast page loads: static generation where possible, lazy load below-fold content
- Mobile-first templates
- Clean robots.txt allowing all public content paths

**Quality guardrails:**

- Minimum content threshold before a page goes live (no empty or near-empty pages)
- Editorial review for high-value pages (top brands, high-volume answers)
- Noindex thin pages until they have enough substance
- Every page must answer a real question someone is searching for

**E-E-A-T signals:**

- Clear editorial methodology (how we research, how we verify)
- Attribution on editorialized content
- Citations and references where claims are made
- Transparency on data sources (which AI engines, how often we poll, how we track history)

---

## The Bottom Line

Our organic growth strategy is straightforward: build a structured database of entities, expose them via well-optimized page templates, layer in editorial depth that competitors can't replicate, and create a dense internal link graph that compounds topical authority.

The moat is editorial quality plus proprietary AI data. Everyone else has thin programmatic pages or closed dashboards. We have both depth and openness.

That's how we win organic.
