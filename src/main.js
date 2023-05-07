const detailsImageElement = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbNailsAnchor = document.querySelectorAll(".thumbnails-anchor");
const detailsSection = document.querySelector(".details-section");
const mainSection = document.querySelector("main")
const HIDDEN = "hidden";
const POINT = "point";
for (let i = 0; i < thumbNailsAnchor.length; i++) {
    thumbNailsAnchor[i].addEventListener("click", function () {
        setDetails(thumbNailsAnchor[i]);
    })
}

function setDetails(anchor) {
    showDetails();
    detailsImageElement.src = anchor.getAttribute("data-details-image");
    detailsTitleElement.innerHTML = anchor.getAttribute("data-details-text");
}

function showDetails() {
    mainSection.classList.remove(HIDDEN);
    detailsSection.classList.add(POINT);
    setTimeout(function(){
        detailsSection.classList.remove(POINT);
    })
}

function hideDetails() {
    mainSection.classList.add(HIDDEN);
}

