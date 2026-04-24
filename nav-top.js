/**
 * nav-top.js  —  Reusable top navigation bar
 *
 * Drop ONE line into any page's <head> or top of <body>:
 *   <script src="/nav-top.js"></script>            ← from root
 *   <script src="../../nav-top.js"></script>       ← from 2 levels deep
 *
 * Optional config — set BEFORE the script tag:
 *   <script>
 *     window.NAV_CONFIG = {
 *       title:    "Page Title",   // shown in the bar (defaults to <title>)
 *       rootPath: "../../",       // override if auto-detect is wrong
 *       breadcrumbs: [            // colored chevron trail inside the nav bar
 *         { label: "Home",      href: "../../index.html" },
 *         { label: "Section",   href: "../index.html" },
 *         { label: "This Page" }  // last item = current page (no link)
 *       ]
 *     };
 *   </script>
 *
 * The script:
 *   1. Injects CSS (respects prefers-color-scheme)
 *   2. Inserts the <nav> as first child of <body>
 *   3. Pads <body> so content isn't hidden under the bar
 *   4. Provides a ← Back button (history.back, fallback to root)
 */
(function () {
  "use strict";

  /* ── Config ── */
  const cfg = window.NAV_CONFIG || {};

  /* Auto-detect root path by counting depth of current URL */
  function autoRootPath() {
    if (cfg.rootPath !== undefined) return cfg.rootPath;
    const parts = location.pathname.replace(/\/[^/]*$/, "").split("/").filter(Boolean);
    return parts.length === 0 ? "./" : "../".repeat(parts.length);
  }

  const ROOT   = autoRootPath();
  const TITLE  = cfg.title || document.title || "SeawayApp";
  const CRUMBS = cfg.breadcrumbs || null;   // array of {label, href?, icon?}
  const NAV_H  = 56;

  /* ── Inject favicon if not already set ── */
  if (!document.querySelector("link[rel~='icon']")) {
    const favicon = document.createElement("link");
    favicon.rel  = "icon";
    favicon.type = "image/png";
    favicon.href = ROOT + "favicon.png";
    document.head.appendChild(favicon);
  }

  /* ── Inject CSS ── */
  const style = document.createElement("style");
  style.textContent = `
    .__snav {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: ${NAV_H}px;
      background: #0f172a;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      display: flex;
      align-items: center;
      padding: 0 20px;
      gap: 14px;
      z-index: 9999;
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      box-shadow: 0 2px 12px rgba(0,0,0,0.25);
    }
    .__snav-home {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: rgba(255,255,255,0.85);
      font-size: 0.85rem;
      font-weight: 600;
      padding: 5px 13px;
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.12);
      transition: background 0.2s, color 0.2s;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .__snav-home:hover {
      background: rgba(255,255,255,0.1);
      color: #fff;
      text-decoration: none;
    }
    .__snav-home svg {
      width: 14px; height: 14px;
      stroke: currentColor; fill: none;
      stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
      flex-shrink: 0;
    }
    .__snav-dot {
      width: 1px; height: 22px;
      background: rgba(255,255,255,0.15);
      flex-shrink: 0;
    }
    .__snav-back {
      display: flex;
      align-items: center;
      gap: 6px;
      background: none;
      border: none;
      color: rgba(255,255,255,0.55);
      font-size: 0.82rem;
      font-family: inherit;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 20px;
      transition: background 0.2s, color 0.2s;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .__snav-back:hover {
      background: rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.85);
    }
    .__snav-back svg {
      width: 13px; height: 13px;
      stroke: currentColor; fill: none;
      stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
    }
    .__snav-title {
      font-size: 0.9rem;
      font-weight: 600;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      min-width: 0;
    }
    .__snav-brand-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: #92d050;
      box-shadow: 0 0 7px #92d050;
      flex-shrink: 0;
    }

    /* ── Breadcrumb chevrons (inside the nav bar) ── */
    .__snav-crumbs {
      display: flex;
      align-items: center;
      gap: 0;
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }
    .__snav-crumb {
      display: flex;
      align-items: center;
      gap: 5px;
      height: 30px;
      padding: 0 16px 0 20px;
      font-size: 0.78rem;
      font-weight: 600;
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
      flex-shrink: 0;
      margin-right: -1px;
      clip-path: polygon(12px 0%, 100% 0%, calc(100% + 12px) 50%, 100% 100%, 0% 100%, 12px 100%, 0% 50%);
      transition: filter 0.18s;
    }
    .__snav-crumb:first-child {
      padding-left: 14px;
      border-radius: 6px 0 0 6px;
      clip-path: polygon(0% 0%, 100% 0%, calc(100% + 12px) 50%, 100% 100%, 0% 100%);
    }
    .__snav-crumb:last-child {
      clip-path: polygon(12px 0%, 100% 0%, 100% 100%, 0% 100%, 12px 100%, 0% 50%);
      margin-right: 0;
    }
    .__snav-crumb:only-child {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
    .__snav-crumb:not([href]) { cursor: default; opacity: 0.88; }
    .__snav-crumb[href]:hover { filter: brightness(1.2); text-decoration: none; }
    .__snav-crumb svg {
      width: 12px; height: 12px;
      stroke: currentColor; fill: none;
      stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
      flex-shrink: 0;
    }

    @media (max-width: 480px) {
      .__snav { padding: 0 12px; gap: 8px; }
      .__snav-home span { display: none; }
      .__snav-back span { display: none; }
      .__snav-crumb { font-size: 0.7rem; padding: 0 10px 0 14px; height: 26px; }
    }

    /* ── Slot mode: integrates into a host topbar ── */
    .__snav-slot-wrap {
      display: flex;
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
    }
    .__snav-slot-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      background: none;
      border: none;
      color: rgba(255,255,255,0.5);
      font-size: 0.78rem;
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      cursor: pointer;
      padding: 5px 9px;
      border-radius: 5px;
      transition: background 0.18s, color 0.18s;
      white-space: nowrap;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }
    .__snav-slot-btn:hover {
      background: rgba(255,255,255,0.09);
      color: rgba(255,255,255,0.85);
      text-decoration: none;
    }
    .__snav-slot-btn svg {
      width: 13px; height: 13px;
      stroke: currentColor; fill: none;
      stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round;
      flex-shrink: 0;
    }
    .__snav-slot-sep {
      width: 1px; height: 18px;
      background: rgba(255,255,255,0.14);
      flex-shrink: 0;
    }
    @media (max-width: 480px) {
      .__snav-slot-btn span { display: none; }
    }
  `;
  document.head.appendChild(style);

  /* ── Breadcrumb colors ── */
  const CRUMB_COLORS = ["#2563eb","#16a34a","#7c3aed","#d97706","#dc2626","#0891b2"];
  const HOME_SVG = `<svg viewBox="0 0 24 24"><path d="M3 12L12 3l9 9"/><path d="M9 21V12h6v9"/></svg>`;

  function buildCrumbsEl() {
    if (!CRUMBS || !CRUMBS.length) return null;
    const wrap = document.createElement("div");
    wrap.className = "__snav-crumbs";
    wrap.setAttribute("aria-label", "Breadcrumb");
    CRUMBS.forEach(function(item, i) {
      const el = item.href ? document.createElement("a") : document.createElement("span");
      el.className = "__snav-crumb";
      el.style.background = CRUMB_COLORS[i % CRUMB_COLORS.length];
      if (item.href) el.href = item.href;
      if (i === CRUMBS.length - 1) el.setAttribute("aria-current", "page");
      const icon = item.icon || (i === 0 ? HOME_SVG : "");
      el.innerHTML = (icon || "") + (item.label || "");
      wrap.appendChild(el);
    });
    return wrap;
  }

  /* ── Build nav HTML ── */
  const nav = document.createElement("nav");
  nav.className = "__snav";
  nav.setAttribute("aria-label", "Site navigation");

  const titleSlot = CRUMBS ? buildCrumbsEl() : null;

  nav.innerHTML = `
    <a class="__snav-home" href="${ROOT}index.html" title="Home">
      <span class="__snav-brand-dot"></span>
      <span>SeawayApp</span>
    </a>
    <div class="__snav-dot" aria-hidden="true"></div>
    <button class="__snav-back" id="__snavBack" title="Go back">
      <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
      <span>Back</span>
    </button>
    <div class="__snav-dot" aria-hidden="true"></div>
    ${CRUMBS ? "" : `<div class="__snav-title" id="__snavTitle">${TITLE}</div>`}
  `;

  if (titleSlot) nav.appendChild(titleSlot);

  /* ── Inject into DOM ── */
  function inject() {
    document.body.insertBefore(nav, document.body.firstChild);

    // Push body content down
    const existing = parseInt(getComputedStyle(document.body).paddingTop) || 0;
    if (existing < NAV_H) {
      document.body.style.paddingTop = (existing + NAV_H) + "px";
    }

    // Back-button logic
    document.getElementById("__snavBack").addEventListener("click", function () {
      if (history.length > 1) {
        history.back();
      } else {
        location.href = ROOT + "index.html";
      }
    });

    // Sync title if page title changed after load (e.g. set by JS)
    if (!cfg.title && !CRUMBS) {
      const observer = new MutationObserver(() => {
        document.getElementById("__snavTitle").textContent = document.title;
      });
      const titleEl = document.querySelector("title");
      if (titleEl) observer.observe(titleEl, { childList: true });
    }
  }

  /* ── Slot mode: inject Back + Home into an existing host element ── */
  const BACK_SVG2  = `<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`;
  const HOME2_SVG  = `<svg viewBox="0 0 24 24"><path d="M3 12L12 3l9 9"/><path d="M9 21V12h6v9"/></svg>`;

  function injectSlot() {
    const container = document.getElementById(cfg.slot);
    if (!container) return;

    const wrap = document.createElement("div");
    wrap.className = "__snav-slot-wrap";

    const homeEl = document.createElement("a");
    homeEl.className = "__snav-slot-btn";
    homeEl.href = ROOT + "index.html";
    homeEl.title = "SeawayApp Home";
    homeEl.innerHTML = HOME2_SVG + "<span>Home</span>";

    const sep1 = document.createElement("div");
    sep1.className = "__snav-slot-sep";

    const backEl = document.createElement("button");
    backEl.className = "__snav-slot-btn";
    backEl.id = "__snavBack";
    backEl.title = "Go back";
    backEl.innerHTML = BACK_SVG2 + "<span>Back</span>";
    backEl.addEventListener("click", function () {
      if (history.length > 1) history.back();
      else location.href = ROOT + "index.html";
    });

    const sep2 = document.createElement("div");
    sep2.className = "__snav-slot-sep";
    sep2.style.marginLeft = "4px";

    wrap.appendChild(homeEl);
    wrap.appendChild(sep1);
    wrap.appendChild(backEl);
    wrap.appendChild(sep2);
    container.appendChild(wrap);
  }

  if (cfg.slot) {
    if (document.body) injectSlot();
    else document.addEventListener("DOMContentLoaded", injectSlot);
  } else {
    if (document.body) inject();
    else document.addEventListener("DOMContentLoaded", inject);
  }
})();
