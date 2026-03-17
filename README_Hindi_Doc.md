# 🛡️ KeyForge Static-Auth

<div align="center">

```
██╗  ██╗███████╗██╗   ██╗███████╗ ██████╗ ██████╗  ██████╗ ███████╗
██║ ██╔╝██╔════╝╚██╗ ██╔╝██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝
█████╔╝ █████╗   ╚████╔╝ █████╗  ██║   ██║██████╔╝██║  ███╗█████╗  
██╔═██╗ ██╔══╝    ╚██╔╝  ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝  
██║  ██╗███████╗   ██║   ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

### ⚡ Static-Auth Security Protocol v2.0

> **Kisi bhi static website ko password-protected banao**
> **— bina kisi backend, server ya database ke!**

[![Version](https://img.shields.io/badge/Version-2.0-ff00ff?style=for-the-badge&logo=github)](https://github.com/SudhirDevOps1)
[![Encryption](https://img.shields.io/badge/AES-256-00fff5?style=for-the-badge&logo=letsencrypt)](https://github.com/SudhirDevOps1)
[![No Backend](https://img.shields.io/badge/Backend-NOT_REQUIRED-00ff88?style=for-the-badge)](https://github.com/SudhirDevOps1)
[![License](https://img.shields.io/badge/License-MIT-ffff00?style=for-the-badge)](https://github.com/SudhirDevOps1)
[![Made By](https://img.shields.io/badge/Made_by-SudhirDevOps1-ff003c?style=for-the-badge&logo=github)](https://github.com/SudhirDevOps1)

</div>

---

## 👨‍💻 Developer Info

<table>
<tr><td><b>👤 Naam</b></td><td>Sudhir Kumar</td></tr>
<tr><td><b>🐙 GitHub</b></td><td><a href="https://github.com/SudhirDevOps1">@SudhirDevOps1</a></td></tr>
<tr><td><b>📦 Project</b></td><td>KeyForge Static-Auth</td></tr>
<tr><td><b>🔖 Version</b></td><td>v2.0</td></tr>
<tr><td><b>💻 Stack</b></td><td>HTML · Vanilla JS · CryptoJS</td></tr>
<tr><td><b>📅 Year</b></td><td>2024</td></tr>
</table>

---

## 📖 Table of Contents

- [🔐 KeyForge Kya Hai?](#-keyforge-kya-hai)
- [🤔 Yeh Kyu Banaya?](#-yeh-kyu-banaya)
- [⚙️ Kaam Kaise Karta Hai?](#%EF%B8%8F-kaam-kaise-karta-hai)
- [📁 File Structure](#-file-structure)
- [🔍 auth.js Ki Puri Kahani](#-authjs-ki-puri-kahani)
- [🚀 Features](#-features)
- [🔒 Security Model](#-security-model)
- [📦 Installation](#-installation)
- [🔑 Content Encrypt Karna](#-content-encrypt-karna)
- [👥 Multi-User Setup](#-multi-user-setup)
- [⚙️ Configuration](#%EF%B8%8F-configuration)
- [🌐 Deployment](#-deployment)
- [📱 Responsive Design](#-responsive-design)
- [❓ FAQ](#-faq)
- [⚠️ Limitations](#%EF%B8%8F-limitations)
- [🗺️ Roadmap](#%EF%B8%8F-roadmap)

---

## 🔐 KeyForge Kya Hai?

**KeyForge Static-Auth** ek **client-side password protection system** hai
jo sirf **3 technologies** use karta hai:

```
HTML  +  Vanilla JavaScript  +  CryptoJS (AES-256)
 │              │                      │
 │         Auth Engine             Encryption
 │         Lock Screen             Decryption
 └─────────────┴──────────────────────┘
              ↓
    Zero Backend Required!
