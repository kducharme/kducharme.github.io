// Scrolls to wavefire case study
const jumpTo = (e) => {
    const sectionClicked = e.target.id;
    let location = 0;

    let jobs = {
        'wavefire': '#wavefireStudy',
        'splitsecnd': '#splitsecndStudy',
        'edgenet': '#edgenetStudy',
        'asp': '#aspStudy'
    }

    location = document.querySelector(jobs[e.target.id]).getBoundingClientRect();
    
    window.scroll({ top: location.top, left: 0, behavior: 'smooth' });
}

const jumpToLink = document.querySelector('#side-nav').addEventListener('click', jumpTo)


const lightBox = (e) => {
    let imageId = e.target.id,
        lightboxModal = document.querySelector('#lightbox'),
        lightboxContent = document.querySelector('#content'),
        clickedImage,
        preview;

    if (lightboxContent.childNodes.length == 1) {
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
// const closeLightBox = document.querySelector('#lightboxb').addEventListener('click', hideModal);

const responsiveMenu = () => {
    let navStructure = document.querySelector('nav'),
        navLinks = document.querySelector('#primary-nav');
    
    navLinks.classList.remove('nav__links');

    console.log('success')

    }

const hamburger = document.querySelector('#menu').addEventListener('click', responsiveMenu);

