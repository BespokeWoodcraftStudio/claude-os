---
name: post-to-slack
description: Post messages to Slack channels. Use when the user wants to send a message to Slack, post an update, share content to a channel, or mentions posting to Slack. Triggers on "post to slack", "send to slack", "slack message", "share to slack".
---

# Post to Slack

Post messages to Slack channels via the Slack MCP tools.

## Default Channel

**ceo-os**: `C0AC7SMJLQ5` (default when no channel specified)

## Common Channels

| Channel | ID |
|---------|-----|
| ceo-os | C0AC7SMJLQ5 |
| leaders | C07EVDWTZ1D |
| b-founders-only | C08LG3LGTR7 |
| ceo-support | C081EG0U2DU |
| all-general | C03066Q6BTL |
| all-watercooler | C03067PBPTM |
| b-epd | C07PHGWKMB2 |
| b-sales | C087G6UU490 |
| d-general | C07HD4ZALCW |
| all-kudos | C07U8NBEN0J |

## Usage

### Basic Post (defaults to ceo-os)

When the user says "post to Slack" without specifying a channel, use ceo-os.

### Post to Specific Channel

If the user specifies a channel name, look up the ID from the table above or use `slack_search_channels` to find it.

## How to Post

Use the Slack MCP tool `slack_send_message`:
- `channel_id`: The channel ID (default: C0AC7SMJLQ5)
- `message`: The message content

## Formatting Tips

Slack supports basic markdown:
- `*bold*` for **bold**
- `_italic_` for _italic_
- `~strikethrough~` for ~~strikethrough~~
- ``` `code` ``` for inline code
- Use `\n` for line breaks
- Use bullet points in message text

## Workflow

1. Determine target channel (default: ceo-os / C0AC7SMJLQ5)
2. If channel name given but not in table, use `slack_search_channels` to find ID
3. Compose message content
4. Call `slack_send_message` with channel_id and message
5. Confirm success to user

## Finding Other Channels

If the user requests a channel not listed above:
1. Use `slack_search_channels` to list available channels
2. Search the results for the channel name
3. Note: Only public channels appear; for private channels, user must provide the channel ID
