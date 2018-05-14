const $ = require('jquery');
const $printArea = $('#primary');
const devFactory = require('../factories/devFactory');

// Manages the friend view
const devManager = Object.create(null, {
    devBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('development');

            // Gets intro and resume entries
            const $intro = devManager.devIntro();
            const $rowOne = devManager.devRowOne();
            const $rowTwo = devManager.devRowTwo();
            const $rowThree = devManager.devRowThree();

            // Appends everything to section
            $structure.append($intro, $rowOne, $rowTwo, $rowThree);
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
            $detailsBody.html(`My experience with software development commenced when I started designing websites for clients back in 2013. From messing around with CSS to optimizing HTML for SEO, it exposed me to the power of code. Now, with the help of amazing mentors (and a lot of coffee), I'm a front-end developer that's focused on building pixel perfect UI's and seamless experiences. View samples:</br></br>
            <a href='https://github.com/kducharme' target='_blank'>GitHub Profile</a></br></br>
            <a href='https://slack-kd.firebaseapp.com/' target='_blank'>Sample project rebuilding Slack</a></br></br>
            <a href='https://github.com/kducharme/website' target='_blank'>This website's repository</a>

            `);

            $details.append($detailsTitle, $detailsBody);
            return $details;
        }
    },
    devRowOne: {
        value: function () {
            oneTitle= 'HTML';
            oneBody = 'Writing readable, SEO-optimized HTML as a building block for apps';
            twoTitle= 'CSS';
            twoBody = `Utilizing vanilla CSS and libraries to develop pixel-perfect, interactive UI's`;

            const $row = devFactory(oneTitle, oneBody, twoTitle, twoBody)
            return $row;
        }
    },
    devRowTwo: {
        value: function () {
            oneTitle= 'JavaScript';
            oneBody = 'Bringing a web app to life with vanilla JS, jQuery, and React';
            twoTitle= 'Git & GitHub';
            twoBody = `Managing source control locally and collaboratively with colleagues`;

            const $row = devFactory(oneTitle, oneBody, twoTitle, twoBody)
            return $row;
        }
    },
    devRowThree: {
        value: function () {
            oneTitle= 'Grunt';
            oneBody = 'Managing tasks and automating the development process with Grunt and other apps';
            twoTitle= 'SQL/NoSQL';
            twoBody = `Leveraging data to design the most useful experiences for users`;

            const $row = devFactory(oneTitle, oneBody, twoTitle, twoBody)
            return $row;
        }
    },
})

module.exports = devManager;