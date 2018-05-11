const $ = require('jquery');

const dropdownFactory = (button, options, eventListener, addLeft, addTop, optionEvent) => {
    const structure = document.createElement('span');
    const buttonPosition = $(button).position()

    // Creates background that, on click, closes dropdown
    const bg = document.createElement('span');
    bg.classList = 'dropdown__background';
    bg.addEventListener('click', eventListener)

    // Create dropdown structure
    const dropdown = document.createElement('span');
    dropdown.classList = 'dropdown';

    // Positions dropdown based on button position
    dropdown.style.left = `${buttonPosition.left + addLeft}px`;
    dropdown.style.top = `${buttonPosition.top + addTop}px`;    

    // Adds options to the dropdown
    options.forEach(o => {
        const option = document.createElement('a')
        option.textContent = o;
        option.classList = 'dropdown__option';
        option.setAttribute('id', `m${o}`)
        let link = '';
        switch(o) {
            case 'Email':
                link = 'mailto:ducharme.kyle@gmail.com?Subject=Hello!'
                break;
            case 'Dribbble':
                link = 'https://dribbble.com/kducharme'
                option.setAttribute('target', '_blank');
                break;
            case 'LinkedIn':
                link = 'https://dribbble.com/kducharme'
                option.setAttribute('target', '_blank');
                break;
            case 'GitHub':
                link = 'https://github.com/kducharme'
                option.setAttribute('target', '_blank');
                break;
            case 'Medium':
                link = 'https://medium.com/@kyleducharme'
                option.setAttribute('target', '_blank');
                break;
        }
    option.href = link;
        dropdown.appendChild(option);
    })
    structure.appendChild(bg);
    structure.appendChild(dropdown);

    return structure;
}

module.exports = dropdownFactory;