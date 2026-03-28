# Navigation Test

Verify that the agent can find the right documentation for any question.

---

## Prerequisites

Before running this test, you must have:
- Filled in `CLAUDE.md` with your company name
- Created `docs/start-here.md` content
- Filled in at least `docs/company/mission-and-vision.md`

---

## Test 1: Company Question

### Prompt

> What does Bespoke Woodcraft Studio do?

### What Should Load

- `CLAUDE.md` (always loaded)
- `docs/start-here.md` or `docs/company/mission-and-vision.md`

### What Good Looks Like

- [ ] **Accurate** — matches what you wrote in your docs, not a hallucination
- [ ] **Concise** — doesn't dump the entire mission doc
- [ ] **References source** — mentions which doc it got the info from
- [ ] **In your voice** — if the voice guide is loaded, it should sound like you

### What Bad Looks Like

> I don't have specific information about Bespoke Woodcraft Studio. Based on general knowledge...

(This means your docs aren't filled in or the agent isn't loading them)

---

## Test 2: Finding the Right Doc

### Prompt

> How do we handle client onboarding?

### What Should Load

- `docs/delivery/README.md` first (to find the right file)
- Then `docs/delivery/client-onboarding-template.md` or relevant delivery doc

### What Good Looks Like

- [ ] **Navigates correctly** — goes to `docs/delivery/`, not random directories
- [ ] **Loads progressively** — README first, then the specific file
- [ ] **Accurate to your docs** — describes YOUR process, not generic advice
- [ ] **Admits gaps** — if the onboarding doc isn't filled in, says so honestly

---

## Test 3: Cross-Directory Navigation

### Prompt

> I need to understand our business model, who our ideal customer is, and how we deliver work.

### What Should Load

- `docs/business/business-model.md`
- `docs/business/ideal-customer-profile.md`
- `docs/delivery/teams-and-operations.md`

### What Good Looks Like

- [ ] **Hits all three areas** — doesn't skip any part of the question
- [ ] **Loads from correct directories** — business/ for the first two, delivery/ for the third
- [ ] **Doesn't bulk-load** — loads specific files, not entire directories
- [ ] **Connects the dots** — shows how the three areas relate to each other

---

## Test 4: Search-Only Content

### Prompt

> What did we discuss in our last meeting with [client name]?

### What Should Load

- Searches `records/transcripts/` or `records/customers/` — does NOT bulk-load

### What Good Looks Like

- [ ] **Searches, doesn't preload** — uses search/grep, doesn't read all transcript files
- [ ] **Finds relevant results** — or honestly says it can't find anything
- [ ] **Respects Tier 3 rules** — doesn't load the entire records/ directory