```

### Kya Nahi Chahiye:
```
❌ Node.js server
❌ PHP backend  
❌ Database
❌ API endpoints
❌ Cookies
❌ localStorage
❌ Server-side sessions
```

### Kya Kaam Karta Hai:
```
✅ GitHub Pages
✅ Netlify Free Tier
✅ Vercel Free Tier
✅ Any static CDN
✅ Local HTML file
✅ AWS S3 Static
✅ Cloudflare Pages
```

---

## 🤔 Yeh Kyu Banaya?

### Real-World Problems Jo Solve Kiye:

```
┌─────────────────────────────────────────────────────┐
│  PROBLEM 1 — Client Preview                         │
│  ─────────────────────────────────────────────────  │
│  "Client ko project dikhana hai                     │
│   lekin publicly accessible nahi karna."            │
│                              ↓                      │
│  SOLUTION: KeyForge password gate                   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  PROBLEM 2 — Team Portal                            │
│  ─────────────────────────────────────────────────  │
│  "Internal documents sirf team ke liye              │
│   lekin backend banana expensive hai."              │
│                              ↓                      │
│  SOLUTION: Multi-user KeyForge setup                │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  PROBLEM 3 — Personal Vault                         │
│  ─────────────────────────────────────────────────  │
│  "Notes/docs online rakhne hain                     │
│   lekin server maintain nahi karna."                │
│                              ↓                      │
│  SOLUTION: KeyForge on GitHub Pages                 │
└─────────────────────────────────────────────────────┘
```

---

## ⚙️ Kaam Kaise Karta Hai?

### Complete Flow Diagram:

```
USER SITE OPEN KARTA HAI
          │
          ▼
┌─────────────────────┐
│   🔒 LOCK SCREEN    │  ← Cyberpunk UI dikhti hai
│   (Fullscreen)      │
└─────────────────────┘
          │
          │  Password enter karta hai
          ▼
┌─────────────────────┐
│  fetch()            │  ← encrypted-content.json load
│  encrypted-         │     hota hai (1 network request)
│  content.json       │
└─────────────────────┘
          │
          ▼
┌─────────────────────┐
│  CryptoJS.AES       │  ← Password se decrypt
│  .decrypt()         │     karne ki koshish
└─────────────────────┘
          │
     ┌────┴────────────┐
     │                 │
   SUCCESS           FAIL
     │                 │
     ▼                 ▼
┌─────────┐      ┌──────────────┐
│ Content │      │ Error + Count│
│ DOM mein│      │ Attempts     │
│ inject  │      │ Track karo   │
└─────────┘      └──────────────┘
     │
     ▼
┌─────────────────────┐
│  Auto-Lock Timer    │  ← 120 sec countdown shuru
│  Start              │
└─────────────────────┘
     │
     ▼
┌─────────────────────┐
│  Session Memory     │  ← Sirf RAM mein
│  Only               │     Refresh = gone
└─────────────────────┘
```

### Technical Breakdown:

```
┌──────────────────────────────────────────────────┐
│                ENCRYPTION LAYER                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  ENCRYPT (ek baar — content banate waqt):        │
│  ─────────────────────────────────────────────   │
│  Plaintext JSON                                  │
│       +                                          │
│  Your Password                                   │
│       │                                          │
│       ▼                                          │
│  CryptoJS.AES.encrypt()                          │
│       │                                          │
│       ▼                                          │
│  "U2FsdGVkX1+9Xk..." ← encrypted-content.json   │
│                                                  │
│  DECRYPT (har login pe):                         │
│  ─────────────────────────────────────────────   │
│  User ka Password                                │
│       +                                          │
│  Ciphertext from JSON                            │
│       │                                          │
│       ▼                                          │
│  CryptoJS.AES.decrypt()                          │
│       │                                          │
│  ┌────┴──────────────┐                           │
│  Valid UTF-8?        Not valid?                  │
│  = UNLOCK ✅         = DENY ❌                   │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 📁 File Structure

