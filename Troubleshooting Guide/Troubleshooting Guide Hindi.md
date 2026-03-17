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

> **Yeh guide un sabhi mistakes ke liye hai jo users aksar karte hain.**
> **Har problem ka exact solution yahan milega.**

[![Made By](https://img.shields.io/badge/Made_by-SudhirDevOps1-ff003c?style=for-the-badge&logo=github)](https://github.com/SudhirDevOps1)
[![Version](https://img.shields.io/badge/Version-2.0-ff00ff?style=for-the-badge)](https://github.com/SudhirDevOps1)
[![Guide](https://img.shields.io/badge/Guide-Troubleshooting-00fff5?style=for-the-badge)](https://github.com/SudhirDevOps1)

</div>

---

## 📖 Table of Contents

- [🔴 Mistake 1 — Console Mein Paste Warning](#-mistake-1--console-mein-paste-warning)
- [🔴 Mistake 2 — Content Load Failed Error](#-mistake-2--content-load-failed-error)
- [🔴 Mistake 3 — JSON File Galat Format](#-mistake-3--json-file-galat-format)
- [🔴 Mistake 4 — Direct File Open Karna](#-mistake-4--direct-file-open-karna)
- [🔴 Mistake 5 — Placeholder Text Nahi Hataya](#-mistake-5--placeholder-text-nahi-hataya)
- [🔴 Mistake 6 — Password Kaam Nahi Kar Raha](#-mistake-6--password-kaam-nahi-kar-raha)
- [🔴 Mistake 7 — KeyForge is Not Defined](#-mistake-7--keyforge-is-not-defined)
- [🔴 Mistake 8 — CryptoJS Load Nahi Hua](#-mistake-8--cryptojs-load-nahi-hua)
- [🔴 Mistake 9 — JSON Adha Copy Kiya](#-mistake-9--json-adha-copy-kiya)
- [🔴 Mistake 10 — Dono Files Alag Folder Mein](#-mistake-10--dono-files-alag-folder-mein)
- [🔴 Mistake 11 — Auto-Lock Baar Baar Ho Raha](#-mistake-11--auto-lock-baar-baar-ho-raha)
- [🔴 Mistake 12 — Mobile Pe Kaam Nahi Kar Raha](#-mistake-12--mobile-pe-kaam-nahi-kar-raha)
- [🟡 Quick Diagnosis Checklist](#-quick-diagnosis-checklist)
- [🟢 Sahi Karne Ka Sahi Order](#-sahi-karne-ka-sahi-order)

---

## 🔴 Mistake 1 — Console Mein Paste Warning

### Problem:
```
Console mein code paste kiya toh yeh message aaya:

"Warning: Don't paste code into the DevTools Console
 that you don't understand or haven't reviewed yourself.
 Please type 'allow pasting' below and press Enter."
```

### Kyun Hota Hai:
```
Chrome ek safety feature hai.
Random code paste karne se hackers account
steal kar sakte hain.
Isliye Chrome pehle confirm karta hai.
```

### ✅ Fix:
```
STEP 1: Console mein KHUD TYPE KARO (paste nahi):

        allow pasting

        Phir ENTER dabao.

STEP 2: Yeh message aayega:
        "Pasting enabled"

STEP 3: Ab apna KeyForge code paste karo → ENTER
```

### ⚠️ Important Rules:
```
❌ "allow pasting" copy-paste mat karo
✅ Keyboard se KHUD type karo

❌ Kisi aur ka diya hua code console mein paste mat karo
✅ Sirf apna KHUD ka KeyForge code paste karo
```

### Alternative — Firefox Use Karo:
```
Firefox mein yeh warning bilkul nahi aati.
Seedha paste karo → ENTER → Done!
```

---

## 🔴 Mistake 2 — Content Load Failed Error

### Problem:
```
Password sahi daala lekin yeh error aaya:

"Content load failed.
 Ensure encrypted-content.json exists."
```

### Kyun Hota Hai:
```
Browser encrypted-content.json file
dhundh nahi pa raha.
```

### ✅ Fix — Causes aur Solutions:

#### Cause A — Live Server Nahi Chala Raha:
```
❌ GALAT: index.html pe double-click karke seedha khola
✅ SAHI:  Terminal mein server chalao:

          npx serve .
          Browser: http://localhost:3000

          YA

          python3 -m http.server 8080
          Browser: http://localhost:8080

          YA

          VS Code → Right Click index.html
          → "Open with Live Server"
```

#### Cause B — JSON File Exist Nahi Karti:
```
❌ GALAT: encrypted-content.json banaya hi nahi
✅ SAHI:  File banao:

          touch encrypted-content.json

          Phir console se generate karo aur paste karo.
```

#### Cause C — File Ka Naam Galat Hai:
```
❌ GALAT filenames:
   Encrypted-Content.json    (capital E)
   encrypted_content.json    (underscore)
   encryptedcontent.json     (no dash)
   encrypted-content.JSON    (capital JSON)

✅ SAHI filename:
   encrypted-content.json    (exactly yeh)
```

#### Cause D — CONFIG Mein Path Galat:
```
index.html ke andar CONFIG check karo:

❌ GALAT:
   contentFile: 'content.json'
   contentFile: 'data/encrypted-content.json'

✅ SAHI (agar same folder mein hai):
   contentFile: 'encrypted-content.json'
```

---

## 🔴 Mistake 3 — JSON File Galat Format

### Problem:
```
Password daala → Error → Content nahi dikh raha
Console mein: "Unexpected token" ya "JSON parse error"
```

### Kyun Hota Hai:
```
encrypted-content.json mein JSON format
galat hai — extra characters, missing brackets,
ya incomplete paste.
```

### ✅ Fix — Sahi vs Galat Format:

#### ❌ GALAT — Placeholder Text Remaining:
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

#### ❌ GALAT — Extra Text Upar/Neeche:
```
[KeyForge] Copy into encrypted-content.json ↓
{
  "users": [ ... ]
}
'{\n  "users": ...'
```

#### ❌ GALAT — Adha JSON:
```json
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "U2FsdGVkX1+ekJ..."
```
*(closing brackets missing)*

#### ✅ SAHI — Exactly Yeh Format:
```json
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "U2FsdGVkX1+...pura ciphertext..."
    },
    {
      "username": "AGENT_SHADOW",
      "ciphertext": "U2FsdGVkX1/...pura ciphertext..."
    }
  ]
}
```

### JSON Validate Karo:
```
jsonlint.com pe apna JSON paste karo.
Agar green ✅ = sahi format
Agar red ❌ = kuch galat hai, fix karo
```

---

## 🔴 Mistake 4 — Direct File Open Karna

### Problem:
```
index.html pe double-click kiya.
Browser mein khula lekin:
→ Password dala → "Content load failed"
→ Ya kuch nahi hua
```

### Kyun Hota Hai:
```
Browser ka URL kuch aisa dikhta hai:
file:///C:/Users/name/project/index.html
       ↑
       "file://" protocol

Is protocol pe fetch() API kaam nahi karta.
encrypted-content.json load nahi ho sakta.
```

### ✅ Fix — Local Server Chalao:

#### Option 1 — npx serve (Recommended):
```bash
# Terminal/Command Prompt mein:
cd apne-project-folder-mein

npx serve .

# Browser mein jaao:
# http://localhost:3000
```

#### Option 2 — Python:
```bash
cd apne-project-folder-mein

python3 -m http.server 8080

# Browser mein jaao:
# http://localhost:8080
```

#### Option 3 — VS Code Live Server:
```
1. VS Code install karo
2. Extension install karo: "Live Server" by Ritwick Dey
3. index.html pe right-click karo
4. "Open with Live Server" click karo
5. Browser automatically khuljata hai ✅
```

#### Option 4 — PHP:
```bash
php -S localhost:8080

# Browser mein jaao:
# http://localhost:8080
```

### URL Check Karo:
```
❌ GALAT: file:///C:/Users/.../index.html
✅ SAHI:  http://localhost:3000
✅ SAHI:  http://localhost:8080
✅ SAHI:  http://127.0.0.1:5500
```

---

## 🔴 Mistake 5 — Placeholder Text Nahi Hataya

### Problem:
```
encrypted-content.json mein pehle wala
placeholder text chhod diya:

"GENERATE_THIS_BY_RUNNING_IN_BROWSER_CONSOLE"

Password daala → Decrypt fail → Error
```

### ✅ Fix — Step by Step:

```
STEP 1: index.html browser mein kholo
        (Live Server se — http://localhost:3000)

STEP 2: F12 dabao → Console tab

STEP 3: "allow pasting" type karo → ENTER

STEP 4: Yeh code paste karo → ENTER:

KeyForge.generateMultiUser([
  {
    username: "ADMIN",
    password: "apna-password-yahan",
    content: {
      title: "Admin Panel",
      description: "Welcome Admin!",
      sections: [
        {
          heading: "Secret Section",
          body: "Yeh sirf admin dekh sakta hai.",
          tags: ["ADMIN"]
        }
      ]
    }
  }
]);

STEP 5: Console mein JSON output aayega.
        Sirf yeh part copy karo:

        {
          "users": [ ... ]
        }

STEP 6: encrypted-content.json POORA replace karo
        naye JSON se.

STEP 7: File save karo → Browser reload karo
        → Test karo ✅
```

---

## 🔴 Mistake 6 — Password Kaam Nahi Kar Raha

### Problem:
```
Password bilkul sahi daala lekin:
"Invalid key. 4 attempts remaining."
```

### Causes aur Fixes:

#### Cause A — Extra Space Password Mein:
```
❌ GALAT: "admin123 "  (end mein space)
❌ GALAT: " admin123"  (start mein space)
✅ SAHI:  "admin123"   (koi extra space nahi)

Fix: Password carefully type karo.
     Copy-paste karte waqt extra space aa jata hai.
```

#### Cause B — Caps Lock On Hai:
```
❌ GALAT: "ADMIN123" jab password "admin123" tha
✅ SAHI:  Caps Lock band karo, dobara try karo
```

#### Cause C — Alag Password Se Encrypt Kiya Tha:
```
Generate karte waqt:
password: "Admin@123"

Login karte waqt:
password: "admin123"  ← ALAG HAI!

Fix: Wahi password use karo jo generateMultiUser() mein daala tha.
```

#### Cause D — JSON File Update Nahi Hui:
```
Naya JSON generate kiya lekin
purana file disk pe hai.

Fix: encrypted-content.json dobara check karo.
     Wahan U2FsdGVkX1... wala ciphertext hona chahiye,
     "GENERATE_THIS..." wala placeholder nahi.
```

#### Cause E — Browser Cache:
```
Fix: Hard reload karo:
     Windows: Ctrl + Shift + R
     Mac:     Cmd + Shift + R
```

---

## 🔴 Mistake 7 — KeyForge is Not Defined

### Problem:
```
Console mein KeyForge.generateMultiUser() likha toh:

"Uncaught ReferenceError: KeyForge is not defined"
```

### Causes aur Fixes:

#### Cause A — Galat Page Pe Console Khola:
```
❌ GALAT: about:blank ya kisi aur site pe console khola
✅ SAHI:  Apni KeyForge site pe console kholo

Check karo: URL mein localhost:3000 ya localhost:8080 ho
```

#### Cause B — Page Puri Load Nahi Hua:
```
Fix: Page reload karo → Ctrl+R / Cmd+R
     Phir console mein try karo
```

#### Cause C — CryptoJS Load Nahi Hua:
```
Fix: Network tab check karo (F12 → Network)
     crypto-js.min.js mein "200 OK" hona chahiye
     Agar "Failed" hai → Internet check karo
     Ya CryptoJS self-host karo
```

#### Cause D — Script Tag Missing:
```
index.html check karo.
Yeh <script> tag hona chahiye:

<script src="https://cdnjs.cloudflare.com/ajax/libs/
crypto-js/4.1.1/crypto-js.min.js"></script>

Aur neeche yeh inline script:
<script>
  ;(function KeyForgeAuth() {
    ...
    window.KeyForge = { ... };
  })();
</script>

Dono missing toh nahi hain?
```

---

## 🔴 Mistake 8 — CryptoJS Load Nahi Hua

### Problem:
```
Console mein:
"CryptoJS is not defined"
Ya page pe kuch bhi kaam nahi kar raha.
```

### ✅ Fix:

#### Check Karo — Network Tab:
```
F12 → Network tab → Page reload karo

Dhundho: crypto-js.min.js
Status:  200 ✅ = Loaded
Status:  Failed ❌ = Problem
```

#### Fix A — Internet Connection Check Karo:
```
CDN se load hota hai:
cdnjs.cloudflare.com

Internet nahi hai → CryptoJS nahi aayega
Fix: Internet connect karo phir reload karo
```

#### Fix B — Self-Host Karo (Offline ke liye):
```
STEP 1: Download karo:
        https://cdnjs.cloudflare.com/ajax/libs/
        crypto-js/4.1.1/crypto-js.min.js

STEP 2: File apne project folder mein save karo:
        project/
        ├── index.html
        ├── crypto-js.min.js   ← Yahan
        └── encrypted-content.json

STEP 3: index.html mein script tag change karo:

❌ PEHLE:
<script src="https://cdnjs.cloudflare.com/..."></script>

✅ BAAD:
<script src="crypto-js.min.js"></script>

Ab internet ke bina bhi kaam karega!
```

---

## 🔴 Mistake 9 — JSON Adha Copy Kiya

### Problem:
```
Console ne output diya lekin
poora copy nahi hua.
Ya extra text bhi copy ho gaya.
```

### Console Output Mein Kya Hota Hai:
```
Console mein 3 cheezein dikhti hain:

LINE 1: [KeyForge] Copy into encrypted-content.json ↓
        ↑ Yeh mat copy karo — sirf instruction hai

LINE 2: {                          ← YEH COPY KARO
          "users": [               ← YEH COPY KARO
            { ... }                ← YEH COPY KARO
          ]                        ← YEH COPY KARO
        }                          ← YEH COPY KARO

LINE 3: '{\n  "users": ...'
        ↑ Yeh mat copy karo — same JSON string format mein hai
```

### ✅ Sahi Tarika — Exactly Kya Copy Karein:
```
Sirf yeh part copy karo:

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

Pehle { se lekar aakhri } tak.
Na zyada, na kam.
```

### ✅ Easy Method — Console Expand Karo:
```
Console mein output pe:
→ Bade { } arrow pe click karo (expand hoga)
→ Ya output pe right-click karo
→ "Copy object" select karo
→ Yeh perfectly formatted JSON copy karega
```

---

## 🔴 Mistake 10 — Dono Files Alag Folder Mein

### Problem:
```
Files alag alag jagah hain:

Documents/
├── index.html          ← Yahan hai
└── Downloads/
    └── encrypted-content.json  ← Yahan hai (GALAT!)
```

### ✅ Fix — Sahi Structure:
```
Dono files ZYAROORI ek hi folder mein honi chahiye:

my-project/
├── index.html                ← ✅
└── encrypted-content.json    ← ✅ SAME FOLDER

Agar alag hain toh:
1. encrypted-content.json cut karo
2. index.html waale folder mein paste karo
3. Server dobara chalao
4. Test karo
```

### Verify Karo:
```bash
# Terminal mein project folder mein:
ls -la

# Dono files dikhni chahiye:
# index.html
# encrypted-content.json
```

---

## 🔴 Mistake 11 — Auto-Lock Baar Baar Ho Raha

### Problem:
```
Login karte hi ya thodi der baad
site automatically lock ho jaati hai.
```

### Cause:
```
CONFIG mein autoLockSeconds bahut kam set hai.
Default: 120 seconds (2 minutes)
```

### ✅ Fix — autoLockSeconds Badhao:

```javascript
// index.html mein CONFIG dhundho:

const CONFIG = {
  contentFile:      'encrypted-content.json',

  // ❌ GALAT (bahut jaldi lock hota hai):
  autoLockSeconds:  10,

  // ✅ SAHI options:
  autoLockSeconds:  120,   // 2 minute (default)
  autoLockSeconds:  300,   // 5 minute
  autoLockSeconds:  600,   // 10 minute
  autoLockSeconds:  0,     // Kabhi nahi lock hoga

  maxAttempts:      5,
  lockoutSeconds:   30,
};
```

### Timer Reset Kaise Hota Hai:
```
Yeh activities timer reset karti hain:
→ Mouse hilana
→ Koi bhi key dabana
→ Screen touch karna (mobile)
→ Page scroll karna
→ Koi bhi click karna

Agar screen pe kuch nahi kar rahe
toh timer count karta rahega.
```

---

## 🔴 Mistake 12 — Mobile Pe Kaam Nahi Kar Raha

### Problem:
```
Desktop pe sab sahi kaam karta hai
lekin mobile pe:
→ UI toot raha hai
→ Password type karte waqt zoom ho raha hai
→ Content fit nahi ho raha
```

### ✅ Fixes:

#### Fix A — Mobile Browser Mein Direct File:
```
❌ GALAT: Mobile pe file:// se khola
✅ SAHI:  Desktop pe server chalao:
          npx serve .

          Mobile aur Desktop ek hi WiFi pe hone chahiye.

          Desktop ka IP dhundho:
          Windows: ipconfig → IPv4 Address
          Mac/Linux: ifconfig → inet address

          Mobile browser mein:
          http://192.168.1.XX:3000
          (apna IP daalo)
```

#### Fix B — iOS Safari Zoom Problem:
```
index.html mein <head> mein check karo:

✅ Yeh line honi chahiye:
<meta name="viewport"
      content="width=device-width,
               initial-scale=1.0,
               maximum-scale=1.0,
               user-scalable=no" />

Aur input CSS mein:
font-size: max(16px, 1rem);
(16px se kam hone pe iOS zoom karta hai)
```

#### Fix C — Screen Mein Fit Nahi Ho Raha:
```
auth-panel ka padding check karo.
Responsive clamp() values honi chahiye:

padding: clamp(20px, 5vw, 44px) clamp(16px, 5vw, 48px);

Fixed pixels mat daalo jaise:
padding: 44px 48px;  ← Mobile pe overflow hoga
```

---

## 🟡 Quick Diagnosis Checklist

### Pehle Yeh Check Karo — 2 Minute Mein:

```
SETUP CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ index.html aur encrypted-content.json ek folder mein hain?
□ Local server chal raha hai? (npx serve . / python3 -m http.server)
□ Browser URL mein http://localhost:... hai? (file:// nahi)
□ Internet connection hai? (CryptoJS CDN ke liye)

JSON CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ encrypted-content.json mein real ciphertext hai?
  (U2FsdGVkX1... se shuru hona chahiye)
□ Placeholder text "GENERATE_THIS..." nahi hai?
□ JSON format sahi hai? (jsonlint.com pe check karo)
□ File ka naam exactly "encrypted-content.json" hai?

PASSWORD CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Generate karte waqt jo password daala tha wahi use kar rahe ho?
□ Caps Lock band hai?
□ Password ke aage/peeche extra space nahi hai?

CONSOLE CHECK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Console mein koi red error toh nahi?
□ "KeyForge is not defined" error nahi?
□ "CryptoJS is not defined" error nahi?
```

---

## 🟢 Sahi Karne Ka Sahi Order

### First Time Setup — Exactly Yeh Order Follow Karo:

```
ORDER 1: Project folder banao
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

mkdir my-keyforge-site
cd my-keyforge-site

ORDER 2: Dono files ek folder mein rakho
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

my-keyforge-site/
├── index.html                ← KeyForge ka pura HTML code
└── encrypted-content.json    ← Abhi empty rakho

ORDER 3: Local server chalao
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

npx serve .
→ Browser: http://localhost:3000

ORDER 4: Console kholo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

F12 dabao → Console tab

ORDER 5: allow pasting type karo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Console mein KHUD type karo:
allow pasting
ENTER dabao

ORDER 6: Content generate karo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KeyForge.generateMultiUser([...]) paste karo
ENTER dabao

ORDER 7: Output copy karo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sirf { "users": [...] } wala part copy karo
"[KeyForge] Copy into..." wali line NAHI

ORDER 8: JSON file mein paste karo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

encrypted-content.json kholo
Pura content replace karo naye JSON se
Save karo

ORDER 9: Test karo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Browser reload karo: Ctrl+R / Cmd+R
Password daalo → AUTHENTICATE
Content dikhna chahiye ✅
```

---

## 📞 Error Message Directory

### Har Error Ka Matlab:

```
ERROR MESSAGE                    MATLAB             FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Content load failed"            JSON file nahi     Server chalao +
                                 mili               file check karo

"Invalid key. X attempts         Password galat     Sahi password
 remaining"                                         daalo

"Too many attempts.              5 baar galat       30 sec wait karo
 Wait Xs"                        daala

"Security key cannot             Password field     Kuch type karo
 be empty"                       blank hai

"KeyForge is not defined"        Script load        Apni site pe
                                 nahi hua           console kholo

"CryptoJS is not defined"        CDN fail           Internet check /
                                                    self-host karo

"Unexpected token"               JSON galat         jsonlint.com pe
(browser console mein)           format             validate karo

"HTTP 404"                       File nahi mili     Filename check
(browser console mein)                              karo exactly
```

---

## ⚡ 60 Second Quick Fix

```
Kuch bhi kaam nahi kar raha?
Yeh 5 steps try karo:

[1] Terminal:   cd apne-project-folder
[2] Terminal:   npx serve .
[3] Browser:    http://localhost:3000 kholo
[4] F12:        Console → "allow pasting" → ENTER
[5] Console:    KeyForge.generateMultiUser([...]) → ENTER
                Output copy → JSON file mein paste → Save
                Browser reload → Test ✅

Agar ab bhi nahi chala:
→ jsonlint.com pe JSON validate karo
→ Console mein red errors dekho
→ File names exactly check karo
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