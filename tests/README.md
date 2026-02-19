# Context Smoke Tests

Verify that your Context OS setup is working — that AI agents can find the right context and produce on-brand output.

---

## How to Use

Each test file contains:
1. **A prompt** to give your AI agent
2. **What context files should be loaded** (verify the agent loads the right ones)
3. **What "good" looks like** (expected qualities of the output)

### Running Tests

1. Open your AI tool (Claude Code, Cursor, or any agent pointed at this repo)
2. Give it the prompt from the test file
3. Check if the output matches the "good" criteria
4. If it doesn't, check that the referenced context files are filled in

### When to Run

- After initial setup (the 15-minute quickstart)
- After major changes to context files
- After adding a new role or updating the voice guide
- When onboarding a new AI tool

---

## Test Files

| Test | What It Verifies |
|------|-----------------|
| `voice-test.md` | Writing voice and style guide loads correctly |
| `role-test.md` | Executive roles load and produce role-specific analysis |
| `navigation-test.md` | Agent can find the right docs for any question |
| `pipeline-test.md` | Research pipeline flow works correctly |

---

## Interpreting Results

**If the agent sounds generic:** Your voice guide isn't loaded or isn't filled in. Check `context/voice/writing-style-context-v1.md`.

**If the agent doesn't know your company:** Your docs aren't filled in. Start with `docs/company/mission-and-vision.md`.

**If role responses lack depth:** Your role files need more content. Fill in decision frameworks and mental models.

**If the agent can't find information:** Your INDEX.md files may be incomplete, or the agent isn't loading README.md first.
