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
      overflow: visible;
    }
    .__snav-crumb-wrap {
      position: relative;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-right: -1px;
    }
    .__snav-crumb-wrap:last-child { margin-right: 0; }
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
      clip-path: polygon(12px 0%, 100% 0%, calc(100% + 12px) 50%, 100% 100%, 0% 100%, 12px 100%, 0% 50%);
      transition: filter 0.18s;
      cursor: pointer;
    }
    .__snav-crumb-wrap:first-child > .__snav-crumb {
      padding-left: 14px;
      border-radius: 6px 0 0 6px;
      clip-path: polygon(0% 0%, 100% 0%, calc(100% + 12px) 50%, 100% 100%, 0% 100%);
    }
    .__snav-crumb-wrap:last-child > .__snav-crumb {
      clip-path: polygon(12px 0%, 100% 0%, 100% 100%, 0% 100%, 12px 100%, 0% 50%);
    }
    .__snav-crumb-wrap:only-child > .__snav-crumb {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
    .__snav-crumb:not([href]):not(.has-dd) { cursor: default; opacity: 0.88; }
    .__snav-crumb[href]:hover,
    .__snav-crumb.has-dd:hover { filter: brightness(1.2); text-decoration: none; }
    .__snav-crumb svg {
      width: 12px; height: 12px;
      stroke: currentColor; fill: none;
      stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
      flex-shrink: 0;
    }
    /* ── Breadcrumb dropdown ── */
    .__snav-dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      background: #1e293b;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 10px;
      box-shadow: 0 8px 28px rgba(0,0,0,0.5);
      min-width: 200px;
      z-index: 10001;
      overflow: hidden;
      padding: 5px 0;
      animation: __snavDdIn 0.15s ease;
    }
    @keyframes __snavDdIn {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .__snav-dropdown.open { display: block; }
    .__snav-dropdown a {
      display: block;
      padding: 10px 18px;
      color: rgba(255,255,255,0.82);
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 500;
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      white-space: nowrap;
      transition: background 0.14s, color 0.14s;
    }
    .__snav-dropdown a:hover {
      background: rgba(255,255,255,0.09);
      color: #fff;
      text-decoration: none;
    }

    .__snav-fs {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(56, 189, 248, 0.15);
      border: 1.5px solid #38bdf8;
      border-radius: 8px;
      color: #38bdf8;
      cursor: pointer;
      width: 34px;
      height: 34px;
      flex-shrink: 0;
      transition: background 0.18s, color 0.18s, border-color 0.18s, box-shadow 0.18s;
      padding: 0;
    }
    .__snav-fs:hover {
      background: rgba(56, 189, 248, 0.28);
      color: #7dd3fc;
      border-color: #7dd3fc;
      box-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
    }
    .__snav-fs svg {
      width: 16px; height: 16px;
      stroke: currentColor; fill: none;
      stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round;
      pointer-events: none;
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

  const DD_CHEVRON = `<svg style="margin-left:3px;flex-shrink:0" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

  function buildCrumbsEl() {
    if (!CRUMBS || !CRUMBS.length) return null;
    const container = document.createElement("div");
    container.className = "__snav-crumbs";
    container.setAttribute("aria-label", "Breadcrumb");
    CRUMBS.forEach(function(item, i) {
      const wrapEl = document.createElement("div");
      wrapEl.className = "__snav-crumb-wrap";

      const hasDD = !!(item.children && item.children.length);
      const el = (item.href || hasDD) ? document.createElement("a") : document.createElement("span");
      el.className = "__snav-crumb" + (hasDD ? " has-dd" : "");
      el.style.background = CRUMB_COLORS[i % CRUMB_COLORS.length];
      if (item.href && !hasDD) el.href = item.href;
      if (i === CRUMBS.length - 1) el.setAttribute("aria-current", "page");
      const icon = item.icon || (i === 0 ? HOME_SVG : "");
      el.innerHTML = (icon || "") + (item.label || "") + (hasDD ? DD_CHEVRON : "");

      if (hasDD) {
        const dd = document.createElement("div");
        dd.className = "__snav-dropdown";
        item.children.forEach(function(child) {
          const a = document.createElement("a");
          a.href = child.href;
          a.textContent = child.label;
          dd.appendChild(a);
        });
        el.addEventListener("click", function(e) {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = dd.classList.contains("open");
          document.querySelectorAll(".__snav-dropdown.open").forEach(function(d) {
            d.classList.remove("open");
          });
          if (!isOpen) dd.classList.add("open");
        });
        wrapEl.appendChild(el);
        wrapEl.appendChild(dd);
      } else {
        wrapEl.appendChild(el);
      }

      container.appendChild(wrapEl);
    });
    return container;
  }

  /* ── Build nav HTML ── */
  const nav = document.createElement("nav");
  nav.className = "__snav";
  nav.setAttribute("aria-label", "Site navigation");

  const titleSlot = CRUMBS ? buildCrumbsEl() : null;

  const ICON_EXPAND   = `<svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`;
  const ICON_COMPRESS = `<svg viewBox="0 0 24 24"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/></svg>`;

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

  /* Fullscreen button — always last so it sits at the far right */
  const fsBtn = document.createElement("button");
  fsBtn.className = "__snav-fs";
  fsBtn.id = "__snavFs";
  fsBtn.title = "Enter full screen";
  fsBtn.innerHTML = ICON_EXPAND;
  nav.appendChild(fsBtn);

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

    // Fullscreen toggle
    function updateFsIcon() {
      const inFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      fsBtn.innerHTML = inFs ? ICON_COMPRESS : ICON_EXPAND;
      fsBtn.title = inFs ? "Exit full screen" : "Enter full screen";
    }

    fsBtn.addEventListener("click", function () {
      const inFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      if (!inFs) {
        const el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      }
    });

    document.addEventListener("fullscreenchange", updateFsIcon);
    document.addEventListener("webkitfullscreenchange", updateFsIcon);

    // Close dropdowns when clicking outside the nav
    document.addEventListener("click", function(e) {
      if (!e.target.closest(".__snav-crumb-wrap")) {
        document.querySelectorAll(".__snav-dropdown.open").forEach(function(d) {
          d.classList.remove("open");
        });
      }
    });
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