```
keyforge-static-auth/
│
├── 📄 index.html
│   ├── 🎨 CSS Styles (Cyberpunk Theme)
│   ├── 🏗️  HTML Structure (Lock Screen + App)
│   └── ⚡ JavaScript Engine (Inline — auth.js ka code)
│
├── 📄 auth.js              ← Optional separate version
│   ├── CONFIG object
│   ├── SESSION state
│   ├── Crypto module
│   ├── ContentLoader
│   ├── Renderer
│   ├── Log module
│   ├── Timer module
│   └── Auth controller
│
├── 📄 encrypted-content.json   ← Safe to commit/expose
│   ├── Single mode:
│   │   └── { "ciphertext": "U2FsdG..." }
│   └── Multi-user mode:
│       └── { "users": [ {...}, {...} ] }
│
└── 📄 README.md
```

---

## 🔍 auth.js Ki Puri Kahani

### Version 1.0 — Alag File Thi

```
PROJECT STRUCTURE v1.0:
━━━━━━━━━━━━━━━━━━━━━━
├── index.html          ← Sirf HTML + CSS
├── auth.js             ← Alag JS file
└── encrypted-content.json

index.html ke andar:
━━━━━━━━━━━━━━━━━━━
<!-- End mein yeh line thi -->
<script src="auth.js"></script>
```

### Version 2.0 — HTML Ke Andar Aaya

```
PROJECT STRUCTURE v2.0:
━━━━━━━━━━━━━━━━━━━━━━
├── index.html          ← HTML + CSS + JS (sab andar!)
└── encrypted-content.json

index.html ke andar:
━━━━━━━━━━━━━━━━━━━
<script>
  ;(function KeyForgeAuth() {
    // ... pura auth engine yahan hai
    // auth.js wala code yahan move hua
  })();
</script>
```

---

### Auth.js HTML Mein Kyun Daala? — 5 Reasons

#### Reason 1️⃣ — Single File Deployment

```
PEHLE (v1.0):                    ABHI (v2.0):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Request 1 → index.html           Request 1 → index.html ✅
Request 2 → auth.js              Request 2 → encrypted-content.json ✅
Request 3 → encrypted-content.json

3 files manage karo              2 files manage karo
3 HTTP requests                  2 HTTP requests = FASTER!

Agar auth.js path galat ho?      Koi issue nahi!
→ Poora system toot jaata!       Sab ek file mein!
```

#### Reason 2️⃣ — Race Condition Prevention (Security)

```
EXTERNAL SCRIPT KA RISK:
━━━━━━━━━━━━━━━━━━━━━━━
Browser  →  index.html parse
         →  Lock screen render ✅
         →  auth.js FETCH shuru... (network delay!)
                    │
              [DANGER ZONE]
                    │
              Agar JS late load ho
              ya block ho jaye...
                    │
              Lock screen bina
              auth logic ke!
                    │
              Content expose
              ho sakta hai! ⚠️

INLINE SCRIPT KA FAYDA:
━━━━━━━━━━━━━━━━━━━━━━
Browser  →  index.html parse
         →  Lock screen + JS ek saath! ✅
         →  Auth engine TURANT active
         →  Koi race condition NAHI
         →  Always secure! 🔒
```

#### Reason 3️⃣ — Offline / Local File Support

```
PROBLEM (External Script):        SOLUTION (Inline):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
file:// protocol pe FAIL          file:// pe KAAM KARTA HAI ✅
CORS error aata hai               CORS issue NAHI ✅
CDN offline = broken              Always available ✅
Firewall block = broken           Network se independent ✅
```

#### Reason 4️⃣ — Simplicity

```
v1.0 COMPLEXITY:
━━━━━━━━━━━━━━━
User ko yaad rakhna hai:
  → index.html ka path
  → auth.js ka exact path
  → Dono same folder mein hone chahiye
  → Deployment mein dono files upload karo
  → Ek miss = sab toot gaya!

v2.0 SIMPLICITY:
━━━━━━━━━━━━━━━
User ko sirf:
  → index.html upload karo ✅
  → encrypted-content.json upload karo ✅
  → Done! Bas do files!
```

#### Reason 5️⃣ — Performance

