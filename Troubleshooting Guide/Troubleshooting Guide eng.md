# 🛠️ KeyForge Static-Auth — Troubleshooting Guide

<div align="center">

```
████████╗██████╗  ██████╗ ██╗   ██╗██████╗ ██╗     ███████╗
╚══██╔══╝██╔══██╗██╔═══██╗██║   ██║██╔══██╗██║     ██╔════╝
   ██║   ██████╔╝██║   ██║██║   ██║██████╔╝██║     █████╗
   ██║   ██╔══██╗██║   ██║██║   ██║██╔══██╗██║     ██╔══╝
   ██║   ██║  ██║╚██████╔╝╚██████╔╝██████╔╝███████╗███████╗
   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝╚══════╝

███████╗██╗  ██╗ ██████╗  ██████╗ ████████╗██╗███╗   ██╗ ██████╗
██╔════╝██║  ██║██╔═══██╗██╔═══██╗╚══██╔══╝██║████╗  ██║██╔════╝
███████╗███████║██║   ██║██║   ██║   ██║   ██║██╔██╗ ██║██║  ███╗
╚════██║██╔══██║██║   ██║██║   ██║   ██║   ██║██║╚██╗██║██║   ██║
███████║██║  ██║╚██████╔╝╚██████╔╝   ██║   ██║██║ ╚████║╚██████╔╝
╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝
```

### ⚡ KeyForge Static-Auth v2.0 — Common Mistakes & Fixes

> **This guide covers all the mistakes users commonly make.**
> **Every problem has an exact solution listed here.**

