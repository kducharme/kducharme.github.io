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
            const $resumeTwo = resumeManager.resumeTwo();
            const $resumeThree = resumeManager.resumeThree();
            const $resumeFour = resumeManager.resumeFour();
            const $resumeFive = resumeManager.resumeFive();
            const $resumeEducation = resumeManager.resumeEducation();

            // Appends everything to section
            $structure.append($resumeDetails, $resumeOne, $resumeTwo, $resumeThree, $resumeFour, $resumeFive, $resumeEducation);
            $printArea.append($structure);
        }
    },
    resumeIntro: {
        value: function () {
            const $details = $('<span>');
            $details.addClass('resume__details');

            const $detailsTitle = $('<p>');
            $detailsTitle.addClass('page__title');
            $detailsTitle.text('Resume & education');

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`Back in 2010, I paused my college experience and spent 12 months managing thousands of volunteers rebuilding homes for non-profits around the US. During that time, I fell in love with creating experiences that are thoughtful, memorable, engaging, and simple. Now, more than seven years later, I'm still focusing on creating the best experience for customers (just with more of a focus on digital UX).`);

            $details.append($detailsTitle, $detailsBody);
            return $details;
        }
    },
    resumeEducation: {
        value: function () {
            const $details = $('<span>');
            $details.addClass('resume__details');

            const $detailsTitle = $('<p>');
            $detailsTitle.addClass('page__subtitle');
            $detailsTitle.text('Education')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.html(`
            Belmont University (BA, Entrepreneurship) - 3.7 GPA</br>
            Nashville Software School (Front-End Development)
            `);

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
    },
    resumeTwo: {
        value: function () {
            const company = 'Edgenet';
            const role = 'Lead UX Designer';
            const details = `Led the redesign of Edgenet's product content platform, which simplifies the process of managing, cleaning, visualizing, and distributing product data — utilized by more than 8,000 businesses including Lowe's, Home Depot, and Best Buy.`
            const experience = resumeFactory(company, role, details)

            return experience;
        }
    },
    resumeThree: {
        value: function () {
            const company = 'splitsecnd';
            const role = 'VP, User Experience';
            const details = `Led the product design team in designing, developing, and launching splitsecnd's crash response, driving analytics, and roadside assistance platform in the US, Europe, and Middle East.`
            const experience = resumeFactory(company, role, details)

            return experience;
        }
    },
    resumeFour: {
        value: function () {
            const company = 'Kao Jai Coffee (Acquired)';
            const role = 'Founder';
            const details = `Founded coffee importing & eCommerce company sourcing beans directly from farmers in Northern Thailand. After importing 10,000+ pounds of coffee and securing distribution into 45 Kroger stores, we were acquired.`
            const experience = resumeFactory(company, role, details)

            return experience;
        }
    },
    resumeFive: {
        value: function () {
            const company = 'Appalachia Service Project';
            const role = 'Program Manager';
            const details = `Led multiple teams (24 total employees) overseeing 4,000+ volunteers, $500k+ in aggregate spending, and 100+ construction projects repairing homes for low-income families.`
            const experience = resumeFactory(company, role, details)

            return experience;
        }
    }
})

module.exports = resumeManager;