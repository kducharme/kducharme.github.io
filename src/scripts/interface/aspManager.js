const $ = require('jquery');
const $printArea = $('#primary');
const caseFactory = require('../factories/caseFactory');

// Manages the friend view
const aspManager = Object.create(null, {
    caseBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('asp');

            // Gets intro and resume entries
            const $intro = aspManager.caseIntro();
            const $images = aspManager.caseDetails();

            // Appends everything to section
            $structure.append($intro, $images.$before, $images.$after);
            $printArea.append($structure);
        }
    },
    caseIntro: {
        value: function () {
            const $details = $('<span>');
            $details.addClass('resume__details');

            const $detailsTitle = $('<p>');
            $detailsTitle.addClass('page__title');
            $detailsTitle.text('Appalachia Service Project')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`Based in rural east Tennessee, Appalachia Service Project (ASP) is a nonprofit that was founded in 1969 to repair and rebuild homes for low income families in Central Appalachia. After working with ASP for 4 summers during college, I returned in an interim role to help the organization leverage technology and design to deliver an exception mission trip experience for customers. As the Interim Head of Experience, my role was focused on all aspects of the volunteer experience from learning about ASP to registration to on-site work, as well as finding ways to leverage technology to help the internal team to be more effective in their roles.`);

            const $detailsBodyTwo = $('<p>');
            $detailsBodyTwo.addClass('page__body--two');
            $detailsBodyTwo.html(`One of the key components to the experience is the way in which customers register for a mission trip. With groups ranging from 5 to 200 people, the process needed to be streamlined and simple to minimize drop-offs and cut down on the time from registration to completion. Also, as ASP mission trips are paid in installments, the process of collective funds from customers needed to be simple and intuitive.</br></br>Sample screens:`);

            $details.append($detailsTitle, $detailsBody, $detailsBodyTwo);
            return $details;
        }
    },
    caseDetails: {
        value: function () {
            const $before = $('<img>')
                .attr('src', './img/aspone.png')
                .addClass('case__img');
            const $after = $('<img>')
                .attr('src', './img/aspone.png')
                .addClass('case__img');

            const images = {
                $before,
                $after
            }

            return images;
        }
    }
})

module.exports = aspManager;