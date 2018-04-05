
const fullScreen = (e) => {
    let bg = document.querySelector('#learn-more'),
        container = document.querySelector('#more'),
        backTop = document.querySelector('#learn'),
        location = e.screenY;

    bg.classList.add('more--connect-full'),
    bg.classList.remove('more--connect');
    container.classList.remove('more');
    
    setTimeout(() => {
        window.scroll({ top: location, left: 0, behavior: 'smooth' });
        backTop.setAttribute('id', 'less')
        backTop.innerHTML = 'Back to top';
        document.querySelector('#less').addEventListener('click', backToTop);
    }, 600);
}

const show = document.querySelector('#more').addEventListener('click', fullScreen);

const backToTop = () => {
    let backTop = document.querySelector('#less'),
        container = document.querySelector('#more'),
        bg = document.querySelector('#learn-more');

    backTop.textContent = 'Learn more';

    bg.classList.remove('more--connect-full'),
    bg.classList.add('more--connect');
    container.classList.add('more');

    setTimeout(() => {
        backTop.scroll({ top: 0, left: 0, behavior: 'smooth' });
        backTop.setAttribute('id', 'more');
        document.querySelector('#more').addEventListener('click', fullScreen);
    }, 1000);
}








