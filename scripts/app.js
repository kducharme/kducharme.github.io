const closeContact = document.querySelector('#closeContact').addEventListener('click', hideContact)

const showMenu = () => {
    const primaryNav = document.querySelector('#primary-nav');
    const responsiveNav = document.querySelector('#responsive-nav');

    primaryNav.classList.add('hide');
    responsiveNav.classList.remove('hide');
}

const hamburger = document.querySelector('#menu').addEventListener('click', showMenu);

const hideMenu = () => {
    const primaryNav = document.querySelector('#primary-nav');
    const responsiveNav = document.querySelector('#responsive-nav');

    primaryNav.classList.remove('hide');
    responsiveNav.classList.add('hide');
}

const exit = document.querySelector('#close-menu').addEventListener('click', hideMenu);
