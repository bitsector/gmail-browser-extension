// Function to find the most recent email with 'Agoda' in its subject
function findAgodaEmail() {
    const emailRows = document.querySelectorAll(".zA"); // Select all email rows
    for (const row of emailRows) {
      const subjectElement = row.querySelector(".bog"); // Locate subject element
      if (subjectElement && subjectElement.innerText.includes("Agoda")) {
        return row; // Return the matching email row
      }
    }
    return null; // No matching email found
  }
  
  // Function to extract and display email content
  function extractEmailContent(emailRow) {
    emailRow.click(); // Simulate a click to open the email
    setTimeout(() => {
      const emailBody = document.querySelector(".a3s")?.innerText || "Unable to fetch email body.";
      alert(`Email Content:\n\n${emailBody}`);
    }, 2000); // Wait for the email content to load
  }
  
  // Main logic
  const agodaEmail = findAgodaEmail();
  if (agodaEmail) {
    extractEmailContent(agodaEmail);
  } else {
    alert("No recent email with 'Agoda' found.");
  }
  