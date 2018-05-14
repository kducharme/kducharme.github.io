const $ = require('jquery');
const $printArea = $('#primary');
const caseFactory = require('../factories/caseFactory');

// Manages the friend view
const waveManager = Object.create(null, {
    caseBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('wavefire');

            // Gets intro and resume entries
            const $intro = waveManager.caseIntro();
            const $images = waveManager.caseDetails();

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
            $detailsTitle.text('HIPAA Compliance Platform')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`WaveFire is an early-stage startup that's building a cloud-based platform that simplifies the process of completing a HIPAA securtiy risk analysis in complex organizations. During a six month consultant role, I was responsible with working alongside the founders and technical team to design, test, and implement the user experience and visual design of the platform. There were two primary user types:`);

            const $detailsBodyTwo = $('<p>');
            $detailsBodyTwo.addClass('page__body--two');
            $detailsBodyTwo.html(`1. Facility Managers: The person responsible for a particular location of a business (hospital, doctor's office, factory, etc.), and all of the employees that work at the facility. Facility managers are typically between the ages of 45-60 and are focused on the granular, day-to-day operations of the facility. These managers are responsible for gathering and submitting all of the information associated with completing and submitting the HIPAA risk assessment profile.
            
            </br></br>Office Managers: These users work at the company's HQ and oversee all facilities, so they're most interested in hi-level information and want to be pushed information if any facility's risk score hits a certain threshold
            
            </br></br>Sample screens:`);

            $details.append($detailsTitle, $detailsBody, $detailsBodyTwo);
            return $details;
        }
    },
    caseDetails: {
        value: function () {
            const $before = $('<img>')
                .attr('src', './img/wavefirethree.png')
                .addClass('case__img');
            const $after = $('<img>')
                .attr('src', './img/wavefirefour.png')
                .addClass('case__img');

            const images = {
                $before,
                $after
            }

            return images;
        }
    }
})

module.exports = waveManager;