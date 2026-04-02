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

  const ROOT    = autoRootPath();
  const TITLE   = cfg.title || document.title || "SeawayApp";
  const NAV_H   = 56;

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
    @media (max-width: 480px) {
      .__snav { padding: 0 12px; gap: 8px; }
      .__snav-home span { display: none; }
      .__snav-back span { display: none; }
    }
  `;
  document.head.appendChild(style);

  /* ── Build nav HTML ── */
  const nav = document.createElement("nav");
  nav.className = "__snav";
  nav.setAttribute("aria-label", "Site navigation");
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
    <div class="__snav-title" id="__snavTitle">${TITLE}</div>
  `;

  /* ── Inject into DOM ── */
  function inject() {
    document.body.insertBefore(nav, document.body.firstChild);

    // Push body content down
    const existing = parseInt(getComputedStyle(document.body).paddingTop) || 0;
    if (existing < NAV_H) {
      document.body.style.paddingTop = (existing + NAV_H) + "px";
    }

    // Back button logic
    document.getElementById("__snavBack").addEventListener("click", function () {
      if (history.length > 1) {
        history.back();
      } else {
        location.href = ROOT + "index.html";
      }
    });

    // Sync title if page title changed after load (e.g. set by JS)
    if (!cfg.title) {
      const observer = new MutationObserver(() => {
        document.getElementById("__snavTitle").textContent = document.title;
      });
      const titleEl = document.querySelector("title");
      if (titleEl) observer.observe(titleEl, { childList: true });
    }
  }

  if (document.body) {
    inject();
  } else {
    document.addEventListener("DOMContentLoaded", inject);
  }
})();
