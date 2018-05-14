const $ = require('jquery');
const $printArea = $('#primary');
const caseFactory = require('../factories/caseFactory');

// Manages the friend view
const edgeManager = Object.create(null, {
    caseBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('edgenet');

            // Gets intro and resume entries
            const $intro = edgeManager.caseIntro();
            const $images = edgeManager.caseDetails();

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
            $detailsTitle.text('Product Content Platform')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`Based in Nashville, TN, Edgenet is a growth-stage SaaS company that's product, utilized by more than 8,000 companies including Lowe's, Home Depot, GE, and Best Buy, makes the process of adding, managing, cleaning, and visualizing product data as simple and effective as possible. The product was originally built in 1990's with Silverlight, so the product's team task was to re-design and re-platform the product utilizing a more modern tech stack while ensuring that existing customers were supported during the migration.`);

            const $detailsBodyTwo = $('<p>');
            $detailsBodyTwo.addClass('page__body--two');
            $detailsBodyTwo.html(`As the Lead Product Designer, I was responsible for managing all aspects of the design experience and visual identity for the re-design of the platform. My day-to-day focus ranged from conducting user interviews and usability tests to designing hi-fidelity mockups and prototypes to working with developers during the implementation phase.</br></br>Before and after:`);

            $details.append($detailsTitle, $detailsBody, $detailsBodyTwo);
            return $details;
        }
    },
    caseDetails: {
        value: function () {
            const $before = $('<img>')
                .attr('src', './img/edgenetbefore.jpg')
                .addClass('case__img');
            const $after = $('<img>')
                .attr('src', './img/edgenetafter.png')
                .addClass('case__img');

            const images = {
                $before,
                $after
            }

            return images;
        }
    }
})

module.exports = edgeManager;