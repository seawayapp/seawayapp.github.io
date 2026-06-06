/**
 * nav-config.js  —  Central site navigation menu definitions
 *
 * Defines NAV_MENUS with functions that return children arrays for breadcrumbs.
 *
 * Root URL is derived from this script's own src attribute, so it works
 * correctly for both local file:// testing and production https:// deployments.
 *
 * Usage in any page (load BEFORE the inline NAV_CONFIG script and nav-top.js):
 *   <script src="../../nav-config.js"></script>
 *   <script>
 *     window.NAV_CONFIG = {
 *       breadcrumbs: [
 *         { label: "Home",  href: "../../index.html", children: NAV_MENUS.site() },
 *         { label: "Games", href: "../index.html",    children: NAV_MENUS.games() },
 *         { label: "My Page" }
 *       ]
 *     };
 *   </script>
 *   <script src="../../nav-top.js"></script>
 */
window.NAV_MENUS = (function () {
  /* Derive project root from this script's own URL — works for file:// and https:// */
  const ROOT_URL =
    document.currentScript && document.currentScript.src
      ? document.currentScript.src.replace(/\/[^/]*$/, "/")
      : "./";

  function url(path) {
    return ROOT_URL + path;
  }

  /* ── Edit the lists below to update menus across all pages ── */

  function site() {
    return [
      { label: "🏠 Home", href: url("index.html") },
      { label: "🎓 Education", href: url("Education/index.html") },
      { label: "🎮 Games", href: url("Games/index.html") },
      { label: "💻 Technology", href: url("Technology/index.html") },
      { label: "➕ Math 数学", href: url("Math/index.html") },
      { label: "📚 Books 书籍", href: url("Books/index.html") }
    ];
  }

  function games() {
    return [
      { label: "🎮 Games Home", href: url("Games/index.html") },
      { label: "🃏 Card Game", href: url("Games/Card_Game/index.html") },
      {
        label: "🌟 Sentence Builder",
        href: url("Games/Sentence_Builder/index.html")
      }
    ];
  }

  function math() {
    return [
      { label: "🔢 Math Home", href: url("Math/index.html") },
      {
        label: "P5 Supposition",
        href: url("Math/topics/P5_supposition_final.html")
      },
      {
        label: "P5 Remainder Concept",
        href: url("Math/topics/P5_remainder_concept.html")
      },
      {
        label: "Interesting Questions",
        href: url("Math/Interesting_Questions/index.html")
      }
    ];
  }

  return { site: site, games: games, math: math };
})();
