Stage all changes, generate a descriptive commit message, and push to the current branch.

Steps:
1. Run `git status`, `git diff --stat`, `git log --oneline -5`, and `git branch --show-current` in parallel
2. If no changes exist, stop and say so
3. Run `git add -A` (warn and skip any files that look like secrets — .env, credentials, API keys)
4. Write a commit message: 1-2 sentences, focus on the why not the what, match the style of recent commits. End with `Co-Authored-By: Claude <noreply@anthropic.com>`. Use a HEREDOC to pass the message.
5. Push to origin. Use `-u` flag if no upstream is set.
6. Run `git status` to confirm clean working tree. Report the commit hash.

If push is rejected, do NOT force push. Suggest `git pull --rebase`.
If a pre-commit hook fails, fix the issue, re-stage, and create a NEW commit (never amend).
