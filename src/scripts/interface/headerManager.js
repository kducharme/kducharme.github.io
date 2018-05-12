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
    addTabs: {
        value: function () {
            // Creates the container for the tabs
            const structure = document.createElement('span');
            const tabs = ['About']
            structure.classList = 'header__tabList';

            // Adds the tab content to the container
            tabs.forEach(tab => {
                const block = document.createElement('span');
                block.classList = 'header__tabList--block';
                block.setAttribute('id', tab)
                block.addEventListener('click', function(e) {
                    headerManager.navigateTabs(e)
                })
                const tabName = document.createElement('p');
                tabName.classList = 'header__tabList--label'
                tabName.textContent = tab;

                const counter = document.createElement('p');
                counter.classList = 'header__tabList--counter'
                counter.textContent = 'Active'
                
                block.appendChild(tabName)
                block.appendChild(counter)
                structure.appendChild(block)
            })
            return structure;
        }
    },
    navigateTabs: {
        value: function (e) {
            // Selecting the default active tab (friends)
            let $activeTab = $('#About');
            let $activeLabel = $('#About')[0].childNodes[0];
            let $activeCounter = $('#About')[0].childNodes[1];

            // If a tab has been clicked, it toggles active tab
            if (e) {
                $activeTab = e.currentTarget;
                $activeLabel = $activeTab.childNodes[0];
                $activeCounter = $activeTab.childNodes[1];
            }

            // Adds styling to the active tab
            $('.header__tabList--label').removeClass('activeTab');
            $('.header__tabList--counter').removeClass('activeCounter');
            $activeLabel.classList.add('activeTab');
            $activeCounter.classList.add('activeCounter');
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
            const event = (function() {
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