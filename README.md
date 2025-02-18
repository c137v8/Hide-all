# Instagram Hide Story Selector

## Overview
This browser extension adds a "Select All" and "Unselect All" button to the "Hide from" page on Instagram, allowing users to easily select or unselect all users in one click.

## Features
- Automatically detects when you're on the "Hide from" page.
- Adds a "Select All" button to hide stories from all users.
- Adds an "Unselect All" button to remove all selected users.
- Simple and user-friendly interface.

## Installation

### Manual Installation
1. Download or clone this repository.
2. Open your browser and navigate to `chrome://extensions/` (or the equivalent page in your browser).
3. Enable "Developer mode" (toggle on the top right corner).
4. Click "Load unpacked" and select the extension folder.
5. The extension is now installed and ready to use!

## Usage
1. Navigate to [Instagram's Hide Story Settings](https://www.instagram.com/accounts/hide_story_and_live_from/).
2. Two new buttons, "Select All" and "Unselect All", will appear next to the search bar.
3. Click "Select All" to hide your stories from all users.
4. Click "Unselect All" to remove the hide setting from all users.

## How It Works
- The script checks if you're on the correct Instagram page.
- It dynamically adds buttons next to the search bar.
- "Select All" clicks all unselected users.
- "Unselect All" clicks all selected users.
- The script runs continuously and updates if the page changes.

## Code Implementation
This extension works by:
- Checking the page URL to confirm the correct Instagram settings page.
- Injecting buttons dynamically into the UI.
- Using JavaScript to detect and toggle the selection of users.
- Monitoring page changes to ensure buttons persist.

## Contributing
If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

---

Enjoy your improved Instagram privacy settings with ease! 🚀


