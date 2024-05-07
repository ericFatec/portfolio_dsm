function triggerButtonClicks(previewOpen) {
    if (previewOpen === 'greentech') {
        var buttonD = document.getElementById('openCardGTDesc');
        buttonD.click();

        var buttonV = document.getElementById('openCardGTAccordion');
        buttonV.click();
    } else if (previewOpen === 'assistenteML') {
        var buttonD = document.getElementById('openCardMLDesc');
        buttonD.click();

        var buttonV = document.getElementById('openCardMLAccordion');
        buttonV.click();
    } else if (previewOpen === 'portfolio') {
        var buttonD = document.getElementById('openCardPFDesc');
        buttonD.click();
        
        var buttonV = document.getElementById('openCardPFAccordion');
        buttonV.click();
    }
}

window.addEventListener('DOMContentLoaded', function() {
var previewOpen = localStorage.getItem('cardOpen');
triggerButtonClicks(previewOpen);
// Clear the storage
localStorage.removeItem('cardOpen');
});

document.addEventListener('click', function(event) {
    if (event.target.matches('.dropdown-item')) {
        var href = event.target.getAttribute('href');
        var key = href.split('#')[1]; // Extracting the key from href

        triggerButtonClicks(key);
    }
});