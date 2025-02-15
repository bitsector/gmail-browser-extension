chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "checkGmailPage") {
      // Get the active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs.length > 0) { // Ensure we have at least one tab
          const activeTab = tabs[0];
          if (activeTab.url && activeTab.url.includes("https://mail.google.com")) {
            console.log("You are on a Gmail page!");
            sendNotification("Gmail Page Reader", "You are on a Gmail page!");
            // Inject content.js into Gmail
            chrome.scripting.executeScript({
              target: { tabId: activeTab.id },
              files: ["content.js"]
            });
          } else {
            console.log("This is not a Gmail page. Please open Gmail to use this extension.");
            sendNotification("Gmail Page Reader", "This is not a Gmail page. Please open Gmail.");
          }
        } else {
          console.log("Could not retrieve the active tab. Please try again.");
          sendNotification("Gmail Page Reader", "Could not retrieve the active tab. Please try again.");
        }
      });
    }
  });
  
  // Function to send a notification
  function sendNotification(title, message) {
    try {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "favicon-32x32.png",
        title: title,
        message: message
      });
    } catch (error) {
      console.error("Failed to create notification:", error);
    }
  }
  