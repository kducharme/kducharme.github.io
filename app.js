const showAbout = (e) => {
    let aboutContainer = document.querySelector('#about'),
        bottomBar = document.querySelector('#learn-more'),
        socialIcons = document.querySelector('#icons'),
        viewButton = document.querySelector('#view'),
        hideButton = document.querySelector('#back'),
        caseStudies = document.querySelector('#case')
        resume = document.querySelector('#resume'),
        clickLocation = e.screenY;


    aboutContainer.classList.remove('more', 'about--before');
    socialIcons.classList.add('hide');
    bottomBar.classList.add('more--connect-full');

    setTimeout(() => {
        bottomBar.classList.remove('more--connect');
        aboutContainer.classList.add('about--after');
        window.scroll({ top: clickLocation, left: 0, behavior: 'smooth' });
        resume.classList.remove('hide');
    }, 600)

    viewButton.classList.add('hide');
    hideButton.classList.remove('hide')
    hideButton.classList.add('more--view-cta-after');


};

// Event listener for clicking learn more
const show = document.querySelector('#about', '.click').addEventListener('click', showAbout);







