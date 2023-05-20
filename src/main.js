import moviesObj from '../movies.json' assert {type: 'json'};
const detailsImageElement = document.querySelector(".details-image");
const thumbNailsList = document.querySelector(".thumbnails-list");
const detailsTitleElement = document.querySelector(".details-title");
const detailsSection = document.querySelector(".details-section");
const mainSection = document.querySelector("main")
const HIDDEN = "hidden";
const POINT = "point";
console.log(moviesObj.httpPrefix);



function getPuictures() {
    let listItems = moviesObj.results.map((movie) => {
        const listItem =
            `<li class = "thumbnails-item">
            <a href = '#' class = "thumbnails-anchor"
            data-details-image = "${moviesObj.httpPrefix + movie.backdrop_path}" data-details-text = "${movie.overview.slice(0,100)}">
            <img src="${moviesObj.httpPrefix + movie.poster_path}" class="thumbnails-image">
    <span class="thumbnails-title">${movie.original_title}</span>
    </a> 
    </li>`
        return listItem;
    });

    return listItems.join("");
}

thumbNailsList.innerHTML = getPuictures();
const thumbNailsAnchor = document.querySelectorAll(".thumbnails-anchor");
console.log(thumbNailsAnchor)

thumbNailsAnchor.forEach(anchor => anchor.addEventListener("click", setDetails.bind(undefined, anchor)))


function setDetails(anchor) {
    showDetails();
    detailsImageElement.src = anchor.getAttribute("data-details-image");
    detailsTitleElement.innerHTML = anchor.getAttribute("data-details-text");
}

function showDetails() {
    mainSection.classList.remove(HIDDEN);
    detailsSection.classList.add(POINT);
    setTimeout(function () {
        detailsSection.classList.remove(POINT);
    })
}

function hideDetails() {
    mainSection.classList.add(HIDDEN);
}

window.hideDetails = hideDetails;