```
LOAD TIME COMPARISON:
━━━━━━━━━━━━━━━━━━━
v1.0 Timeline:
0ms  ─── HTML request start
50ms ─── HTML received
50ms ─── auth.js request start  ← Extra round trip!
100ms ── auth.js received
100ms ── encrypted-content.json request
150ms ── Content received
150ms ── App ready

v2.0 Timeline:
0ms  ─── HTML request start
50ms ─── HTML received (JS bhi andar!)
50ms ─── encrypted-content.json request
100ms ── Content received
100ms ── App ready ← 33% FASTER!
```

---

## 🚀 Features

### 🎨 Feature 1 — Cyberpunk Lock Screen

```
Visual Elements:
━━━━━━━━━━━━━━━
✦ Fullscreen dark background  (#050510)
✦ Animated grid lines         (cyan, 40px grid)
✦ CRT scanline overlay        (retro effect)
✦ KeyForge logo               (neon gradient)
✦ Spinning lock icon          (dual rings)
✦ Auth panel                  (corner accents)
✦ Floating particles          (desktop only)
✦ Status dot                  (blinking green)

Animations:
━━━━━━━━━━
→ logoPulse    : Cyan ↔ Magenta glow (3s loop)
→ lockPulse    : Scale + glow (2s loop)
→ spinRing     : Outer ring rotate (3s)
→ spinRing-2   : Inner ring reverse (5s)
→ gridScroll   : Background drift (20s)
→ dotBlink     : Status pulse (1.5s)
→ particleDrift: Float upward (8-16s)
→ flashIn      : Unlock flash (0.5s)
→ shakeX       : Error shake (0.4s)
```

### 🔐 Feature 2 — AES-256 Encryption

```
Encryption Process:
━━━━━━━━━━━━━━━━━
Step 1: Apna content JSON banao
        {
          title: "Secret Site",
          sections: [...]
        }

Step 2: CryptoJS encrypt karta hai
        CryptoJS.AES.encrypt(
          JSON.stringify(content),
          "YourPassword"
        )

Step 3: Ciphertext milta hai
        "U2FsdGVkX1+9Xk3mN8pQr..."

Step 4: JSON file mein save karo
        { "ciphertext": "U2FsdGVk..." }

Decryption Process (login pe):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
User password enter karta hai
        ↓
CryptoJS.AES.decrypt(ciphertext, password)
        ↓
Valid JSON mila?  → UNLOCK ✅
Invalid result?   → DENY ❌
```

### 👥 Feature 3 — Multi-User Support

```
encrypted-content.json (multi-user):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{
  "users": [
    {
      "username": "ADMIN",
      "ciphertext": "U2FsdGVk..."
      //             ↑ Admin password se encrypt
      //               Admin ka content
    },
    {
      "username": "DEVELOPER",
      "ciphertext": "X9mNpQrL..."
      //             ↑ Dev password se encrypt
      //               Dev ka content (alag!)
    },
    {
      "username": "CLIENT",
      "ciphertext": "Kj8wLmN3..."
      //             ↑ Client password se encrypt
      //               Client ka content (limited)
    }
  ]
}

How it works:
━━━━━━━━━━━━
ADMIN password      → Admin content unlock
DEVELOPER password  → Dev content unlock
CLIENT password     → Client content unlock
WRONG password      → Kuch nahi unlock ❌

Cross-access IMPOSSIBLE:
→ Admin password se Dev content nahi khulega
→ Dev password se Client content nahi khulega
```

### ⏱️ Feature 4 — Auto-Lock Timer

```
Default: 120 seconds

Visual Indicators:
━━━━━━━━━━━━━━━━━

Top progress bar:
┌──────────────────────────────────────────────┐
│ ████████████████████░░░░░░░░░░░░░░░░░░░░░░  │
└──────────────────────────────────────────────┘
  ↑ Cyan to Magenta gradient (full session)

Timer badge (top-right):
⏱ Auto-lock in 87s

Color Warning System:
━━━━━━━━━━━━━━━━━━━
120s → 31s : Cyan + Magenta  (normal ✅)
 30s →  1s : Yellow + Red    (warning ⚠️)
  0s        : LOCKED! 🔒

Timer Reset Triggers:
━━━━━━━━━━━━━━━━━━━
→ Mouse move    → Timer reset
→ Key press     → Timer reset
→ Touch/tap     → Timer reset
→ Scroll        → Timer reset
→ Any click     → Timer reset
```

