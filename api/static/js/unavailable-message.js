// Function to display the temporary message
function displayTempMessage() {
    var tempMessage = document.getElementById("temp-message");
    tempMessage.style.display = "block";
    setTimeout(function() {
        tempMessage.style.display = "none";
    }, 1600); // Hide after 3 seconds
}

// Add event listener to the link
document.getElementById("github-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    displayTempMessage(); // Display temporary message
});