const body = document.getElementsByTagName('body');

// User clicks 'learn more' and the about section becomes full screen
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

// Event listener for clicking 'learn more'
const show = document.querySelector('#about').addEventListener('click', showAbout);

// Displays modal when user clicks 'click' on hero image
const clickHero = () => alert('ha');

// Event listener for clicking 'click'
const click = document.querySelector('#click').addEventListener('click', clickHero);

const rotateEmoji = () => {
    let emoji = document.querySelector('#emoji'),
        allEmojis = ['👯', '🤓', '🕺🏻', '🙋‍♂️', '🤘🏻', '🤸🏻‍'],
        showEmoji, i = 0;

    setInterval(() => {
        if (allEmojis.length == i) {
            i = 0;
        }
        else {
            showEmoji = allEmojis[i];
            emoji.textContent = showEmoji;
            i++;
        }
    }, 4000);
}

const rotate = window.addEventListener('load', rotateEmoji, false);