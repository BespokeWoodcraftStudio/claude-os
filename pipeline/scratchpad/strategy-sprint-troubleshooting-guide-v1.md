# Strategy Sprint Troubleshooting Guide

Signals, risks, escalations, and recovery playbooks. When things go wrong, use this guide.

---

## TL;DR

- **Sprints don't fail suddenly in Week 8.** They die slowly, starting in Weeks 1-4.
- **Patterns, not events.** Escalate when something happens 3+ times, not once.
- **Named Alarms:** Week 2 Alarm (engagement health), Quality Bar Alarm (calibration failure).
- **Escalate early.** Problems caught in Weeks 1-3 are fixable. Problems caught in Weeks 6-8 are often fatal.
- **Alarms aren't failure.** They're the system working correctly.

---

## Part 1: The Anatomy of a Dying Sprint

### How Sprints Actually Fail

```
Week 1-2: Small warning signs (easy to dismiss)
    │
    ▼
Week 3-4: Problems compound (still recoverable if caught)
    │
    ▼
Week 5-6: Visible failures (hard to recover, client frustrated)
    │
    ▼
Week 7-8: Terminal (churn is almost certain)
```

**The critical insight:** Problems caught in Weeks 1-3 are fixable. Problems caught in Weeks 6-8 are often fatal.

### The Recovery Window

| Week | Recovery Difficulty | What's Possible |
|------|---------------------|-----------------|
| 1-2 | **Easy** | Full course correction, minimal cost |
| 3-4 | **Moderate** | Recovery possible, may slip timeline |
| 5-6 | **Hard** | Significant intervention required, trust damaged |
| 7-8 | **Very Hard** | Heroic effort required, churn likely |

### Why Warning Signs Get Missed

| Warning Sign | Why It Gets Dismissed |
|--------------|----------------------|
| Client slow to respond | "They're just busy" |
| Stakeholder skips call | "Things come up" |
| Vague feedback | "They'll be clearer next time" |
| No product deep-dive scheduled | "We can do it later" |
| Unknown approval chain | "We'll figure it out" |

**Each of these is a potential sprint killer.**

---

## Part 2: The Escalation System

### Escalation Types

For each type, we define: flag definition, severity, who gets pulled in, response time, and what "resolved" means.

---

### 1. Content Quality Escalation

**Definition:** Content repeatedly fails to meet client expectations despite calibration efforts.

**Severity Levels:**

| Level | Trigger | Who Gets Pulled In | Response Time |
|-------|---------|-------------------|---------------|
| **Yellow** | 2 revision rounds with vague feedback | ME + Senior ME | 48 hours |
| **Red** | 3+ revision rounds, no convergence | Director | 24 hours |
| **Critical** | Client explicitly unhappy with quality | Director + CCO | Same day |

**What "Resolved" Means:**
- Root cause identified (context gap, expectation misalignment, or relationship issue)
- Specific fix implemented (artifact update, recalibration call, etc.)
- Next piece passes without major revision
- Client confirms improvement

**Recovery Actions:**
1. Stop iterating on current piece
2. Schedule call with client to get specific examples of "good"
3. Update artifacts with concrete before/after examples
4. Run one test piece, get explicit approval before resuming volume

---

### 2. Content Production Slippage

**Definition:** Content delivery falling behind schedule without clear recovery path.

**Severity Levels:**

| Level | Trigger | Who Gets Pulled In | Response Time |
|-------|---------|-------------------|---------------|
| **Yellow** | 1 piece delayed by 5+ days | ME | 48 hours |
| **Red** | 2+ pieces delayed OR 10+ days on single piece | EM + Director | 24 hours |
| **Critical** | Production completely stalled | Director + Platform | Same day |

**What "Resolved" Means:**
- Backlog cleared or realistic recovery plan in place
- Root cause fixed (capacity, pipeline, approvals)
- Client informed and aligned on adjusted timeline
- Production rhythm restored

