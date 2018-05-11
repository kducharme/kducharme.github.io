const $ = require('jquery');
const $printArea = $('#side');

// Manages the friend view
const experienceManager = Object.create(null, {
    experienceBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('experience');

            // Gets list of friends & messages
            const $experienceAbout = experienceManager.experienceOverview();
            const $experienceSkills = experienceManager.experienceSkills();

            // Appends everything to section
            $structure.append($experienceAbout, $experienceSkills);
            $printArea.append($structure);
        }
    }
})

module.exports = experienceManager;