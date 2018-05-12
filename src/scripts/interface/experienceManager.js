const $ = require('jquery');
const $printArea = $('#primary');

// Manages the friend view
const experienceManager = Object.create(null, {
    experienceBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('experience');

            // Gets list of friends & messages
            const $experienceAbout = experienceManager.experienceOverview();
            const $experienceSkills = experienceManager.experienceSkills();
            const $experienceAdditional = experienceManager.experienceAdditional();

            // Appends everything to section
            $structure.append($experienceAbout, $experienceSkills, $experienceAdditional);
            $printArea.append($structure);
        }
    },
    experienceOverview: {
        value: function () {
            const $about = $('<span>');
            $about.addClass('experience__about');

            const $aboutTitle = $('<p>');
            $aboutTitle.addClass('experience__about--title');
            $aboutTitle.text('Hi, my name is Kyle.')

            const $aboutBody = $('<p>');
            $aboutBody.addClass('experience__about--body');
            $aboutBody.text(`I'm a Nashville-based user experience (UX), user interface (UI) designer, and front-end developer that loves bringing ideas to life. Over the past five years, I've worked in a variety of roles that have allowed me to build products that have helped keep drivers safer, businesses more efficient, and hospitals safer. Now, I'm on a mission to partner with companies that build experiences that are engaging, thoughtful, and intuitive.`);

            const $aboutBodyTwo = $('<p>');
            $aboutBodyTwo.addClass('experience__about--bodyTwo');
            $aboutBodyTwo.text(`Before focusing on product design full-time, I wore a variety of hats ranging from teacher 👨‍🏫 to ballroom dance instructor 💃 to contsruction manager 👷‍♂️  to coffee importer ☕️. Luckily, although these roles weren't focusing on product design, they helped shape how I connect, teach, communicate, learn, and grow, which are integral parts of being a designer.`);

            $about.append($aboutTitle, $aboutBody, $aboutBodyTwo);
            return $about;
        }
    },
    experienceSkills: {
        value: function () {
            const $skills = $('<span>');
            $skills.addClass('experience__skills');

            // First skill
            const $skillOne = $('<span>');
            $skillOne.addClass('skill');

            const $skillOneTitle = $('<p>');
            $skillOneTitle.addClass('experience__skills--title');
            $skillOneTitle.text('User Experience Design')

            const $skillOneBody = $('<p>');
            $skillOneBody.addClass('experience__skills--body');
            $skillOneBody.text(`From small startups to Fortune 50 brands, I've led design teams building products that are helping make businesses and people more effective.`)
            $skillOne.append($skillOneTitle, $skillOneBody);
            
            // Second skill
            const $skillTwo = $('<span>')
            $skillTwo.addClass('skill')

            const $skillTwoTitle = $('<p>');
            $skillTwoTitle.addClass('experience__skills--title');
            $skillTwoTitle.text('Front-End Development')

            const $skillTwoBody = $('<p>');
            $skillTwoBody.addClass('experience__skills--body');
            $skillTwoBody.text(`Beyond a pixel perfect mockup, I work to build ideas to live through development, utilizing HTMl, CSS, and JavaScript (plus React & jQuery)`)
            $skillTwo.append($skillTwoTitle, $skillTwoBody);
            
            $skills.append($skillOne, $skillTwo);
            return $skills;
        }
    },
    experienceAdditional: {
        value: function () {
            const $additional = $('<span>');
            $additional.addClass('experience__add');
            
            const $additionalTitle = $('<p>');
            $additionalTitle.addClass('experience__add--title');
            $additionalTitle.text('My focus')

            const $additionalBody = $('<p>');
            $additionalBody.addClass('experience__add--bodyAlt');
            $additionalBody.text(`My focus is on extracting frustrations, opportunities, and innefficiencies and building experiences that are engaging, thoughtful, intuitive, and delightful. I believe that effective design is deeper than a beautiful UI (although that's part of it), and that shipped is better than perfect. If you're looking for a designer and developer that loves designing experiences and focuses on bringing products & features to market, let's chat.`);

            $additional.append($additionalTitle, $additionalBody);
            return $additional;
        }
    },
})

module.exports = experienceManager;