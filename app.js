const showAbout = (e) => {
    let aboutContainer = document.querySelector('#about'),
        bottomBar = document.querySelector('#learn-more'),
        socialIcons = document.querySelector('#icons'),
        viewButton = document.querySelector('#view'),
        hideButton = document.querySelector('#back')
    resume = document.querySelector('#resume'),
        clickLocation = e.screenY;

        aboutContainer.classList.remove('more', 'about--before');
        viewButton.classList.add('hide');
        hideButton.classList.remove('hide');
        bottomBar.classList.add('more--connect-full');
        aboutContainer.classList.add('about--after');
        
        setTimeout(() => {
        bottomBar.classList.remove('more--contect');
        window.scroll({ top: clickLocation, left: 0, behavior: 'smooth' });
        socialIcons.classList.add('hide');
        resume.classList.remove('hide');
    }, 600)
};

// Event listener for clicking learn more
const show = document.querySelector('#about').addEventListener('click', showAbout);







