import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics, isSupported as isAnalyticsSupported } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
import {
    GoogleAuthProvider,
    browserLocalPersistence,
    getAuth,
    onAuthStateChanged,
    setPersistence,
    signInWithPopup,
    signOut
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDe05JeP4OAJ_dqFsx6GL1u6Z02uwdAeCQ",
    authDomain: "nextools-all.firebaseapp.com",
    projectId: "nextools-all",
    storageBucket: "nextools-all.firebasestorage.app",
    messagingSenderId: "999558376653",
    appId: "1:999558376653:web:f3512621305bd067fa8d84",
    measurementId: "G-P81R3QH28X"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

void setPersistence(auth, browserLocalPersistence).catch(() => {});

void isAnalyticsSupported().then((supported) => {
    if (supported) {
        getAnalytics(app);
    }
}).catch(() => {});

const LABELS = {
    "zh-CN": {
        signIn: "登录",
        signInWithGoogle: "使用 Google 登录",
        signOut: "退出登录",
        guest: "未登录",
        fallbackName: "Google 用户",
        account: "账号",
        signedInWithGoogle: "已通过 Google 登录"
    },
    "zh-TW": {
        signIn: "登入",
        signInWithGoogle: "使用 Google 登入",
        signOut: "登出",
        guest: "未登入",
        fallbackName: "Google 使用者",
        account: "帳號",
        signedInWithGoogle: "已透過 Google 登入"
    },
    en: {
        signIn: "Login",
        signInWithGoogle: "Continue with Google",
        signOut: "Sign out",
        guest: "Guest",
        fallbackName: "Google User",
        account: "Account",
        signedInWithGoogle: "Signed in with Google"
    }
};

function normalizeLang(lang) {
    if (!lang) return "en";
    if (lang === "tw" || lang === "zh-TW" || lang === "zh-HK") return "zh-TW";
    if (lang === "zh" || lang === "zh-CN") return "zh-CN";
    return "en";
}

function getLabels() {
    const lang = normalizeLang(document.documentElement.lang || localStorage.getItem("lang") || navigator.language);
    return LABELS[lang] || LABELS.en;
}

function injectStyles() {
    if (document.getElementById("dc-auth-styles")) return;

    const style = document.createElement("style");
    style.id = "dc-auth-styles";
    style.textContent = `
        .dc-auth-host {
            position: relative;
            display: flex;
            align-items: center;
            margin-left: 8px;
        }

        .dc-auth-button,
        .dc-auth-user-button,
        .dc-auth-menu-button {
            border: 1px solid rgba(127, 127, 127, 0.18);
            background: rgba(255, 255, 255, 0.08);
            color: inherit;
            border-radius: 999px;
            cursor: pointer;
            transition: transform 0.18s ease, background-color 0.18s ease, border-color 0.18s ease;
            font: inherit;
        }

        .dc-auth-button:hover,
        .dc-auth-user-button:hover,
        .dc-auth-menu-button:hover {
            transform: translateY(-1px);
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(127, 127, 127, 0.28);
        }

        .dc-auth-button {
            width: 36px;
            height: 36px;
            display: inline-grid;
            place-items: center;
            padding: 0;
            border-radius: 999px;
            background: transparent;
            border: none;
            opacity: 0.82;
            box-shadow: none;
        }

        .dc-auth-button:hover {
            opacity: 1;
            background: rgba(255, 255, 255, 0.08);
            border: none;
        }

        .dc-auth-google-mark {
            display: inline-grid;
            place-items: center;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, #4285f4, #34a853 58%, #fbbc05 78%, #ea4335 100%);
            color: #fff;
            font-size: 11px;
            font-weight: 700;
            box-shadow: 0 6px 14px rgba(66, 133, 244, 0.28);
        }

        .dc-auth-user {
            position: relative;
            display: flex;
            align-items: center;
        }

        .dc-auth-user-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0;
            padding: 3px;
            width: 38px;
            height: 38px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.08);
            max-width: none;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        }

        .dc-auth-avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
            flex-shrink: 0;
            background: linear-gradient(135deg, #4285f4, #34a853);
            border: 1px solid rgba(255, 255, 255, 0.24);
        }

        .dc-auth-avatar-fallback {
            display: inline-grid;
            place-items: center;
            color: #fff;
            font-size: 12px;
            font-weight: 700;
        }

        .dc-auth-user-meta {
            min-width: 0;
            display: none;
        }

        .dc-auth-dropdown {
            position: absolute;
            top: calc(100% + 12px);
            right: 0;
            width: min(320px, calc(100vw - 24px));
            padding: 10px;
            border-radius: 22px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background:
                linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.08)),
                rgba(22, 22, 24, 0.86);
            box-shadow: 0 22px 60px rgba(0, 0, 0, 0.24);
            backdrop-filter: blur(28px) saturate(170%);
            -webkit-backdrop-filter: blur(28px) saturate(170%);
            z-index: 10001;
        }

        [data-theme="light"] .dc-auth-dropdown,
        .light .dc-auth-dropdown,
        body:not(.dark) .dc-auth-dropdown.pdf-tool {
            border-color: rgba(15, 23, 42, 0.08);
            background:
                linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.82)),
                rgba(255, 255, 255, 0.72);
        }

        .dc-auth-dropdown[hidden] {
            display: none;
        }

        .dc-auth-panel {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .dc-auth-panel-header {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 10px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.06);
        }

        [data-theme="light"] .dc-auth-panel-header,
        .light .dc-auth-panel-header,
        body:not(.dark) .dc-auth-dropdown.pdf-tool .dc-auth-panel-header {
            background: rgba(15, 23, 42, 0.04);
        }

        .dc-auth-panel-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            flex-shrink: 0;
            object-fit: cover;
            background: linear-gradient(135deg, #4285f4, #34a853);
            border: 1px solid rgba(255, 255, 255, 0.22);
        }

        .dc-auth-panel-avatar-fallback {
            display: inline-grid;
            place-items: center;
            color: #fff;
            font-size: 18px;
            font-weight: 700;
        }

        .dc-auth-panel-copy {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .dc-auth-panel-title {
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.02em;
            opacity: 0.62;
        }

        .dc-auth-panel-name,
        .dc-auth-panel-email,
        .dc-auth-panel-badge {
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .dc-auth-panel-name {
            font-size: 16px;
            font-weight: 700;
            line-height: 1.2;
        }

        .dc-auth-panel-email {
            font-size: 12px;
            opacity: 0.72;
        }

        .dc-auth-panel-badge {
            margin-top: 6px;
            width: fit-content;
            max-width: 100%;
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 11px;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.08);
        }

        [data-theme="light"] .dc-auth-panel-badge,
        .light .dc-auth-panel-badge,
        body:not(.dark) .dc-auth-dropdown.pdf-tool .dc-auth-panel-badge {
            background: rgba(15, 23, 42, 0.06);
        }

        .dc-auth-menu-button {
            width: 100%;
            padding: 12px 14px;
            text-align: center;
            font-size: 13px;
            font-weight: 600;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.08);
        }

        .dc-auth-menu-button:hover {
            background: rgba(255, 255, 255, 0.14);
        }

        @media (max-width: 640px) {
            .dc-auth-button-label {
                display: none;
            }

            .dc-auth-button {
                width: 34px;
                height: 34px;
            }

            .dc-auth-dropdown {
                right: -4px;
                width: min(300px, calc(100vw - 16px));
            }
        }
    `;

    document.head.appendChild(style);
}

function createAvatar(user, labels) {
    if (user.photoURL) {
        const img = document.createElement("img");
        img.className = "dc-auth-avatar";
        img.src = user.photoURL;
        img.alt = user.displayName || labels.fallbackName;
        img.referrerPolicy = "no-referrer";
        return img;
    }

    const fallback = document.createElement("div");
    fallback.className = "dc-auth-avatar dc-auth-avatar-fallback";
    fallback.textContent = (user.displayName || user.email || labels.fallbackName).trim().charAt(0).toUpperCase();
    return fallback;
}

function createPanelAvatar(user, labels) {
    if (user.photoURL) {
        const img = document.createElement("img");
        img.className = "dc-auth-panel-avatar";
        img.src = user.photoURL;
        img.alt = user.displayName || labels.fallbackName;
        img.referrerPolicy = "no-referrer";
        return img;
    }

    const fallback = document.createElement("div");
    fallback.className = "dc-auth-panel-avatar dc-auth-panel-avatar-fallback";
    fallback.textContent = (user.displayName || user.email || labels.fallbackName).trim().charAt(0).toUpperCase();
    return fallback;
}

async function handleGoogleLogin(button) {
    const labels = getLabels();
    const originalText = button.querySelector(".dc-auth-button-label");

    try {
        button.disabled = true;
        if (originalText) originalText.textContent = `${labels.signIn}...`;
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Google sign-in failed", error);
        const message = error?.code === "auth/popup-blocked"
            ? "Popup was blocked. Please allow popups and try again."
            : error?.code === "auth/cancelled-popup-request"
                ? "Sign-in was cancelled."
                : error?.message || "Unable to sign in right now.";
        window.alert(message);
    } finally {
        button.disabled = false;
        if (originalText) originalText.textContent = getLabels().signIn;
    }
}

function renderAuthState(host, user) {
    host.innerHTML = "";
    const labels = getLabels();

    if (!user) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "dc-auth-button";
        button.setAttribute("aria-label", labels.signInWithGoogle);
        button.title = labels.signInWithGoogle;
        button.innerHTML = `
            <span class="dc-auth-google-mark">G</span>
        `;
        button.addEventListener("click", () => handleGoogleLogin(button));
        host.appendChild(button);
        return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "dc-auth-user";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "dc-auth-user-button";
    trigger.setAttribute("aria-haspopup", "menu");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", labels.account);
    trigger.title = labels.account;

    const meta = document.createElement("div");
    meta.className = "dc-auth-user-meta";

    const name = document.createElement("span");
    name.className = "dc-auth-user-name";
    name.textContent = user.displayName || labels.fallbackName;

    const email = document.createElement("span");
    email.className = "dc-auth-user-email";
    email.textContent = user.email || labels.guest;

    meta.append(name, email);
    trigger.append(createAvatar(user, labels), meta);

    const dropdown = document.createElement("div");
    dropdown.className = "dc-auth-dropdown";
    if (document.body.classList.contains("dark") || document.documentElement.getAttribute("data-theme") !== "light") {
        dropdown.classList.add("pdf-tool");
    }
    dropdown.hidden = true;

    const panel = document.createElement("div");
    panel.className = "dc-auth-panel";

    const panelHeader = document.createElement("div");
    panelHeader.className = "dc-auth-panel-header";

    const panelCopy = document.createElement("div");
    panelCopy.className = "dc-auth-panel-copy";

    const panelTitle = document.createElement("div");
    panelTitle.className = "dc-auth-panel-title";
    panelTitle.textContent = labels.account;

    const panelName = document.createElement("div");
    panelName.className = "dc-auth-panel-name";
    panelName.textContent = user.displayName || labels.fallbackName;

    const panelEmail = document.createElement("div");
    panelEmail.className = "dc-auth-panel-email";
    panelEmail.textContent = user.email || labels.guest;

    const panelBadge = document.createElement("div");
    panelBadge.className = "dc-auth-panel-badge";
    panelBadge.textContent = labels.signedInWithGoogle;

    panelCopy.append(panelTitle, panelName, panelEmail, panelBadge);
    panelHeader.append(createPanelAvatar(user, labels), panelCopy);

    const signOutButton = document.createElement("button");
    signOutButton.type = "button";
    signOutButton.className = "dc-auth-menu-button";
    signOutButton.textContent = labels.signOut;
    signOutButton.addEventListener("click", async () => {
        await signOut(auth);
        dropdown.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
    });

    panel.append(panelHeader, signOutButton);
    dropdown.append(panel);

    trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const isHidden = dropdown.hidden;
        dropdown.hidden = !isHidden;
        trigger.setAttribute("aria-expanded", String(isHidden));
    });

    wrapper.append(trigger, dropdown);
    host.appendChild(wrapper);
}

