#!/usr/bin/env python3
"""
Fireflies Raw Transcript Script

This script documents how to fetch raw meeting transcripts (speakers, sentences)
from Fireflies via the MCP tools. Since Fireflies MCP tools are only accessible 
through Cursor's agent, use this as a reference or invoke via the /pull-meeting command.

MCP Tool: fireflies_get_transcript
Arguments: { "transcriptId": "<meeting_id>" }

Returns:
- Meeting metadata (title, date, duration)
- Speakers list with names
- Full transcript sentences with speaker attribution
"""

# Expected data structure from fireflies_get_transcript
TRANSCRIPT_RESPONSE_SCHEMA = {
    "id": "string - Meeting ID",
    "title": "string - Meeting title", 
    "date": "string - ISO date (e.g., 2026-01-27T15:00:00.000Z)",
    "duration": "number - Duration in minutes",
    "speakers": [
        {
            "id": "number - Speaker ID",
            "name": "string - Speaker name"
        }
    ],
    "sentences": [
        {
            "speaker_id": "number - ID of the speaker",
            "speaker_name": "string - Name of the speaker",
            "text": "string - What was said",
            "start_time": "number - Start time in seconds",
            "end_time": "number - End time in seconds"
        }
    ],
    "transcript_url": "string - Fireflies transcript URL"
}

# How to use via Cursor Agent:
"""
1. Get the meeting ID (from search or known ID)

2. Fetch raw transcript:
   fireflies_get_transcript with transcriptId: "<meeting_id>"

3. Format transcript as markdown:
   - Group consecutive sentences by speaker for readability
   - Format as: **Speaker Name:** Dialogue text.
   - Add line breaks between speaker changes
"""

def format_transcript(transcript_data):
    """
    Format raw transcript into readable markdown.
    
    Example output:
    ## Transcript
    
    **Hassan Rashid:** This meeting is being recorded.
    
    **Aida Knezevic:** Hi, ella. Hi, everyone.
    
    **Kirkland Gee:** Greetings.
    """
    if not transcript_data.get("sentences"):
        return "**Note:** No transcript available (silent recording or processing error).\n"
    
    lines = []
    current_speaker = None
    current_text = []
    
    for sentence in transcript_data.get("sentences", []):
        speaker = sentence.get("speaker_name", "Unknown")
        text = sentence.get("text", "").strip()
        
        if speaker != current_speaker:
            # Output previous speaker's text
            if current_speaker and current_text:
                lines.append(f"**{current_speaker}:** {' '.join(current_text)}")
                lines.append("")
            current_speaker = speaker
            current_text = [text] if text else []
        else:
            if text:
                current_text.append(text)
    
    # Output final speaker's text
    if current_speaker and current_text:
        lines.append(f"**{current_speaker}:** {' '.join(current_text)}")
    
    return "\n".join(lines)

def get_speakers_list(transcript_data):
    """Extract unique speaker names from transcript."""
    speakers = set()
    for sentence in transcript_data.get("sentences", []):
        name = sentence.get("speaker_name")
        if name:
            speakers.add(name)
    return sorted(list(speakers))

if __name__ == "__main__":
    print("=" * 60)
    print("Fireflies Raw Transcript Script")
    print("=" * 60)
    print()
    print("This script documents the fireflies_get_transcript MCP tool.")
    print("To fetch raw transcripts, use one of these methods:")
    print()
    print("1. Cursor Agent: Use /pull-meeting command")
    print("2. Direct MCP call: fireflies_get_transcript with transcriptId")
    print()
    print("See TRANSCRIPT_RESPONSE_SCHEMA for expected data structure.")
    print()
    print("The format_transcript() function shows how to convert")
    print("raw sentences into readable speaker-labeled dialogue.")
