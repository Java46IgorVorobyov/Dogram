console.log('script launched');
let detailsImage = document.querySelector('.details-image');
let detailsTitle = document.querySelector('.details-title');
let mainContentEl = document.querySelector('.main-content');
let selectedItem;
let deleteBorder;


let anchors = document.querySelectorAll('.thumbnails-anchor');
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function (event) {
        event.preventDefault();
        showDetails();
        setDetails(anchors[i]);

    });
}

function setDetails(anchor) {
    console.log('anchor element was pressed', anchor);
    let hrefValue = anchor.getAttribute('href');
    detailsImage.setAttribute('src', hrefValue);

    anchor.parentElement.classList.add('selected');
    if (selectedItem) {
        selectedItem.classList.remove('selected');
    }
    selectedItem = anchor.parentElement;
    //get element with class thumbnails-title inside the given anchor
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailsTitleElement = document.querySelector(thumbnailsTitleSelector);
    //dog name exist inside thumbnailTitleElenent.textContent
    detailsTitle.textContent = `${thumbnailsTitleElement.textContent}: ${anchor.getAttribute('data-details-title')}`;
}

function showDetails() {
    mainContentEl.classList.remove('hidden');
    detailsImage.parentElement.classList.add('is-tiny');
    setTimeout(function() {detailsImage.parentElement.classList.remove('is-tiny');});
}

function hideDetails() {
    mainContentEl.classList.add('hidden');
    if (selectedItem) {
        selectedItem.classList.remove('selected');
    }
}

function saysDog1() {
    let myAudio = new Audio();
    myAudio.src='../dog voice/Sound_16378.mp3';
    myAudio.autoplay = true;
}

function saysDog2() {
    let myAudio = new Audio();
    myAudio.src='../dog voice/dog2.mp3';
    myAudio.autoplay = true;
}

function saysDog3() {
    let myAudio = new Audio();
    myAudio.src='../dog voice/dog3.mp3';
    myAudio.autoplay = true;
}

function saysDog4() {
    let myAudio = new Audio();
    myAudio.src='../dog voice/Sound_22342.mp3';
    myAudio.autoplay = true;
}

function saysDog5() {
    let myAudio = new Audio();
    myAudio.src='../dog voice/dog5.mp3';
    myAudio.autoplay = true;
}



