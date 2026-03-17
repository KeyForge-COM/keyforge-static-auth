# 🏢 KeyForge — Employee Portal Setup Guide

<div align="center">

```
███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗
██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝
█████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗
██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝
███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗
╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝

██████╗  ██████╗ ██████╗ ████████╗ █████╗ ██╗
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔══██╗██║
██████╔╝██║   ██║██████╔╝   ██║   ███████║██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══██║██║
██║     ╚██████╔╝██║  ██║   ██║   ██║  ██║███████╗
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝
```

[![Made By](https://img.shields.io/badge/Made_by-SudhirDevOps1-ff003c?style=for-the-badge&logo=github)](https://github.com/SudhirDevOps1)
[![Version](https://img.shields.io/badge/KeyForge-v2.0-ff00ff?style=for-the-badge)](https://github.com/SudhirDevOps1)
[![Encryption](https://img.shields.io/badge/AES-256-00fff5?style=for-the-badge)](https://github.com/SudhirDevOps1)
[![Portal](https://img.shields.io/badge/Type-Employee_Portal-00ff88?style=for-the-badge)](https://github.com/SudhirDevOps1)

> **A complete guide to set up a professional employee portal**
> **with personalized dashboards, login credentials, and access control.**

</div>

---

## 📖 Table of Contents

- [🧠 Understand Your Current Output](#-understand-your-current-output)
- [🎯 What to Show Each Employee](#-what-to-show-each-employee)
- [📋 Step 1 — Generate Rich Content](#-step-1--generate-rich-content)
- [📋 Step 2 — Copy the Console Output](#-step-2--copy-the-console-output)
- [📧 Step 3 — Send Credentials to Employee](#-step-3--send-credentials-to-employee)
- [✅ Step 4 — Test All Logins](#-step-4--test-all-logins)
- [🔧 Step 5 — Customize URLs and Details](#-step-5--customize-urls-and-details)

---

## 🧠 Understand Your Current Output

```
You have already generated this:

┌─────────────────────────────────────────────────────────┐
│  ADMIN          password  →  admin123                   │
│  AGENT_SHADOW   password  →  shadow456                  │
└─────────────────────────────────────────────────────────┘

Both users are already encrypted and working!
Now you just need to replace the plain content
with a professional employee dashboard.
```

---

## 🎯 What to Show Each Employee

```
Each employee's dashboard should include:

→ 🔗 Live site link      (clickable portal URL)
→ 👤 Their username      (what to type on login screen)
→ 🔑 Their password      (their personal access key)
→ 🛡️ Access level        (what they are allowed to see)
→ 📋 Login instructions  (step-by-step how to log in)
→ ⚠️ Rules               (security rules they must follow)
→ 📞 Contact info        (who to call if locked out)
→ 📅 Expiry date         (optional — when access ends)
```

---

## 📋 Step 1 — Generate Rich Content

> Open your site → Press `F12` → Console tab
> Type `allow pasting` → `ENTER`
> Then paste the full code below → `ENTER`

```javascript
KeyForge.generateMultiUser([

  // ══════════════════════════════════════════════════════
  //  USER 1 — ADMIN  (Full Access Employee)
  // ══════════════════════════════════════════════════════
  {
    username: "ADMIN",
    password: "admin123",
    content: {
      html: `
        <!-- WELCOME HEADER -->
        <div style="
          background:linear-gradient(135deg,rgba(0,255,245,.08),rgba(255,0,255,.08));
          border:1px solid rgba(0,255,245,.3);border-radius:10px;
          padding:28px 24px;margin-bottom:24px;text-align:center;">
          <div style="font-size:2.5rem;margin-bottom:8px;">👑</div>
          <h1 style="font-size:1.6rem;margin-bottom:8px;letter-spacing:.08em;">
            Welcome, Administrator
          </h1>
          <p style="color:var(--text-dim);font-size:.85rem;margin:0;">
            You have been granted
            <span style="color:var(--neon-green);font-weight:700;">FULL ACCESS</span>
            to the KeyForge Employee Portal
          </p>
        </div>

        <!-- ACCESS DETAILS TABLE -->
        <div class="card">
          <h2>🌐 Your Portal Access Details</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:12px;font-size:.88rem;">
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);width:140px;">🔗 Live Site URL</td>
              <td style="padding:10px 0;">
                <a href="https://yourusername.github.io/your-repo" target="_blank"
                   style="color:var(--neon-cyan);text-decoration:none;font-weight:700;">
                  https://yourusername.github.io/your-repo
                </a>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">👤 Your Username</td>
              <td style="padding:10px 0;">
                <code style="background:rgba(0,255,245,.1);color:var(--neon-cyan);
                  padding:3px 10px;border-radius:4px;border:1px solid rgba(0,255,245,.25);
                  letter-spacing:.08em;">ADMIN</code>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">🔑 Your Password</td>
              <td style="padding:10px 0;">
                <code style="background:rgba(0,255,245,.1);color:var(--neon-green);
                  padding:3px 10px;border-radius:4px;border:1px solid rgba(0,255,245,.25);
                  letter-spacing:.08em;">admin123</code>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">🛡️ Access Level</td>
              <td style="padding:10px 0;">
                <span style="background:rgba(0,255,136,.1);color:var(--neon-green);
                  padding:3px 12px;border-radius:20px;border:1px solid rgba(0,255,136,.3);
                  font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;">
                  ● FULL ACCESS
                </span>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">📅 Valid Until</td>
              <td style="padding:10px 0;color:var(--text-primary);">31 December 2024</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:var(--text-dim);">⏱️ Session Timeout</td>
              <td style="padding:10px 0;color:var(--text-primary);">120 seconds idle</td>
            </tr>
          </table>
        </div>

        <!-- HOW TO LOGIN -->
        <div class="card">
          <h2>📋 How to Login — Step by Step</h2>
          <div style="margin-top:14px;">
            <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:14px;">
              <div style="min-width:28px;height:28px;background:rgba(0,255,245,.15);
                border:1px solid var(--neon-cyan);border-radius:50%;display:flex;
                align-items:center;justify-content:center;font-size:.78rem;
                font-weight:700;color:var(--neon-cyan);flex-shrink:0;">1</div>
              <div>
                <p style="margin:0;font-weight:700;color:var(--text-primary);">Open the Portal Link</p>
                <p style="margin:4px 0 0;font-size:.82rem;color:var(--text-dim);">
                  Click the live site URL above. Use Chrome, Firefox, or Safari.
                </p>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:14px;">
              <div style="min-width:28px;height:28px;background:rgba(0,255,245,.15);
                border:1px solid var(--neon-cyan);border-radius:50%;display:flex;
                align-items:center;justify-content:center;font-size:.78rem;
                font-weight:700;color:var(--neon-cyan);flex-shrink:0;">2</div>
              <div>
                <p style="margin:0;font-weight:700;color:var(--text-primary);">Enter Your Username</p>
                <p style="margin:4px 0 0;font-size:.82rem;color:var(--text-dim);">
                  Type <strong style="color:var(--neon-cyan);">ADMIN</strong>
                  in the Access Identity field.
                </p>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:14px;">
              <div style="min-width:28px;height:28px;background:rgba(0,255,245,.15);
                border:1px solid var(--neon-cyan);border-radius:50%;display:flex;
                align-items:center;justify-content:center;font-size:.78rem;
                font-weight:700;color:var(--neon-cyan);flex-shrink:0;">3</div>
              <div>
                <p style="margin:0;font-weight:700;color:var(--text-primary);">Enter Your Password</p>
                <p style="margin:4px 0 0;font-size:.82rem;color:var(--text-dim);">
                  Type <strong style="color:var(--neon-green);">admin123</strong>
                  in the Security Key field.
                </p>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:14px;">
              <div style="min-width:28px;height:28px;background:rgba(0,255,136,.15);
                border:1px solid var(--neon-green);border-radius:50%;display:flex;
                align-items:center;justify-content:center;font-size:.78rem;
                font-weight:700;color:var(--neon-green);flex-shrink:0;">4</div>
              <div>
                <p style="margin:0;font-weight:700;color:var(--text-primary);">Click AUTHENTICATE</p>
                <p style="margin:4px 0 0;font-size:.82rem;color:var(--text-dim);">
                  Your dashboard will unlock instantly. ✅
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ADMIN CONTROL PANEL -->
        <div class="card">
          <h2>⚙️ Admin Control Panel</h2>
          <p style="color:var(--text-dim);font-size:.85rem;margin-bottom:16px;">
            All administrative resources are listed below.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;">
            <a href="/admin/users" style="display:block;text-decoration:none;
              background:rgba(0,255,245,.05);border:1px solid rgba(0,255,245,.2);
              border-radius:8px;padding:16px;transition:all .2s;"
              onmouseover="this.style.borderColor='var(--neon-cyan)'"
              onmouseout="this.style.borderColor='rgba(0,255,245,.2)'">
              <div style="font-size:1.4rem;margin-bottom:8px;">👥</div>
              <div style="color:var(--neon-cyan);font-weight:700;font-size:.88rem;margin-bottom:4px;">
                User Management</div>
              <div style="color:var(--text-dim);font-size:.75rem;">/admin/users</div>
            </a>
            <a href="/admin/logs" style="display:block;text-decoration:none;
              background:rgba(0,255,245,.05);border:1px solid rgba(0,255,245,.2);
              border-radius:8px;padding:16px;transition:all .2s;"
              onmouseover="this.style.borderColor='var(--neon-cyan)'"
              onmouseout="this.style.borderColor='rgba(0,255,245,.2)'">
              <div style="font-size:1.4rem;margin-bottom:8px;">📋</div>
              <div style="color:var(--neon-cyan);font-weight:700;font-size:.88rem;margin-bottom:4px;">
                Server Logs</div>
              <div style="color:var(--text-dim);font-size:.75rem;">/admin/logs</div>
            </a>
            <a href="/admin/db" style="display:block;text-decoration:none;
              background:rgba(0,255,245,.05);border:1px solid rgba(0,255,245,.2);
              border-radius:8px;padding:16px;transition:all .2s;"
              onmouseover="this.style.borderColor='var(--neon-cyan)'"
              onmouseout="this.style.borderColor='rgba(0,255,245,.2)'">
              <div style="font-size:1.4rem;margin-bottom:8px;">🗄️</div>
              <div style="color:var(--neon-cyan);font-weight:700;font-size:.88rem;margin-bottom:4px;">
                Database</div>
              <div style="color:var(--text-dim);font-size:.75rem;">/admin/db</div>
            </a>
            <a href="/admin/api" style="display:block;text-decoration:none;
              background:rgba(0,255,245,.05);border:1px solid rgba(0,255,245,.2);
              border-radius:8px;padding:16px;transition:all .2s;"
              onmouseover="this.style.borderColor='var(--neon-cyan)'"
              onmouseout="this.style.borderColor='rgba(0,255,245,.2)'">
              <div style="font-size:1.4rem;margin-bottom:8px;">🔗</div>
              <div style="color:var(--neon-cyan);font-weight:700;font-size:.88rem;margin-bottom:4px;">
                API Keys</div>
              <div style="color:var(--text-dim);font-size:.75rem;">/admin/api</div>
            </a>
          </div>
        </div>

        <!-- RULES -->
        <div class="card">
          <h2>⚠️ Important Rules & Guidelines</h2>
          <div style="margin-top:14px;">
            <div style="display:flex;gap:10px;align-items:flex-start;
              padding:10px 0;border-bottom:1px solid var(--border-dim);">
              <span style="color:var(--neon-red);flex-shrink:0;">🚫</span>
              <p style="margin:0;font-size:.85rem;color:var(--text-primary);">
                <strong>Do NOT share</strong> your password with anyone including colleagues.
              </p>
            </div>
            <div style="display:flex;gap:10px;align-items:flex-start;
              padding:10px 0;border-bottom:1px solid var(--border-dim);">
              <span style="color:var(--neon-red);flex-shrink:0;">🚫</span>
              <p style="margin:0;font-size:.85rem;color:var(--text-primary);">
                <strong>Do NOT screenshot</strong> this page or share its contents externally.
              </p>
            </div>
            <div style="display:flex;gap:10px;align-items:flex-start;
              padding:10px 0;border-bottom:1px solid var(--border-dim);">
              <span style="color:var(--neon-yellow);flex-shrink:0;">⚠️</span>
              <p style="margin:0;font-size:.85rem;color:var(--text-primary);">
                Session <strong>auto-locks after 120 seconds</strong> of inactivity.
              </p>
            </div>
            <div style="display:flex;gap:10px;align-items:flex-start;
              padding:10px 0;border-bottom:1px solid var(--border-dim);">
              <span style="color:var(--neon-yellow);flex-shrink:0;">⚠️</span>
              <p style="margin:0;font-size:.85rem;color:var(--text-primary);">
                After <strong>5 wrong password attempts</strong>, access locks for 30 seconds.
              </p>
            </div>
            <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 0;">
              <span style="color:var(--neon-green);flex-shrink:0;">✅</span>
              <p style="margin:0;font-size:.85rem;color:var(--text-primary);">
                Always click <strong>🔒 LOCK</strong> before leaving your device unattended.
              </p>
            </div>
          </div>
        </div>

        <!-- CONTACT -->
        <div class="card">
          <h2>📞 Contact & Support</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:12px;font-size:.88rem;">
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);width:140px;">👤 Admin Contact</td>
              <td style="padding:10px 0;color:var(--text-primary);">Sudhir Kumar</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">📧 Email</td>
              <td style="padding:10px 0;">
                <a href="mailto:admin@yourcompany.com"
                   style="color:var(--neon-cyan);text-decoration:none;">
                  admin@yourcompany.com
                </a>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">💬 Slack</td>
              <td style="padding:10px 0;color:var(--text-primary);">#admin-support</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:var(--text-dim);">🕐 Support Hours</td>
              <td style="padding:10px 0;color:var(--text-primary);">Mon–Fri, 9:00 AM – 6:00 PM IST</td>
            </tr>
          </table>
        </div>

        <!-- STATUS FOOTER -->
        <div style="text-align:center;padding:20px;border:1px solid var(--border-dim);
          border-radius:8px;background:rgba(0,255,136,.03);margin-top:8px;">
          <div style="display:inline-flex;align-items:center;gap:8px;
            background:rgba(0,255,136,.1);border:1px solid rgba(0,255,136,.3);
            border-radius:20px;padding:6px 16px;font-size:.78rem;
            color:var(--neon-green);letter-spacing:.1em;text-transform:uppercase;
            margin-bottom:12px;">
            <span style="width:7px;height:7px;background:var(--neon-green);
              border-radius:50%;animation:dotBlink 1.5s infinite;"></span>
            Portal Status: Online
          </div>
          <p style="color:var(--text-dim);font-size:.78rem;margin:0;">
            Secured by KeyForge Static-Auth v2.0 · AES-256 Encryption
          </p>
        </div>
      `
    }
  },

  // ══════════════════════════════════════════════════════
  //  USER 2 — AGENT_SHADOW  (Field Agent Employee)
  // ══════════════════════════════════════════════════════
  {
    username: "AGENT_SHADOW",
    password: "shadow456",
    content: {
      html: `
        <!-- WELCOME HEADER -->
        <div style="
          background:linear-gradient(135deg,rgba(255,0,255,.06),rgba(0,255,245,.06));
          border:1px solid rgba(255,0,255,.3);border-radius:10px;
          padding:28px 24px;margin-bottom:24px;text-align:center;">
          <div style="font-size:2.5rem;margin-bottom:8px;">🕵️</div>
          <h1 style="font-size:1.6rem;margin-bottom:8px;letter-spacing:.08em;">
            Welcome, Agent Shadow
          </h1>
          <p style="color:var(--text-dim);font-size:.85rem;margin:0;">
            Access Level:
            <span style="color:var(--neon-magenta);font-weight:700;">
              FIELD AGENT — CLASSIFIED
            </span>
          </p>
        </div>

        <!-- ACCESS DETAILS TABLE -->
        <div class="card">
          <h2>🌐 Your Portal Access Details</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:12px;font-size:.88rem;">
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);width:140px;">🔗 Live Site URL</td>
              <td style="padding:10px 0;">
                <a href="https://yourusername.github.io/your-repo" target="_blank"
                   style="color:var(--neon-cyan);text-decoration:none;font-weight:700;">
                  https://yourusername.github.io/your-repo
                </a>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">👤 Your Username</td>
              <td style="padding:10px 0;">
                <code style="background:rgba(255,0,255,.1);color:var(--neon-magenta);
                  padding:3px 10px;border-radius:4px;border:1px solid rgba(255,0,255,.25);
                  letter-spacing:.08em;">AGENT_SHADOW</code>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">🔑 Your Password</td>
              <td style="padding:10px 0;">
                <code style="background:rgba(0,255,245,.1);color:var(--neon-green);
                  padding:3px 10px;border-radius:4px;border:1px solid rgba(0,255,245,.25);
                  letter-spacing:.08em;">shadow456</code>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">🛡️ Access Level</td>
              <td style="padding:10px 0;">
                <span style="background:rgba(255,0,255,.1);color:var(--neon-magenta);
                  padding:3px 12px;border-radius:20px;border:1px solid rgba(255,0,255,.3);
                  font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;">
                  ● FIELD ACCESS
                </span>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">📅 Valid Until</td>
              <td style="padding:10px 0;color:var(--text-primary);">31 December 2024</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:var(--text-dim);">⏱️ Session Timeout</td>
              <td style="padding:10px 0;color:var(--text-primary);">120 seconds idle</td>
            </tr>
          </table>
        </div>

        <!-- HOW TO LOGIN -->
        <div class="card">
          <h2>📋 How to Login — Step by Step</h2>
          <div style="margin-top:14px;">
            <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:14px;">
              <div style="min-width:28px;height:28px;background:rgba(255,0,255,.15);
                border:1px solid var(--neon-magenta);border-radius:50%;display:flex;
                align-items:center;justify-content:center;font-size:.78rem;
                font-weight:700;color:var(--neon-magenta);flex-shrink:0;">1</div>
              <div>
                <p style="margin:0;font-weight:700;color:var(--text-primary);">Open the Portal Link</p>
                <p style="margin:4px 0 0;font-size:.82rem;color:var(--text-dim);">
                  Click the live site URL above. Use Chrome, Firefox, or Safari.
                </p>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:14px;">
              <div style="min-width:28px;height:28px;background:rgba(255,0,255,.15);
                border:1px solid var(--neon-magenta);border-radius:50%;display:flex;
                align-items:center;justify-content:center;font-size:.78rem;
                font-weight:700;color:var(--neon-magenta);flex-shrink:0;">2</div>
              <div>
                <p style="margin:0;font-weight:700;color:var(--text-primary);">Enter Your Username</p>
                <p style="margin:4px 0 0;font-size:.82rem;color:var(--text-dim);">
                  Type <strong style="color:var(--neon-magenta);">AGENT_SHADOW</strong>
                  in the Access Identity field.
                </p>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:14px;">
              <div style="min-width:28px;height:28px;background:rgba(255,0,255,.15);
                border:1px solid var(--neon-magenta);border-radius:50%;display:flex;
                align-items:center;justify-content:center;font-size:.78rem;
                font-weight:700;color:var(--neon-magenta);flex-shrink:0;">3</div>
              <div>
                <p style="margin:0;font-weight:700;color:var(--text-primary);">Enter Your Password</p>
                <p style="margin:4px 0 0;font-size:.82rem;color:var(--text-dim);">
                  Type <strong style="color:var(--neon-green);">shadow456</strong>
                  in the Security Key field.
                </p>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:14px;">
              <div style="min-width:28px;height:28px;background:rgba(0,255,136,.15);
                border:1px solid var(--neon-green);border-radius:50%;display:flex;
                align-items:center;justify-content:center;font-size:.78rem;
                font-weight:700;color:var(--neon-green);flex-shrink:0;">4</div>
              <div>
                <p style="margin:0;font-weight:700;color:var(--text-primary);">Click AUTHENTICATE</p>
                <p style="margin:4px 0 0;font-size:.82rem;color:var(--text-dim);">
                  Your mission briefing will unlock instantly. ✅
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ACTIVE MISSIONS -->
        <div class="card">
          <h2>🎯 Active Mission Briefings</h2>
          <p style="color:var(--text-dim);font-size:.85rem;margin-bottom:16px;">
            Current assignments as of today. All information is classified.
          </p>
          <div style="background:rgba(0,255,136,.05);border:1px solid rgba(0,255,136,.2);
            border-radius:8px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <strong style="color:var(--neon-cyan);">Mission Alpha</strong>
              <span style="background:rgba(0,255,136,.15);color:var(--neon-green);
                padding:2px 10px;border-radius:20px;font-size:.72rem;
                letter-spacing:.1em;border:1px solid rgba(0,255,136,.3);">● ACTIVE</span>
            </div>
            <p style="margin:0;font-size:.83rem;color:var(--text-dim);">
              Primary surveillance operation. Report daily at 18:00 IST.
            </p>
          </div>
          <div style="background:rgba(255,136,0,.05);border:1px solid rgba(255,136,0,.2);
            border-radius:8px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <strong style="color:var(--neon-cyan);">Mission Beta</strong>
              <span style="background:rgba(255,136,0,.15);color:var(--neon-orange);
                padding:2px 10px;border-radius:20px;font-size:.72rem;
                letter-spacing:.1em;border:1px solid rgba(255,136,0,.3);">◐ STANDBY</span>
            </div>
            <p style="margin:0;font-size:.83rem;color:var(--text-dim);">
              Awaiting confirmation. Stay on high alert. Do not engage yet.
            </p>
          </div>
          <div style="background:rgba(0,255,245,.05);border:1px solid rgba(0,255,245,.2);
            border-radius:8px;padding:16px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <strong style="color:var(--neon-cyan);">HQ Contact Line</strong>
              <span style="background:rgba(0,255,245,.1);color:var(--neon-cyan);
                padding:2px 10px;border-radius:20px;font-size:.72rem;
                letter-spacing:.1em;border:1px solid rgba(0,255,245,.3);">🔒 SECURE</span>
            </div>
            <p style="margin:0;font-size:.83rem;color:var(--text-dim);">
              Emergency line available 24/7. Use only for critical situations.
            </p>
          </div>
        </div>

        <!-- RULES -->
        <div class="card">
          <h2>⚠️ Field Agent Rules</h2>
          <div style="margin-top:14px;">
            <div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--border-dim);">
              <span style="color:var(--neon-red);flex-shrink:0;">🚫</span>
              <p style="margin:0;font-size:.85rem;color:var(--text-primary);">
                <strong>Do NOT share</strong> your password or mission details with anyone.
              </p>
            </div>
            <div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--border-dim);">
              <span style="color:var(--neon-red);flex-shrink:0;">🚫</span>
              <p style="margin:0;font-size:.85rem;color:var(--text-primary);">
                <strong>Do NOT access</strong> this portal on public or unsecured WiFi.
              </p>
            </div>
            <div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--border-dim);">
              <span style="color:var(--neon-yellow);flex-shrink:0;">⚠️</span>
              <p style="margin:0;font-size:.85rem;color:var(--text-primary);">
                Session <strong>auto-locks after 120 seconds</strong> of inactivity.
              </p>
            </div>
            <div style="display:flex;gap:10px;padding:10px 0;">
              <span style="color:var(--neon-green);flex-shrink:0;">✅</span>
              <p style="margin:0;font-size:.85rem;color:var(--text-primary);">
                Always <strong>LOCK</strong> your session before stepping away from device.
              </p>
            </div>
          </div>
        </div>

        <!-- CONTACT -->
        <div class="card">
          <h2>📞 Contact & Support</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:12px;font-size:.88rem;">
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);width:140px;">👤 Handler</td>
              <td style="padding:10px 0;color:var(--text-primary);">Sudhir Kumar</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">📧 Secure Email</td>
              <td style="padding:10px 0;">
                <a href="mailto:agent@yourcompany.com"
                   style="color:var(--neon-cyan);text-decoration:none;">
                  agent@yourcompany.com
                </a>
              </td>
            </tr>
            <tr style="border-bottom:1px solid var(--border-dim);">
              <td style="padding:10px 0;color:var(--text-dim);">📍 Department</td>
              <td style="padding:10px 0;color:var(--text-primary);">Field Operations Division</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:var(--text-dim);">🕐 Support Hours</td>
              <td style="padding:10px 0;color:var(--text-primary);">24/7 Emergency Line Active</td>
            </tr>
          </table>
        </div>

        <!-- STATUS FOOTER -->
        <div style="text-align:center;padding:20px;border:1px solid var(--border-dim);
          border-radius:8px;background:rgba(255,0,255,.03);margin-top:8px;">
          <div style="display:inline-flex;align-items:center;gap:8px;
            background:rgba(255,0,255,.1);border:1px solid rgba(255,0,255,.3);
            border-radius:20px;padding:6px 16px;font-size:.78rem;
            color:var(--neon-magenta);letter-spacing:.1em;text-transform:uppercase;
            margin-bottom:12px;">
            <span style="width:7px;height:7px;background:var(--neon-magenta);
              border-radius:50%;animation:dotBlink 1.5s infinite;"></span>
            Field Status: Active
          </div>
          <p style="color:var(--text-dim);font-size:.78rem;margin:0;">
            Secured by KeyForge Static-Auth v2.0 · AES-256 Encryption
          </p>
        </div>
      `
    }
  }

]);
```

---

## 📋 Step 2 — Copy the Console Output

```
After running the code above, the console will print:

┌─────────────────────────────────────────────────────────────┐
│  [KeyForge] Copy into encrypted-content.json ↓  ← IGNORE   │
│                                                             │
│  {                                                          │
│    "users": [                                               │
│      {                                                      │
│        "username": "ADMIN",                                 │
│        "ciphertext": "U2FsdGVkX1+..."     ← COPY THIS      │
│      },                                                     │
│      {                                                      │
│        "username": "AGENT_SHADOW",                          │
│        "ciphertext": "U2FsdGVkX1/..."                       │
│      }                                                      │
│    ]                                                        │
│  }                                                          │
│                                                             │
│  '{\n "users":...'                          ← IGNORE       │
└─────────────────────────────────────────────────────────────┘

COPY  →  { "users": [ ... ] }   (the JSON object only)
OPEN  →  encrypted-content.json
DO    →  Select All → Delete → Paste → Save
THEN  →  Ctrl+Shift+R (hard reload browser)
```

---

## 📧 Step 3 — Send Credentials to Employee

> Copy the block below and send to each employee via email or message.

### For ADMIN:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🛡️ KEYFORGE EMPLOYEE PORTAL — ACCESS CREDENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  🔗 Portal URL   : https://yourusername.github.io/your-repo
  👤 Username     : ADMIN
  🔑 Password     : admin123
  🛡️ Access Level : Full Admin Access
  📅 Valid Until  : 31 December 2024
  ⏱️ Auto-Locks   : After 120 seconds of inactivity

  HOW TO LOGIN:
  ─────────────────────────────────────────────────────────
  1. Open the Portal URL above in your browser
  2. Type your Username in the "Access Identity" field
  3. Type your Password in the "Security Key" field
  4. Click ⚡ AUTHENTICATE — your dashboard appears

  SECURITY RULES:
  ─────────────────────────────────────────────────────────
  🚫 Never share your password with anyone
  🚫 Do not screenshot or copy portal content
  ⚠️  Lock your session before leaving your device
  ⚠️  5 wrong attempts = 30 second lockout

  NEED HELP?
  ─────────────────────────────────────────────────────────
  📧 Email  : admin@yourcompany.com
  💬 Slack  : #admin-support
  🕐 Hours  : Mon–Fri, 9:00 AM – 6:00 PM IST

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Powered by KeyForge Static-Auth v2.0 · AES-256 Encrypted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### For AGENT_SHADOW:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🛡️ KEYFORGE EMPLOYEE PORTAL — ACCESS CREDENTIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  🔗 Portal URL   : https://yourusername.github.io/your-repo
  👤 Username     : AGENT_SHADOW
  🔑 Password     : shadow456
  🛡️ Access Level : Field Agent — Classified
  📅 Valid Until  : 31 December 2024
  ⏱️ Auto-Locks   : After 120 seconds of inactivity

  HOW TO LOGIN:
  ─────────────────────────────────────────────────────────
  1. Open the Portal URL above in your browser
  2. Type your Username in the "Access Identity" field
  3. Type your Password in the "Security Key" field
  4. Click ⚡ AUTHENTICATE — your mission briefing appears

  SECURITY RULES:
  ─────────────────────────────────────────────────────────
  🚫 Never share your password or mission details
  🚫 Do not access portal on public or unsecured WiFi
  ⚠️  Lock your session before leaving your device
  ⚠️  5 wrong attempts = 30 second lockout

  NEED HELP?
  ─────────────────────────────────────────────────────────
  📧 Email      : agent@yourcompany.com
  📍 Department : Field Operations Division
  🕐 Hours      : 24/7 Emergency Line Active

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Powered by KeyForge Static-Auth v2.0 · AES-256 Encrypted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ✅ Step 4 — Test All Logins

```
Run all 4 tests after uploading the new JSON file:

TEST 1 — ADMIN LOGIN:
  URL      →  https://yourusername.github.io/your-repo
  Username →  ADMIN
  Password →  admin123
  Result   →  ✅ Full admin dashboard with tables, cards, links

TEST 2 — AGENT_SHADOW LOGIN:
  URL      →  https://yourusername.github.io/your-repo
  Username →  AGENT_SHADOW
  Password →  shadow456
  Result   →  ✅ Mission portal with active missions, rules

TEST 3 — WRONG PASSWORD:
  Username →  ADMIN
  Password →  wrongpassword
  Result   →  ❌ DENIED — error message shown (correct behavior)

TEST 4 — CROSS ACCESS (Security Check):
  Username →  ADMIN
  Password →  shadow456    ← Agent's password on Admin account
  Result   →  ❌ DENIED — AES-256 encryption is working correctly
```

---

## 🔧 Step 5 — Customize URLs and Details

> Replace these placeholders with your actual information before going live.

| Placeholder | Replace With | Location in Code |
|---|---|---|
| `https://yourusername.github.io/your-repo` | Your actual GitHub Pages URL | Both user sections |
| `admin@yourcompany.com` | Your real admin email | ADMIN contact section |
| `agent@yourcompany.com` | Your real agent email | AGENT_SHADOW contact section |
| `Sudhir Kumar` | Actual admin/handler name | Both contact sections |
| `admin123` | Your secure ADMIN password | ADMIN username + `generateMultiUser()` |
| `shadow456` | Your secure AGENT password | AGENT_SHADOW section + `generateMultiUser()` |
| `31 December 2024` | Your actual access expiry date | Both user sections |
| `Mon–Fri, 9:00 AM – 6:00 PM IST` | Your actual support hours | ADMIN contact section |
| `#admin-support` | Your actual Slack channel | ADMIN contact section |
| `Field Operations Division` | Actual department name | AGENT_SHADOW contact section |

> ⚠️ **After customizing, run `generateMultiUser()` again with the updated code.**
> **Copy the new output and replace your `encrypted-content.json` file.**

---

<div align="center">

---

### ⬡ KeyForge Security Protocol

**Powered by KeyForge Static-Auth v2.0**

*Employee Portal Guide by*
*[Sudhir Kumar (@SudhirDevOps1)](https://github.com/SudhirDevOps1)*

---

`Multi-User` · `Employee Portal` · `AES-256` · `Zero Backend`

*© 2026 Sudhir Kumar — All rights reserved under MIT License*

</div>
