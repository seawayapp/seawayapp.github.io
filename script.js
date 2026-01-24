document.addEventListener("DOMContentLoaded", function () {
  // Function to sort releases by date
  function sortByDateAscending(releases) {
    return releases.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  // Function to sort releases by date
  function sortByDateAscending(releases) {
    return releases.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  function sortByDateDescending(releases) {
    return releases.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // Function to set table column widths
  function setTableColumnWidths(tableSelector) {
    const table = document.querySelector(tableSelector);
    if (table) {
      const thElements = table.querySelectorAll("th");
      thElements.forEach((th) => (th.style.width = "50%"));

      const tdElements = table.querySelectorAll("td");
      tdElements.forEach((td) => (td.style.width = "50%"));
    }
  }

  // Populate Pin Releases Table
  const pinTableBody = document.querySelector("#pin-table tbody");
  const sortedPinReleases = sortByDateAscending(data.pinReleases);
  sortedPinReleases.forEach((release) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${release.date}</td><td>${release.name}</td>`;
    pinTableBody.appendChild(row);
  });

  // Populate Recent Releases Table
  const recentTableBody = document.querySelector("#recent-table tbody");
  const sortedRecentReleases = sortByDateAscending(data.recentReleases);
  sortedRecentReleases.forEach((release) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${release.date}</td><td>${release.name}</td>`;
    recentTableBody.appendChild(row);
  });

  // Populate Archive Releases Table
  const archiveTableBody = document.querySelector("#archive-table tbody");
  const sortedArchiveReleases = sortByDateDescending(data.archiveReleases);
  sortedArchiveReleases.forEach((release) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${release.date}</td><td>${release.name}</td>`;
    archiveTableBody.appendChild(row);
  });

  // Set column widths
  setTableColumnWidths("#pin-table");
  setTableColumnWidths("#recent-table");
  setTableColumnWidths("#archive-table");

  // Set Last Updated Date
  document.getElementById("last-updated").textContent = data.lastUpdated;
});
