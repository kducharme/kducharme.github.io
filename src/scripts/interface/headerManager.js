const $ = require('jquery');
const $printArea = $('#primary');
const buttonFactory = require('../factories/buttonFactory');
const modalFactory = require('../factories/modalFactory');

const headerManager = Object.create(null, {
    createStructure: {
        value: function () {
            // Creates the header structure
            const fragment = document.createDocumentFragment();
            const structure = document.createElement('span');
            structure.classList = 'header';
            const button = headerManager.addButton();
            const tabs = headerManager.addTabs();

            // Appends components to the header
            structure.appendChild(tabs)
            structure.appendChild(button)
            fragment.appendChild(structure)
            $printArea.append(fragment);
        }
    },
    headerTitle: {
        value: function () {
            const tabs = $('.sidenav__link')
            const $block = $('<span>');
            $block.addClass('header__tabList--$block');
            $block.attr('id', tab$)


            const $tabName = $('<p>');
            $tabName.classList = 'header__tabList--label'
            $tabName.textContent = tab;

            $activeLabel.classList.add('activeTab');
            $activeCounter.classList.add('activeCounter');

            block.appendChild(tabName)
            block.appendChild(counter)
            structure.appendChild(block)

            return structure;
        }
    },
    addButton: {
        value: function () {
            // Creating a button via buttonFactory
            const button = buttonFactory('header__button', 'Contact me', headerManager.createDropdown)
            button.innerHTML += `<img src='img/arrow-down.svg'>`;
            return button;
        }
    },
    createDropdown: {
        value: function () {
            const dropdownFactory = require('../factories/dropdownFactory');
            const modalManager = require('../modal/modalManager');
            const $body = $('body')

            // Requirements for dropdownFactory
            const options = ['Email', 'Dribbble', 'LinkedIn', 'GitHub', 'Medium']
            const optionEvent = 'modal';
            const button = $('.header__button');
            const event = (function () {
                headerManager.closeDropdown();
            })

            // Calling factory and passing arguments
            const dropdown = dropdownFactory(button, options, event, 15, -5, optionEvent);

            // Appends dropdown to the body
            $body.append(dropdown)
        }
    },
    closeDropdown: {
        value: function () {
            $('.dropdown__background').remove();
            $('.dropdown').remove();
        }
    }
})

module.exports = headerManager;