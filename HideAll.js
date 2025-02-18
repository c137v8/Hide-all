function isOnCorrectPage() {
    return window.location.href.startsWith("https://www.instagram.com/accounts/hide_story_and_live_from/");
}

function addCustomButtons() {
    if (!isOnCorrectPage()) return;

    // Remove existing buttons if already present
    let existingButton1 = document.getElementById("auto-hide-button");
    let existingButton2 = document.getElementById("auto-unhide-button");
    if (existingButton1 && existingButton2) return;

    // Find the search bar element
    const searchBar = document.querySelector("input[placeholder='Search']");
    if (!searchBar) return; // Exit if search bar is not found

    // Create "Hide Unselected Stories" button
    const hideButton = document.createElement("button");
    hideButton.id = "auto-hide-button";
    hideButton.innerText = "Select All";
    styleButton(hideButton, "Hide");

    // Create "Unhide All" button
    const unhideButton = document.createElement("button");
    unhideButton.id = "auto-unhide-button";
    unhideButton.innerText = "Unselect All";
    styleButton(unhideButton, "Unhide");

    // Insert buttons next to search bar
    searchBar.parentNode.appendChild(hideButton);
    searchBar.parentNode.appendChild(unhideButton);

    // Add click events
    hideButton.addEventListener("click", clickUnselectedButtons);
    unhideButton.addEventListener("click", clickSelectedButtons);
}

function styleButton(button, type) {
    button.style.padding = "8px 12px";
    button.style.marginLeft = "10px"; // Space from search bar / buttons
    button.style.backgroundColor = type === "Hide" ? "#0095f6" : "#e74c3c"; // Blue for Hide, Red for Unhide
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.fontSize = "14px";
    button.style.cursor = "pointer";
    button.style.zIndex = "9999"; // Ensures it's on top of other elements
    button.style.position = "relative"; // Makes sure it's properly placed
    button.style.pointerEvents = "auto"; // Allows it to be clickable
}

function clickUnselectedButtons() {
    document.querySelectorAll(".wbloks_1[role='button']").forEach((el) => {
        let isSelected = el.querySelector("div[style*='background-color: rgb(0, 149, 246)']");
        if (!isSelected) el.click();
    });
}

function clickSelectedButtons() {
    document.querySelectorAll(".wbloks_1[role='button']").forEach((el) => {
        let isSelected = el.querySelector("div[style*='background-color: rgb(0, 149, 246)']");
        if (isSelected) el.click();
    });
}

function removeCustomButtons() {
    const hideButton = document.getElementById("auto-hide-button");
    const unhideButton = document.getElementById("auto-unhide-button");
    if (hideButton) hideButton.remove();
    if (unhideButton) unhideButton.remove();
}

function checkForPageChange() {
    if (isOnCorrectPage()) {
        addCustomButtons();
    } else {
        removeCustomButtons();
    }
}

// Check every second for page changes
setInterval(checkForPageChange, 1000);