function findTargetContainer() {
    const selectors = [
        ".nav-right",
        "nav .flex.items-center.gap-2.relative",
        "nav .flex.items-center.gap-4",
        "nav .flex.items-center.gap-2",
        "nav .nav-right"
    ];

    for (const selector of selectors) {
        const target = document.querySelector(selector);
        if (target) return target;
    }

    return null;
}

function ensureAuthMount() {
    const target = findTargetContainer();
    if (!target) return null;

    let host = target.querySelector(".dc-auth-host");
    if (!host) {
        host = document.createElement("div");
        host.className = "dc-auth-host";
        target.appendChild(host);
    }

    return host;
}

function mountAuthWidget() {
    injectStyles();

    let currentUser = auth.currentUser;

    const sync = () => {
        const host = ensureAuthMount();
        if (host) {
            renderAuthState(host, currentUser);
        }
    };

    onAuthStateChanged(auth, (user) => {
        currentUser = user;
        sync();
    });

    sync();

    const observer = new MutationObserver(() => {
        if (!document.querySelector(".dc-auth-host")) {
            sync();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const langObserver = new MutationObserver(() => {
        const host = document.querySelector(".dc-auth-host");
        if (host) renderAuthState(host, currentUser);
    });

    langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["lang", "data-theme"] });

    document.addEventListener("click", (event) => {
        const activeUser = document.querySelector(".dc-auth-user");
        const activeDropdown = document.querySelector(".dc-auth-dropdown");
        const activeTrigger = document.querySelector(".dc-auth-user-button");

        if (!activeUser || !activeDropdown || !activeTrigger) return;
        if (activeUser.contains(event.target)) return;

        activeDropdown.hidden = true;
        activeTrigger.setAttribute("aria-expanded", "false");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountAuthWidget);
} else {
    mountAuthWidget();
}
