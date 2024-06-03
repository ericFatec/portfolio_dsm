function displayTempMessage() {
    var tempMessage = document.getElementById("temp-message");
    tempMessage.style.display = "block";
    setTimeout(function() {
        tempMessage.style.display = "none";
    }, 1600);
}

var parentElements = document.querySelectorAll(".container");
parentElements.forEach(function(element) {
    element.addEventListener("click", function(event) {
        if (event.target && event.target.matches(".github-link")) {
            event.preventDefault();
            displayTempMessage();
        }
    });
});