### 🛡️ Feature 5 — Brute Force Protection

```
Settings: maxAttempts=5, lockoutSeconds=30

Attempt Flow:
━━━━━━━━━━━
Attempt 1 (wrong) → "4 attempts remaining"
Attempt 2 (wrong) → "3 attempts remaining"
Attempt 3 (wrong) → "2 attempts remaining"
Attempt 4 (wrong) → "1 attempt remaining"
Attempt 5 (wrong) → LOCKOUT!

Lockout Mode:
━━━━━━━━━━━
┌──────────────────────────────────────────────┐
│ ████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░  │← Red countdown bar
└──────────────────────────────────────────────┘
"Max attempts reached. Locked for 30s."

After 30s:
→ Lockout expire hota hai
→ Counter reset hota hai
→ 5 aur attempts milte hain
```

### 📋 Feature 6 — Access Log (Memory Only)

```
Log Entry Types:
━━━━━━━━━━━━━━
✔ (green) — AUTH OK — ADMIN — 14:32:01
✘ (red)   — AUTH FAIL — agent (attempt 2/5) — 14:31:45
· (orange)— Session locked — 14:31:20
· (orange)— KeyForge v2.0 initialised — 14:30:00

Log Properties:
━━━━━━━━━━━━━━
→ Max 50 entries (configurable)
→ Page refresh pe completely wiped
→ Kabhi server ko send NAHI hota
→ Sirf browser RAM mein
→ Toggle button se show/hide
→ Scrollable (max-height: 110px)
```

### 🌊 Feature 7 — Particle Effects

```
Desktop Only (768px+ screens):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ 18 particles (configurable)
→ Size: 1-4px random
→ Color: Cyan or Magenta (random)
→ Speed: 8-16 seconds (random)
→ Direction: Bottom → Top
→ Random horizontal drift

Mobile: DISABLED
━━━━━━━━━━━━━━
→ Battery bachane ke liye
→ Performance ke liye
→ @media (max-width: 768px) se hide

Accessibility:
━━━━━━━━━━━━
→ prefers-reduced-motion: respected
→ aria-hidden="true" on wrapper
```

### ♿ Feature 8 — Accessibility (A11y)

```
ARIA Roles:
━━━━━━━━━━
role="main"          → Lock screen
role="form"          → Auth panel
role="alert"         → Error messages
role="log"           → Access log
role="navigation"    → Top bar
role="progressbar"   → Timeout bar

Live Regions:
━━━━━━━━━━━
aria-live="assertive" → Errors (turant announce)
aria-live="polite"    → Timer, status (wait kare)

State:
━━━━━━
aria-busy="true"    → Loading state
aria-expanded       → Log toggle
aria-hidden         → Decorative elements
aria-label          → All interactive elements

Keyboard:
━━━━━━━━
Tab    → Navigate elements
Enter  → Authenticate / Toggle
Space  → Toggle log
Focus  → Managed on lock/unlock
```

---

## 🔒 Security Model

```
┌─────────────────────────────────────────────────────────┐
│                  SECURITY ANALYSIS                      │
├────────────────────────┬────────────────────────────────┤
│      ✅ SAFE           │      ⚠️ LIMITATION             │
├────────────────────────┼────────────────────────────────┤
│ AES-256 encryption     │ JS disable = bypass possible   │
│ Password never stored  │ Client-side only               │
│ Memory-only session    │ Weak password = risk           │
│ No cookies used        │ Not for top-secret data        │
│ No localStorage        │ Source code visible            │
│ No server calls        │ Offline brute force possible   │
│ Brute force lockout    │ No real server authentication  │
│ Input wiped on auth    │                                │
│ Content encrypted      │                                │
└────────────────────────┴────────────────────────────────┘

🎯 IDEAL USE CASES:
━━━━━━━━━━━━━━━━━
✅ Client preview sites
✅ Internal team portals
✅ Personal notes/journals
✅ Demo access control
✅ Low-sensitivity document sharing
✅ Project showcases

❌ NOT RECOMMENDED FOR:
━━━━━━━━━━━━━━━━━━━━━
❌ Banking/financial data
❌ Medical records
❌ Government secrets
❌ Any legally sensitive data
```

