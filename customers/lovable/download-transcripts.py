#!/usr/bin/env python3
"""
Lovable Transcript Downloader

This script contains all Lovable transcript IDs from Fireflies.
Since Fireflies MCP tools are only accessible through Cursor's agent,
use this as a reference or run the batch download through Cursor.

To download all transcripts via Cursor Agent:
1. Ask: "Download all Lovable transcripts using the IDs in download-transcripts.py"
2. The agent will iterate through each ID and save to /customers/lovable/transcripts/
"""

# All Lovable transcripts from Fireflies (as of 2026-02-02)
LOVABLE_TRANSCRIPTS = [
    {"id": "01KGFHTXN1M6CYKS3M4WYMCHM3", "title": "Lovable Templates Check-In", "date": "2026-02-02"},
    {"id": "01KG0A2X02MNSZB5BG2XTTQ1F2", "title": "Lovable Templates Check-In", "date": "2026-01-29"},
    {"id": "01KFFC77ZXX26AE8CNBJQ8KKGF", "title": "Lovable Templates Check-In", "date": "2026-01-26"},
    {"id": "01KFE99MYGN34CRYC9B8XY11FS", "title": "Lovable Templates Check-In", "date": "2026-01-22"},
    {"id": "01KF3213676949K63E9DD8Q3F1", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2026-01-20"},
    {"id": "01KF6J3EBXARH80WXFKMKX4H01", "title": "Lovable Templates Check-In", "date": "2026-01-19"},
    {"id": "01KEW8GN76GYCRATAG03216XFW", "title": "Lovable Templates Check-In", "date": "2026-01-15"},
    {"id": "01KE98KGYG79GPFNGVAQASQ3DA", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2026-01-12"},
    {"id": "01KEMHADKFWZVRPSJBNMMH75CG", "title": "Lovable Templates Check-In", "date": "2026-01-12"},
    {"id": "01KEA7QGTFKZRVKCBYB89BW8EN", "title": "Lovable Templates Check-In", "date": "2026-01-08"},
    {"id": "01KE2GHCGX07Z98H4CA8Y4N05G", "title": "Lovable Templates Check-In", "date": "2026-01-05"},
    {"id": "01KDZWS4DHJAGX6DJ4SRQ86ENC", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2026-01-05"},
    {"id": "01KDR6YH8A1FTHC3V9BHD1PH29", "title": "Lovable Templates Check-In", "date": "2026-01-01"},
    {"id": "01KDGFRB7T5ZC9N34P4J7NFSJ0", "title": "Lovable Templates Check-In", "date": "2025-12-29"},
    {"id": "01KD665DGFG9ES90EEVN9WXPMX", "title": "Lovable Templates Check-In", "date": "2025-12-25"},
    {"id": "01KCYEZAZ0DSHHZE33AB02ED51", "title": "Lovable Templates Check-In", "date": "2025-12-22"},
    {"id": "01KCS5H8JPDAZ2Q6WAMF4CDXA9", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2025-12-22"},
    {"id": "01KCA69ANHBXVQYVENEN3XA5AV", "title": "Lovable Templates Check-In", "date": "2025-12-18"},
    {"id": "01KCM16XX1WZS0TG2BMEFDEREB", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2025-12-18"},
    {"id": "01KCA69ANHZPHVD42PGSHFV0YX", "title": "Lovable Templates Check-In", "date": "2025-12-15"},
    {"id": "01KC24EFJMZPN47WXERZHJK9SS", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2025-12-15"},
    {"id": "01KBNS9F93FVJE44D7VMHN2A4J", "title": "Lovable Templates Check-In", "date": "2025-12-11"},
    {"id": "01KBYHHFPDVDS1F5FM9HY5M1XN", "title": "Lovable workshop sync", "date": "2025-12-08"},
    {"id": "01KBNS9F9AF4MQ61Y3R75TM8AR", "title": "Lovable Templates Check-In", "date": "2025-12-08"},
    {"id": "01KBJX33F5GJKSYSWGVPZT71BY", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2025-12-05"},
    {"id": "01KBN5K6HKEM9NP2WRTSH92C3Y", "title": "Lovable Templates Check-In", "date": "2025-12-04"},
    {"id": "01KAVJAHK1M8JA7SJP21KA1MTQ", "title": "Lovable Templates Check-In", "date": "2025-12-01"},
    {"id": "01KAVJAHJX5ZJDD9W6W9XFZMRW", "title": "Lovable Templates Check-In", "date": "2025-11-27"},
    {"id": "01KA9F1HATB086717C5ZWMXPT4", "title": "Lovable Templates Check-In", "date": "2025-11-24"},
    {"id": "01KAVDV79K7RQRX6JSJAFDTRPF", "title": "Scrunch Lovable", "date": "2025-11-24"},
    {"id": "01KA9F1HAQV43GDN20RJZ2Z1GR", "title": "Lovable Templates Check-In", "date": "2025-11-20"},
    {"id": "01K9X5SEE5WSG97R68P7DMYC7B", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2025-11-19"},
    {"id": "01KAD0KP97WH7XP6X7TF8M8DH6", "title": "Lovable Workflow Demo", "date": "2025-11-19"},
    {"id": "01K9QNWP3RRMGJ4HBANR8FHNGS", "title": "Lovable Templates Check-In", "date": "2025-11-17"},
    {"id": "01K9QNWP401084W29BZXT1G8PM", "title": "Lovable Templates Check-In", "date": "2025-11-13"},
    {"id": "01K9QWRJTAZE1Y4N17ARYMNBM5", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2025-11-12"},
    {"id": "01K95J6GE58QA5Y9BHKWNR78SA", "title": "Lovable Templates Check-In", "date": "2025-11-10"},
    {"id": "01K95J6GE220FH7X2ARMME8V71", "title": "Lovable Templates Check-In", "date": "2025-11-06"},
    {"id": "01K8TCPK0QGVG99RK0FC3ZE33Y", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2025-11-05"},
    {"id": "01K98KCS8N6ZN9GYHXVB3QRV1F", "title": "Lovable", "date": "2025-11-04"},
    {"id": "01K8NTH58N06JMBVFMD15CM6GW", "title": "Lovable Templates Check-In", "date": "2025-11-03"},
    {"id": "01K8K5Q16GP5T9K6P2ANK8V63E", "title": "Lovable Templates Check-In", "date": "2025-10-30"},
    {"id": "01K875H11EQ0EM4H9BMVX4RHAG", "title": "Lovable <> GrowthX - Weekly Sync", "date": "2025-10-29"},
    {"id": "01K8NZC86B8XM5GZ109AEQ8MC2", "title": "Lovable Site Audit Review", "date": "2025-10-28"},
    {"id": "01K81AY2KZBT1466PAPTNGHH1A", "title": "Lovable Templates Check-In", "date": "2025-10-27"},
    {"id": "01K81AY2ME0B0DVZEAN9YM3QMM", "title": "Lovable Templates Check-In", "date": "2025-10-24"},
    {"id": "01K7MM3TEKQYA262M7HZPY5M0R", "title": "Lovable Agenda Review", "date": "2025-10-22"},
    {"id": "01K7MM3TF1K7RXXZYC9Y4XXFX0", "title": "Lovable Templates Check-In", "date": "2025-10-20"},
    {"id": "01K7SG8TMMR6T0JHCE0TP96NSZ", "title": "Lovable Templates", "date": "2025-10-17"},
    {"id": "01K77PQTRV884996ERM4W0DGQ2", "title": "Lovable Templates Check-In", "date": "2025-10-17"},
]

# Priority transcripts (Weekly Syncs with client - most strategic value)
WEEKLY_SYNC_IDS = [
    "01KF3213676949K63E9DD8Q3F1",  # 2026-01-20
    "01KE98KGYG79GPFNGVAQASQ3DA",  # 2026-01-12
    "01KDZWS4DHJAGX6DJ4SRQ86ENC",  # 2026-01-05
    "01KCS5H8JPDAZ2Q6WAMF4CDXA9",  # 2025-12-22
    "01KCM16XX1WZS0TG2BMEFDEREB",  # 2025-12-18
    "01KC24EFJMZPN47WXERZHJK9SS",  # 2025-12-15
    "01KBJX33F5GJKSYSWGVPZT71BY",  # 2025-12-05
    "01K9X5SEE5WSG97R68P7DMYC7B",  # 2025-11-19
    "01K9QWRJTAZE1Y4N17ARYMNBM5",  # 2025-11-12
    "01K8TCPK0QGVG99RK0FC3ZE33Y",  # 2025-11-05
    "01K875H11EQ0EM4H9BMVX4RHAG",  # 2025-10-29
]

def generate_filename(transcript: dict) -> str:
    """Generate a consistent filename for a transcript."""
    date = transcript["date"]
    title = transcript["title"].lower()
    title = title.replace(" <> ", "-")
    title = title.replace(" - ", "-")
    title = title.replace(" ", "-")
    # Remove special characters
    title = "".join(c for c in title if c.isalnum() or c == "-")
    return f"{date}-{title}.md"


def print_transcript_list():
    """Print all transcripts for reference."""
    print(f"Total Lovable transcripts: {len(LOVABLE_TRANSCRIPTS)}")
    print(f"Weekly Syncs (priority): {len(WEEKLY_SYNC_IDS)}")
    print("\n--- All Transcripts ---")
    for t in LOVABLE_TRANSCRIPTS:
        filename = generate_filename(t)
        print(f"  {t['date']} | {t['title']}")
        print(f"    ID: {t['id']}")
        print(f"    File: {filename}")
        print()


if __name__ == "__main__":
    print_transcript_list()