**Recovery Actions:**
1. Identify the blocker (internal capacity, client delays, pipeline issues)
2. If client-side: Direct outreach, escalate to their leadership if needed
3. If internal: Pull in additional resources, adjust scope
4. Communicate adjusted timeline to client before they ask

---

### 3. Strategy Misalignment

**Definition:** Client and team not aligned on content direction, priorities, or approach.

**Severity Levels:**

| Level | Trigger | Who Gets Pulled In | Response Time |
|-------|---------|-------------------|---------------|
| **Yellow** | Client pushes back on 2+ topic recommendations | EM | 48 hours |
| **Red** | Client wants to change strategy mid-sprint | Director | 24 hours |
| **Critical** | "This isn't what we signed up for" | Director + Sales | Same day |

**What "Resolved" Means:**
- Clear, documented agreement on strategy
- Both parties sign off (literally or via Slack confirmation)
- Scope adjustments formalized if needed
- No more "but I thought..." conversations

**Recovery Actions:**
1. Acknowledge the misalignment explicitly
2. Schedule strategy reset call (Director may join)
3. Document exactly what was agreed, share with client
4. If scope changed significantly, loop in Sales

---

### 4. Value Concern

**Definition:** Client questioning ROI, value, or whether engagement is worth continuing.

**Severity Levels:**

| Level | Trigger | Who Gets Pulled In | Response Time |
|-------|---------|-------------------|---------------|
| **Yellow** | Client asks about cost vs. output | EM | 48 hours |
| **Red** | Client mentions competitors or alternatives | Director + Sales | 24 hours |
| **Critical** | "We're reconsidering the engagement" | Director + Sales + Leadership | Immediate |

**What "Resolved" Means:**
- Client understands the value being delivered
- Specific outcomes or leading indicators demonstrated
- Renewed commitment to continue (verbal or written)
- Recovery plan documented

**Recovery Actions:**
1. Don't get defensive — listen first
2. Pull together a value story (outputs, early signals, learnings)
3. Schedule call to walk through value delivered
4. If legitimate concern, address it directly; don't oversell
5. Loop in Sales for renewal/commercial conversations

---

### 5. AI Visibility and Reporting Concern

**Definition:** Client concerned about performance metrics, visibility in AI, or lack of clear reporting.

**Severity Levels:**

| Level | Trigger | Who Gets Pulled In | Response Time |
|-------|---------|-------------------|---------------|
| **Yellow** | Client asks "how do we know it's working?" | EM | 48 hours |
| **Red** | Client frustrated with reporting or visibility data | EM + Platform | 24 hours |
| **Critical** | Client claims we promised results we can't show | Director + Sales | Same day |

**What "Resolved" Means:**
- Clear dashboard or report shared with client
- Expectations set correctly (SEO takes time, leading vs lagging indicators)
- Regular reporting cadence established
- Client knows what to expect and when

**Recovery Actions:**
1. Audit what reporting exists — is it set up correctly?
2. If not set up, prioritize Looker/CheckThat configuration
3. Walk client through the outcome chain: Published → Indexed → Impressions → Clicks → Conversions
4. Set realistic timeline expectations
5. Show leading indicators even if lagging indicators aren't there yet

---

## Part 3: Named Alarms

Named Alarms are standardized signals that mean the same thing to everyone at GrowthX.

### The Two Named Alarms

| Alarm | When It Triggers | What It Means |
|-------|------------------|---------------|
| **Week 2 Alarm** | End of Week 2 | Engagement health check failed |
| **Quality Bar Alarm** | Week 4 (or when calibration fails) | Calibration failure — stop iterating |

---

### Week 2 Alarm

**What It Is:** An engagement health check. By the end of Week 2, certain things must be true for the sprint to succeed.

**Week 2 Health Checklist:**

| Checkpoint | Status |
|------------|--------|
| Calibration article approved? | ☐ |
| Product deep dive completed? | ☐ |
| Response time < 1 week? | ☐ |
| All approvers identified? | ☐ |
| CMS access confirmed? | ☐ |
| Strategy feedback received? | ☐ |

**Scoring:**