---

## 📦 Installation

### Method 1 — Git Clone (Recommended)

```bash
# Repository clone karo
git clone https://github.com/SudhirDevOps1/keyforge-static-auth.git

# Folder mein jao
cd keyforge-static-auth

# Local server chalao
npx serve .
# Browser mein kholna: http://localhost:3000
```

### Method 2 — Manual Setup

```bash
# Step 1: Folder banao
mkdir my-secure-site && cd my-secure-site

# Step 2: Files banao
touch index.html
touch encrypted-content.json
touch README.md

# Step 3: index.html mein KeyForge code paste karo
# (Upar diya gaya pura HTML code)

# Step 4: Content encrypt karo (neeche dekho)

# Step 5: Local server chalao
npx serve .
# ya
python3 -m http.server 8080
# ya
php -S localhost:8080
```

---

## 🔑 Content Encrypt Karna

### Step 1 — Browser Console Kholna

```
Windows/Linux : F12 → Console tab
Mac           : Cmd + Option + I → Console tab
Mobile        : URL bar mein "about:blank" → DevTools (limited)
```

### Step 2 — Single Password Mode

```javascript
// ── Apna content define karo ──────────────────────
const myContent = {
  title: "🛡️ Meri Secret Site",
  description: "Sirf authorized log hi yahan pahunch sakte hain.",
  sections: [
    {
      heading: "Welcome Message",
      body: "Aap successfully authenticate ho gaye hain!",
      tags: ["SECURE", "PRIVATE", "AES-256"]
    },
    {
      heading: "Important Links",
      list: [
        "Dashboard    → /dashboard",
        "Reports      → /reports",
        "Settings     → /settings",
        "Help         → /help"
      ]
    },
    {
      heading: "Notice",
      body: "Yeh content sirf authorized personnel ke liye hai.",
      tags: ["CONFIDENTIAL", "DO-NOT-SHARE"]
    }
  ]
};

// ── Encrypt karo ──────────────────────────────────
KeyForge.generateSingle(myContent, "MeraStrongPassword@2024!");

// ── Console mein output aayega ────────────────────
// Copy karo → encrypted-content.json mein paste karo
```

### Step 3 — HTML Content Mode

```javascript
// Custom HTML content bhi daal sakte ho
const htmlContent = {
  html: `
    <h1>🎯 Custom Dashboard</h1>
    <p>Apna <strong>koi bhi HTML</strong> yahan likho.</p>
    <div class="card">
      <h2>Important Data</h2>
      <p>Sensitive information yahan store hai.</p>
      <span class="tag">TOP SECRET</span>
    </div>
  `
};

KeyForge.generateSingle(htmlContent, "TumharaPassword123!");
```

### Output Format

```json
{
  "ciphertext": "U2FsdGVkX1+9Xk3mN8pQr7vLwE2jKd..."
}
```

> ⚠️ **Yeh JSON file publicly visible hogi — lekin SAFE hai!**
> Bina password ke decrypt nahi ho sakta.

---

## 👥 Multi-User Setup

