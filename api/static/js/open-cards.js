function triggerButtonClicks(previewOpen) {
    if (previewOpen === 'greentech') {
        var buttonD = document.getElementById('openCardGTDesc');
        var buttonV = document.getElementById('openCardGTVideo');

        buttonD.click();
        buttonV.click();
    } else if (previewOpen === 'assistenteML') {
        var buttonD = document.getElementById('openCardMLDesc');
        var buttonV = document.getElementById('openCardMLVideo');

        buttonD.click();
        buttonV.click();
    } else if (previewOpen === 'portfolio') {
        var buttonD = document.getElementById('openCardPFDesc');
        var buttonV = document.getElementById('openCardPFVideo');

        buttonD.click();
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