| Condition | Health | Action |
|-----------|--------|--------|
| 1 item unchecked | GREEN | Monitor, proceed |
| 2-3 items unchecked | YELLOW | Escalate to Director |
| 4+ items unchecked | RED | Director reaches out directly to client |

**How to Pull It:**
1. Document which checkpoints failed
2. Escalate to Director with specifics
3. Director assesses and may reach out to client directly
4. Create recovery plan together

**Example:**
> "Week 2 Alarm for Acme Corp. Checkpoints failed: No calibration article approval, no product deep dive completed, no response in 8 days despite 2 follow-ups. Engagement health: RED."

---

### Quality Bar Alarm

**What It Is:** Triggers when calibration has failed — not when it's hard, but when it's broken.

**When to Trigger:**
- 3+ revision rounds with no convergence
- Vague, unactionable feedback that you can't translate into system changes
- Quality bar seems impossible given current context
- Client frustration is escalating despite your best efforts

**The Key Insight:**

When calibration fails, the instinct is to try harder. **This is wrong.**

Calibration failure is almost never about the content. It's about:
- **Context gaps** — we don't understand the client well enough
- **Expectation misalignment** — client wants something we can't deliver
- **Relationship problems** — trust has broken down
- **Stakeholder issues** — wrong person is giving feedback

More revisions won't fix any of these. Only escalation and diagnosis will.

**How to Pull It:**
1. **Stop iterating immediately**
2. Document: How many rounds? What feedback? What have you tried?
3. Escalate to Director with full context
4. Director diagnoses: Is this context? Expectations? Relationship?
5. Address root cause together
6. Only resume calibration once root cause is addressed

**Example:**
> "Quality Bar Alarm for Beta Inc. We're in revision round 4. Client feedback remains 'it doesn't feel right' with no specifics despite asking twice. I believe this is an expectations issue — their internal content is more technical than our context reflects. Requesting Director support."

---

### Alarm Anti-Patterns

| Anti-Pattern | Why It's Wrong | What To Do Instead |
|--------------|----------------|-------------------|
| Pulling too late | "I wanted to try one more thing first" | Pull when criteria are met, not after heroic efforts fail |
| Pulling without documentation | "Something feels off" | Capture specifics before escalating |
| Pulling for events, not patterns | One slow response ≠ Week 2 Alarm | Alarms are for systemic issues |
| Not pulling because embarrassed | "I should be able to handle this" | Alarms aren't failure — they're the system working |
| Continuing to iterate after pulling | "I'll keep trying while I wait" | Stop. The alarm means "this path isn't working." |

---

## Part 4: Signal Detection

### Patterns vs. Events

**The Rule:** Escalate patterns, not events.

| Events (Handle Yourself) | Patterns (Escalate) |
|--------------------------|---------------------|
| Client slow to respond once | Client slow to respond 3+ times |
| One piece needs extra revision | Every piece needs extra revision |
| Stakeholder misses one call | Stakeholder misses multiple calls |
| Minor feedback disagreement | Fundamental feedback misalignment |
| One deadline slips | Deadlines consistently slip |

**The Test:** "Is this a one-time thing, or is this how it's going to be?"

If it's a pattern, escalate. Patterns don't fix themselves.

---

### Leading vs. Lagging Signals

**Leading Signals (Early Warning — Fixable):**
- Communication quality declining
- Responsiveness dropping
- Revision requests increasing
- Questions about cost or output
- New stakeholders not engaged
- Missing calls or reschedules

**Lagging Signals (Often Too Late):**
- Renewal conversation goes poorly
- They're shopping alternatives
- Budget cuts announced
- Champion leaves the company
- Formal complaints

---

### Positive Signals (Document for Value Story)

| Signal | Document As |
|--------|-------------|
| Quick turnaround | "Client prioritizes our work" |
| Enthusiastic feedback | Direct quote for QBR |
| Internal sharing | Stakeholder expansion |
| Expansion interest | Phase 2 opportunity |
| Proactive communication | High engagement |
| Metric improvements | Performance signal |
| Minimal edits | Calibration working |
| Referral mention | Satisfaction indicator |