```javascript
// Console mein paste karo:
KeyForge.generateMultiUser([
  {
    username: "ADMIN",
    password: "Admin@SuperSecret2024!",
    content: {
      title: "⚙️ Admin Control Panel",
      description: "Full system access. Handle with care.",
      sections: [
        {
          heading: "System Overview",
          body: "All systems nominal. 142 active users.",
          tags: ["ADMIN", "FULL-ACCESS", "LIVE"]
        },
        {
          heading: "Admin Controls",
          list: [
            "User Management → /admin/users",
            "Database Access → /admin/db",
            "Server Logs    → /admin/logs",
            "API Keys       → /admin/api"
          ]
        }
      ]
    }
  },
  {
    username: "DEVELOPER",
    password: "Dev@CodeAccess2024!",
    content: {
      title: "💻 Developer Portal",
      description: "Code aur deployment access.",
      sections: [
        {
          heading: "Dev Resources",
          body: "API keys aur deployment scripts yahan hain.",
          tags: ["DEV", "API", "STAGING"]
        },
        {
          heading: "Useful Links",
          list: [
            "GitHub Repo  → github.com/team/project",
            "CI/CD Panel  → jenkins.internal",
            "Staging Site → staging.example.com"
          ]
        }
      ]
    }
  },
  {
    username: "CLIENT",
    password: "Client@Preview2024!",
    content: {
      title: "👔 Client Preview",
      description: "Project progress aur deliverables.",
      sections: [
        {
          heading: "Project Status",
          body: "Design complete. Development 75% done. ETA: 2 weeks.",
          tags: ["IN-PROGRESS", "ON-TRACK"]
        },
        {
          heading: "Milestones",
          list: [
            "✅ Design Approved",
            "✅ Frontend 80% done",
            "🔄 Backend in progress",
            "⏳ Testing pending"
          ]
        }
      ]
    }
  }
]);
```

---

## ⚙️ Configuration

`index.html` mein `CONFIG` object dhundo aur customize karo:

```javascript
const CONFIG = {

  // ── Content file path ──────────────────────────
  contentFile: 'encrypted-content.json',
  // Change karo agar file alag folder mein hai:
  // contentFile: 'data/vault.json',
  // contentFile: 'assets/secure/content.json',

  // ── Auto-lock timer ────────────────────────────
  autoLockSeconds: 120,
  // 30  = High security (30 sec)
  // 120 = Default (2 min)
  // 300 = Relaxed (5 min)
  // 0   = Disabled (no auto-lock)

  // ── Brute force protection ─────────────────────
  maxAttempts: 5,
  // Kitni galat attempts ke baad lockout?
  lockoutSeconds: 30,
  // Lockout kitne seconds ka?

  // ── Access log ─────────────────────────────────
  showAccessLog: true,
  // false = Log toggle button hide ho jayega
  maxLogEntries: 50,
  // Memory mein max kitne entries?

  // ── Particles ──────────────────────────────────
  particleCount: 18,
  // 0  = Particles band
  // 18 = Default
  // 30 = More particles
};
```

### Configuration Presets

```javascript
// 🔴 HIGH SECURITY (Banks/Finance)
const CONFIG = {
  contentFile:     'data/vault.json',
  autoLockSeconds: 30,
  maxAttempts:     3,
  lockoutSeconds:  300,
  showAccessLog:   true,
  maxLogEntries:   100,
  particleCount:   0,
};

// 🟡 BALANCED (Team Portal)
const CONFIG = {
  contentFile:     'encrypted-content.json',
  autoLockSeconds: 120,
  maxAttempts:     5,
  lockoutSeconds:  30,
  showAccessLog:   true,
  maxLogEntries:   50,
  particleCount:   18,
};

// 🟢 RELAXED (Client Preview)
const CONFIG = {
  contentFile:     'encrypted-content.json',
  autoLockSeconds: 600,
  maxAttempts:     10,
  lockoutSeconds:  10,
  showAccessLog:   false,
  maxLogEntries:   20,
  particleCount:   25,
};
```

---

## 🌐 Deployment

### GitHub Pages

```bash
# Step 1: Repo banao
git init
git add .
git commit -m "feat: KeyForge Static-Auth setup"

# Step 2: GitHub pe push karo
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main

# Step 3: Settings → Pages → Source: main
# URL: https://USERNAME.github.io/REPO/
```

