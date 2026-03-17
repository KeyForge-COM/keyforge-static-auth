# ⚡ KeyForge — 60 Second Quick Fix Guide

<div align="center">

```
 ██████╗ ██╗   ██╗██╗ ██████╗██╗  ██╗    ███████╗██╗██╗  ██╗
██╔═══██╗██║   ██║██║██╔════╝██║ ██╔╝    ██╔════╝██║╚██╗██╔╝
██║   ██║██║   ██║██║██║     █████╔╝     █████╗  ██║ ╚███╔╝
██║▄▄ ██║██║   ██║██║██║     ██╔═██╗     ██╔══╝  ██║ ██╔██╗
╚██████╔╝╚██████╔╝██║╚██████╗██║  ██╗    ██║     ██║██╔╝ ██╗
 ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝     ╚═╝╚═╝  ╚═╝
```

[![Made By](https://img.shields.io/badge/Made_by-SudhirDevOps1-ff003c?style=for-the-badge&logo=github)](https://github.com/SudhirDevOps1)
[![Time](https://img.shields.io/badge/Fix_Time-60_Seconds-00ff88?style=for-the-badge&logo=clockify)](https://github.com/SudhirDevOps1)
[![Version](https://img.shields.io/badge/KeyForge-v2.0-ff00ff?style=for-the-badge)](https://github.com/SudhirDevOps1)

> **Nothing is working? Follow these exact steps.**
> **From zero to working site in under 60 seconds.**

</div>

---

## ⚡ The 5-Step Fix

> Run each step **in order**. Do not skip any.

---

### `STEP 1` — Navigate to Your Project Folder

```bash
cd your-project-folder
```

```
📁 Your folder must contain BOTH of these files:
   ├── index.html
   └── encrypted-content.json
```

> ⚠️ **If you are not in the right folder, nothing will work.**
> Use `ls` (Mac/Linux) or `dir` (Windows) to verify.

---

### `STEP 2` — Start a Local Server

```bash
npx serve .
```

```
✅ You should see output like:

   Serving!
   - Local:    http://localhost:3000
   - Network:  http://192.168.x.x:3000
```

> 💡 **Alternative commands if npx is not available:**
>
> ```bash
> python3 -m http.server 8080   # Python
> php -S localhost:8080          # PHP
> ```

---

### `STEP 3` — Open the Site in Your Browser

```
http://localhost:3000
```

```
🔍 Check your browser URL bar:

   ✅ CORRECT → http://localhost:3000
   ❌ WRONG   → file:///Users/name/project/index.html

   The lock screen should appear.
   If it does not → check Step 1 and Step 2 again.
```

---

### `STEP 4` — Open Console and Enable Pasting

```
Press F12  →  Click the "Console" tab
```

> **Chrome / Brave / Edge only — type this manually:**

```
allow pasting
```

```
Then press ENTER.

You will see:  "Pasting enabled"

✅ Console is now ready to accept your code.

💡 Firefox users: Skip this — no warning appears in Firefox.
```

---

### `STEP 5` — Generate, Copy, Paste, Save, Test

#### 5a — Paste This Code Into the Console:

```javascript
KeyForge.generateMultiUser([...]);
```

> Replace `[...]` with your actual user array.
> Press **ENTER** after pasting.

#### 5b — Copy the Console Output:

```
The console will print something like this:

┌─────────────────────────────────────────────────────────┐
│  [KeyForge] Copy into encrypted-content.json ↓          │  ← IGNORE THIS LINE
│                                                         │
│  {                                                      │
│    "users": [                                           │
│      {                                                  │
│        "username": "ADMIN",                             │  ← COPY FROM HERE
│        "ciphertext": "U2FsdGVkX1+..."                  │
│      },                                                 │
│      {                                                  │
│        "username": "AGENT_SHADOW",                      │
│        "ciphertext": "U2FsdGVkX1/..."                  │
│      }                                                  │
│    ]                                                    │
│  }                                                      │  ← TO HERE
│                                                         │
│  '{\n "users": [...'                                    │  ← IGNORE THIS LINE
└─────────────────────────────────────────────────────────┘

Copy ONLY the { } JSON object.
Not the label line above. Not the string below.
```

#### 5c — Paste Into JSON File:

```
Open  →  encrypted-content.json
Do    →  Select All  (Ctrl+A / Cmd+A)
Do    →  Delete all existing content
Do    →  Paste new JSON  (Ctrl+V / Cmd+V)
Do    →  Save the file  (Ctrl+S / Cmd+S)
```

#### 5d — Reload and Test:

```bash
# In browser:
Ctrl + Shift + R    # Windows / Linux — hard reload
Cmd  + Shift + R    # Mac — hard reload
```

```
Then test your login:

  Username → ADMIN
  Password → admin123
  Result   → ✅ Content unlocks

  Username → AGENT_SHADOW
  Password → shadow456
  Result   → ✅ Content unlocks

  Username → ADMIN
  Password → wrongpass
  Result   → ❌ Denied (correct behavior)
```

---

## 🔍 Still Not Working After All 5 Steps?

> Run through this secondary checklist before asking for help.

---

### Check 1 — Validate Your JSON

```
Go to:  https://jsonlint.com
Paste:  Your entire encrypted-content.json content
Click:  "Validate JSON"

✅ Green result = JSON format is correct
❌ Red result   = JSON is broken — re-copy from console output
```

---

### Check 2 — Look for Red Errors in Console

```
Open F12 → Console tab

Look for any RED error messages.

Common errors and what they mean:

┌──────────────────────────────────────┬──────────────────────────────────────┐
│  ERROR                               │  WHAT TO DO                          │
├──────────────────────────────────────┼──────────────────────────────────────┤
│  "Content load failed"               │  Server not running or wrong path    │
│  "KeyForge is not defined"           │  Wrong page — go to localhost:3000   │
│  "CryptoJS is not defined"           │  No internet — check CDN or self-host│
│  "Unexpected token"                  │  JSON broken — validate at jsonlint  │
│  "HTTP 404"                          │  File name wrong or wrong folder     │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

---

### Check 3 — Verify All File Names Exactly

```
✅ CORRECT names:
   index.html                  (lowercase, .html)
   encrypted-content.json      (lowercase, dash, .json)

❌ WRONG names that will break everything:
   Index.html                  (capital I)
   encrypted_content.json      (underscore)
   encrypted-content.JSON      (capital extension)
   encryptedcontent.json       (no dash)
   Encrypted-Content.json      (capital letters)
```

---

### Check 4 — Confirm Both Files Are in the Same Folder

```bash
# Run this in your terminal:
ls -la

# You must see BOTH files listed:
# index.html
# encrypted-content.json

# If either is missing or in a different folder → move it here.
```

---

### Check 5 — Confirm the JSON Has Real Ciphertext

```
Open encrypted-content.json and look inside.

✅ CORRECT — real ciphertext:
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "U2FsdGVkX1+ekJ/SiUQ5UQ..."  ← starts with U2Fs
    }
  ]
}

❌ WRONG — placeholder still there:
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "GENERATE_THIS_BY_RUNNING_IN_BROWSER_CONSOLE"
    }
  ]
}

