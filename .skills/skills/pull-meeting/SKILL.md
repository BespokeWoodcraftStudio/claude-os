---
name: pull-meeting
description: Pull a meeting from Fireflies and save it to /transcripts with full context. Use when the user wants to pull, download, or retrieve a meeting transcript, or mentions Fireflies meetings. Triggers on "pull meeting", "get meeting", "fireflies", "meeting transcript", "download transcript".
---

# Pull Meeting

Pull a meeting from Fireflies and save it to `/transcripts` with full context.

## Overview

This skill:
1. Searches Fireflies for the specified meeting
2. Downloads meeting details (summary, action items, metadata)
3. Downloads raw transcript (speakers, sentences)
4. Combines into properly formatted markdown
5. Saves to `/transcripts/YYYY-MM-DD-meeting-name.md`

## Workflow

### Step 1: Identify the Meeting

Ask the user: **"What meeting do you want to pull? (provide a name, date, or participant)"**

Then search Fireflies with options:
- By keyword: `keyword:"standup"`
- By date range: `from:2026-01-20 to:2026-01-27`
- By participant: `participants:marcel@growthx.ai`
- Combined: `keyword:"weekly" from:2026-01-01 participants:marcel@growthx.ai`

### Step 2: Confirm Selection

Present results to user:
- Meeting title
- Date
- Duration
- Participants

Ask: **"Is this the meeting? (Yes/No, or specify which one)"**

### Step 3: Fetch Meeting Details

Use the meeting ID to get the summary with:
- Title, date, time, duration
- Organizer and participants
- Meeting link and transcript URL
- Keywords
- Overview/gist
- Shorthand bullet points
- Notes (detailed)
- Action items with assignees

### Step 4: Fetch Raw Transcript

Get the full transcript with:
- Speakers list
- All sentences with speaker attribution
- Format into readable dialogue

### Step 5: Generate Context Sections

Using the summary data, write these sections in GrowthX style:

**Summary** (2-3 sentences)
- What the meeting covered
- Key outcomes or decisions

**Context** (1-2 paragraphs)
- Why this meeting happened
- Where it fits in ongoing work
- Relevant background

**Relevance** (bullet points)
- Group by area (e.g., "To GrowthX Services:", "To CheckThat:", "To Community:")
- Why this meeting matters to each area
- Specific numbers, names, deadlines

### Step 6: Format and Save

**Filename:** `YYYY-MM-DD-descriptive-meeting-name.md`
- Use meeting date
- Convert title to lowercase with hyphens
- Remove special characters
- Examples: `2026-01-27-strategy-sprint-standup.md`, `2026-01-14-marcel-jason-weekly.md`

**File Structure:**

```markdown
# Meeting Title

<metadata>
date: YYYY-MM-DD
time: HH:MM UTC
duration: X minutes
organizer: email@example.com
participants: Name1, Name2, Name3
fireflies_id: <meeting_id>
meeting_link: <zoom/meet link if available>
transcript_url: https://app.fireflies.ai/view/<meeting_id>
</metadata>

---

## Summary

<2-3 sentence summary of what was covered and key outcomes>

---

## Context

<1-2 paragraphs explaining why this meeting happened and where it fits>

---

## Relevance

**To <Area 1>:**
- Bullet points on impact/relevance
- Include specific numbers, names, deadlines

**To <Area 2>:**
- More relevant points

---

## Overview

<Bullet points from shorthand_bullet or overview>

---

## Key Topics

### <Topic 1>

<Content from notes section, organized by theme>

### <Topic 2>

<More organized content>

---

## Action Items

**<Person 1>**
- Action item with deadline if available
- Another action

**<Person 2>**
- Their action items

---

## Transcript

**Speaker Name:** Dialogue text here.

**Another Speaker:** Their response goes here.

<Continue full transcript with speaker labels>
```

### Step 7: Report Back

After saving, confirm:
- File saved to: `/transcripts/<filename>.md`
- Meeting: <title>
- Date: <date>
- Duration: <duration> minutes
- Participants: <count> people
- Key topics: <3-5 main topics>

## Writing Guidelines

When generating Summary, Context, and Relevance sections:
- **Direct and clear** - No corporate jargon
- **Lead with the point** - Most important info first
- **Use active voice** - "Marcel outlined" not "It was outlined by Marcel"
- **Ground in specifics** - Numbers, names, dates, concrete details
- **Connect to company context** - Reference GrowthX services, CheckThat, content strategy as relevant

## Batch Mode

To pull multiple meetings at once:
1. Search with broader criteria: `from:2026-01-01 to:2026-01-31 limit:50`
2. List all matching meetings for user to confirm
3. Process each meeting sequentially using this workflow
4. Report summary of all files created
