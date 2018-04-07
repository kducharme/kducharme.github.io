// Scrolls to wavefire case study
const scrollToWave = () => {
    const wavefire = document.querySelector('#wavefireStudy'), location = wavefire.getBoundingClientRect();
    window.scroll({ top: location.top - 30, left: 0, behavior: 'smooth' });
}

// Scrolls to splitsecnd case study
const scrollToSplit = () => {
    const splitsecnd = document.querySelector('#splitsecndStudy'), location = splitsecnd.getBoundingClientRect();
    window.scroll({ top: location.top - 30, left: 0, behavior: 'smooth' });
}

// Scrolls to edgenet section
const scrollToEdge = () => {
    const edgenet = document.querySelector('#edgenetStudy'), location = edgenet.getBoundingClientRect();
    window.scroll({ top: location.top - 30, left: 0, behavior: 'smooth' });
}

// Scrolls to asp section
const scrollToASP = () => {
    const asp = document.querySelector('#aspStudy'), location = asp.getBoundingClientRect();
    window.scroll({ top: location.top - 30, left: 0, behavior: 'smooth' });
}

const wavefireClick = document.querySelector('#wavefire').addEventListener('click', scrollToWave);
const aspClick = document.querySelector('#asp').addEventListener('click', scrollToASP);
const splitsecndClick = document.querySelector('#splitsecnd').addEventListener('click', scrollToSplit);
const edgenetClick = document.querySelector('#edgenet').addEventListener('click', scrollToEdge);

let imgCount = 1;

const lightBox = (e) => {
    let imageId = e.target.id,
        lightboxModal = document.querySelector('#lightbox'),
        lightboxContent = document.querySelector('#content'),
        clickedImage,
        preview;

    if (lightboxContent.childNodes.length == imgCount) {
        if (e.srcElement.nodeName === 'IMG') {
            imageURL = e.target.src;
            lightboxModal.classList.remove('hide');

            preview = document.createElement('img');
            preview.src = imageURL;
            preview.classList.add('modal--image')

            lightboxContent.appendChild(preview);
            console.log(lightboxContent)
        }
    }
}

const lightbox = document.querySelector('#caseStudies').addEventListener('click', lightBox)


const hideModal = () => {
    lightboxModal = document.querySelector('#lightbox'),
    lightboxContent = document.querySelector('#content'),
    close = document.querySelector('#closeLight'); 
    lightboxModal.classList.add('hide');

    lightboxContent.removeChild(lightboxContent.childNodes[0, 1])
}

// Event listeners for closing modal
const closeLight = document.querySelector('#closeLight').addEventListener('click', hideModal);