---

### Negative Signals (Escalate)

| Signal | Escalation Urgency |
|--------|-------------------|
| Ghosting (3+ days) | 24 hours |
| Vague/dismissive feedback | 48 hours |
| Consecutive negative feedback | 24 hours |
| Stakeholder change | 24 hours |
| Competitor mentions | Immediately |
| Budget discussions | 24 hours |
| Scope reduction | 24 hours |
| Quality escalation | 24 hours |
| Timeline pressure | 48 hours |

---

## Part 5: Danger Zones by Week

### Weeks 1-2: Silent Killers

| Signal | What It Looks Like | Why It's Dangerous |
|--------|-------------------|-------------------|
| Stakeholder absence | Key decision-maker skips calls | Building strategy without the approver |
| Slow/no feedback | Artifacts delivered, silence for 5+ days | Working in a vacuum |
| Vague discovery answers | "We'll figure that out later" | Guaranteed misalignment |
| Unknown approval chain | Don't know who signs off | Week 5 surprise |
| Contradictory inputs | Marketing says X, Product says Y | Set up to disappoint someone |
| No product deep-dive | Week 2 ends without technical discovery | Shallow context, failed calibration |

### Week 3: Strategy Lock Failures

| Signal | What It Looks Like | Why It's Dangerous |
|--------|-------------------|-------------------|
| Topics still being debated | Client keeps changing priorities | No stable foundation |
| Internal gate rejection | Strategy doesn't pass review | About to present flawed strategy |
| Client unresponsive to strategy | Strategy delivered, no feedback | Can't start calibration |
| Scope creep | "Can we also cover X, Y, Z?" | Impossible to deliver |
| Misaligned expectations | Client expects outcomes strategy can't deliver | Week 8 disappointment locked in |

### Week 4: Calibration Failures

| Signal | What It Looks Like | Why It's Dangerous |
|--------|-------------------|-------------------|
| 3+ revision rounds | Client keeps rejecting output | System isn't learning |
| Vague rejection | "It doesn't sound like us" | Can't fix what isn't defined |
| Impossible quality bar | Client's standard unreachable | Every piece will fail |
| Midpoint check-in skipped | No formal midpoint conversation | Problems go unspoken |
| New stakeholder appears | "Actually, my boss needs to review" | Approval chain changed |

### Any-Week Red Flags (Immediate Escalation)

| Signal | What It Means | Action |
|--------|---------------|--------|
| Client ghosting 5+ days | Disengagement | Director escalation |
| Leadership change | Strategy may need reset | Escalate immediately |
| New approver added | Timeline at risk | Escalate |
| Budget conversations | Churn signal | Loop in Sales |
| "Reconsidering the engagement" | Churn signal | Emergency escalation |
| Competitor mentioned | Churn signal | Escalate |
| Key contact leaving | Relationship at risk | Escalate for transition plan |

---

## Part 6: Recovery Playbooks

### Playbook: Client Ghosting

**Situation:** No response from client for 5+ days despite follow-ups.

**Steps:**
1. Send follow-up via different channel (email if Slack, Slack if email)
2. Ping a different stakeholder if available
3. If still no response after 48 more hours, escalate to Director
4. Director may reach out directly or through Sales relationship
5. Document the gap and any impact on timeline

**Script:**
> "Hi [Name], I haven't heard back and want to make sure we're on the same page. We're at a decision point that's blocking progress. Can you let me know the best way to get your input this week?"

---

### Playbook: Calibration Stuck

**Situation:** 3+ revision rounds, client still not happy.

**Steps:**
1. Stop iterating immediately
2. Schedule call (not async) to get on same page
3. Ask: "Can you show me a piece of content you love? What makes it work?"
4. Identify if this is context, expectations, or relationship
5. Update artifacts with specific before/after examples
6. Run one test piece, get explicit approval before resuming

