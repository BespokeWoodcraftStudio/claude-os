# Pricing and Monetization Strategy (CheckThat)

The purpose of this document is to spell out how we're going to monetize CheckThat at launch.

---

## The Play

There are 160+ AEO vendors in the market. We're not going to outspend them. We're going to corner them.

The play: build an open AI visibility index, give away more value than competitors charge for, and monetize just enough to cover costs. As the index grows, so does our moat. Competitors can't replicate historical data they never collected.

This only works if we grow organically. If we have to pay for every user, we're dead. The open index drives SEO. SEO drives traffic. Traffic drives signups. Signups feed the index. That's the loop.

We're not optimizing for revenue right now. We're optimizing for proof: Can we monetize at all? Can we build network effects? Can we break even on costs within six months?

If yes, we have a business. If no, we learn fast and adjust.

**This doc covers:**
1. Proposed plans and pricing
2. Competitive positioning
3. Unit economics
4. What we need to prove at launch

---

## 1. Proposed Plans and Pricing

### Overview

Three tiers. Free, Pro at $249/month, Business at $1,500/month.

**Free** is genuinely generous. More than competitors give away at $99. The bet is that a great free experience creates pull for upgrades without us having to push.

**Pro** is self-serve. Credit card. Instant access. Priced to filter for the right customers: B2B companies, VC-funded startups through public companies, tech and software. $249 is nothing for these companies if the product is useful. It keeps out the noise.

**Business** is sales-led. We sell 18-month contracts. Managed service. Dedicated strategist. This is where the real revenue comes from.

The split: Free feeds Pro. Pro qualifies the right customers. Business funds growth.

### Plan Details

| | Free | Pro | Business |
|---|------|-----|----------|
| **Price** | $0 | $249/mo | $1,500/mo |
| **Custom prompts** | 50 | 500 | 2,000 |
| **Shared prompts library** | 100,000+ | 100,000+ | 100,000+ |
| **Historical data** | 14 days | 60 days | Full archive |
| **Probe frequency** | Weekly | Near daily | Near daily |
| **AI engines** | 5 | 5 | 8+ |
| **Users** | Unlimited | Unlimited | Unlimited |
| **Prompt manager** | ✓ | ✓ | ✓ |
| **Company research database** | ✓ | ✓ | ✓ |
| **Competitor benchmarking** | — | ✓ | ✓ |
| **Export capabilities** | — | ✓ | ✓ |
| **Dedicated AEO strategist** | — | — | ✓ |
| **Ongoing AEO audits** | — | — | ✓ |
| **Managed prompt strategy** | — | — | ✓ |
| **Custom reports** | — | — | ✓ |
| **Support** | Self-serve | Dedicated Slack | Engagement manager |

### The Thinking

We win by delivering value immediately. The more people who join, the better the experience gets for everyone.

People don't care about prompt counts or probe frequency. They want to know how their brand shows up in AI. They want category insights. So we're not going to nickel and dime on technical limits.

We're going to make Free so good that people feel almost guilty not paying. Like they want to tip us. Then Pro unlocks real additional value.

$249 filters for the right audience. Even a seed-stage company can afford it. We're not chasing volume from random people. We want legitimate B2B companies that we'd eventually want on Business plans.

Business is a different motion. Sales-led. Push towards 18-month contracts. Light managed service. That's where the real revenue and retention come from.

---

## 2. Competitive Positioning

Four players matter: Profound ($58M raised, enterprise positioning), Scrunch ($19M raised, 500+ brands), Peec AI ($29M raised, fastest growing), and Athena HQ (YC-backed, ex-Google team).

| | CheckThat Pro | Profound | Scrunch | Peec AI | Athena HQ |
|---|---------------|----------|---------|---------|-----------|
| **Price** | $249/mo | $399/mo | $700/mo | €199/mo (~$220) | ~$295/mo |
| **Prompts** | 500 custom | 200 unique | 700 custom | 100 custom | Custom |
| **AI engines** | 5 | 3 | 6 | 4 | 8 |
| **Historical data** | 60 days | 2 months | Limited | Limited | Limited |
| **Free tier** | Yes (50 prompts) | No | No | Trial only | No |
| **Probe frequency** | Near daily | Daily | Daily | Daily | Daily |

### Why We're Different

These tools want you to track as many prompts as often as possible. That's how they make money. But more prompts doesn't mean better insights.

The problem starts earlier. They all have shallow context on your company. Generic brand descriptions. Weak understanding of your market, product, and buyers. So they suggest bad prompts. Prompts that don't reflect how real buyers actually ask questions.

Garbage in, garbage out. Doesn't matter if you're probing daily.

**We win by going deeper on context.**

- **Better understanding of your brand.** We invest in research on your company, market, product, and personas. That foundation shapes which prompts actually matter.
- **Better prompts.** When you understand how buyers think and ask questions, you track the right things.
- **Shared library that compounds.** Our open index has 100,000+ prompts with historical data already. You benefit from tracking that started before you signed up.
- **Near daily probing.** We're not cutting corners on frequency. But we're also not using it as a pricing lever.

