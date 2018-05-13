const $ = require('jquery');
const $printArea = $('#primary');
const resumeFactory = require('../factories/resumeFactory');

// Manages the friend view
const devManager = Object.create(null, {
    devBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('development');

            // Gets intro and resume entries
            const $intro = devManager.devIntro();
            const $rowOne = devManager.devRowOne();

            // Appends everything to section
            $structure.append($intro);
            $printArea.append($structure);
        }
    },
    devIntro: {
        value: function () {
            const $details = $('<span>');
            $details.addClass('resume__details');

            const $detailsTitle = $('<p>');
            $detailsTitle.addClass('page__title');
            $detailsTitle.text('Front-end development')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`My experience with software development commenced when I started designing websites for clients back in 2013. From messing around with CSS to optimizing HTML for SEO, it exposed me to the power of code. Now, with the help amazing mentors (and a lot of coffee), I'm a front-end developer that's focused on building pixel perfect UI's and seamless experiences.`);

            $details.append($detailsTitle, $detailsBody);
            return $details;
        }
    },
    devRowOne: {
        value: function () {

            skillOneTitle= 'HTML';
            skillOneBody = 'Writing easy-to-read, SEO-optimized HTML as a building block for a web app.';

            skillTwoTitle= 'CSS';
            skillTwoBody = `Utilizing vanilla CSS and libraries to develop pixel-perfect, interactive UI'.`;


            const $skillTwoTitle = $('<p>');
            $skillTwoTitle.addClass('experience__skills--title');
            $skillTwoTitle.text('CSS')

            const $skillTwoBody = $('<p>');
            $skillTwoBody.addClass('experience__skills--body');
            $skillTwoBody.text(``)
            $skillTwo.append($skillTwoTitle, $skillTwoBody);
            
            $skills.append($skillOne, $skillTwo);
            return $skills;
        }
    },
})

module.exports = devManager;