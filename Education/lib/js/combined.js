// Combined JavaScript for optimized template

// Slide initialization
function startup() {
  // Initialize slideshow functionality
  if (typeof setupSlides === "function") {
    setupSlides();
  }
}

// Data processing functions
function processData(inputJSON, targetElement) {
  if (!inputJSON || !targetElement) return;

  // Set document title
  document.getElementById("maintitle").textContent = inputJSON.title || "";

  // Populate content
  populateHTMLparagraph(inputJSON, targetElement);
}

function populateHTMLparagraph(inputJSON, type) {
  const container = document.getElementById(type);
  if (!container) return;

  let html = `
        <div class="slide">
            <h1>菩提道次第广论</h1>
            <p class="title-center">${inputJSON.title || ""}</p>
        </div>`;

  // Add slides for each sentence
  (inputJSON.sentences || []).forEach((paragraphTemp, j) => {
    html += `
            <div class="slide">
                <h1>${inputJSON.subtitle || ""} - ${j + 1}</h1>
                <div class="vertical-center">
                    <p class="content-center">${paragraphTemp || ""}</p>
                </div>
            </div>`;
  });

  // Add final slide
  html += `
        <div class="slide">
            <h1>${inputJSON.subtitle || ""}</h1>
            <div class="vertical-center">
                <p class="content-center"><a>未完待续</a></p>
            </div>
        </div>`;

  container.innerHTML = html;
}

// Dynamic script loading
function loadScript(fileName) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = fileName;
    script.defer = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load: ${fileName}`));
    document.body.appendChild(script);
  });
}

// URL parameter handling
function getScriptParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// Initialize on load
window.addEventListener("load", async () => {
  const scriptFile = getScriptParam("input");
  const pageNo = getScriptParam("pageno");

  if (scriptFile) {
    try {
      await loadScript(`./data/${scriptFile}.js`);
      if (typeof mainData !== "undefined") {
        processData(mainData[0], "paragraph");
        startup();
      }
    } catch (error) {
      console.error("Error loading script:", error);
    }
  }
});
