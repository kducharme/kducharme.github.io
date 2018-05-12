const $ = require('jquery');
const $printArea = $('#side');

// Manages the friend view
const navManager = Object.create(null, {
    navStructure: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('experience');

        }
    },
    navHeader: {
        value: function () {
            const $structure = $('<span>');

        }
    },
    navLinks: {
        value: function () {
            const $structure = $('<span>');
            const links = ['About Me', 'Past Roles', 'Technical Skills']

        }
    },
})

module.exports = navManager;