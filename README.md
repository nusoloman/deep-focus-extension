# Deep Focus — Content Censor Browser Extension

**Blur distracting content on YouTube, Instagram and Twitter (X). Stay focused, stay productive.**

Deep Focus is a lightweight Chrome extension that censors visual and textual distractions on the most addictive social media platforms. Thumbnails, video titles, tweets, images, stories — everything gets blurred until you decide to reveal it. Take back control of your attention with a single keyboard shortcut.

---

## Why Deep Focus?

Social media feeds are designed to hijack your attention. Deep Focus fights back by applying a **persistent blur and grayscale filter** over distracting content. Unlike simple site blockers, Deep Focus lets you stay on the platform for intentional use (searching, posting, managing) while removing the endless scroll temptation.

- **No more doomscrolling** — thumbnails and previews are blurred, breaking the autoplay trap
- **Stay on task** — use YouTube for research or music without getting pulled into recommendations
- **Zero data collection** — everything runs locally on your device, no analytics, no tracking
- **Instant toggle** — press your custom shortcut to reveal content when you actually need it

---

## Supported Platforms

| Platform | What Gets Censored |
|---|---|
| **YouTube** | Thumbnails, video titles, channel names, avatars, Shorts previews, inline video players, hover previews |
| **Instagram** | Feed images, videos, stories, reels, comments, usernames, profile pictures, explore page |
| **Twitter / X** | Tweet text, images, videos, user avatars, trending topics, sidebar content |

---

## Features

- **Persistent blur effect** — content stays censored even on hover (no accidental reveals)
- **Customizable keyboard shortcut** — set any key combination to toggle focus mode on/off (default: `Shift + S`)
- **Instant toggle** — switch between censored and uncensored views without reloading the page
- **Grayscale filter** — images and thumbnails are desaturated to further reduce visual pull
- **Lightweight & fast** — pure CSS filters with a minimal JavaScript content script, zero performance impact
- **Privacy-first** — no data collection, no network requests, no remote code execution
- **Manifest V3** — built with the latest Chrome extension standard

---

## Installation

### From Chrome Web Store

1. Visit the [Deep Focus - Content Censor](https://chromewebstore.google.com) listing on Chrome Web Store
2. Click **"Add to Chrome"**
3. The extension icon will appear in your toolbar

### Manual Installation (Developer Mode)

1. Clone or download this repository:
   ```bash
   git clone https://github.com/user/deep-focus-extension.git
   ```
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer mode** (top-right toggle)
4. Click **"Load unpacked"** and select the extension folder
5. Navigate to YouTube, Instagram, or Twitter to see it in action

---

## Usage

1. **Browse normally** — Deep Focus activates automatically on supported sites
2. **Toggle off** — Press `Shift + S` (or your custom shortcut) to reveal all content
3. **Toggle on** — Press the same shortcut again to re-enable censorship
4. **Change shortcut** — Click the extension icon in the toolbar and set any key combination you prefer

> The shortcut only works when you're not typing in a text field, so it won't interfere with search bars or comment boxes.

---

## How It Works

Deep Focus uses **CSS blur and grayscale filters** injected via a content script at `document_start`. This means content is censored before it even renders on screen — no flash of uncensored content.

The toggle mechanism adds/removes a CSS class (`sansur-disabled`) on the `<body>` element, switching all filters on or off instantly without any page reload.

```
Censored state:  body:not(.sansur-disabled) → blur + grayscale active
Revealed state:  body.sansur-disabled        → filters removed
```

---

## Keyboard Shortcut Configuration

| Action | Default |
|---|---|
| Toggle censorship | `Shift + S` |

To change the shortcut:

1. Click the Deep Focus icon in the Chrome toolbar
2. Click **"Change Shortcut"**
3. Press your desired key combination (must include at least one modifier: Shift, Ctrl, or Alt)
4. Your shortcut is saved and synced across Chrome devices

---

## Permissions

| Permission | Why It's Needed |
|---|---|
| `activeTab` | Applies blur filters on the active tab |
| `storage` | Saves your keyboard shortcut preference |
| Host permissions | Injects CSS and JS only on `youtube.com`, `instagram.com`, `twitter.com`, `x.com` |

Deep Focus requests **minimal permissions** — no browsing history, no cookies, no web requests.

---

## Privacy

Deep Focus is built with a privacy-first approach:

- **No data collection** — zero personal data is collected, stored, or transmitted
- **No analytics or tracking** — no third-party scripts, cookies, or advertising frameworks
- **No network requests** — the extension never communicates with any external server
- **No remote code** — all JavaScript runs locally from the extension package
- **Local storage only** — the only stored data is your keyboard shortcut preference

Read the full [Privacy Policy](privacy-policy.md).

---

## Tech Stack

- **Manifest V3** — Chrome Extension standard
- **CSS** — Blur, grayscale, and opacity filters for content censorship
- **Vanilla JavaScript** — Lightweight content script and popup logic
- **Chrome Storage API** — Shortcut preference sync across devices

---

## Project Structure

```
deep-focus-extension/
├── manifest.json        # Extension configuration (Manifest V3)
├── content.js           # Content script — shortcut listener & toggle logic
├── focus-style.css      # CSS filters — blur, grayscale & censorship rules
├── popup.html           # Extension popup — shortcut configuration UI
├── popup.js             # Popup logic — shortcut recording & storage
├── privacy-policy.md    # Privacy policy
└── icons/               # Extension icons (16, 32, 48, 128px)
```

---

## Related Keywords

`focus mode extension` · `distraction blocker` · `YouTube content blocker` · `Instagram blur extension` · `Twitter content filter` · `social media distraction blocker` · `productivity browser extension` · `digital wellbeing tool` · `content censor chrome` · `anti-doomscrolling extension` · `focus productivity tool` · `screen time control` · `attention management` · `distraction-free browsing`
