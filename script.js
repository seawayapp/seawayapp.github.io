document.addEventListener("DOMContentLoaded", function () {

  /* ── Helpers ── */

  // Parse the HTML anchor in data.name to get href + text
  function parseLink(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    const a = div.querySelector("a");
    return {
      href: a ? a.getAttribute("href") : "#",
      text: a ? a.textContent.trim() : html
    };
  }

  // Pick an emoji icon based on title keywords
  function iconFor(text) {
    const t = text.toLowerCase();
    if (t.includes("buddhism") || t.includes("佛"))          return "🙏";
    if (t.includes("taekwondo") || t.includes("grading"))    return "🥋";
    if (t.includes("chinese") || t.includes("华文") || t.includes("中文")) return "🀄";
    if (t.includes("pinyin") || t.includes("拼音"))           return "🗣️";
    if (t.includes("english spelling") || t.includes("spelling")) return "🔤";
    if (t.includes("english"))                                return "📝";
    if (t.includes("phonics"))                                return "🔊";
    if (t.includes("vocabulary"))                             return "📖";
    if (t.includes("exam") || t.includes("paper"))           return "📋";
    if (t.includes("game") || t.includes("cariboo"))         return "🎮";
    if (t.includes("joke") || t.includes("幽默"))             return "😄";
    if (t.includes("song"))                                   return "🎵";
    if (t.includes("technology") || t.includes("network"))   return "💻";
    if (t.includes("base64") || t.includes("json") || t.includes("crypto")) return "🔧";
    if (t.includes("甲骨文"))                                 return "🏛️";
    if (t.includes("古文"))                                   return "📜";
    if (t.includes("reading") || t.includes("book"))         return "📚";
    if (t.includes("education"))                              return "🎓";
    if (t.includes("writing"))                                return "✏️";
    if (t.includes("presentation"))                           return "📊";
    if (t.includes("image"))                                  return "🖼️";
    if (t.includes("mandarin"))                               return "🇨🇳";
    return "🔗";
  }

  function sortDesc(arr) {
    return [...arr].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function sortAsc(arr) {
    return [...arr].sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  /* ── Recent — timeline list ── */
  const recentList = document.getElementById("recent-list");
  sortDesc(data.recentReleases).forEach(item => {
    const { href, text } = parseLink(item.name);
    const icon = iconFor(text);

    const el = document.createElement("a");
    el.className = "release-item";
    el.href = href;
    el.innerHTML = `
      <div class="release-icon">${icon}</div>
      <div class="release-body">
        <div class="release-name">${text}</div>
        <div class="release-date">${item.date}</div>
      </div>
      <span class="release-arrow">→</span>`;
    recentList.appendChild(el);
  });

  /* ── Pinned — card grid ── */
  const pinGrid = document.getElementById("pin-grid");
  sortAsc(data.pinReleases).forEach(item => {
    const { href, text } = parseLink(item.name);
    const icon = iconFor(text);

    const el = document.createElement("a");
    el.className = "pin-card";
    el.href = href;
    el.innerHTML = `
      <div class="pin-card-icon">${icon}</div>
      <div class="pin-card-name">${text}</div>
      <div class="pin-card-date">${item.date}</div>`;
    pinGrid.appendChild(el);
  });

  /* ── Archive — compact collapsible list ── */
  const archiveList = document.getElementById("archive-list");
  const sorted = sortDesc(data.archiveReleases);

  document.getElementById("archiveCount").textContent = sorted.length;
  document.getElementById("archiveToggle").innerHTML =
    `Show all ${sorted.length} ▾`;

  sorted.forEach(item => {
    const { href, text } = parseLink(item.name);
    const icon = iconFor(text);

    const el = document.createElement("a");
    el.className = "archive-item";
    el.href = href;
    el.innerHTML = `
      <span class="archive-item-icon">${icon}</span>
      <span class="archive-item-name">${text}</span>
      <span class="archive-item-date">${item.date}</span>`;
    archiveList.appendChild(el);
  });

  /* ── Last Updated ── */
  document.getElementById("last-updated").textContent = data.lastUpdated;

  /* ── Nav Dropdowns ── */
  function buildDropdown(id, items, sortFn) {
    const container = document.getElementById(id);
    if (!container) return;
    sortFn(items).forEach(item => {
      const { href, text } = parseLink(item.name);
      const el = document.createElement('a');
      el.className = 'nav-dd-item';
      el.href = href;
      el.innerHTML = `<span class="nav-dd-item-icon">${iconFor(text)}</span><span class="nav-dd-item-name">${text}</span>`;
      el.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
        closeAllDropdowns();
      });
      container.appendChild(el);
    });
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.nav-dd-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  }

  buildDropdown('dd-recent',  data.recentReleases,  sortDesc);
  buildDropdown('dd-pinned',  data.pinReleases,      sortAsc);
  buildDropdown('dd-archive', data.archiveReleases,  sortDesc);

  document.querySelectorAll('.nav-dd-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const ddId = 'dd-' + btn.id.replace('dd-btn-', '');
      const dd = document.getElementById(ddId);
      const wasOpen = btn.getAttribute('aria-expanded') === 'true';
      closeAllDropdowns();
      if (!wasOpen && dd) {
        btn.setAttribute('aria-expanded', 'true');
        dd.classList.add('open');
      }
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-item')) closeAllDropdowns();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllDropdowns();
  });
});
