chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("mail.google.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
    } else {
      alert("Please open Gmail to use this extension.");
    }
  });
  