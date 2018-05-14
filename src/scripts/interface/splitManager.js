const $ = require('jquery');
const $printArea = $('#primary');
const caseFactory = require('../factories/caseFactory');

// Manages the friend view
const splitManager = Object.create(null, {
    caseBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('splitsecnd');

            // Gets intro and resume entries
            const $intro = splitManager.caseIntro();
            const $images = splitManager.caseDetails();

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
            $detailsTitle.text('Vehicle Analytics Platform')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`Founded in Nashville, splitsecnd was the first plug-and-play crash response, roadside assistance, and driving analytics IoT product and platform on the market. Over the course of my 2.5 years with splitsecnd, my role focused on develping the simplest experience for drivers of all ages ranging from teens to aging seniors.`);

            const $detailsBodyTwo = $('<p>');
            $detailsBodyTwo.addClass('page__body--two');
            $detailsBodyTwo.html(`As the VP of User Experience, my responsibilities included overseeing the product design and brand team developing the end-to-end product experience ranging from packaging to web & mobile applications. In addition to this, I spent a significant amount of time working with the CEO and sales team leading product demos with potential customers and investors in the United States, Europe, and Middle East.</br></br>Samples from product:`);

            $details.append($detailsTitle, $detailsBody, $detailsBodyTwo);
            return $details;
        }
    },
    caseDetails: {
        value: function () {
            const $before = $('<img>')
                .attr('src', './img/splitsecnddata.png')
                .addClass('case__img');
            const $after = $('<img>')
                .attr('src', './img/splitsecndone.png')
                .addClass('case__img');

            const images = {
                $before,
                $after
            }

            return images;
        }
    }
})

module.exports = splitManager;