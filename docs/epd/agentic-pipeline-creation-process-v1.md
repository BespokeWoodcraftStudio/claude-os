# Agentic Pipeline Creation Process

*Source: Notion - https://www.notion.so/2932ba60bc7480d8aa0ef98e50ca8a9f*

---

**Video Tutorial:** [Editing Pipelines with Cloud Code: A Step-by-Step Guide](https://www.loom.com/share/e9eddce4282349cf94f316b23f02d9ec)

---

## 5-Step Process

### 1. Gain Context

**Why?**  
We need to understand what great looks like to the client so we can build as many rules and guidelines in the context artifacts and prompts as possible before handing it over to the delivery team so we reduce number of reopened tickets or later issues.

**What & How?**

1. Read through delivery team feedback on pipeline for specific customer
   - Strategy deep dives - review as needed
2. Request top performing articles or review Looker
3. Request past articles that have performed badly
4. Pull topics from ContentOS or ask CM/ME for upcoming topics

---

### 2. Create and Edit Context Artifacts via Generator

**Why?**  
Some current context artifacts are too long or have instructions that the agents won't be able to execute & it produces product page & checklist.

> **NOTE:** There have been issues with the generator removing important instructions that were in the old context artifacts, making up personas, etc so they need a lot of review and might be worth not using until these issues are fixed.

**What & How?**

1. Use the new context generator
2. Review and edit context artifacts

---

### 3. Build Pipeline

1. Copy and paste from Tech @ GrowthX
2. Update pipeline as needed to add missing inputs, workflows, etc

---

### 4. Test

**Why?**  
We want to test as much as possible so delivery team has to make as few edits as possible and client is thrilled about the quality.

**What & How?**

1. Run article pipeline for topic that was run in old pipeline & test against known issues (such as previous issues with referencing incorrect api versions) and writing guidelines using Claude (original artifacts first to see if there is a delta between the original and new ones) and test against old pipeline output
   - If critical errors (there always are), then update artifacts or prompts as needed
   - Repeat process until critical issues are fixed and verified
2. Review article to ensure that it reads well, check links to make sure they contain the statistics/sources cited, and check for other issues.
3. Run new topics and repeat process as needed
4. Ask for any clarification or information needed from CM/ME as needed

---

### 5. Review

**Why?**  
Get sign-off from CM/ME to confirm they've tested the pipeline and don't see issues so we don't get new Linear tickets in the following weeks of rolling it out.

**What & How?**

1. Ping delivery owners and ask to review pipeline output
2. After review we can close the ticket as DONE
