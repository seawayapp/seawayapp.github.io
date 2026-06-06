document.addEventListener("DOMContentLoaded", function () {
  const inputJSON = mainData;
  const mainContent = document.getElementById("mainContent");

  const routeMap = {
    file_slide: (item) => `./template_textslide.html?input=${item.filename}`,
    file_slide_v2: (item) =>
      `./template_textslide_v2.html?input=${item.filename}`,
    file_page: (item) => `./GL_Template.html?view=page&input=${item.filename}`
  };

  const cards = inputJSON
    .map((item, index) => {
      const url = routeMap[item.category]
        ? routeMap[item.category](item)
        : `./GL_Template.html?pageNo=${index}&input=${item.filename}`;

      const sub = item.subtitle
        ? `<span class="bu-card-sub">${item.subtitle}</span>`
        : `<span class="bu-card-sub">${item.testdate}</span>`;

      return `
      <a class="bu-card" href="${url}" aria-label="查看 ${item.title}">
        <span class="bu-card-num">${index + 1}</span>
        <span class="bu-card-body">
          <span class="bu-card-title">${item.title}</span>
          ${sub}
        </span>
        <span class="bu-card-arrow">›</span>
      </a>`;
    })
    .join("");

  mainContent.innerHTML = `<div class="bu-grid" role="list">${cards}</div>`;
});
