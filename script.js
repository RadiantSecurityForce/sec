// Function to handle form submission
function submitForm() {
    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Perform validation or additional processing if needed

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Display success message
    alert("Message submitted successfully!");
}

// Simulate the loading progress
let progressBar = document.querySelector('.progress-bar');
let errorMessage = document.querySelector('#error-message');
let loadingOverlay = document.querySelector('.loading-overlay');
let pageContent = document.querySelector('.page-content');

let progress = 0;
let interval = setInterval(increaseProgress, 50);

function increaseProgress() {
  progress += 2;
  progressBar.style.width = progress + '%';

  if (progress >= 50) {
    clearInterval(interval);
    showErrorMessages();
  } else if (progress >= 100) {
    clearInterval(interval);
    loadingOverlay.style.display = 'none';
    pageContent.style.display = 'block';
  }
}

function showErrorMessages() {
  let messages = [
    "Uh oh, error detected, terminating.",
    "Critical failure detected, system shutting down.",
    "Error: Unable to load website. Initiating emergency protocols.",
    "Warning: Malfunction detected, aborting process.",
    "Anomaly detected. System integrity compromised.",
    "Emergency error: Mission critical failure detected.",
    "System failure imminent. Initiating emergency shutdown."
  ];

  let counter = 0;
  let messageIndex = 0;

  interval = setInterval(showErrorMessage, 1500);

  function showErrorMessage() {
    if (counter < 6) {
      errorMessage.textContent = messages[messageIndex];
      messageIndex = (messageIndex + 1) % messages.length;
      counter++;
    } else {
      clearInterval(interval);
      loadingOverlay.style.display = 'none';
      pageContent.style.display = 'block';
    }
  }
}


