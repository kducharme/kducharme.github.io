const $ = require('jquery');
const $printArea = $('#primary');
const resumeFactory = require('../factories/resumeFactory');

// Manages the friend view
const resumeManager = Object.create(null, {
    resumeBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('resume');

            // Gets intro and resume entries
            const $resumeDetails = resumeManager.resumeIntro();
            const $resumeOne = resumeManager.resumeOne();

            // Appends everything to section
            $structure.append($resumeDetails, $resumeOne);
            $printArea.append($structure);
        }
    },
    resumeIntro: {
        value: function () {
            const $details = $('<span>');
            $details.addClass('resume__details');

            const $detailsTitle = $('<p>');
            $detailsTitle.addClass('resume__details--title');
            $detailsTitle.text('Experiences.')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('resume__details--body');
            $detailsBody.text(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`);

            $details.append($detailsTitle, $detailsBody);
            return $details;
        }
    },
    resumeOne: {
        value: function () {
            const company = 'kyleducharme.com';
            const role = 'UX/UI Design Consultant';
            const details = `Conceptualizing, launching, and scaling products alongside partners via end-to-end product design and front-end development. Partners range from seed-stage startups launching a product to growth-stage companies with thousands of users. Example projects include leading the re-design of a product content platform utilized by 8,000 enterprise companies, designing a HIPAA compliance platform alongside founders to raise VC funding, and designing an open-source program management platform for non-profits.`
            const experience = resumeFactory(company, role, details)

            return experience;
        }
    }
})

module.exports = resumeManager;