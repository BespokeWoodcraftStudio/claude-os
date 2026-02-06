#!/usr/bin/env python3
"""
Fireflies Meeting Details Script

This script documents how to fetch meeting details (metadata, summary, action items)
from Fireflies via the MCP tools. Since Fireflies MCP tools are only accessible 
through Cursor's agent, use this as a reference or invoke via the /pull-meeting command.

MCP Tool: fireflies_get_summary
Arguments: { "transcriptId": "<meeting_id>" }

Returns:
- Meeting metadata (title, date, duration, organizer, participants)
- Summary/overview
- Keywords
- Action items
- Notes/bullet points
"""

# Expected data structure from fireflies_get_summary
SUMMARY_RESPONSE_SCHEMA = {
    "id": "string - Meeting ID",
    "title": "string - Meeting title",
    "date": "string - ISO date (e.g., 2026-01-27T15:00:00.000Z)",
    "duration": "number - Duration in minutes",
    "organizer_email": "string - Email of meeting organizer",
    "participants": ["string - List of participant emails"],
    "speakers": [
        {
            "name": "string - Speaker name",
            "email": "string - Speaker email (if available)"
        }
    ],
    "summary": {
        "keywords": ["string - Key topics discussed"],
        "action_items": [
            {
                "text": "string - Action item description",
                "assignee": "string - Person responsible (if identified)"
            }
        ],
        "overview": "string - High-level meeting summary",
        "shorthand_bullet": ["string - Bullet point summaries"],
        "gist": "string - Brief meeting gist",
        "notes": "string - Detailed meeting notes"
    },
    "meeting_link": "string - Original meeting URL (Zoom/Meet)",
    "transcript_url": "string - Fireflies transcript URL"
}

# How to use via Cursor Agent:
"""
1. Search for the meeting:
   fireflies_search with query: keyword:"meeting name" from:YYYY-MM-DD limit:10

2. Get the meeting ID from search results

3. Fetch summary details:
   fireflies_get_summary with transcriptId: "<meeting_id>"

4. Extract and format:
   - Title, date, duration for header
   - Participants for metadata
   - Overview/gist for Summary section
   - Notes for Key Topics section
   - Action items for Action Items section
"""

def format_metadata(summary_data):
    """
    Format meeting metadata into markdown metadata block.
    
    Example output:
    <metadata>
    date: 2026-01-27
    time: 15:00 UTC
    duration: 60 minutes
    organizer: marcel@growthx.ai
    participants: Name1, Name2, Name3
    fireflies_id: 01KFTYBQX1YXPYK98PWGT1PVB9
    meeting_link: https://zoom.us/...
    transcript_url: https://app.fireflies.ai/view/...
    </metadata>
    """
    pass  # Implemented by Cursor Agent using MCP response

def format_summary_sections(summary_data):
    """
    Format summary data into markdown sections.
    
    Sections generated:
    - ## Summary (from gist/overview)
    - ## Overview (from shorthand_bullet)
    - ## Key Topics (from notes, organized by theme)
    - ## Action Items (from action_items, grouped by assignee)
    """
    pass  # Implemented by Cursor Agent using MCP response

if __name__ == "__main__":
    print("=" * 60)
    print("Fireflies Meeting Details Script")
    print("=" * 60)
    print()
    print("This script documents the fireflies_get_summary MCP tool.")
    print("To fetch meeting details, use one of these methods:")
    print()
    print("1. Cursor Agent: Use /pull-meeting command")
    print("2. Direct MCP call: fireflies_get_summary with transcriptId")
    print()
    print("See SUMMARY_RESPONSE_SCHEMA for expected data structure.")
