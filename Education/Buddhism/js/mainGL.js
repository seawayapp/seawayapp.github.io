document.addEventListener("DOMContentLoaded", function () {
  const inputJSON = mainData;
  const mainContent = document.getElementById("mainContent");

  let tableHTML = `
        <table class="center" aria-label="广论目录">
            <thead>
                <tr>
                    <th scope="col">目录</th>
                    <th scope="col">科目</th>
                    <th scope="col">创建日期</th>
                </tr>
            </thead>
            <tbody>`;

  inputJSON.forEach((item, index) => {
    tableHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>`;
    if (item.category == "file_slide") {
      tableHTML += `<a href="./template_textslide.html?input=${item.filename}" 
            target="_blank" 
            aria-label="查看 ${item.title}">
            ${item.title}
        </a>`;
    } else {
      tableHTML += `<a href="./GL_Template.html?pageNo=${index}&input=${item.filename}" 
            target="_blank" 
            aria-label="查看 ${item.title}">
            ${item.title}
        </a>`;
    }

    tableHTML += `                
                </td>
                <td>${item.testdate}</td>
            </tr>`;
  });

  tableHTML += `</tbody></table>`;
  mainContent.innerHTML = tableHTML;
});
