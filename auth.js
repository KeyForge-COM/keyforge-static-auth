/**
 * ╔═══════════════════════════════════════════════════════════╗
 * ║         KeyForge Static-Auth  ·  auth.js                 ║
 * ║  Drop-in JS security layer for static sites              ║
 * ║  By Sudhir Kumar (@SudhirDevOps1)                        ║
 * ╚═══════════════════════════════════════════════════════════╝
 *
 *  SECURITY MODEL
 *  ─────────────
 *  • Content encrypted with AES-256 (CryptoJS)
 *  • Password never stored anywhere
 *  • Session lives in memory only (JS closure)
 *  • No cookies · No backend · No localStorage
 *  • Auto-lock on idle timeout
 */

; (function KeyForgeAuth() {
    'use strict';

    /* ═══════════════════════════════════════════════════════════
       ⚙️  CONFIGURATION
       Adjust these values to customise behaviour.
    ═══════════════════════════════════════════════════════════ */
    const CONFIG = {
        /** Path to encrypted content JSON */
        contentFile: 'encrypted-content.json',

        /**
         * Auto-lock timeout in seconds.
         * Set to 0 to disable.
         */
        autoLockSeconds: 120,

        /**
         * Maximum failed attempts before cool-down.
         */
        maxAttempts: 5,

        /**
         * Cool-down period in seconds after max attempts.
         */
        lockoutSeconds: 30,

        /**
         * Whether to show the access log UI toggle.
         */
        showAccessLog: true,

        /**
         * Maximum access log entries kept in memory.
         */
        maxLogEntries: 50,
    };

    /* ═══════════════════════════════════════════════════════════
       🔐  IN-MEMORY SESSION STATE
       Everything lives here — nothing written to disk/cookies.
    ═══════════════════════════════════════════════════════════ */
    const SESSION = {
        active: false,
        username: null,
        decryptedKey: null,       // cleared on lock
        lockTimer: null,
        barInterval: null,
        sessionStart: null,
        timeLeft: 0,
    };

    /* ═══════════════════════════════════════════════════════════
       📋  ACCESS LOG  (memory only, cleared on refresh)
    ═══════════════════════════════════════════════════════════ */
    const ACCESS_LOG = [];

    /* ═══════════════════════════════════════════════════════════
       🔒  ATTEMPT TRACKING  (brute-force protection)
    ═══════════════════════════════════════════════════════════ */
    let failedAttempts = 0;
    let lockoutUntil = 0;   // epoch ms

    /* ═══════════════════════════════════════════════════════════
       📌  DOM REFERENCES
    ═══════════════════════════════════════════════════════════ */
    const $ = id => document.getElementById(id);

    const DOM = {
        lockScreen: $('lock-screen'),
        appContent: $('app-content'),
        usernameInput: $('username-input'),
        passwordInput: $('password-input'),
        togglePw: $('toggle-pw'),
        btnAuth: $('btn-authenticate'),
        btnLabel: $('btn-label'),
        errorMsg: $('error-msg'),
        errorText: $('error-text'),
        renderedContent: $('rendered-content'),
        sessionUserLabel: $('session-user-label'),
        btnLockNow: $('btn-lock-now'),
        logToggle: $('log-toggle'),
        accessLog: $('access-log'),
        timeoutBarWrap: $('timeout-bar-wrap'),
        timeoutBar: $('timeout-bar'),
        timerBadge: $('timer-badge'),
        timerText: $('timer-text'),
    };

    /* ═══════════════════════════════════════════════════════════
       🔏  CRYPTO HELPERS
    ═══════════════════════════════════════════════════════════ */
    const Crypto = {
        /**
         * Decrypt AES-encrypted ciphertext.
         * Returns plaintext string or null on failure.
         */
        decrypt(ciphertext, passphrase) {
            try {
                const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
                const plain = bytes.toString(CryptoJS.enc.Utf8);
                return plain.length > 0 ? plain : null;
            } catch {
                return null;
            }
        },

        /**
         * Encrypt plaintext → ciphertext string.
         * Used by the built-in content encryptor (see bottom).
         */
        encrypt(plaintext, passphrase) {
            return CryptoJS.AES.encrypt(plaintext, passphrase).toString();
        },

        /**
         * Constant-time string comparison to prevent timing attacks.
         */
        safeCompare(a, b) {
            if (a.length !== b.length) return false;
            let diff = 0;
            for (let i = 0; i < a.length; i++) {
                diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
            }
            return diff === 0;
        },
    };

    /* ═══════════════════════════════════════════════════════════
       📦  CONTENT LOADER
    ═══════════════════════════════════════════════════════════ */
    const ContentLoader = {
        /** Cached raw encrypted payload */
        _raw: null,

        /**
         * Fetch encrypted-content.json once and cache it.
         */
        async fetch() {
            if (this._raw) return this._raw;
            const res = await window.fetch(CONFIG.contentFile);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            this._raw = await res.json();
            return this._raw;
        },

        /**
         * Try to decrypt content for a given password.
         * Returns parsed content object or null.
         */
        async tryDecrypt(password) {
            const payload = await this.fetch();

            // ── Multi-user: each user has their own ciphertext ──
            if (payload.users) {
                for (const entry of payload.users) {
                    const plain = Crypto.decrypt(entry.ciphertext, password);
                    if (plain) return { user: entry.username, content: JSON.parse(plain) };
                }
                return null;
            }

            // ── Single-password mode ──
            const plain = Crypto.decrypt(payload.ciphertext, password);
            if (!plain) return null;
            return { user: 'USER', content: JSON.parse(plain) };
        },
    };

    /* ═══════════════════════════════════════════════════════════
       🎨  RENDERER
       Converts the decrypted content JSON into DOM elements.
    ═══════════════════════════════════════════════════════════ */
    const Renderer = {
        render(content, container) {
            container.innerHTML = '';

            if (content.html) {
                // Raw HTML mode
                container.innerHTML = content.html;
                return;
            }

            // ── Structured JSON mode ──
            if (content.title) {
                const h1 = document.createElement('h1');
                h1.textContent = content.title;
                container.appendChild(h1);
            }

            if (content.description) {
                const p = document.createElement('p');
                p.textContent = content.description;
                container.appendChild(p);
            }

            if (content.sections && Array.isArray(content.sections)) {
                content.sections.forEach(sec => this._renderSection(sec, container));
            }
        },

        _renderSection(sec, container) {
            const card = document.createElement('div');
            card.className = 'card';

            if (sec.heading) {
                const h2 = document.createElement('h2');
                h2.textContent = sec.heading;
                card.appendChild(h2);
            }

            if (sec.body) {
                const p = document.createElement('p');
                p.textContent = sec.body;
                card.appendChild(p);
            }

            if (sec.tags && Array.isArray(sec.tags)) {
                const wrap = document.createElement('div');
                sec.tags.forEach(t => {
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = t;
                    wrap.appendChild(span);
                });
                card.appendChild(wrap);
            }

            if (sec.list && Array.isArray(sec.list)) {
                const ul = document.createElement('ul');
                ul.style.cssText = 'padding-left:20px;line-height:2;color:var(--text-primary)';
                sec.list.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    ul.appendChild(li);
                });
                card.appendChild(ul);
            }

            container.appendChild(card);
        },
    };

    /* ═══════════════════════════════════════════════════════════
       📝  ACCESS LOG
    ═══════════════════════════════════════════════════════════ */
    const Log = {
        add(type, message) {
            const entry = {
                ts: new Date().toISOString(),
                type,    // 'ok' | 'err' | 'info'
                message,
            };

            ACCESS_LOG.unshift(entry);
            if (ACCESS_LOG.length > CONFIG.maxLogEntries) ACCESS_LOG.pop();
            this._render();
        },

        _render() {
            DOM.accessLog.innerHTML = ACCESS_LOG.map(e => `
        <div class="log-entry">
          <span class="${e.type === 'ok' ? 'log-ok' : 'log-err'}">
            ${e.type === 'ok' ? '✔' : e.type === 'err' ? '✘' : '·'}
          </span>
          &nbsp;${e.ts.slice(11, 19)}&nbsp;—&nbsp;${this._escape(e.message)}
        </div>
      `).join('');
        },

        _escape(s) {
            return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        },
    };

    /* ═══════════════════════════════════════════════════════════
       ⏱  AUTO-LOCK TIMER
    ═══════════════════════════════════════════════════════════ */
    const Timer = {
        start() {
            if (!CONFIG.autoLockSeconds) return;

            this.clear();
            SESSION.timeLeft = CONFIG.autoLockSeconds;

            // Show progress bar
            DOM.timeoutBarWrap.style.display = 'block';
            DOM.timerBadge.style.display = 'block';
            DOM.timeoutBar.style.width = '100%';

            SESSION.barInterval = setInterval(() => {
                SESSION.timeLeft -= 1;
                const pct = (SESSION.timeLeft / CONFIG.autoLockSeconds) * 100;
                DOM.timeoutBar.style.width = pct + '%';
                DOM.timerText.textContent = `Auto-lock in ${SESSION.timeLeft}s`;

                // Change colour as time runs low
                if (SESSION.timeLeft <= 20) {
                    DOM.timeoutBar.style.background =
                        'linear-gradient(90deg, #ffff00, #ff003c)';
                }

                if (SESSION.timeLeft <= 0) {
                    Log.add('info', 'Session auto-locked after timeout.');
                    Auth.lock();
                }
            }, 1000);
        },

        /** Reset timer on user activity */
        reset() {
            if (!CONFIG.autoLockSeconds || !SESSION.active) return;
            SESSION.timeLeft = CONFIG.autoLockSeconds;
            DOM.timeoutBar.style.background =
                'linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta))';
        },

        clear() {
            clearInterval(SESSION.barInterval);
            SESSION.barInterval = null;
            DOM.timeoutBarWrap.style.display = 'none';
            DOM.timerBadge.style.display = 'none';
        },
    };

    /* ═══════════════════════════════════════════════════════════
       🔐  AUTH CONTROLLER
    ═══════════════════════════════════════════════════════════ */
    const Auth = {
        /**
         * Main authentication flow.
         */
        async authenticate() {
            // ── Lockout check ──
            const now = Date.now();
            if (now < lockoutUntil) {
                const wait = Math.ceil((lockoutUntil - now) / 1000);
                UI.showError(`Too many attempts. Wait ${wait}s.`);
                return;
            }

            const password = DOM.passwordInput.value;
            const username = DOM.usernameInput.value.trim() || 'AGENT';

            if (!password) {
                UI.showError('Security key cannot be empty.');
                return;
            }

            // ── Loading state ──
            UI.setLoading(true);
            UI.hideError();

            try {
                const result = await ContentLoader.tryDecrypt(password);

                if (!result) {
                    // ── FAILURE ──
                    failedAttempts++;
                    Log.add('err', `AUTH FAIL — identity: ${username} (attempt ${failedAttempts})`);

                    if (failedAttempts >= CONFIG.maxAttempts) {
                        lockoutUntil = Date.now() + (CONFIG.lockoutSeconds * 1000);
                        failedAttempts = 0;
                        UI.showError(`Max attempts reached. Locked for ${CONFIG.lockoutSeconds}s.`);
                    } else {
                        const remaining = CONFIG.maxAttempts - failedAttempts;
                        UI.showError(`Invalid security key. ${remaining} attempt(s) remaining.`);
                    }

                    UI.setLoading(false);
                    DOM.passwordInput.value = '';
                    return;
                }

                // ── SUCCESS ──
                failedAttempts = 0;
                SESSION.active = true;
                SESSION.username = result.user || username;
                SESSION.decryptedKey = password;   // kept in memory for potential re-render
                SESSION.sessionStart = new Date().toISOString();

                Log.add('ok', `AUTH OK — identity: ${SESSION.username}`);

                // Wipe password from input immediately
                DOM.passwordInput.value = '';
                DOM.usernameInput.value = '';

                // Render content
                Renderer.render(result.content, DOM.renderedContent);

                // Show flash + transition
                this._unlockTransition(SESSION.username);

                // Start auto-lock timer
                Timer.start();

            } catch (err) {
                Log.add('err', `SYSTEM ERROR — ${err.message}`);
                UI.showError('Content load failed. Check console.');
                console.error('[KeyForge]', err);
                UI.setLoading(false);
            }
        },

        /**
         * Lock the session — wipe memory, show lock screen.
         */
        lock() {
            // ── Wipe session ──
            SESSION.active = false;
            SESSION.username = null;
            SESSION.decryptedKey = null;  // key gone from memory
            SESSION.sessionStart = null;

            Timer.clear();

            // ── Clear rendered content ──
            DOM.renderedContent.innerHTML = '';

            // ── UI transition ──
            DOM.appContent.classList.remove('visible');
            DOM.lockScreen.classList.remove('hidden');
            DOM.sessionUserLabel.textContent = '';

            Log.add('info', 'Session locked.');
        },

        /** Smooth unlock animation then show content */
        _unlockTransition(username) {
            // Flash
            const flash = document.createElement('div');
            flash.className = 'unlock-flash';
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 600);

            // Transition
            DOM.lockScreen.classList.add('hidden');
            DOM.sessionUserLabel.textContent = `◈ ${username}`;

            setTimeout(() => {
                DOM.appContent.classList.add('visible');
                UI.setLoading(false);
            }, 400);
        },
    };

    /* ═══════════════════════════════════════════════════════════
       🖥  UI HELPERS
    ═══════════════════════════════════════════════════════════ */
    const UI = {
        showError(msg) {
            DOM.errorText.textContent = msg;
            DOM.errorMsg.classList.remove('hidden');
            // Re-trigger shake
            DOM.errorMsg.style.animation = 'none';
            void DOM.errorMsg.offsetWidth;
            DOM.errorMsg.style.animation = '';
        },

        hideError() {
            DOM.errorMsg.classList.add('hidden');
        },

        setLoading(on) {
            if (on) {
                DOM.btnLabel.innerHTML = '<span class="spinner"></span>VERIFYING…';
                DOM.btnAuth.disabled = true;
            } else {
                DOM.btnLabel.innerHTML = '⚡ AUTHENTICATE';
                DOM.btnAuth.disabled = false;
            }
        },
    };

    /* ═══════════════════════════════════════════════════════════
       🎛  EVENT WIRING
    ═══════════════════════════════════════════════════════════ */
    function bindEvents() {
        // Authenticate button
        DOM.btnAuth.addEventListener('click', () => Auth.authenticate());

        // Enter key on password
        DOM.passwordInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') Auth.authenticate();
        });

        // Enter key on username
        DOM.usernameInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') DOM.passwordInput.focus();
        });

        // Toggle password visibility
        DOM.togglePw.addEventListener('click', () => {
            const isPassword = DOM.passwordInput.type === 'password';
            DOM.passwordInput.type = isPassword ? 'text' : 'password';
            DOM.togglePw.textContent = isPassword ? '🙈' : '👁';
        });

        // Manual lock button
        DOM.btnLockNow.addEventListener('click', () => Auth.lock());

        // Access log toggle
        if (CONFIG.showAccessLog) {
            DOM.logToggle.addEventListener('click', () => {
                DOM.accessLog.classList.toggle('visible');
                DOM.logToggle.textContent = DOM.accessLog.classList.contains('visible')
                    ? '▾ Access Log ▾'
                    : '▸ Access Log ◂';
            });
        } else {
            DOM.logToggle.style.display = 'none';
        }

        // Reset auto-lock timer on user activity
        ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(evt => {
            document.addEventListener(evt, () => Timer.reset(), { passive: true });
        });
    }

    /* ═══════════════════════════════════════════════════════════
       🚀  INIT
    ═══════════════════════════════════════════════════════════ */
    function init() {
        bindEvents();
        Log.add('info', `KeyForge Static-Auth initialised · ${new Date().toISOString()}`);

        // Prefetch encrypted content for faster first auth
        ContentLoader.fetch().catch(() => {
            Log.add('err', 'Could not prefetch content file.');
        });
    }

    document.addEventListener('DOMContentLoaded', init);

    /* ═══════════════════════════════════════════════════════════
       🛠  CONTENT ENCRYPTOR UTILITY
       ──────────────────────────────────────────────────────────
       Run this in the browser console to generate your
       encrypted-content.json from plaintext.
  
       KeyForge.encrypt({ content, password, username? })
    ═══════════════════════════════════════════════════════════ */
    window.KeyForge = {
        /**
         * Encrypt content for single-password mode.
         *
         * @param {object} content  - The content object to encrypt
         * @param {string} password - The encryption password
         * @returns {string}        - JSON string ready for encrypted-content.json
         */
        encryptSingle(content, password) {
            const ciphertext = Crypto.encrypt(JSON.stringify(content), password);
            return JSON.stringify({ ciphertext }, null, 2);
        },

        /**
         * Encrypt content for multi-user mode.
         * Each user gets their own independently encrypted copy.
         *
         * @param {Array<{username, password, content}>} users
         * @returns {string}  JSON string ready for encrypted-content.json
         */
        encryptMultiUser(users) {
            const entries = users.map(u => ({
                username: u.username,
                ciphertext: Crypto.encrypt(JSON.stringify(u.content), u.password),
            }));
            return JSON.stringify({ users: entries }, null, 2);
        },

        /**
         * Quick helper — print result to console.
         */
        generateSingle(content, password) {
            const json = this.encryptSingle(content, password);
            console.log('%c[KeyForge] Copy this into encrypted-content.json:', 'color:#00fff5');
            console.log(json);
            return json;
        },

        generateMultiUser(users) {
            const json = this.encryptMultiUser(users);
            console.log('%c[KeyForge] Copy this into encrypted-content.json:', 'color:#00fff5');
            console.log(json);
            return json;
        },
    };

})();