They sell you more prompts with bad context. We give you fewer, better prompts with real understanding behind them.

---

## 3. Unit Economics

### Cost Drivers

Each prompt gets probed across 4 AI engines (OpenAI, Anthropic, Perplexity, Gemini) plus analysis. Unoptimized: $0.06 per prompt per probe. With open source models for analysis and smarter scheduling: $0.02.

Two types of costs:
1. **Variable:** Serving each account's custom prompts. Scales with users.
2. **Fixed:** Team, infrastructure, and the shared index. Doesn't scale with users.

### Cost and Margin by Tier

Assumes 80% average prompt utilization.

| | Free | Pro | Business |
|---|------|-----|----------|
| Custom prompts (max) | 50 | 500 | 2,000 |
| Prompts used (80%) | 40 | 400 | 1,600 |
| Probes/month | 8x | 12x | 15x |
| Cost to serve | $6/mo | $96/mo | $480/mo |
| Revenue | $0 | $249/mo | $1,500/mo |
| **Margin** | **-$6** | **$153 (61%)** | **$1,020 (68%)** |

Free accounts inactive for 60 days get prompts deactivated. Costs stay tied to active usage.

> Another way for us to drive cost to near zero is to let users add their api keys and we probe for them a nominal monthly fee or free.

### Fixed Costs (Estimates)

| Category | Monthly cost |
|----------|--------------|
| Team (eng, design, PM, DS, content) | $91k |
| Infrastructure | $10k |
| Shared index (100k prompts × 15 probes) | $30k |
| **Total** | **$131k** |

### Path to Break-Even (6 Months)

Assume sales can sell Business plans with this ramp: 4 → 8 → 12 → 16 → 16 → 16 new plans per month.

| Month | Active Free | Pro | Business | Net margin | ARR |
|-------|-------------|-----|----------|------------|-----|
| 1 | 150 | 30 | 4 | $8k | $162k |
| 2 | 300 | 70 | 12 | $21k | $425k |
| 3 | 500 | 140 | 24 | $43k | $850k |
| 4 | 700 | 250 | 40 | $75k | $1.5M |
| 5 | 850 | 375 | 56 | $109k | $2.1M |
| 6 | 1,000 | 500 | 72 | **$144k** | **$2.8M** |

Month 6: 500 Pro ($77k) + 72 Business ($73k) - 1,000 active free ($6k) = $144k margin.

Break-even ($131k fixed) happens around month 5. By month 6 we're generating ~$13k/month profit with $2.8M ARR.

**The targets:**
- 500 Pro accounts
- 72 Business accounts
- ~5% free-to-Pro conversion

> For reference, we launched ailedgrowth.com a few months back and already reached 170 paying members totaling $5k in MRR and $15k collected upfront.

---

## 4. What We Need to Prove at Launch

### The Core Bets

This whole strategy rests on a few assumptions. If they're wrong, we need to know fast.

**Organic works.** Can the open index drive real traffic? Do brand pages, category pages, and answer pages rank? Does traffic compound month over month? If we can't get to 50k monthly visitors by month 6 without paid acquisition, the model breaks.

**Free converts to Pro.** Is 8-10% conversion realistic? Do free users see enough value to pay $249? Or is free too generous and there's no reason to upgrade? We need signal on this within 60 days.

**$249 is the right price.** Does it filter for the right customers without scaring them off? Are we leaving money on the table? Are we priced too high for startups? Watch close rates and objections.

**Business closes.** Can we sell 18-month contracts at $1,500/month? Is the managed service compelling? Do Pro users convert to Business, or do we need a separate pipeline? We need 20+ Business deals in the first 3 months.

**Churn stays manageable.** Is 7% realistic or optimistic? Does historical data create the lock-in we expect? If churn hits 10%+, the math stops working.

### The Metrics That Matter

| Metric | Target | Red flag |
|--------|--------|----------|
| Monthly traffic growth | 50%+ MoM | Under 30% |
| Signup rate | 1-2% | Under 0.5% |
| Free to Pro conversion | 8-10% | Under 5% |
| Pro monthly churn | Under 7% | Over 10% |
| Business close rate | 20+ deals in 3 months | Under 10 |
| Time to first Pro conversion | Under 30 days | Over 60 days |

### What We're Watching Week by Week

**Weeks 1-4:** Is anyone signing up? Which pages drive traffic? What's the initial signup rate? Are free users actually using the product?

**Weeks 5-8:** Are free users converting to Pro? What's the conversion timeline? What triggers upgrades? What objections come up on pricing?

**Weeks 9-12:** Is traffic compounding? Are we closing Business deals? What does churn look like? Is the Pro margin holding?

### The 90-Day Checkpoint

By day 90, we need to know:
1. Can we get to 30k monthly visitors organically?
2. Are we converting at least 5% of free to Pro?
3. Have we closed at least 10 Business deals?
4. Is Pro churn under 10%?

If yes to all four, we have a business. Double down.

If no to any, we adjust fast. Cut costs, change pricing, rethink the model. No sacred cows.

---

*Source: Notion - Board Space*  
*Exported: February 2026*
