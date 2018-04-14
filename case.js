// Jumps to section after user clicks side nav
const jumpTo = (e) => {
    const sectionClicked = e.target.id;
    let location = 0;

    let jobs = {
        'wavefire': '#wavefireStudy',
        'splitsecnd': '#splitsecndStudy',
        'edgenet': '#edgenetStudy',
        'asp': '#aspStudy',
        'impactful': '#impactfulstudy'
    }

    location = document.querySelector(jobs[e.target.id]).getBoundingClientRect();
    window.scroll({ top: location.top - 30, left: 0, behavior: 'smooth' });
}

const jumpToLink = document.querySelector('#side-nav').addEventListener('click', jumpTo)


// Lightbox feature for clicking on images to view larger
const showLightbox = (e) => {
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

const lightbox = document.querySelector('#caseStudies').addEventListener('click', showLightbox)

// Clicking outside of modal or 'x' closes it out
const closeLightbox = () => {
    const lightboxModal = document.querySelector('#lightbox');
    const lightboxContent = document.querySelector('#content');
    const close = document.querySelector('#closeLight');

    lightboxModal.classList.add('hide');
    lightboxContent.removeChild(lightboxContent.childNodes[0, 1])
}

// Event listeners for closing modal
const closeLight = document.querySelector('#closeLight').addEventListener('click', closeLightbox);




