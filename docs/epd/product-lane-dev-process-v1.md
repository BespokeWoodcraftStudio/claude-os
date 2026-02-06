# Product Lane Dev Process

*Source: Notion - https://www.notion.so/2752ba60bc7480fb89b8df41a7745609*

---

Starting Monday Sep 29th we switched the Product Lane to a new work process inspired by [Shape Up framework](https://basecamp.com/shapeup) from 37signals, but with 4-week cycles and 2-week cooldowns. This is a process that both Daniel & Jose have experience with and had great success in the past for remote teams.

We'll also start a dogfooding process for the entire EPD team.

Our primary focus is to build ContentOS (codename Atlas) to codify and scale Marcel's proven content process into a unified platform.

This only applies to the Product Lane. The AI Infrastructure and Client Operations lanes will continue with their existing work process.

---

## Product Quarterly Vision

### Primary Track: ContentOS (Atlas)

**Mission:** Transform every managing editor into a CMO through our platform - no training required.

ContentOS consolidates Marcel's content method into a single platform encompassing: **Strategy**, **Production** and **Measurement**.

Note: Some of you might have heard of Output.ai, that's our second act, not the focus here. CheckThat will be a separate product from ContentOS, but will run in the same process as the ContentOS, use the same tech stack and built by the same team members and dogfooded in the same way.

### Important Context: We're NOT Searching for Product-Market Fit

Unlike typical startups, we have a proven process already that we want to codify and scale. Our mandate is to: codify Marcel's method by building the exact platform to support this process.

Moving forward, Marcel and Daniel serve as the feedback and approval committee. We are not passing any features to the Delivery team until it has been cleared by our approval committee and dogfooded in the GrowthX Dev Blog.

---

## Development Process

### Cycle Structure

- **Build Cycles:** 4 weeks of focused development
- **Cooldown Periods:** 2 weeks between cycles for:
  - Pitch presentations and scope clarification
  - Linear/Notion/Slack Project setup and planning
  - Retrospectives and process improvements
  - Rollout & training to the Delivery team
  - Buffer Tasks
  - Sidequest time if not enough "Buffer" tasks or bug/improvements on the cycle work that just finished

### Project Sizing: Big Batch vs Small Batch

### Big Batch Projects (Full 4-week cycle)

Complex/risky features requiring deep focus and carefully QA and rollout.

**Lifecycle:**

1. **Roadmap** → Linear project under EPD (with 1 project lead nominated/volunteered during handoff responsible for keeping project up-to-date)
2. **Pitch Document** → Detailed scope and approach (first version written by Daniel always)
3. **Handoff** → During cooldown period
4. **Development** → Feature branch deployed to staging environment first (no continuous integration)
5. **Weekly Reviews** → Progress check with Daniel (with Marcel / Renn support)
6. **Releasing**
   1. **QA Period** → Linear tickets or spreadsheets for tracking
   2. **Dogfood Rollout** → Deploy to GrowthX Dev Blog first
   3. **Documentation** → Guides for Stevie & Andi
   4. **Production Rollout** → Monitor with handful of clients initially

*Note: Why no continuous integration? The amount of code produced with AI these days makes for a product direction review unsustainable for continuous integration. We need a check UX/product quality + code alignment first before merged into the main branch. We had a few times where we sprinted on the wrong direction and it's a pain to revert and restart. Also, these days, this has become even more valuable: [The advantages of large, long-running pull requests](https://world.hey.com/dhh/the-advantages-of-large-long-running-pull-requests-c33d913c)*

### Small Batch Projects (1-2 weeks)

Quick wins and incremental improvements that can ship rapidly.

**Lifecycle:**

1. **Small Batch Board** → Linear tracking
2. **Development** → Continuous integration if scope allows, otherwise feature branch / staging
3. **Weekly Review** → Present to Daniel & Marcel
4. **Dogfood** → Deploy to production and test with real data using GrowthX Dev Blog first
5. **Announcement** → Notify Stevie & Andi

### Staging & Rollout Strategy

All projects should be heavily dogfooded using GrowthX Dev Blog before being rolled out to clients. The process for how to use the GrowthX Dev Blog is described in another doc.

---

## Team Structure

### Roles & Responsibilities

**Shaping Team:** Daniel, Renn, Marcel - Define the work + prepared the project/pitch/handoff + weekly reviews with the project teams

**Execution Team:**
- **Design Engineering:** Georgemaine, GP, Estevão (also full stack)
- **Full Stack Engineering:** Brad, Pedro, Jose (we are hiring more full stack engineers)
- **QA:** Daniel for now

*Daniel will complement as IC as needed until we have more full stack engineers.*

### Team Composition per Cycle

- 1 Design Engineer + 1-2 Full Stack Engineers
- Flexible allocation based on project needs

### On-Call Schedule

We will have one person on-call per 4-week cycle to handle any bugs or issues that arise during the cycle. During cooldown period, any person that shipped a feature will be on-call for that feature during the 2 weeks cooldown period.

Weekend and after hours on call will be just Daniel for now until we have more full stack engineers. I'll setup a PagerDuty escalation in case I miss the first call.

---

## Roadmap

Day-to-day operations: We'll continue to track projects as individual Linear projects under EPD: https://linear.app/growthx/team/B/projects/view/cf3a7aa0-25f2-42bf-881a-8c7e9b3690ee

For high-level cycle planning and roadmap we'll use this: https://linear.app/growthx/team/ROADMAP/all
