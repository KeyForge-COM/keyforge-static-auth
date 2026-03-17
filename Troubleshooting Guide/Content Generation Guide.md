# 🔑 KeyForge Static-Auth — Content Generation Guide

<div align="center">

```
 ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗███████╗
██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   █████╗
██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝
╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ███████╗
 ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

 ██████╗ ██╗   ██╗██╗██████╗ ███████╗
██╔════╝ ██║   ██║██║██╔══██╗██╔════╝
██║  ███╗██║   ██║██║██║  ██║█████╗
██║   ██║██║   ██║██║██║  ██║██╔══╝
╚██████╔╝╚██████╔╝██║██████╔╝███████╗
 ╚═════╝  ╚═════╝ ╚═╝╚═════╝ ╚══════╝
```

### ⚡ How to Generate, Copy & Use Encrypted Content

> **Step-by-step guide to generate your encrypted JSON,**
> **copy the correct output, and paste it into the right place.**

[![Made By](https://img.shields.io/badge/Made_by-SudhirDevOps1-ff003c?style=for-the-badge&logo=github)](https://github.com/SudhirDevOps1)
[![Version](https://img.shields.io/badge/Version-2.0-ff00ff?style=for-the-badge)](https://github.com/SudhirDevOps1)
[![Guide](https://img.shields.io/badge/Guide-Content_Generation-00fff5?style=for-the-badge)](https://github.com/SudhirDevOps1)
[![Encryption](https://img.shields.io/badge/AES-256-00ff88?style=for-the-badge)](https://github.com/SudhirDevOps1)

</div>

---

## 📖 Table of Contents

- [🎯 What This Guide Covers](#-what-this-guide-covers)
- [📋 Prerequisites](#-prerequisites)
- [🚀 Step 1 — Open Your Site in Browser](#-step-1--open-your-site-in-browser)
- [🖥️ Step 2 — Open Browser Console](#️-step-2--open-browser-console)
- [🔓 Step 3 — Enable Pasting in Console](#-step-3--enable-pasting-in-console)
- [📝 Step 4 — Paste the Generation Code](#-step-4--paste-the-generation-code)
- [👁️ Step 5 — Read the Console Output](#️-step-5--read-the-console-output)
- [📋 Step 6 — Copy the Correct Part](#-step-6--copy-the-correct-part)
- [💾 Step 7 — Paste Into JSON File](#-step-7--paste-into-json-file)
- [🧪 Step 8 — Test Your Login](#-step-8--test-your-login)
- [👥 Multi-User Code Reference](#-multi-user-code-reference)
- [👤 Single User Code Reference](#-single-user-code-reference)
- [🎨 Custom HTML Content Mode](#-custom-html-content-mode)
- [🔄 How to Update Content Later](#-how-to-update-content-later)
- [✅ Final Checklist](#-final-checklist)

---

## 🎯 What This Guide Covers

```
This guide answers three questions:

QUESTION 1: What code do I paste into the browser console?
QUESTION 2: What does the console output look like?
QUESTION 3: Which part of the output do I copy and where does it go?

After following this guide you will have:
→ A working encrypted-content.json file
→ A password-protected site that actually unlocks
→ Multi-user or single-user access working correctly
```

---

## 📋 Prerequisites

```
Before starting, make sure you have:

✅ index.html saved with the full KeyForge code
✅ encrypted-content.json file created (can be empty for now)
✅ Both files in the SAME folder
✅ A local server running (not opening via double-click)
✅ Internet connection (for CryptoJS CDN)

Folder must look like this:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
my-project/
├── index.html                ← KeyForge HTML
└── encrypted-content.json    ← Will be filled in this guide
```

---

## 🚀 Step 1 — Open Your Site in Browser

```
You MUST use a local server. Do NOT open the file directly.
```

### Choose One Method:

#### Method A — npx serve (Easiest):

```bash
# Open Terminal or Command Prompt
# Navigate to your project folder:
cd my-project

# Start server:
npx serve .

# Open this URL in your browser:
http://localhost:3000
```

#### Method B — Python:

```bash
cd my-project
python3 -m http.server 8080

# Open this URL in your browser:
http://localhost:8080
```

#### Method C — VS Code Live Server:

```
1. Open folder in VS Code
2. Right-click index.html
3. Click "Open with Live Server"
4. Browser opens automatically at:
   http://127.0.0.1:5500
```

### Verify the URL:

```
✅ CORRECT — server is running:
   http://localhost:3000
   http://localhost:8080
   http://127.0.0.1:5500

❌ WRONG — file opened directly:
   file:///C:/Users/name/project/index.html
   file:///home/user/project/index.html
```

---

## 🖥️ Step 2 — Open Browser Console

```
The console is where you will run the encryption command.
```

### Open Console by Browser:

```
┌────────────────────────────────────────────────────────┐
│  CHROME / BRAVE / EDGE                                 │
│  → Press F12                                           │
│  → Click "Console" tab at the top                      │
│  → OR press: Ctrl + Shift + J  (Windows/Linux)        │
│  → OR press: Cmd + Option + J  (Mac)                  │
├────────────────────────────────────────────────────────┤
│  FIREFOX                                               │
│  → Press F12                                           │
│  → Click "Console" tab                                 │
│  → OR press: Ctrl + Shift + K  (Windows/Linux)        │
│  → OR press: Cmd + Option + K  (Mac)                  │
├────────────────────────────────────────────────────────┤
│  SAFARI                                                │
│  → Safari menu → Settings → Advanced                  │
│  → Check "Show Develop menu in menu bar"               │
│  → Then: Develop → Show Web Inspector → Console        │
└────────────────────────────────────────────────────────┘
```

### What the Console Looks Like:

```
┌─────────────────────────────────────────────────────────┐
│  Elements  Console  Sources  Network  Application       │
├─────────────────────────────────────────────────────────┤
│  [KeyForge] KeyForge v2.0 initialised · 1/1/2024       │
│  >  _                                                   │
│     ↑ This is where you type/paste your code            │
└─────────────────────────────────────────────────────────┘
```

---

## 🔓 Step 3 — Enable Pasting in Console

> ⚠️ **Chrome, Brave, and Edge block pasting by default.**
> **Firefox does NOT have this restriction — skip to Step 4.**

### Chrome / Brave / Edge Only:

```
You will see this warning when you try to paste:

"Warning: Don't paste code into the DevTools Console
 that you don't understand or haven't reviewed yourself.
 Please type 'allow pasting' below and press Enter."
```

### Fix:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Type this MANUALLY (do not copy-paste it):             │
│                                                         │
│  allow pasting                                          │
│                                                         │
│  Then press ENTER                                       │
│                                                         │
└─────────────────────────────────────────────────────────┘

You will then see:
"Pasting enabled"

Pasting is now unlocked for this session. ✅
```

### ⚠️ Rules:

```
❌ Do NOT copy-paste "allow pasting" — Chrome may block it
✅ TYPE the words manually on your keyboard
✅ After "Pasting enabled" appears, you can paste normally
```

---

## 📝 Step 4 — Paste the Generation Code

### Copy This Entire Code Block:

```javascript
KeyForge.generateMultiUser([
  {
    username: "ADMIN",
    password: "admin123",
    content: {
      title: "⚙️ Admin Dashboard",
      description: "Full access granted. Welcome ADMIN!",
      sections: [
        {
          heading: "Secret Data",
          body: "Only the ADMIN can see this!",
          tags: ["TOP-SECRET", "ADMIN-ONLY"]
        },
        {
          heading: "Admin Controls",
          list: [
            "Users    → /admin/users",
            "Logs     → /admin/logs",
            "Database → /admin/db"
          ]
        }
      ]
    }
  },
  {
    username: "AGENT_SHADOW",
    password: "shadow456",
    content: {
      title: "🕵️ Agent Shadow Portal",
      description: "Mission briefing loaded. Welcome Agent!",
      sections: [
        {
          heading: "Mission Details",
          body: "Only AGENT_SHADOW can see this!",
          tags: ["CLASSIFIED", "FIELD-AGENT"]
        },
        {
          heading: "Active Missions",
          list: [
            "Mission Alpha → Active",
            "Mission Beta  → Standby",
            "HQ Contact    → Secure Line"
          ]
        }
      ]
    }
  }
]);
```

### Paste and Run:

```
1. Click inside the console input area (next to the > prompt)
2. Paste the code above (Ctrl+V / Cmd+V)
3. Press ENTER
4. Wait 1-2 seconds for output to appear
```

---

## 👁️ Step 5 — Read the Console Output

### The Console Will Show THREE Things:

```
┌─────────────────────────────────────────────────────────────┐
│                    CONSOLE OUTPUT                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  THING 1 (blue/cyan label — DO NOT COPY):                  │
│  ─────────────────────────────────────────                  │
│  [KeyForge] Copy into encrypted-content.json ↓             │
│                                                             │
│  THING 2 (the actual JSON object — COPY THIS):             │
│  ─────────────────────────────────────────────              │
│  ▶ {                                                        │
│      "users": [                                             │
│        {                                                    │
│          "username": "ADMIN",                               │
│          "ciphertext": "U2FsdGVkX1+ekJ/SiUQ5UQ..."        │
│        },                                                   │
│        {                                                    │
│          "username": "AGENT_SHADOW",                        │
│          "ciphertext": "U2FsdGVkX1/Z2N4S+x4PD+..."        │
│        }                                                    │
│      ]                                                      │
│    }                                                        │
│                                                             │
│  THING 3 (raw string version — DO NOT COPY):               │
│  ─────────────────────────────────────────────              │
│  '{\n  "users": [\n    {\n      "username"...'             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### What Each Part Means:

```
THING 1 → Just an instruction label printed by KeyForge
           You do not need this — ignore it completely

THING 2 → The actual JSON object you need
           This is what goes into encrypted-content.json
           COPY THIS PART ✅

THING 3 → The same JSON but as a raw JavaScript string
           It has \n escape characters — not proper JSON
           DO NOT USE THIS ❌
```

---

## 📋 Step 6 — Copy the Correct Part

### What the Real Output Looks Like:

```json
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "U2FsdGVkX1+ekJ/SiUQ5UQuf2AVr7HLS+qhrnKQKvQIpM9KCfQ9V2TkqZ3RH7nsu+ZR1iaN9k88u5f83SeTsF8cXzj7KXEqRiws9Il3sklC6eyOJlz32JYFXE8QpfqnchG90z/YIfT6XovhPkRsdBZO8z4BOCZXNpzSf0peR/6EPraywTx6aZeGMhGhzZyyySV765rYTwgwhjAOPVnNIlJXAtWhcwM7QV5jJ/pUY5poQI/ichLaunnJAGNPpwXbGOHo4JApFUHUTlLpZRo6cv5dDfCId7SjXQaeoI7Tqq6GVT8Qxv5TBsh4AJT35QqnXsvFYhW/x9GzP05yMDPcYAKOh871brtv9m350sxkBcoStm/gag5OjSVuVfpiTXIot/4cX38ilZc90QsfPtiWnJO+qgAXm08vxeuGNr7bd4GSHR59+j3p60x0MqmcVHijr"
    },
    {
      "username": "AGENT_SHADOW",
      "ciphertext": "U2FsdGVkX1/Z2N4S+x4PD+WX95K9EJDkJzJtA4fcyi3D6Mjx+9sLYl7lRtWDw0/fmWvcT2jXCz3bc9T7Fliw22syFG7EqKLEj7T1/5TxCDxI8eWICnR5VZPgeKP8CTlAJgfttHPr+sbj4kLVsf/InMm1EgxUzz7568Jp5Lq3SRW/Phhg9wWxo7UT7VPbeQqveqqe9GBM+YC7XFgwusYJm78d6xq/CuHf3r7aLFWXe+B0LZNs0E+9X7VoLGnlDMbE4c549UWamg/+zTIXMc+M6Dn6Bc3iih5XcV8//g+yA8skhou7m5KCcI06HRu2R/o8+wwEXewf47RxNgabsOmvT+KQuOHF52MvjTIda/jaijp5Z317ElPp9P1wk3VmFvQOHaMozbwQJoLSbHmJombrPi8YaAShOOcxnbFEJqsARt77Owcn+L5f1ElUgL2hNmsluHJJt5k8sAJ01M7POZ+3I0BgBh4xUTaitI/mGnt67Yo="
    }
  ]
}
```

### Copy Rules — Very Important:

```
✅ Copy FROM the very first {  (opening curly brace)
✅ Copy TO   the very last  }  (closing curly brace)

❌ Do NOT include the label line above the JSON
❌ Do NOT include the raw string version below the JSON
❌ Do NOT copy only part of a ciphertext (it will break)
```

### Easy Copy Method — Right-Click:

```
In the Chrome/Firefox console:

Step 1: Find the JSON object output (Thing 2)
Step 2: Right-click directly on the { } object
Step 3: Select "Copy object" from the menu
Step 4: This copies perfectly formatted JSON ✅

This method avoids any manual selection mistakes.
```

---

## 💾 Step 7 — Paste Into JSON File

### Open encrypted-content.json:

```
Use any text editor:
→ VS Code (recommended)
→ Notepad (Windows)
→ TextEdit (Mac — use plain text mode)
→ Nano / Vim (terminal)
```

### Before Pasting — What the File Looks Like:

```json
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "GENERATE_THIS_BY_RUNNING_IN_BROWSER_CONSOLE"
    },
    {
      "username": "AGENT_SHADOW",
      "ciphertext": "GENERATE_THIS_BY_RUNNING_IN_BROWSER_CONSOLE"
    }
  ]
}
```

### How to Replace the Content:

```
Step 1: Press Ctrl+A / Cmd+A to select ALL existing content
Step 2: Press Delete or Backspace to clear it completely
Step 3: Press Ctrl+V / Cmd+V to paste your new JSON
Step 4: Press Ctrl+S / Cmd+S to save the file
```

### After Pasting — What the File Should Look Like:

```json
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "U2FsdGVkX1+ekJ/SiUQ5UQuf2AVr7HLS..."
    },
    {
      "username": "AGENT_SHADOW",
      "ciphertext": "U2FsdGVkX1/Z2N4S+x4PD+WX95K9EJDk..."
    }
  ]
}
```

### Verify the File is Valid:

```
Go to: jsonlint.com
Paste your entire file content
Click "Validate JSON"

✅ Green result = perfect, move to Step 8
❌ Red result   = something went wrong, re-copy from console
```

---

## 🧪 Step 8 — Test Your Login

### Reload the Browser First:

```
Windows / Linux : Ctrl + R
Mac             : Cmd + R

OR for a hard reload (clears cache):
Windows / Linux : Ctrl + Shift + R
Mac             : Cmd + Shift + R
```

### Run All 4 Tests:

#### Test 1 — ADMIN Login:

```
┌──────────────────────────────────────────────┐
│  Access Identity  →  ADMIN                   │
│  Security Key     →  admin123                │
│                                              │
│  Expected Result  →  ✅ UNLOCKED             │
│  Content Shown    →  "⚙️ Admin Dashboard"    │
└──────────────────────────────────────────────┘
```

#### Test 2 — AGENT_SHADOW Login:

```
┌──────────────────────────────────────────────┐
│  Access Identity  →  AGENT_SHADOW            │
│  Security Key     →  shadow456               │
│                                              │
│  Expected Result  →  ✅ UNLOCKED             │
│  Content Shown    →  "🕵️ Agent Shadow Portal"│
└──────────────────────────────────────────────┘
```

#### Test 3 — Wrong Password:

```
┌──────────────────────────────────────────────┐
│  Access Identity  →  ADMIN                   │
│  Security Key     →  wrongpassword           │
│                                              │
│  Expected Result  →  ❌ DENIED               │
│  Message Shown    →  "Invalid key. 4         │
│                       attempts remaining."   │
└──────────────────────────────────────────────┘
```

#### Test 4 — Cross-Access (Security Check):

```
┌──────────────────────────────────────────────┐
│  Access Identity  →  ADMIN                   │
│  Security Key     →  shadow456               │
│  (Using AGENT's password for ADMIN login)    │
│                                              │
│  Expected Result  →  ❌ DENIED               │
│  This proves      →  AES-256 is working      │
│                       correctly ✅           │
└──────────────────────────────────────────────┘
```

---

## 👥 Multi-User Code Reference

### Template — Copy and Customize:

```javascript
KeyForge.generateMultiUser([

  // ── USER 1 ──────────────────────────────────────────────
  {
    username: "ADMIN",              // ← Display name (any text)
    password: "YourPassword@2024!", // ← Login password (keep safe)
    content: {
      title: "Admin Panel",
      description: "Welcome to the admin area.",
      sections: [
        {
          heading: "Section Title",
          body: "This text is shown in a card.",
          tags: ["TAG-ONE", "TAG-TWO"]
        },
        {
          heading: "List Section",
          list: [
            "Item one → /link",
            "Item two → /link",
            "Item three → /link"
          ]
        }
      ]
    }
  },

  // ── USER 2 ──────────────────────────────────────────────
  {
    username: "DEVELOPER",
    password: "DevPassword@2024!",
    content: {
      title: "Developer Portal",
      description: "Development resources.",
      sections: [
        {
          heading: "Dev Tools",
          body: "Only the developer can see this.",
          tags: ["DEV", "INTERNAL"]
        }
      ]
    }
  },

  // ── USER 3 ──────────────────────────────────────────────
  {
    username: "CLIENT",
    password: "ClientPassword@2024!",
    content: {
      title: "Client Dashboard",
      description: "Project progress overview.",
      sections: [
        {
          heading: "Project Status",
          body: "Everything is on track.",
          tags: ["ON-TRACK"]
        },
        {
          heading: "Milestones",
          list: [
            "✅ Design — Complete",
            "🔄 Development — In Progress",
            "⏳ Testing — Pending"
          ]
        }
      ]
    }
  }

]);
```

### Content Object Fields Explained:

```
FIELD         TYPE     REQUIRED   DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
username      string   YES        Display name shown after login
password      string   YES        Password used to lock/unlock
title         string   NO         Large heading at top of page
description   string   NO         Paragraph below the title
sections      array    NO         Array of card sections

SECTION FIELDS:
heading       string   NO         Bold heading inside card
body          string   NO         Paragraph text inside card
tags          array    NO         Colored badge labels
list          array    NO         Bulleted list items
```

---

## 👤 Single User Code Reference

### If You Only Need One Password:

```javascript
KeyForge.generateSingle(
  {
    title: "🛡️ My Secure Site",
    description: "Welcome! You have authenticated successfully.",
    sections: [
      {
        heading: "Important Information",
        body: "This content is visible only after authentication.",
        tags: ["PRIVATE", "SECURE"]
      },
      {
        heading: "Quick Links",
        list: [
          "Dashboard → /dashboard",
          "Reports   → /reports",
          "Settings  → /settings"
        ]
      }
    ]
  },
  "YourSinglePassword@2024!"  // ← The one and only password
);
```

### Single User Output Format:

```json
{
  "ciphertext": "U2FsdGVkX1+...full encrypted string..."
}
```

### Difference: Single vs Multi-User:

```
SINGLE USER:                     MULTI-USER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{                                {
  "ciphertext": "U2Fs..."          "users": [
}                                    {
                                       "username": "ADMIN",
One password unlocks               "ciphertext": "U2Fs..."
the same content for               },
everyone.                          {
                                     "username": "USER2",
                                     "ciphertext": "X9mN..."
                                   }
                                 ]
                               }

Each user sees different
content with their own password.
```

---

## 🎨 Custom HTML Content Mode

### For Full Design Control — Use Raw HTML:

```javascript
KeyForge.generateSingle(
  {
    html: `
      <h1>🎯 My Custom Dashboard</h1>

      <p>Write any <strong>HTML</strong> you want here.</p>

      <div class="card">
        <h2>Section One</h2>
        <p>This uses the built-in card styling.</p>
        <span class="tag">CUSTOM</span>
        <span class="tag">HTML</span>
      </div>

      <div class="card">
        <h2>Section Two</h2>
        <ul>
          <li>You can use any HTML elements</li>
          <li>Links, images, tables — anything</li>
          <li>Built-in CSS classes work here too</li>
        </ul>
      </div>

      <div class="card">
        <h2>⚠️ Notice</h2>
        <p style="color: var(--neon-red);">
          This is styled with KeyForge CSS variables.
        </p>
      </div>
    `
  },
  "YourPassword@2024!"
);
```

### Available CSS Classes Inside html: Mode:

```
CLASS NAME        APPEARANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.card             Dark panel with border and hover glow
.tag              Cyan badge label with border
h1                Cyan heading with bottom border
h2                Cyan subheading
p                 Light text with comfortable line height
ul / li           Styled list items

CSS Variables You Can Use:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var(--neon-cyan)      #00fff5 — bright cyan
var(--neon-magenta)   #ff00ff — bright magenta
var(--neon-green)     #00ff88 — bright green
var(--neon-red)       #ff003c — bright red
var(--neon-yellow)    #ffff00 — bright yellow
var(--text-primary)   #e0e0ff — main text color
var(--text-dim)       #5a5a8a — dimmed text color
var(--bg-panel)       #0a0a1a — card background
```

---

## 🔄 How to Update Content Later

### When You Need to Change Your Content:

```
STEP 1: Open your site in the browser
        http://localhost:3000

STEP 2: Press F12 → Console tab

STEP 3: Type "allow pasting" → ENTER
        (Chrome/Brave/Edge only)

STEP 4: Edit your content in the code below,
        then paste the updated version → ENTER

STEP 5: Copy the new JSON output from console

STEP 6: Open encrypted-content.json
        Select all → Delete → Paste new JSON → Save

STEP 7: Hard reload browser: Ctrl+Shift+R / Cmd+Shift+R

STEP 8: Test login again to confirm update worked ✅
```

### Important — Same Password Rule:

```
If you keep the SAME password:
→ You can change the content freely
→ Existing password still works
→ No need to share a new password with users

If you change the PASSWORD:
→ Everyone must use the new password
→ Old password will no longer work
→ Inform all users of the new password
```

---

## ✅ Final Checklist

### Before Going Live — Verify Everything:

```
GENERATION CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Ran generateMultiUser() or generateSingle() in console
□ Console showed JSON output with real ciphertext
□ Ciphertext starts with "U2FsdGVkX1..." (not placeholder text)
□ Copied only the JSON object — not the label or raw string

JSON FILE CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Replaced ALL content in encrypted-content.json
□ No placeholder "GENERATE_THIS..." text remaining
□ No extra text above or below the JSON
□ Validated at jsonlint.com — result is green ✅
□ File saved successfully

LOGIN TEST CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Browser reloaded after saving JSON file
□ ADMIN login works with correct password ✅
□ AGENT_SHADOW login works with correct password ✅
□ Wrong password shows error message ❌ (expected)
□ Cross-access test fails correctly ❌ (expected)

SECURITY CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Auto-lock timer works (default 120 seconds)
□ Lock button works in top-right corner
□ Brute force protection works (5 wrong = lockout)
□ Page refresh clears the session completely
```

---

## 🔐 Password Guidelines

```
FOR TESTING (example only — not for real use):
  username: ADMIN         password: admin123
  username: AGENT_SHADOW  password: shadow456

FOR PRODUCTION (real deployment — use strong passwords):

  ❌ WEAK (never use):          ✅ STRONG (recommended):
  admin123                       K3yF0rge!@#Secure2024
  password                       Tr0ub4dor&3_KeyForge!
  123456                         r@ndom$tr!ng#2024%safe
  yourname                       Any 16+ character random string

  Best practice:
  → Use a password manager to generate strong passwords
  → Minimum 12 characters
  → Mix of: UPPERCASE lowercase numbers !@#symbols
  → Never reuse passwords from other sites
```

---

## 📊 Quick Reference — Passwords and Outputs

```
WHAT YOU TYPE IN CODE          WHAT UNLOCKS THE SITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
password: "admin123"    →      Login with: admin123
password: "shadow456"   →      Login with: shadow456
password: "MyPass@99"   →      Login with: MyPass@99

The password in generateMultiUser() MUST match
the password entered on the login screen exactly.
Case-sensitive. Space-sensitive. Character-sensitive.
```

---

<div align="center">

---

### ⬡ KeyForge Security Protocol

**Powered by KeyForge Static-Auth v2.0**

*Content Generation Guide by*
*[Sudhir Kumar (@SudhirDevOps1)](https://github.com/SudhirDevOps1)*

---

`Generate` · `Copy` · `Paste` · `Test` · `Deploy`

*© 2026 Sudhir Kumar — All rights reserved under MIT License*

</div>