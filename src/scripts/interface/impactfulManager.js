const $ = require('jquery');
const $printArea = $('#primary');
const caseFactory = require('../factories/caseFactory');

// Manages the friend view
const impactfulManager = Object.create(null, {
    caseBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('impactful');

            // Gets intro and resume entries
            const $intro = impactfulManager.caseIntro();
            const $images = impactfulManager.caseDetails();

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
            $detailsTitle.text('Non-Profit Management Platform (Founder)');

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`Impactful is an open source project that I'm building to help quantify the impact that nonprofits have by utilizing a bottom-up project management approach. During my years working with non-profits, I found it extremely difficult for organizations to understand the impact that their mission was having on their target audience due to fragmented software, broken processes, and a lack of training. To help overcome this, we're building Impactful, which is a one-stop-shop to manage programs & projects, as well as simplify how digital assets are distributed internally.`);

            const $detailsBodyTwo = $('<p>');
            $detailsBodyTwo.addClass('page__body--two');
            $detailsBodyTwo.html(`The primary user of the Impactful platform is a program/project manager that's required to manage projects (either finite projects or ongoing programs) and ensure that resources are being allocated in the most responsible way. Typically, users are either recent college graduates (primarily female with minimal experience) or late in their career (ages 50+ that change adverse). Due to this, the product needs to be extremely simple to ensure that the product is onboarded into the organization's workflow and not rejected by users.</br></br>Sample screens:`);

            $details.append($detailsTitle, $detailsBody, $detailsBodyTwo);
            return $details;
        }
    },
    caseDetails: {
        value: function () {
            const $before = $('<img>')
                .attr('src', './img/impactfulone.png')
                .addClass('case__img');
            const $after = $('<img>')
                .attr('src', './img/impactfultwo.png')
                .addClass('case__img');

            const images = {
                $before,
                $after
            }

            return images;
        }
    }
})

module.exports = impactfulManager;