If you see the placeholder → go back to Step 5 and generate again.
```

---

## 🗺️ Complete Flow at a Glance

```
┌─────────────────────────────────────────────────────────────┐
│                  KEYFORGE QUICK FIX FLOW                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [1] cd your-project-folder                                 │
│         │                                                   │
│         ▼                                                   │
│  [2] npx serve .                                            │
│         │                                                   │
│         ▼                                                   │
│  [3] http://localhost:3000                                  │
│         │                                                   │
│         ▼                                                   │
│  [4] F12 → Console → type "allow pasting" → ENTER          │
│         │                                                   │
│         ▼                                                   │
│  [5a] Paste KeyForge.generateMultiUser([...]) → ENTER       │
│         │                                                   │
│         ▼                                                   │
│  [5b] Copy { "users": [...] } from console output           │
│         │                                                   │
│         ▼                                                   │
│  [5c] Open encrypted-content.json → Select All              │
│       → Delete → Paste → Save                               │
│         │                                                   │
│         ▼                                                   │
│  [5d] Ctrl+Shift+R → Test login → ✅ Done!                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 60 Second Checklist — Print This

```
BEFORE YOU START:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Both files in same folder?         (index.html + json)
□ Internet connected?                (for CryptoJS CDN)
□ Node.js installed?                 (for npx serve)

DURING SETUP:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Server started with npx serve .
□ URL shows http://localhost not file://
□ Typed "allow pasting" manually in console
□ Pasted generate code → pressed ENTER
□ Console showed JSON with U2FsdGVkX1... ciphertext

AFTER GENERATING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Copied only the { } JSON — not label, not raw string
□ Replaced ALL content in encrypted-content.json
□ Saved the file
□ Hard reloaded browser (Ctrl+Shift+R)

TESTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ ADMIN + admin123 → unlocks ✅
□ AGENT_SHADOW + shadow456 → unlocks ✅
□ Wrong password → denied ❌ (expected)
□ Cross-user test → denied ❌ (expected)
□ Auto-lock works after 120 seconds ✅
□ Lock button works ✅
```

---

<div align="center">

---

### ⬡ KeyForge Security Protocol

**Powered by KeyForge Static-Auth v2.0**

*Quick Fix Guide by*
*[Sudhir Kumar (@SudhirDevOps1)](https://github.com/SudhirDevOps1)*

---

`60 Seconds` · `5 Steps` · `Zero Backend` · `AES-256`

*© 2026 Sudhir Kumar — All rights reserved under MIT License*

</div>
