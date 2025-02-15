document.getElementById("findAgodaEmail").addEventListener("click", () => {
    // Send a message to background.js
    chrome.runtime.sendMessage({ action: "checkGmailPage" });
  });
  