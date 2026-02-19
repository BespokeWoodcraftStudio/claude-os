"""
[FILL IN: Script Name] -- [FILL IN: One-line description]

Purpose:
    [FILL IN: What this script does and why it exists]

Usage:
    python script-template.py [FILL IN: arguments]

Inputs:
    [FILL IN: What data or configuration this script needs]
    - Environment variables: [FILL IN: e.g., API_KEY, BASE_URL]
    - Arguments: [FILL IN: e.g., --date, --output-dir]

Outputs:
    [FILL IN: What this script produces and where it writes]
    - Files written to: [FILL IN: e.g., records/transcripts/]

Requirements:
    [FILL IN: e.g., pip install requests python-dotenv]

Notes:
    - [FILL IN: Any important caveats or assumptions]
"""

import os
import sys
import logging
from datetime import datetime

# from dotenv import load_dotenv  # Uncomment if using .env files
# load_dotenv()

# --- Configuration ---

# API_KEY = os.environ.get("[FILL_IN_ENV_VAR]")
# BASE_URL = "[FILL IN: API base URL]"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "records")

# --- Logging ---

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


# --- Main Logic ---


def main():
    """[FILL IN: Main function description]"""
    logger.info("Starting script: %s", __file__)

    # [FILL IN: Script logic here]
    # 1. Validate configuration
    # 2. Fetch or process data
    # 3. Write output to appropriate directory
    # 4. Log results

    logger.info("Script complete.")


if __name__ == "__main__":
    main()