### Netlify

```bash
# Option A: CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir .

# Option B: Drag & Drop
# app.netlify.com → Sites → Folder drag karo
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### Local Dev

```bash
npx serve .          # Port 3000
python3 -m http.server 8080
php -S localhost:8080
```

---

## 📱 Responsive Design

```
Breakpoints:
━━━━━━━━━━━
320px - 359px  Tiny phones    Minimal layout, no session label
360px - 479px  Small phones   Compact layout
480px - 767px  Large phones   Standard mobile layout
768px - 1023px Tablets        Medium layout + particles
1024px+        Desktop        Full layout + all animations

Special Cases:
━━━━━━━━━━━━━
height < 500px  Landscape phone  Super compact, icons hidden
Notched phones  Any width        Safe area insets applied

iOS Specific Fixes:
━━━━━━━━━━━━━━━━━━
Input zoom      → font-size: max(16px, 1rem)
Touch highlight → -webkit-tap-highlight-color: transparent
Notch/SafeArea  → env(safe-area-inset-*)
Input style     → -webkit-appearance: none
```

---

## ❓ FAQ

**Q: Password bhool gaya, recover ho sakta hai?**
```
A: Nahi — by design!
   Original content backup rakhna zaroori hai.
   Solution: Re-encrypt with new password.
```

**Q: Kya encrypted-content.json commit karna safe hai?**
```
A: Haan! Andar sirf ciphertext hai.
   Password ke bina decrypt impossible hai.
   Public repo mein bhi safe hai.
```

**Q: Content update kaise karein?**
```
A: Step 1: Naya content define karo
   Step 2: KeyForge.generateSingle() run karo
   Step 3: Naya JSON file upload karo
   Step 4: Done!
```

**Q: Kya yeh really secure hai?**
```
A: Strong password ke saath — haan!
   AES-256 industry standard hai.
   Weak password = risk.
   Top-secret data ke liye use mat karo.
```

**Q: Multiple pages protect kar sakte hain?**
```
A: Abhi ek page.
   Workaround: Sections use karo ya custom HTML.
   v3.0 mein multi-page support aayega.
```

---

## ⚠️ Limitations

```
1. JavaScript Required
   → JS disable = lock screen bypass
   → Content still encrypted rahega

2. Client-Side Only
   → Offline brute force possible
   → Strong password MUST!

3. Single Page (Abhi)
   → Multi-page support v3.0 mein

4. Manual Content Update
   → Har update pe re-encrypt karo
   → No CMS integration (abhi)

5. No Password Recovery
   → Original content backup zaroori

6. Browser Support
   → IE not supported
   → Very old browsers fail
```

---

## 🗺️ Roadmap

```
v2.1 (Next Release):
━━━━━━━━━━━━━━━━━━
[ ] Password strength meter
[ ] Custom theme support
[ ] QR code login
[ ] Better mobile animations

v2.2:
━━━━
[ ] PBKDF2 key derivation
[ ] Encrypted media files
[ ] Export/Import bundles
[ ] npm package

v3.0 (Major):
━━━━━━━━━━━━
[ ] Multi-page protection
[ ] WebCrypto API
[ ] Offline PWA support
[ ] Zero-knowledge concepts
[ ] Plugin system
```

---

## 📜 License

```
MIT License — Copyright (c) 2026 Sudhir Kumar (@SudhirDevOps1)

Free to use, modify, distribute.
Full license: https://opensource.org/licenses/MIT
```

---

<div align="center">

---

### ⬡ KeyForge Security Protocol

**Powered by KeyForge Static-Auth v2.0**

*Built with ❤️ and ☕ by [Sudhir Kumar (@SudhirDevOps1)](https://github.com/SudhirDevOps1)*

*Apni static site ko secure banao — bina backend ke! 🔐*

---

`HTML` · `Vanilla JS` · `CryptoJS AES-256` · `Zero Backend` · `Open Source`

⭐ **Agar useful laga toh GitHub pe star do!** ⭐

</div>