[![Made By](https://img.shields.io/badge/Made_by-SudhirDevOps1-ff003c?style=for-the-badge&logo=github)](https://github.com/SudhirDevOps1)
[![Version](https://img.shields.io/badge/Version-2.0-ff00ff?style=for-the-badge)](https://github.com/SudhirDevOps1)
[![Guide](https://img.shields.io/badge/Guide-Troubleshooting-00fff5?style=for-the-badge)](https://github.com/SudhirDevOps1)

</div>

---

## 📖 Table of Contents

- [🔴 Mistake 1 — Console Paste Warning](#-mistake-1--console-paste-warning)
- [🔴 Mistake 2 — Content Load Failed Error](#-mistake-2--content-load-failed-error)
- [🔴 Mistake 3 — Wrong JSON File Format](#-mistake-3--wrong-json-file-format)
- [🔴 Mistake 4 — Opening File Directly](#-mistake-4--opening-file-directly)
- [🔴 Mistake 5 — Placeholder Text Not Replaced](#-mistake-5--placeholder-text-not-replaced)
- [🔴 Mistake 6 — Password Not Working](#-mistake-6--password-not-working)
- [🔴 Mistake 7 — KeyForge is Not Defined](#-mistake-7--keyforge-is-not-defined)
- [🔴 Mistake 8 — CryptoJS Failed to Load](#-mistake-8--cryptojs-failed-to-load)
- [🔴 Mistake 9 — Incomplete JSON Copy](#-mistake-9--incomplete-json-copy)
- [🔴 Mistake 10 — Both Files in Different Folders](#-mistake-10--both-files-in-different-folders)
- [🔴 Mistake 11 — Auto-Lock Triggering Too Often](#-mistake-11--auto-lock-triggering-too-often)
- [🔴 Mistake 12 — Not Working on Mobile](#-mistake-12--not-working-on-mobile)
- [🟡 Quick Diagnosis Checklist](#-quick-diagnosis-checklist)
- [🟢 Correct Setup Order](#-correct-setup-order)
- [📞 Error Message Directory](#-error-message-directory)
- [⚡ 60 Second Quick Fix](#-60-second-quick-fix)

---

## 🔴 Mistake 1 — Console Paste Warning

### Problem:

```
You tried to paste code into the Console and saw this message:

"Warning: Don't paste code into the DevTools Console
 that you don't understand or haven't reviewed yourself.
 Please type 'allow pasting' below and press Enter."
```

### Why It Happens:

```
Chrome has a built-in safety feature.
Pasting random code from strangers can allow
hackers to steal your account or data.
Chrome asks you to confirm before allowing paste.
```

### ✅ Fix:

```
STEP 1: In the Console, TYPE THIS YOURSELF (do not paste):

        allow pasting

        Then press ENTER.

STEP 2: You will see this confirmation:
        "Pasting enabled"

STEP 3: Now paste your KeyForge code → press ENTER
```

### ⚠️ Important Rules:

```
❌ Do NOT copy-paste "allow pasting" — type it manually
✅ Always type it yourself using your keyboard

❌ Never paste code from strangers into your console
✅ Only paste your OWN KeyForge code that you have reviewed
```

### Alternative — Use Firefox Instead:

```
Firefox does not show this warning at all.
Simply paste your code → press ENTER → Done!
```

---

## 🔴 Mistake 2 — Content Load Failed Error

### Problem:

```
You entered the correct password but received this error:

"Content load failed.
 Ensure encrypted-content.json exists."
```

### Why It Happens:

```
The browser cannot find the encrypted-content.json file.
This is usually a server or file path issue.
```

### ✅ Fix — All Causes and Solutions:

#### Cause A — No Local Server Running:

```
❌ WRONG: Opened index.html by double-clicking it directly
✅ RIGHT: Run a local server in your terminal:

          npx serve .
          Browser: http://localhost:3000

          OR

          python3 -m http.server 8080
          Browser: http://localhost:8080

          OR

          VS Code → Right-click index.html
          → "Open with Live Server"
```

#### Cause B — JSON File Does Not Exist:

```
❌ WRONG: encrypted-content.json was never created
✅ RIGHT: Create the file first:

          touch encrypted-content.json

          Then generate content from console and paste it in.
```

#### Cause C — File Name Is Incorrect:

```
❌ WRONG file names:
   Encrypted-Content.json    (capital E)
   encrypted_content.json    (underscore instead of dash)
   encryptedcontent.json     (no dash at all)
   encrypted-content.JSON    (capital extension)

✅ CORRECT file name:
   encrypted-content.json    (exactly this, nothing else)
```

#### Cause D — Wrong Path in CONFIG:

```
Check the CONFIG object inside index.html:

❌ WRONG:
   contentFile: 'content.json'
   contentFile: 'data/encrypted-content.json'

✅ CORRECT (if file is in the same folder):
   contentFile: 'encrypted-content.json'
```

---

## 🔴 Mistake 3 — Wrong JSON File Format

### Problem:

```
Password entered → Error shown → Content not visible
Browser console shows: "Unexpected token" or "JSON parse error"
```

### Why It Happens:

```
The encrypted-content.json file has an invalid JSON structure.
This is caused by extra characters, missing brackets,
or an incomplete paste from the console output.
```

### ✅ Fix — Correct vs Incorrect Formats:

#### ❌ WRONG — Placeholder Text Still Present:

```json
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "GENERATE_THIS_BY_RUNNING_IN_BROWSER_CONSOLE"
    }
  ]
}
```

#### ❌ WRONG — Extra Text Copied Above or Below:

```
[KeyForge] Copy into encrypted-content.json ↓
{
  "users": [ ... ]
}
'{\n  "users": ...'
```

#### ❌ WRONG — Incomplete JSON (Missing Closing Brackets):

```json
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "U2FsdGVkX1+ekJ..."
```

*Closing brackets `}`, `]`, `}` are missing.*

#### ✅ CORRECT — Exactly This Format:

```json
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "U2FsdGVkX1+...full ciphertext here..."
    },
    {
      "username": "AGENT_SHADOW",
      "ciphertext": "U2FsdGVkX1/...full ciphertext here..."
    }
  ]
}
```

### Validate Your JSON:

```
Go to: jsonlint.com
Paste your JSON content there.

Green result ✅ = Valid format — good to go
Red result   ❌ = Something is wrong — fix the error shown
```

---

## 🔴 Mistake 4 — Opening File Directly

### Problem:

```
You double-clicked index.html to open it.
It opened in the browser but:
→ Password entered → "Content load failed"
→ Or nothing happened at all
```

### Why It Happens:

```
Your browser URL looks like this:
file:///C:/Users/name/project/index.html
↑
"file://" protocol

The fetch() API does not work on the file:// protocol.
The browser cannot load encrypted-content.json this way.
```

### ✅ Fix — Run a Local Server:

#### Option 1 — npx serve (Recommended):

```bash
# In Terminal or Command Prompt:
cd your-project-folder

npx serve .

# Then open in browser:
# http://localhost:3000
```

#### Option 2 — Python:

```bash
cd your-project-folder

python3 -m http.server 8080

# Then open in browser:
# http://localhost:8080
```

#### Option 3 — VS Code Live Server:

```
1. Install VS Code
2. Install extension: "Live Server" by Ritwick Dey
3. Right-click on index.html
4. Click "Open with Live Server"
5. Browser opens automatically ✅
```

#### Option 4 — PHP:

```bash
php -S localhost:8080

# Then open in browser:
# http://localhost:8080
```

### Check Your URL:

```
❌ WRONG: file:///C:/Users/.../index.html
✅ RIGHT: http://localhost:3000
✅ RIGHT: http://localhost:8080
✅ RIGHT: http://127.0.0.1:5500
```

---

## 🔴 Mistake 5 — Placeholder Text Not Replaced

### Problem:

```
The encrypted-content.json file still contains
the original placeholder text:

"GENERATE_THIS_BY_RUNNING_IN_BROWSER_CONSOLE"

Password entered → Decryption fails → Error shown
```

### ✅ Fix — Step by Step:

```
STEP 1: Open index.html in your browser
        (via Live Server — http://localhost:3000)

STEP 2: Press F12 → Click the Console tab

STEP 3: Type "allow pasting" → press ENTER

STEP 4: Paste this code → press ENTER:

KeyForge.generateMultiUser([
  {
    username: "ADMIN",
    password: "your-password-here",
    content: {
      title: "Admin Panel",
      description: "Welcome Admin!",
      sections: [
        {
          heading: "Secret Section",
          body: "Only the admin can see this.",
          tags: ["ADMIN"]
        }
      ]
    }
  }
]);

STEP 5: A JSON output will appear in the console.
        Copy ONLY this part:

        {
          "users": [ ... ]
        }

STEP 6: Open encrypted-content.json and REPLACE
        the entire existing content with the new JSON.

STEP 7: Save the file → Reload the browser
        → Test login ✅
```

---

## 🔴 Mistake 6 — Password Not Working

### Problem:

```
You entered what you believe is the correct password but:
"Invalid key. 4 attempts remaining."
```

### All Causes and Fixes:

#### Cause A — Extra Space in Password:

```
❌ WRONG: "admin123 "  (trailing space at end)
❌ WRONG: " admin123"  (leading space at start)
✅ RIGHT: "admin123"   (no extra spaces)

Fix: Type the password carefully.
     Copy-pasting often adds invisible spaces.
```

#### Cause B — Caps Lock is On:

```
❌ WRONG: Typing "ADMIN123" when password is "admin123"
✅ RIGHT: Turn off Caps Lock and try again
```

#### Cause C — Different Password Used During Encryption:

```
During generation:
password: "Admin@123"

During login:
password: "admin123"   ← This is DIFFERENT!

Fix: Use the exact same password that was passed
     into generateMultiUser() when encrypting.
```

#### Cause D — JSON File Was Not Updated:

```
You generated new JSON but the old file is still on disk.

Fix: Open encrypted-content.json and check it.
     It should contain a real ciphertext starting with U2FsdGVkX1...
     NOT the placeholder "GENERATE_THIS..." text.
```

#### Cause E — Browser Cache:

```
Fix: Perform a hard reload:
     Windows/Linux: Ctrl + Shift + R
     Mac:           Cmd + Shift + R
```

---

## 🔴 Mistake 7 — KeyForge is Not Defined

### Problem:

```
You typed KeyForge.generateMultiUser() in the Console and got:

"Uncaught ReferenceError: KeyForge is not defined"
```

### All Causes and Fixes:

#### Cause A — Console Opened on the Wrong Page:

```
❌ WRONG: Console opened on about:blank or any other website
✅ RIGHT: Open the console on YOUR KeyForge site

Check: The browser URL must show localhost:3000 or localhost:8080
```

#### Cause B — Page Did Not Fully Load:

```
Fix: Reload the page → Ctrl+R / Cmd+R
     Then try the console command again
```

#### Cause C — CryptoJS Failed to Load:

```
Fix: Open the Network tab (F12 → Network)
     Look for: crypto-js.min.js
     Status should be: 200 OK ✅
     If it shows "Failed" → check your internet connection
     Or self-host CryptoJS locally
```

#### Cause D — Script Tag is Missing from index.html:

```
Check index.html for these two required scripts:

Script 1 (in <head>):
<script src="https://cdnjs.cloudflare.com/ajax/libs/
crypto-js/4.1.1/crypto-js.min.js"></script>

Script 2 (before </body>):
<script>
  ;(function KeyForgeAuth() {
    ...
    window.KeyForge = { ... };
  })();
</script>

Both must be present. Neither should be missing.
```

---

## 🔴 Mistake 8 — CryptoJS Failed to Load

### Problem:

```
Console shows:
"CryptoJS is not defined"
OR nothing on the page works at all.
```

### ✅ Fix:

#### Check — Network Tab:

```
F12 → Network tab → Reload the page

Look for: crypto-js.min.js
Status:   200 ✅ = Loaded successfully
Status:   Failed ❌ = There is a problem
```

#### Fix A — Check Your Internet Connection:

```
CryptoJS loads from this CDN:
cdnjs.cloudflare.com

No internet = CryptoJS cannot load
Fix: Connect to the internet and reload the page
```

#### Fix B — Self-Host CryptoJS (For Offline Use):

```
STEP 1: Download the file from:
        https://cdnjs.cloudflare.com/ajax/libs/
        crypto-js/4.1.1/crypto-js.min.js

STEP 2: Save it in your project folder:
        project/
        ├── index.html
        ├── crypto-js.min.js       ← Place it here
        └── encrypted-content.json

STEP 3: Update the script tag in index.html:

❌ BEFORE (CDN version):
<script src="https://cdnjs.cloudflare.com/..."></script>

✅ AFTER (local version):
<script src="crypto-js.min.js"></script>

Now it works without any internet connection!
```

---

## 🔴 Mistake 9 — Incomplete JSON Copy

### Problem:

```
The console produced output but you either:
→ Did not copy all of it
→ Accidentally copied extra text along with it
```

### What the Console Actually Shows:

```
The console displays THREE separate things:

LINE 1: [KeyForge] Copy into encrypted-content.json ↓
        ↑ DO NOT COPY THIS — it is just an instruction label

LINE 2: {                            ← COPY THIS
          "users": [                 ← COPY THIS
            { ... }                  ← COPY THIS
          ]                          ← COPY THIS
        }                            ← COPY THIS

LINE 3: '{\n  "users": ...'
        ↑ DO NOT COPY THIS — it is the same JSON as a raw string
```

### ✅ Correct Way — What Exactly to Copy:

```
Copy only this section:

{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "U2FsdGVkX1+..."
    },
    {
      "username": "AGENT_SHADOW",
      "ciphertext": "U2FsdGVkX1/..."
    }
  ]
}

Start from the first { and end at the last }.
Not more. Not less.
```

### ✅ Easy Method — Right-Click in Console:

```
In the console output:
→ Click the arrow next to the { } object to expand it
→ OR right-click on the output object
→ Select "Copy object"
→ This copies a perfectly formatted JSON string
```

---

## 🔴 Mistake 10 — Both Files in Different Folders

### Problem:

```
Your files are in separate locations:

Documents/
├── index.html                       ← Here
└── Downloads/
    └── encrypted-content.json       ← Here (WRONG!)
```

### ✅ Fix — Correct Folder Structure:

```
Both files MUST be in the exact same folder:

my-project/
├── index.html                  ← ✅
└── encrypted-content.json      ← ✅ SAME FOLDER

If they are separated:
1. Cut encrypted-content.json
2. Paste it into the same folder as index.html
3. Restart your local server
4. Test again
```

### Verify in Terminal:

```bash
# Navigate into your project folder:
cd my-project

# List all files:
ls -la

# You must see BOTH files:
# index.html
# encrypted-content.json
```

---

## 🔴 Mistake 11 — Auto-Lock Triggering Too Often

### Problem:

```
The site locks itself immediately after login
or after a very short time of inactivity.
```

### Cause:

```
The autoLockSeconds value in CONFIG is set too low.
Default value is 120 seconds (2 minutes).
```

### ✅ Fix — Increase autoLockSeconds:

```javascript
// Find the CONFIG object inside index.html:

const CONFIG = {
  contentFile: 'encrypted-content.json',

  // ❌ WRONG (locks too quickly):
  autoLockSeconds: 10,

  // ✅ CORRECT options — choose what works for you:
  autoLockSeconds: 120,    // 2 minutes  (default)
  autoLockSeconds: 300,    // 5 minutes
  autoLockSeconds: 600,    // 10 minutes
  autoLockSeconds: 0,      // Never auto-lock

  maxAttempts:     5,
  lockoutSeconds:  30,
};
```

### How the Timer Resets:

```
These user actions automatically reset the timer:
→ Moving the mouse
→ Pressing any keyboard key
→ Touching the screen (mobile)
→ Scrolling the page
→ Clicking anywhere

If you are not interacting with the page,
the timer continues counting down.
```

---

## 🔴 Mistake 12 — Not Working on Mobile

### Problem:

```
Everything works correctly on desktop but on mobile:
→ The UI layout is broken
→ The screen zooms in when typing the password
→ Content does not fit the screen properly
```

### ✅ All Fixes:

#### Fix A — Accessing via file:// on Mobile:

```
❌ WRONG: Opened the file directly on mobile
✅ RIGHT: Run the server on your desktop:
          npx serve .

          Both desktop and mobile must be on the same WiFi network.

          Find your desktop's local IP address:
          Windows:   ipconfig → IPv4 Address
          Mac/Linux: ifconfig → inet address

          On mobile browser, open:
          http://192.168.1.XX:3000
          (replace XX with your actual IP)
```

#### Fix B — iOS Safari Zoom Issue:

```
Check the <head> section of index.html for this tag:

✅ This line must be present:
<meta name="viewport"
      content="width=device-width,
               initial-scale=1.0,
               maximum-scale=1.0,
               user-scalable=no" />

Also check the input CSS:
font-size: max(16px, 1rem);

iOS Safari automatically zooms in on any
input field with a font size smaller than 16px.
```

#### Fix C — Content Not Fitting the Screen:

```
Check the auth-panel padding in the CSS.
It must use responsive clamp() values:

✅ CORRECT (responsive):
padding: clamp(20px, 5vw, 44px) clamp(16px, 5vw, 48px);

❌ WRONG (fixed pixels — overflows on small screens):
padding: 44px 48px;
```

---

## 🟡 Quick Diagnosis Checklist

### Check These First — Takes Only 2 Minutes:

```
SETUP CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Are index.html and encrypted-content.json in the same folder?
□ Is a local server running? (npx serve . or python3 -m http.server)
□ Does the browser URL show http://localhost:...? (not file://)
□ Is your internet connection active? (needed for CryptoJS CDN)

JSON CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Does encrypted-content.json contain a real ciphertext?
  (It must start with U2FsdGVkX1...)
□ Is the placeholder text "GENERATE_THIS..." completely removed?
□ Is the JSON format valid? (check at jsonlint.com)
□ Is the file named exactly "encrypted-content.json"?

PASSWORD CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Are you using the exact same password from generateMultiUser()?
□ Is Caps Lock turned off?
□ Is there no extra space before or after the password?

CONSOLE CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Are there any red errors in the console?
□ Is there a "KeyForge is not defined" error?
□ Is there a "CryptoJS is not defined" error?
```

---

## 🟢 Correct Setup Order

### First-Time Setup — Follow This Exact Order:

```
STEP 1: Create your project folder
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

mkdir my-keyforge-site
cd my-keyforge-site

STEP 2: Place both files in the same folder
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

my-keyforge-site/
├── index.html                ← Full KeyForge HTML code goes here
└── encrypted-content.json    ← Leave empty for now

STEP 3: Start a local server
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

npx serve .
→ Open browser: http://localhost:3000

STEP 4: Open the browser console
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Press F12 → Click the Console tab

STEP 5: Enable pasting
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type this manually in the console:
allow pasting
Press ENTER

STEP 6: Generate encrypted content
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Paste your KeyForge.generateMultiUser([...]) code
Press ENTER

STEP 7: Copy the output
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Copy ONLY the { "users": [...] } JSON object
Do NOT copy the "[KeyForge] Copy into..." label line

STEP 8: Paste into the JSON file
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Open encrypted-content.json
Replace the entire content with your new JSON
Save the file

STEP 9: Test your setup
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reload the browser: Ctrl+R / Cmd+R
Enter your password → Click AUTHENTICATE
Your content should appear ✅
```

---

## 📞 Error Message Directory

### What Every Error Means:

```
ERROR MESSAGE                      MEANING              FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Content load failed"              JSON file not found  Run a server +
                                                        check file path

"Invalid key. X attempts           Wrong password       Enter the correct
 remaining"                        entered              password

"Too many attempts.                5 wrong attempts     Wait 30 seconds
 Wait Xs before retrying"          in a row             before trying again

"Security key cannot               Password field       Type something in
 be empty"                         was left blank       the password field

"KeyForge is not defined"          Script did not load  Open console on
                                                        your own site

"CryptoJS is not defined"          CDN failed to load   Check internet or
                                                        self-host CryptoJS

"Unexpected token"                 Invalid JSON         Validate at
(shown in browser console)         format               jsonlint.com

"HTTP 404"                         File not found       Check file name
(shown in browser console)         on server            is exactly correct
```

---

## ⚡ 60 Second Quick Fix

```
Nothing is working at all?
Try these 5 steps in order:

[1] Terminal:  cd your-project-folder
[2] Terminal:  npx serve .
[3] Browser:   Open http://localhost:3000
[4] Press F12: Console tab → type "allow pasting" → ENTER
[5] Console:   Paste KeyForge.generateMultiUser([...]) → ENTER
               Copy { "users": [...] } → Paste into JSON file → Save
               Reload browser → Test your password ✅

Still not working after all that?
→ Validate your JSON at jsonlint.com
→ Look for red error messages in the browser console
→ Double-check all file names are spelled exactly correctly
→ Make sure both files are in the same folder
```

---

## 🧪 Test Credentials Reference

```
After running generateMultiUser() with the example code:

┌─────────────────────────────────────────────────────┐
│  USERNAME       │  PASSWORD    │  EXPECTED RESULT   │
├─────────────────────────────────────────────────────┤
│  ADMIN          │  admin123    │  ✅ Unlocks         │
│  AGENT_SHADOW   │  shadow456   │  ✅ Unlocks         │
│  ADMIN          │  wrongpass   │  ❌ Denied          │
│  ADMIN          │  shadow456   │  ❌ Denied          │
│  (anything)     │  (blank)     │  ⚠️ Empty error     │
└─────────────────────────────────────────────────────┘

Cross-access test:
Using AGENT_SHADOW's password on ADMIN = ❌ Denied
This proves AES-256 encryption is working correctly.
```

---

## 🔐 Security Reminders

```
✅ DO:
→ Use passwords with 12+ characters
→ Mix uppercase, lowercase, numbers and symbols
→ Store your password in a password manager
→ Keep a backup of your original plaintext content
→ Test on both desktop and mobile after setup

❌ DO NOT:
→ Use simple passwords like "admin123" in production
→ Share your password in plain text via email or chat
→ Paste unknown code into your browser console
→ Lose your original plaintext content with no backup
→ Use KeyForge for highly sensitive legal or medical data
```

---

<div align="center">

---

### ⬡ KeyForge Security Protocol

**Powered by KeyForge Static-Auth v2.0**

*Troubleshooting Guide by*
*[Sudhir Kumar (@SudhirDevOps1)](https://github.com/SudhirDevOps1)*

---

`Common Mistakes` · `Quick Fixes` · `Step by Step` · `Error Directory`

*© 2026 Sudhir Kumar — All rights reserved under MIT License*

</div>