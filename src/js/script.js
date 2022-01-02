console.log("script launched");
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let anchors = document.querySelectorAll(".thumbnails-anchor"); //all HTML elements belonging to the class thumbnails-anchor
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function (event) {
        event.preventDefault(); //canceled default behavior of aanchor elemet hitting
        setDetails(anchors[i]); //setDetails function call with passing regerence to appropriate anchor
    })
}

function setDetails(anchor) {
    console.log("anchor element was pressed", anchor);
    detailsImage.setAttribute("src", anchor.getAttribute("href"));
    detailsTitle.textContent = anchor.getAttribute("data-details-title");
}