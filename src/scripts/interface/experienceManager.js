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

            // Appends everything to section
            $structure.append($experienceAbout, $experienceSkills);
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
            $aboutBody.text(`I'm a Nashville-based user experience (UX) and user interface (UI) designer with technical chops that loves bringing ideas to life. Over the past five years, I've been blessed with opportunities to build products that have helped keep drivers safer, businesses more efficient, and hospitals safer.`);

            $about.append($aboutTitle, $aboutBody);
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
            $skillOneTitle.text('User Experience')
            const $skillOneBody = $('<p>');
            $skillOneBody.addClass('experience__skills--body');
            $skillOneBody.text('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesen et iusto odio dignissimos ducimus qui blanditiis praesen.')
            $skillOne.append($skillOneTitle, $skillOneBody);
            
            // Second skill
            const $skillTwo = $('<span>')
            $skillTwo.addClass('skill')

            const $skillTwoTitle = $('<p>');
            $skillTwoTitle.addClass('experience__skills--title');
            $skillTwoTitle.text('Front-End Dev')
            const $skillTwoBody = $('<p>');
            $skillTwoBody.addClass('experience__skills--body');
            $skillTwoBody.text('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesen et iusto odio dignissimos ducimus qui blanditiis praesen.')
            $skillTwo.append($skillTwoTitle, $skillTwoBody);
            
            $skills.append($skillOne, $skillTwo);
            return $skills;
        }
    },
})

module.exports = experienceManager;