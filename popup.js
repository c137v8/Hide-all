document.getElementById("runScript").addEventListener("click", () => {
    chrome.tabs.executeScript({ file: "content.js" });
});

