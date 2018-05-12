const $ = require('jquery');
const $printArea = $('#primary');
const buttonFactory = require('../factories/buttonFactory');
const modalFactory = require('../factories/modalFactory');

const headerManager = Object.create(null, {
    createStructure: {
        value: function () {
            // Creates the header structure
            const $structure = $('<span>')
            $structure.addClass('header');

            const $button = headerManager.addButton();

            // Appends components to the header
            $structure.append($button)
            $printArea.append($structure);
        }
    },
    headerTitle: {
        value: function (active) {
            const $block = $('<span>');
            $block.addClass('header__tabList--$block');

            let activeTab = 'About me';
            
            if (active) {
                activeTab = active;
            }

            const $tabName = $('<p>');
            $tabName.addClass('header__tabList--label')
            $tabName.addClass('activeTab')
            $tabName.text(activeTab)

            $block.append($tabName);
            $('.header').append($block);
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