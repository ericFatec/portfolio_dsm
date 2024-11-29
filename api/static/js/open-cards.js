function triggerButtonClicks(previewOpen) {
    if (previewOpen === 'GT') {
        var buttonD = document.getElementById('openCardGTDesc');
        buttonD.click();

        var buttonV = document.getElementById('openCardGTAccordion');
        buttonV.click();
    } else if (previewOpen === 'ML') {
        var buttonD = document.getElementById('openCardMLDesc');
        buttonD.click();

        var buttonV = document.getElementById('openCardMLAccordion');
        buttonV.click();
    } else if (previewOpen === 'PF') {
        var buttonD = document.getElementById('openCardPFDesc');
        buttonD.click();
        
        var buttonV = document.getElementById('openCardPFAccordion');
        buttonV.click();
    } else if (previewOpen === 'PS') {
        var buttonD = document.getElementById('openCardPSDesc');
        buttonD.click();
        
        var buttonV = document.getElementById('openCardPSAccordion');
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