# Everyone Should Know How to Prompt

This guide is designed for all team members—whether you're technical, non-technical, or somewhere in between.

You'll learn how to:
- Write clear, effective prompts
- Use AI to draft, edit, and brainstorm faster
- Choose the right tools for different tasks
- Troubleshoot when you're stuck

Whether you're writing content, building strategies, answering questions, or organizing information—LLMs can help you do it better.

---

## TL;DR

- Learn how to write better prompts with ChatGPT and Claude
- Improve writing, editing, and brainstorming tasks across teams
- Use real examples for marketing, sales, ops, and product workflows
- Leave with the confidence to use LLMs independently

---

## ChatGPT vs. Claude: When to Use Each

| Tool | Best For | Strengths |
|------|----------|-----------|
| **ChatGPT (4.1, Ox, 4.5)** | Structure, task breakdown, brainstorming with large context | Follows instructions well, multiple diverse models to choose from |
| **Claude (3.7 and 3.5)** | Creative writing, long documents, ideation, and coding | Expressive, better for storytelling and quality of writing |

---

## What Is an LLM (Large Language Model)?

ChatGPT is a product built on top of an LLM - the underlying AI technology that powers it. An LLM is a tool that predicts the next word in a sentence based on what came before.

The model is trained on massive datasets containing billions of words and documents from the internet, books, and other sources. It uses a complex neural network architecture called a "transformer" that processes text through multiple layers of attention mechanisms.

Keep in mind that an LLM's knowledge is limited to what it was trained on. To help it generate more accurate and relevant responses, you can provide additional context, examples, and data in your prompts at the time of interaction.

**Why LLMs are transformative tools:**

- Acts as an intelligent collaborator
  - Helps analyze complex information
  - Generates creative alternatives
  - Catches blind spots in your thinking
- Adapts through interaction
  - Refines outputs based on feedback
  - Builds on previous context
- Performs best with clear guidance
  - Requires specific role definition
  - Needs relevant context and examples
  - Benefits from structured output formats

**Example:**
> "Write an email apologizing to a client for a late delivery in a casual tone."

Then refine:
> "Make it shorter. Add empathy. Offer a discount."

---

## Products vs. APIs: Important Differences

When using AI tools, it's crucial to understand the difference between products like ChatGPT and Claude versus their underlying APIs.

**Product Features:** Web interfaces like ChatGPT and Claude.ai include additional capabilities:
- Internet access for real-time information
- Memory of conversation history
- File upload and analysis
- Plugin integrations

**API Limitations:** Raw APIs are more basic:
- No built-in memory between calls
- No internet access
- Text-only interactions
- Need custom code for additional features

**Important Note:** When using GrowthX workflows, always assume API-level capabilities. A common mistake is asking feedback workflows to add more examples or case studies. Since workflows don't have web search or database capabilities, they will likely fabricate information if asked to provide examples.

---

## Prompting Basics

Good prompts = good results.

**3 Core Rules:**

1. **Be specific**: Instead of "Help me," say "Summarize this email in 2 bullets for a team meeting."
2. **Give it a role/persona**: "You're an operations manager drafting an SOP."
3. **Set the format**: Ask for tables, bullet points, headlines—whatever you need.

**Prompt Template:**
> Act as a [role]. Write a [format] for [audience] in a [tone] tone. Include [goal or context].

**Pro Tip:** You don't need the perfect prompt on the first try. Ask ChatGPT to revise and improve its answer.

---

## Deep Dive: Prompting Basics Example

**Use Case:** Writing a product launch announcement

**Prompt:**
> You are the head of product marketing at an AI marketing automation company. We're launching a new feature that auto-adjusts ad creative based on real-time behavior. Our audience is growth marketers at DTC brands who care about reducing CAC and increasing ROAS.
>
> Write a LinkedIn post announcing the feature in a clear, non-technical tone. Highlight the pain point (ads fatigue fast), the value (real-time personalization), and the result (higher ROAS, less manual testing). Use a confident, sharp tone. Start with a bold hook. Format with short paragraphs. Include a CTA to book a demo.

**Why it works:**
- Sets a role and clear goal
- Focuses on audience and tone
- Includes specific instructions (structure, length, CTA)

---

## Intermediate Prompting Techniques

### 1. Chain-of-thought prompting

Ask the LLM to break a task into steps.

> "Help me plan a user interview study. First, list goals and think step by step. Then, write 5 questions. Then, draft a recruitment message."

### 2. Voice matching

Get ChatGPT to mimic a brand or person's voice.

> "Rewrite this blog post to sound like Tim Ferris."

