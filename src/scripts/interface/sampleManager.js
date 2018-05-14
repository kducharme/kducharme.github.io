const $ = require('jquery');
const $printArea = $('#primary');

// Manages the friend view
const sampleManager = Object.create(null, {
    caseBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('samples');

            // Gets intro and resume entries
            const $intro = sampleManager.caseIntro();
            const $images = sampleManager.caseDetails();

            // Appends everything to section
            $structure.append($intro, $images.$one, $images.$two, $images.$three, $images.$four, $images.$five, $images.$seven, $images.$eight, $images.$nine, $images.$ten, $images.$eleven);
            $printArea.append($structure);
        }
    },
    caseIntro: {
        value: function () {
            const $details = $('<span>');
            $details.addClass('resume__details');

            const $detailsTitle = $('<p>');
            $detailsTitle.addClass('page__title');
            $detailsTitle.text('UX/UI Design Samples')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`Below are sample mockups from different projects that I've worked on with clients. If you're interested in a more in-depth look into the products, check out the case studies pages.`);

            $details.append($detailsTitle, $detailsBody);
            return $details;
        }
    },
    caseDetails: {
        value: function () {
            const $one = $('<img>')
                .attr('src', './img/k1.png')
                .addClass('case__imgAlt');
            const $two = $('<img>')
                .attr('src', './img/k2.png')
                .addClass('case__imgAlt');
            const $three = $('<img>')
                .attr('src', './img/k12.jpg')
                .addClass('case__imgAlt');
            const $four = $('<img>')
                .attr('src', './img/k4.png')
                .addClass('case__imgAlt');
            const $five = $('<img>')
                .attr('src', './img/k5.png')
                .addClass('case__imgAlt');
            const $seven = $('<img>')
                .attr('src', './img/k7.png')
                .addClass('case__imgAlt');
            const $eight = $('<img>')
                .attr('src', './img/k8.png')
                .addClass('case__imgAlt');
            const $nine = $('<img>')
                .attr('src', './img/k9.png')
                .addClass('case__imgAlt');
            const $ten = $('<img>')
                .attr('src', './img/k10.png')
                .addClass('case__imgAlt');
            const $eleven = $('<img>')
                .attr('src', './img/k13.png')
                .addClass('case__imgAlt');

            const images = {
                $one,
                $two,
                $three,
                $four,
                $five,
                $seven,
                $eight,
                $nine,
                $ten,
                $eleven
            }

            return images;
        }
    }
})

module.exports = sampleManager;