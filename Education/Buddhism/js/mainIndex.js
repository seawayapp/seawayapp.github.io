function generateCards(data) {
  const cards = data
    .map((item, i) => {
      const link =
        item.category === "file"
          ? `./BU_Template.html?${item.filename.includes("pageNo") ? "" : "pageNo=" + Math.floor((i + 1) / 2)}&input=${item.filename}`
          : `./${item.filename}`;

      return `<a class="bu-card" href="${link}">
      <span class="bu-card-num">${i + 1}</span>
      <span class="bu-card-body">
        <span class="bu-card-title">${item.title}</span>
        <span class="bu-card-sub">${item.subtitle}</span>
      </span>
      <span class="bu-card-arrow">→</span>
    </a>`;
    })
    .join("");

  document.getElementById("mainContent").innerHTML =
    `<div class="bu-grid">${cards}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  generateCards(mainData);
});
