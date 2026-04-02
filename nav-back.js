/**
 * nav-back.js
 * Drop this script into any sub-page to get a floating "← Back" button.
 *
 * Usage:
 *   <script src="/nav-back.js"></script>
 *
 * The button goes back in browser history (or falls back to the root index).
 */
(function () {
  // Inject the stylesheet variable fallback (in case styles.css is not loaded)
  const style = document.createElement("style");
  style.textContent = `
    .back-btn {
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: #92d050;
      color: #fff;
      border: none;
      border-radius: 24px;
      padding: 10px 18px;
      font-size: 0.9rem;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 3px 10px rgba(0,0,0,0.2);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      z-index: 9999;
      transition: background 0.2s, transform 0.15s;
      font-family: "Book Antiqua", Georgia, serif;
    }
    .back-btn:hover {
      background: #72a83e;
      transform: translateY(-2px);
      color: #fff;
      text-decoration: none;
    }
  `;
  document.head.appendChild(style);

  // Create the button
  const btn = document.createElement("a");
  btn.className = "back-btn";
  btn.href = "#";
  btn.innerHTML = "&#8592; Back";
  btn.setAttribute("aria-label", "Go back");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (history.length > 1) {
      history.back();
    } else {
      // Fallback: go to root index
      window.location.href = "/";
    }
  });

  // Inject after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => document.body.appendChild(btn));
  } else {
    document.body.appendChild(btn);
  }
})();