**Script:**
> "We've been through a few rounds and I want to make sure we get this right. Rather than continuing to adjust, can we hop on a quick call? I'd love to see an example of content you think nails your voice, so we can calibrate more precisely."

---

### Playbook: Scope Creep

**Situation:** Client keeps adding to scope without removing anything.

**Steps:**
1. Acknowledge the value of the request
2. Clarify the impact: "Adding X means we'd need to remove Y"
3. Offer options that protect the sprint
4. Document the decision

**Script:**
> "I love that you're thinking about [new request]. Here's the thing: adding that would mean pulling resources from [current work], which could affect [timeline/quality]. What I'd recommend is capturing this for Phase 2 where we can scope it properly. Does that work?"

---

### Playbook: Value Concern

**Situation:** Client questioning ROI or comparing to alternatives.

**Steps:**
1. Don't get defensive — listen first
2. Ask: "What would make you feel confident about the value?"
3. Pull together a value story (outputs + early signals + learnings)
4. Walk through the outcome chain: Published → Indexed → Impressions → Clicks
5. Set realistic expectations for timing
6. If legitimate concern, address it directly

**Script:**
> "I hear you, and I want to make sure you're getting real value from this. Let me walk you through what we've delivered and the signals we're seeing. SEO is a compounding investment — early signals come before the big results. Here's where we are..."

---

### Playbook: New Stakeholder Appears

**Situation:** Client introduces new decision-maker mid-sprint.

**Steps:**
1. Document immediately — who is this person? What's their authority?
2. Assess: Do previous approvals still hold?
3. Schedule intro call with new stakeholder
4. Re-present key context and decisions already made
5. Get explicit buy-in or surface disagreements early
6. Adjust timeline if significant re-alignment needed

**Script:**
> "Great to meet [New Person]. I want to make sure you're up to speed on where we are. We've aligned on [key decisions] with [Original Contact]. I'd love to walk you through our approach and make sure it works for you too."

---

## Part 7: Escalation Language

### The Formula: Problem → Impact → Recommendation

**Weak escalation:**
> "Things aren't going well with Acme."

**Strong escalation:**
> "Client has not responded to strategy artifacts in 6 days despite two follow-ups. This is the second time this has happened. We cannot lock strategy without approval. Requesting Director outreach."

### Escalation Template

```
**Escalation: [Signal Type] — [Client Name]**

**What I'm seeing:**
[Specific signal with dates/examples]

**What I've tried:**
[Actions already taken]

**Why I'm concerned:**
[What this might indicate]

**Recommended next step:**
[Your proposed action]

**Urgency:**
[When we need to act]
```

---

## Part 8: Quick Reference

### Escalation Ladder

| Situation | Who to Contact |
|-----------|----------------|
| Day-to-day questions | MEs, Peer EMs |
| Sprint is stuck | Director |
| System/pipeline issues | Strategy/Platform team |
| Commercial issues | Sales |

### Response Time Expectations

| Escalation Level | Response Expected |
|------------------|-------------------|
| Yellow | 48 hours |
| Red | 24 hours |
| Critical | Same day |
| Named Alarm | Immediate |

### Self-Sufficiency Checklist

Before asking for help, check:
- Notion (Training Docs)
- Previous Slack threads
- Client's Context Doc
- Kickoff Recording (Fathom)
- Your own notes
- Peer EM (quick check)

---

## Sources

- [Module 1.2: Alarms and Escalation (Notion)](https://www.notion.so/2e72ba60bc748044a39ec39b99ecf83b)
- [How We Measure Client Success (Notion)](https://www.notion.so/2e92ba60bc7480498fe3e3c11950b26f)
- [Module 2.5: Production & Signals (Notion)](https://www.notion.so/2e72ba60bc7480f4bc10eb5efa0e010b)
- [Strategy Sprint Setup/Audit Framework (Notion)](https://www.notion.so/2ef2ba60bc7480d592f5f297caecf505)
- Sprint Process Improvements Meeting Agenda (Feb 2026)
- company-context/archive/how-we-measure-client-success.md
