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
            $detailsBody.text(`WaveFire is an early-stage startup that's building a cloud-based platform that simplifies the process of completing a HIPAA securtiy risk analysis in complex organizations. During a six month consultant role, I was responsible with working alongside the founders and technical team to design, test, and implement the user experience and visual design of the platform.`);

            const $detailsBodyOne = $('<p>');
            $detailsBodyOne.html(`
            <p class='case__subtitle'>The problem</p>
            <p class='page__body'> The problem that the product is trying to solve is that the process of ensuring a company is HIPAA compliant is extremely convoluted, and it's difficult for companies to minimize risk across multiple "facilities" (hospitals, medical centers, etc.). The platform utilized automation and machine learning to uncover potential risks and walk users through the compliacne process from start to finish.
            </p></br>`);

            const $detailsBodyTwo = $('<p>');
            $detailsBodyTwo.html(`
            <p class='case__subtitle'>User personas</p>
            <p class='page__body'>The Edgenet platform has two views (supplier and retailer), and I was responsible for leading the design efforts on the supplier view. For the 'supplier portal', there were two primary user types: </p></br>

            <p class='page__body'><span class='bold'>Persona 1 (Facility Managers): </span>
            
            The person responsible for a particular location of a business (hospital, doctor's office, factory, etc.), and all of the employees that work at the facility. Facility managers are typically between the ages of 45-60 and are focused on the granular, day-to-day operations of the facility. These managers are responsible for gathering and submitting all of the information associated with completing and submitting the HIPAA risk assessment profile.</br></br></p>
            
            <p class='page__body'><span class='bold'>Persona 2 (Office Managers): </span> 
            
            These users work at the company's HQ and oversee all facilities, so they're most interested in hi-level information and want to be pushed information if any facility's risk score hits a certain threshold.</br>
            
            The UX goals for both types of users were ensuring that the process was extremely simple and intuitive because utilizing the platform was anoth
            
            </p>`);

            const $detailsBodyThree = $('<p>');
            $detailsBodyThree.html(`
            <p class='case__subtitle'>High-level process</p>
            <p class='page__body'>The following were steps involved in designing the Edgenet platform experience. (note: these steps were not sequential) </p>

            <ul>
                <li class='page__list'>
                    <span class='bold'>Founder discovery: </span> 20+ hours of discovery and wireframing sessions with founders to understand the core problem, product's value proposition, and the proposed solution. The three founders have been working in the HIPAA space for more than 20 years each, so this stage of the process was invaluable to learn the ins and outs of the industry to help create an effective product design strategy.</br></br>
                </li>
                <li class='page__list'>
                    <span class='bold'>Product architecture: </span> based on many hours of discovery with founders and CTO, I developed a high-level architecture that incorporated all of the required features, goals, etc. The architecture and flow was presented to the founders and approved before starting designing. The flowchart created for the product is:</br></br>
                    <img src='./img/waveflow.jpg' class='case__imgFlow'></br>
                    <img src='./img/assign.jpg' class='case__imgFlow'></br>
                </li>
                <li class='page__list'>
                    <span class='bold'>Whiteboard ideation: </span> worked alongside the startup's CTO to rapidly create whiteboard sketches for different features. The primary goal was to create a cohesiv,e intuitive experience throughout the product. Unfortunately, I do not have any pictures to show the whiteboard.</br>
                </li>
                <li class='page__list'>
                    <span class='bold'>Wireframing & flow presentation </span> created multiple rounds of wireframing and presented to the founding team with clickable InVision prototypes. Enhancements made based on feedback from internal and external stakeholders (founders were responsible for presenting prototypes to potential customers and investors).</br>
                </li>
                <li class='page__list'>
                    <span class='bold'>High-fidelity & prototypes</span> as part of the final delivery, multiple rounds of hi-fi designs were created to be used for usability testing. In addition to this, fully interactive prototypes (for both web and tablet) were built using InVision. Final design files and protoype were delivered to the CTO for development.
                </li>
                `);

                const $detailsBodyFour = $('<p>');
                $detailsBodyFour.html(`
                <p class='case__subtitle'>Sample visuals</p>
                <p class='page__body'>Below are two samples from the Impactful platform. The visual design strategy was to build a simple, modern UI that was familiar to all users, regardless of age and tech experience, by incorporating design patterns from popular consumer apps.
                </p></br>`);

            $details.append($detailsTitle, $detailsBody, $detailsBodyOne, $detailsBodyTwo, $detailsBodyThree, $detailsBodyFour);
            return $details;
        }
    },
    caseDetails: {
        value: function () {
            const $before = $('<img>')
                .attr('src', './img/wavefirethree.png')
                .addClass('case__img');
            const $after = $('<img>')
                .attr('src', './img/wavefour.png')
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