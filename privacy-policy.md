# Privacy Policy - Deep Focus: Content Censor

**Last updated:** April 27, 2026

## Overview

Deep Focus - Content Censor is a browser extension that blurs distracting visual content on YouTube, Instagram, and Twitter (X). This privacy policy explains how the extension handles user data.

## Data Collection

**Deep Focus does not collect, store, transmit, or share any personal data.**

The extension operates entirely on your device using CSS filters and a minimal JavaScript content script. It makes no network requests and has no external server or backend.

## Data Storage

The only data stored by the extension is your **keyboard shortcut preference** (e.g., "Shift + S"). This setting is saved locally using the Chrome Storage API (`chrome.storage.sync`) so it persists across browser sessions and syncs across your signed-in Chrome devices. No other data is stored.

## Permissions Used

| Permission | Purpose |
|---|---|
| `activeTab` | Detects the active tab to apply the blur effect on supported sites. |
| `storage` | Saves your custom keyboard shortcut preference locally. |
| Host permissions (`youtube.com`, `instagram.com`, `twitter.com`, `x.com`) | Injects the CSS blur filters and toggle script on supported sites only. |

## Third-Party Services

Deep Focus does not use any third-party services, analytics, tracking scripts, cookies, or advertising frameworks.

## Remote Code

Deep Focus does not load or execute any remote code. All JavaScript runs locally from the extension package.

## Changes to This Policy

If this privacy policy is updated, the changes will be reflected on this page with an updated date.

## Contact

If you have any questions about this privacy policy, please open an issue on the [GitHub repository](https://github.com).
