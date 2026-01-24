function generateTable(data) {
  const tableHTML = `
        <table>
            <tr>
                <th>目录</th>
                <th>书名</th>
                <th>作者</th>
                <th></th>
                <th>目录</th>
                <th>书名</th>
                <th>作者</th>
            </tr>
            ${data
              .map((item, i) => {
                if (i % 2 === 0) {
                  const nextItem = data[i + 1];
                  return `
                        <tr>
                            ${generateRow(item, i + 1)}
                            <td></td>
                            ${
                              nextItem
                                ? generateRow(nextItem, i + 2)
                                : "<td></td><td></td>"
                            }
                        </tr>
                    `;
                }
                return "";
              })
              .join("")}
        </table>
    `;
  document.getElementById("mainContent").innerHTML = tableHTML;
}

function generateRow(item, index) {
  const link =
    item.category === "file"
      ? `./Book_Template.html?${
          item.filename.includes("pageNo")
            ? ""
            : "pageNo=" + Math.floor(index / 2)
        }&input=${item.filename}`
      : `./${item.filename}`;

  return `
        <td>${index}</td>
        <td><a href="${link}" target="_blank">&nbsp;${item.title}&nbsp;</a></td>
        <td>&nbsp;${item.subtitle}&nbsp;</td>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  generateTable(mainData);
});
