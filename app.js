const showContactForm = () => {
    const modal = document.querySelector('#contact-modal');
    const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    
    modal.classList.toggle('prevent-scroll')
    modal.classList.toggle('hide');
    // body.classList.toggle('prevent-scroll');
}

const clickConstactInNav = document.querySelector('#navContact').addEventListener('click', showContactForm)

const hideContact = () => {
    const contactModal = document.querySelector('#contact-modal');
    const modal = document.querySelector('#modal');
    const body = document.querySelector('body');

    contactModal.classList.add('hide');
    modal.classList.add('hide');
    body.classList.toggle('prevent-scroll');
}

const closeContact = document.querySelector('#closeContact').addEventListener('click', hideContact)
