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
const showModal = () => {
    let modal = document.querySelector('#modal'),
        contact = document.querySelector('#contact-form'),
        closeContact = document.querySelector('#close-contact'),
        close = document.querySelector('#close');

    closeContact.classList.add('hide');
    modal.classList.remove('hide');
    contact.classList.add('hide')
}

// Event listener for showing modal after clicking 'click'
const click = document.querySelector('#click').addEventListener('click', showModal);

// Displays modal when user clicks 'interested' in modal
const expandModal = () => {
    let modal = document.querySelector('#modal'),
        container = document.querySelector('#content'),
        buttonOne = document.querySelector('#interested'),
        buttonTwo = document.querySelector('#notInterested'),
        modalTitle = document.querySelector('#modal-title'),
        modalBody = document.querySelector('#modal-body'),
        closeContact = document.querySelector('#close-contact'),
        close = document.querySelector('#close');

    buttonOne.classList.add('hide');
    buttonTwo.classList.add('hide');
    modalTitle.classList.add('hide');
    modalBody.classList.add('hide');
    close.classList.add('hide');
    closeContact.remove('hide');

    container.classList.add('content--after');
    container.classList.remove('content');
    modal.classList.remove('modal');
    modal.classList.add('modal--after');
    
    setTimeout(() => {
        showContact();
    }, 300);
}

// Event listener for showing contact form
const expand = document.querySelector('#interested').addEventListener('click', expandModal);

const showContact = () => {
    let contact = document.querySelector('#contact-form'),
        form = document.querySelector('#form'),
        contactTitle = document.querySelector('#contact-title'),
        backgroundContent = document.querySelector('#content'),
        contactBody = document.querySelector('#contact-body');

    contact.classList.remove('hide');
    form.classList.remove('hide');
    contactTitle.classList.remove('hide');
    contactBody.classList.remove('hide');
    console.log('success')
}

const contactNav = document.querySelector('#navContact').addEventListener('click', showContact)

const hideModal = () => {
    let modal = document.querySelector('#modal'),
    close = document.querySelector('#close'); 
    modal.classList.add('hide');
}

// Event listeners for closing modal
const close = document.querySelector('#close').addEventListener('click', hideModal);

const notInterested = document.querySelector('#notInterested').addEventListener('click', hideModal);

const rotateEmoji = () => {
    let emoji = document.querySelector('#emoji'),
        allEmojis = ['👯', '🤓', '🕺🏻', '🙋‍♂️', '🤘🏻', '🤸🏻‍', '👨‍💻', '🤾🏻‍♂️'],
        showEmoji, i = 0;

    let timer = setInterval(() => {
        if (allEmojis.length == i) {
            i = 0;
        }
        else {
            showEmoji = allEmojis[i];
            emoji.textContent = showEmoji;
            i++;
        }
    }, 2000);
}

const rotate = window.addEventListener('load', rotateEmoji);