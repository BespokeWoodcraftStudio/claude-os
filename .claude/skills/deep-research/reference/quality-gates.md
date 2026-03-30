# Quality Gates and Standards

## Validation Scripts

### Pre-Report Validation

```bash
python scripts/validate_report.py \
  --report output/report.md \
  --check-citations \
  --check-sources \
  --check-length \
  --check-style
```

**Checks:**
- Citation numbering continuous: [1], [2], [3], etc.
- All citations match bibliography
- Sources real and verifiable
- Report length within range
- Consistent voice/style throughout

### Mid-Generation Validation

```bash
python scripts/validate_section.py \
  --section "Finding: X Research Area" \
  --mode generate \
  --check-words \
  --check-citations \
  --check-hallucination
```

**Metrics:**
- Word count within target +/-20%
- Citations real and properly numbered
- No invented facts or sources

---

## Anti-Fatigue Protocol

### Attention Shift Rules

When generating long reports (>10K words):
- Every 3,000 words: pause and verify context
- Every 5 sections: step back, review narrative arc
- At 15K words: prepare for continuation handoff

### Energy Management

- Cache decision points (choice of sources, framing)
- Refer back to state file instead of re-analyzing
- Use bullet summaries of findings before expanding
- Break synthesis into 1K-word chunks

### Cognitive Checkpoints

Before each section:
- Read last section summary (not full text)
- Check quality metrics in state file
- Verify theme alignment
- Confirm citation numbering position

---

## Bibliography Requirements

### Format Requirements

```
[1] Author, A., & Author, B. (Year). Title of work. Publisher.
[2] Organization Name. (Year). Report title. Retrieved from [URL]
[3] Author, C. (Year, Month Day). Blog post title. Website. Retrieved from [URL]
```

### Validation Checklist

- [ ] Every citation in text [1], [2], etc. matches bibliography entry
- [ ] No orphaned citations (numbered but not in text)
- [ ] All URLs verified and accessible
- [ ] Author names consistent across citations
- [ ] Publication dates logical and recent where relevant
- [ ] At least 60% of citations from primary sources
- [ ] Bibliography ordered by citation number

### Citation Density

- **Quick mode:** 2-3 citations per 1K words
- **Standard mode:** 4-5 citations per 1K words
- **Deep mode:** 6-8 citations per 1K words
- **Ultra-deep mode:** 10+ citations per 1K words

---

## Writing Standards

### Prose Requirements

- **Minimum prose ratio:** 80% (not bullets/lists)
- **Paragraph length:** 100-250 words
- **Sentence variety:** Mix short (8-12 words) and long (20-30 words)
- **Technical density:** Match brief or context requirements
- **Active voice ratio:** 70%+ active, 30% max passive

### Section Structure

```
[Section Title]

[Orientation: 1-2 sentences establishing context]

[Main argument/finding: 2-3 paragraphs with citations]

[Supporting details/evidence: 2-4 paragraphs with examples]

[Implication/synthesis: 1-2 paragraphs connecting to themes]

[Transition to next: 1 sentence]
```

### Vocabulary Control

- Define technical terms on first use
- Avoid jargon unless in specialized section
- Consistency: use same term throughout (not synonyms)
- Sentence complexity matches audience level

---

## Source Attribution Standards

### Primary vs Secondary Classification

**Primary sources:** Original research, data, documents
- Academic papers with original research
- Government reports and statistics
- Company earnings calls and filings
- Original surveys/interviews

**Secondary sources:** Analysis and interpretation
- News articles (unless original reporting)
- Blog posts and think pieces
- Book chapters
- Industry analyses

### Attribution Rules

- Always cite specific finding to source
- Include URL or database if available
- Note publication date (esp. for time-sensitive info)
- Distinguish between quoted text and paraphrased ideas

### Minimum Source Quality

- Academic databases or peer-reviewed journals
- Government (.gov) or institutional (.edu) sources
- Major news organizations (AP, Reuters, major outlets)
- Industry reports from established organizations
- Books from academic or major publishers

---

## Anti-Hallucination Protocol

### Pre-Writing Checklist

- [ ] Source exists and is accessible
- [ ] Citation I'm about to make has been verified
- [ ] Data point is from named, verifiable source
- [ ] Quote is accurate to source material
- [ ] Paraphrase captures original meaning

### During Writing

When tempted to write "According to [source]":
1. STOP and verify source is in research notes
2. If source not found: Rewrite without that claim
3. If claim is key: Note it needs verification
4. Mark uncertain claims with [VERIFY]

### Post-Section Review

Read each paragraph asking:
- Does every factual claim have a citation?
- Are all citations to real sources?
- Would someone find this info at that source?
- Did I invent any statistics or quotes?

### Final Report Review

```bash
grep -n "\[VERIFY\]" output/report.md
```

Before delivery:
- Zero [VERIFY] tags remaining
- Every citation number checked
- All sources listed in bibliography
- No orphaned facts without citations

---

## Report Quality Standards

### Length Requirements

- **Quick (8K words):** 5-7 findings, minimal synthesis
- **Standard (12-15K words):** 7-10 findings, moderate synthesis
- **Deep (20-25K words):** 10-15 findings, extensive synthesis
- **Ultra-deep (30-40K words):** 15+ findings with continuation

### Structure Requirement

1. Executive Summary (200-400 words)
2. Research Question & Scope (200-300 words)
3. Methodology (200-300 words)
4. Findings (bulk of report, 1,000-2,000 words each)
5. Synthesis & Implications (800-1,200 words)
6. Limitations & Future Research (300-500 words)
7. Bibliography (complete, numbered)

### Narrative Arc

- **Opening:** Hook with surprising finding or important gap
- **Middle:** Build complexity, introduce nuance and counterarguments
- **Closing:** Synthesize into actionable insights or themes

### Audience Alignment

- Match vocabulary to audience expertise level
- If executive: lead with implications
- If technical: lead with methodology
- If student: lead with clear definitions

---

## Error Handling

### Common Hallucinations & Prevention

| Risk | Prevention | Response |
|------|-----------|----------|
| Inventing statistics | Only cite numbers from research notes | Delete claim, mark [VERIFY] |
| Wrong attribution | Cross-check source before writing | Correct or remove attribution |
| Outdated information | Check date of source material | Add publication date, note timing |
| Misquoting | Never write quotes from memory | Paraphrase or use [VERIFY] |

### Recovery Process

1. Identify error type
2. Mark location: [ERROR: description]
3. Note correction needed
4. In final review: fix all [ERROR] tags
5. If unable to fix: delete claim

### Version Control

- Save checkpoint before major sections
- Never overwrite previous version
- Use `-v2` suffix if major revision needed
