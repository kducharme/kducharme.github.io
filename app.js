
const fullScreen = (e) => {
    let bg = document.querySelector('#learn-more'),
        container = document.querySelector('#more'),
        location = e.screenY;

    bg.classList.remove('more--connect');
    bg.classList.add('more--connect-full');
    container.classList.remove('more');

    scrollTo(location)
}

const scroll = document.querySelector('#more').addEventListener('click', fullScreen);

const scrollTo = (location) => { 
    window.scrollTo(0, location - 50);
}




