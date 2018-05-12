const $ = require('jquery');
const modalFactory = require('../factories/modalFactory');
const headerManager = require('../interface/headerManager');
const buttonFactory = require('../factories/buttonFactory');
const experienceDatabase = require('../database/experienceDatabase');

// Manages all modals used throughout the app
const modalManager = Object.create(null, {
    // Adding new friend
    mWarning: {
        value: function () {
            // Creating arguments for modalFactory;
            const title = 'Site under construction'
            const details = `Whelp, this is awkward. I'm currently developing the website, so feel free to poke around. But, be warned: there are 🐛's`;
            const button = buttonFactory('modal__content--button', 'Start exploring', (function () {
                $('.modal__bg').remove();
                $('.modal__close').remove();
            }))
            const modal = modalFactory(title, details, button);

            headerManager.closeDropdown();
        }
    }
})

module.exports = modalManager;