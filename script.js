// BROWSE
// TOGGLE TRACK PRICING
document.getElementById("add-meant-to-be").addEventListener("click", toggleMTB);

function toggleMTB() {  
    var trackName = document.getElementById("meant-to-be-container");
    var priceOverlay = document.getElementById("meant-to-be-overlay");
    var displayType = window.getComputedStyle(trackName).display;

    if (displayType == "block") {
        trackName.style.display = "none";
        priceOverlay.style.display = "block";
    } else {
        trackName.style.display = "block";
        priceOverlay.style.display = "none";
    }
}










document.getElementById("add-you-want").addEventListener("click", toggleYW);

function toggleYW() {  
    var trackName = document.getElementById("you-want-container");
    var priceOverlay = document.getElementById("you-want-overlay");
    var displayType = window.getComputedStyle(trackName).display;

    if (displayType == "block") {
        trackName.style.display = "none";
        priceOverlay.style.display = "block";
    } else {
        trackName.style.display = "block";
        priceOverlay.style.display = "none";
    }
}





document.getElementById("add-city-sounds").addEventListener("click", toggleCS);

function toggleCS() {  
    var trackName = document.getElementById("city-sounds-container");
    var priceOverlay = document.getElementById("city-sounds-overlay");
    var displayType = window.getComputedStyle(trackName).display;

    if (displayType == "block") {
        trackName.style.display = "none";
        priceOverlay.style.display = "block";
    } else {
        trackName.style.display = "block";
        priceOverlay.style.display = "none";
    }
}