(Tim Ferris has enough public data that this might work, otherwise you'd have to provide the context in detail)

### 3. Translation and reformatting

Convert between formats, tones, or styles.

> "Turn this product description into a tweet thread."

---

## Advanced Use Cases

### Marketing

**Beginner:**
> "Write three ad variations for new pet owners: one funny, one sentimental, one direct."

**Advanced:**
> "You are a copywriter at a DTC pet brand. Write three 50-word ad variations for new pet owners: one funny (light sarcasm), one sentimental (emotional pull), and one direct (value-first). Use a clear call to action at the end of each."

**Expert:**
> "You're a senior copywriter for a premium pet wellness brand. Write 3 ad variations targeting new dog owners (millennial parents) on Instagram. (1) Funny: playful and snarky, (2) Sentimental: nostalgic, emotional, (3) Direct: results-oriented. Each should include: a scroll-stopping hook, 2-line body, CTA, and hashtags. Align tone with past examples from BarkBox and Ollie."

### Sales

**Beginner:**
> "Roleplay as a skeptical prospect. I'll respond and you push back."

**Advanced:**
> "Act as a skeptical marketing ops lead at a mid-market SaaS company. I'll introduce our AI lead scoring product, and you challenge me with tough objections around integration, pricing, and data accuracy. Stay in character for three rounds."

**Expert:**
> "You are a skeptical buyer at a B2B SaaS company with a history of overhyped AI tools. We're selling an intent-based lead scoring product. You care about integration with HubSpot, measurable ROI within 90 days, and clarity on how the AI works. I'll pitch you. Your job is to ask probing, high-friction questions that expose weak spots. Use a tone that's confident but not hostile."

### Ops

**Beginner:**
> "Create an onboarding checklist for a new client based on this task list."

**Advanced:**
> "Here is a task list (paste). Create a structured onboarding checklist grouped by phase: Pre-Kickoff, Week 1, and Week 2. Include internal and client-facing tasks, and flag items requiring sign-off or dependencies."

**Expert:**
> "You are an operations lead at a marketing agency onboarding a new eComm client. Based on this task list (paste), build a 3-phase onboarding checklist: (1) Internal prep, (2) Client kickoff, (3) Week 1 execution. Each phase should include: task owner, due date suggestion, internal vs. client-facing label, and blockers to flag. Format as a table with clear headers."

### Product

**Beginner:**
> "Suggest edge-case tests for a feature that lets users upload images and tag friends."

**Advanced:**
> "Generate a list of 10 edge case tests for an image upload feature with tagging. Include scenarios involving unsupported file types, slow connections, duplicate tags, and mobile interruptions."

**Expert:**
> "You are a QA lead working on a feature that allows users to upload images and tag friends in a social app. Generate a test matrix of edge cases across these categories: file size, format support, concurrent uploads, tagging errors, permission conflicts, mobile vs. desktop. For each, include: test name, risk level (low/med/high), and what to expect if the test fails."

---

## What to Do When You're Stuck

### You've Uploaded Client Context, But Output Is Just "Okay"

**Beginner:**
> "Based on all this context, what's a more effective prompt I could use to get better content?"

**Advanced:**
> "Given the brand guidelines, call notes, and past content samples, create a prompt I can use to generate a blog outline for this client. Make sure the prompt includes tone, audience, and article structure."

**Expert:**
> "You are a senior AI strategist. Based on the provided brand voice, creative strategy, and content samples, write a prompt that will generate a full blog post draft. Include audience (eComm CMOs), tone (bold but credible), format (H1s, bullets, CTA), and brand-specific voice cues. Output the prompt in a reusable format."

### You Keep Getting Repetitive or Overly Safe Responses

**Beginner:**
> "Give me 3 versions of this response—one safe, one bold, one surprising."

**Advanced:**
> "Rewrite the same paragraph in 3 styles: (1) polished and safe, (2) emotional and story-driven, (3) edgy and opinionated. Keep the message consistent but shift tone and language."

**Expert:**
> "You're a content strategist creating landing page headlines. Generate 3 versions: (1) traditional/conversion-optimized, (2) playful Gen Z social version, (3) high-concept viral option. Include rationale and best-use channel (web, email, social)."

### ChatGPT Misunderstands the Task or Misses the Point

**Beginner:**
> "Can you explain what you think I'm asking for before you write it?"

**Advanced:**
> "Summarize your understanding of my request in one sentence, then explain why you'd take that approach."

**Expert:**
> "Act as a strategist reviewing a creative brief. First, interpret my task based on the original input and uploaded context. Then explain: (1) your reasoning for format/tone, (2) assumptions about the goal, (3) questions you'd ask before proceeding."

---

## Know the Limits

- ❗ LLMs can hallucinate—always double-check facts
- 🔒 Don't share sensitive data unless in a secure setup
- ⚖️ Outputs may carry bias—stay critical
- 🧠 ChatGPT is a brainstorming partner, not a decision-maker

---

## Helpful Tools & Tips

- 🎙️ **Voice input** – Dictate ideas and ask ChatGPT to clean them up
- 🧠 **Custom GPTs** – Create internal tools based on your docs and templates
- ⚡ **Chrome extensions** – Right-click to send text to ChatGPT
- 📁 **Prompt libraries** – Keep a shared doc of your favorite prompts
