# Voice Test

Verify that your writing voice guide loads correctly and produces on-brand content.

---

## Prerequisites

Before running this test, you must have filled in:
- `context/voice/writing-style-context-v1.md` — at minimum, the voice definition and style anchors

---

## Test 1: Blog Introduction

### Prompt

> Write a short blog introduction (3-4 sentences) about why most companies waste money on content marketing.

### What Should Load

- `context/voice/writing-style-context-v1.md`

### What Good Looks Like

- [ ] **Leads with the point** — the main claim is in the first sentence, not buried
- [ ] **Matches your voice** — sounds like the style anchors you defined, not generic AI
- [ ] **Uses active voice** — "Companies waste money" not "Money is wasted by companies"
- [ ] **No jargon** — no "leverage," "synergize," "circle back"
- [ ] **Concrete** — includes a specific claim or number, not just abstractions
- [ ] **Short sentences** — no run-on sentences or nested clauses

### What Bad Looks Like

> In today's rapidly evolving digital landscape, content marketing has become an increasingly important component of comprehensive business strategies. However, many organizations find that their content marketing investments fail to deliver the expected return on investment, leading to questions about the effectiveness of their approach.

(Generic, passive, buried lead, jargon-heavy, no personality)

---

## Test 2: Email Draft

### Prompt

> Draft a short email to a prospective client explaining what we do and why they should care. Keep it under 100 words.

### What Should Load

- `context/voice/writing-style-context-v1.md`
- `docs/company/mission-and-vision.md` (for company context)

### What Good Looks Like

- [ ] **Direct opening** — no "I hope this email finds you well"
- [ ] **Clear value prop** — what you do and why it matters, in plain language
- [ ] **Matches company voice** — not generic sales copy
- [ ] **Under 100 words** — respects the constraint
- [ ] **Has a clear ask** — ends with a next step

---

## Test 3: Style Correction

### Prompt

> Rewrite this in our voice: "Leveraging our comprehensive suite of AI-powered solutions, we enable organizations to achieve transformative digital outcomes through strategic implementation of cutting-edge technologies."

### What Should Load

- `context/voice/writing-style-context-v1.md`

### What Good Looks Like

- [ ] **Dramatically shorter** — at least 50% fewer words
- [ ] **Plain language** — no "leveraging," "comprehensive suite," "transformative outcomes"
- [ ] **Specific** — replaces vague claims with concrete ones (or flags that it needs specifics)
- [ ] **Sounds human** — you'd actually say this to someone
