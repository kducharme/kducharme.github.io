const $ = require('jquery');
const $printArea = $('#primary');
const caseFactory = require('../factories/caseFactory');

// Manages the friend view
const edgeManager = Object.create(null, {
    caseBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('edgenet');

            // Gets intro and resume entries
            const $intro = edgeManager.caseIntro();
            const $images = edgeManager.caseDetails();

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
            $detailsTitle.text('Product Content Platform')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.html(`
            Based in Nashville, TN, Edgenet's product content platform is utilized by more than 10,000 companies and 50,000 individual users including Lowe's, Home Depot, GE, and Best Buy. Edgenet's platform makes the process of adding, managing, cleaning, and visualizing product data as simple and effective as possible. The product was originally built in 1990's with Silverlight, so the product's team task was to re-design and re-platform the product utilizing a more modern tech stack while ensuring that existing customers were supported during the migration. </br></br>
            Articles I wrote about this project:
            
            </br></br><a href='https://medium.com/@kyleducharme/usability-testing-guide-part-1-aeb933266b22' target='_blank'>Usability Testing Guide</a>
            </br></br><a href='https://medium.com/@kyleducharme/contextual-scrolling-ac27459bc68e' target='_blank'>Contextual Scrolling</a>
            </br></br><a href='https://medium.com/@kyleducharme/urgency-and-its-essential-role-in-the-design-process-ed25e5194af6' target='_blank'>Urgency and It's Role in the Design Process</a>
            `);

            const $detailsBodyOne = $('<p>');
            $detailsBodyOne.html(`
            <p class='case__subtitle'>The problem</p>
            <p class='page__body'> The problem is that the process of collecting, managing, and sending product data (logistics, marketing, etc.) to retailers is extremely complex because every retailer has different product attribute requirements. For example, Walmart might require 50 product attributes but Target requires 15 additional attributes. The goal of the product is to simplify and automate the process by integrating directly with retailers, so that the product can walk users through the process in a way that's simple, quick, and intuitive.
            </p>`);

            const $detailsBodyTwo = $('<p>');
            $detailsBodyTwo.html(`
            <p class='case__subtitle'>My role</p>
            <p class='page__body'>As the Lead UX Designer, I was responsible for managing all aspects of the product experience from problem validation and customer research to visual identity and pixel-perfect mockups.</p>`);

            const $detailsBodyThree = $('<p>');
            $detailsBodyThree.html(`
            <p class='case__subtitle'>User personas</p>
            <p class='page__body'>The Edgenet platform has two views (supplier and retailer), and I was responsible for leading the design efforts on the supplier view. For the 'supplier portal', there were two primary user types: </p></br>

            <p class='page__body'><span class='bold'>Persona 1 (Fortune 500 company): </span>
            
            If the company is at the scale of a Fortune 500 company (GE, Honeywell, Kohler, etc.), the primary user of the platform is a young female, typically between the ages of 22-30 in a Marketing Analyst or E-Commerce role, and their sole responsibility was ensuring that the product data was uploaded, accurate, and sent to retailers. This user were typically less incentivized, lacked training, and were bored with their day-to-day responsibilities. This position was a stepping stone and a way to 'get their foot in the door' to move onto more exciting roles within the marketing department.</br></br>
            
            The UX goals for this type of user were ensuring that the process was very simple (since they were not trained well) and included features that were relevant to marketing roles like e-tailer page previews, analytics, etc.</p></br>
            
            <p class='page__body'><span class='bold'>Persona 2 (Small-To-Medium Sized Companies): </span> 
            
            on the other side of the spectrum, if a company was a startup or in its growth-stage, the primary user of the platform was someone that was later in their career, typically between the ages of 35-50, that were wearing a lot of 'hats'. This responsibility fell on their plate because 1. they were the owner of the business and no one else could do it 2. no one else wanted to do it/someone recently was fired/quit, and it fell on their plate. Having the data uploaded, correct, and distributed to retailers was extremely important to this user because this symbolized growth by expanding operations into retail.</br></br>
            
            The UX goals for this type of user were to focus on integrating automation throughout the product and ensure that the process, from star to finish, was as effective and 'hand-holding' as possible.</p></br>`);

            const $detailsBodyFour = $('<p>');
            $detailsBodyFour.html(`
            <p class='case__subtitle'>High-level process</p>
            <p class='page__body'>The following were steps involved in designing the Edgenet platform experience. (note: these steps were not sequential) </p>

            <ul>
                <li class='page__list'>
                    <span class='bold'>Interviews: </span> conducted more than 100 interviews with internal and external stakeholders to understand the problem, state of product, and usability. Interviews were conducted in stages, and the questions were grouped in 5 'buckets' (profiling, problem, product, situational, solutions), which focused on learning about the core pain point the platform solves, background and interests of users, how users accomplish goals within the product, what their workstation looks like, wishlists/frustrations, and much more. Then, I built out a requirements document to finalize required features. Below is a sample of four of the 10+ pages of requirements and feedback.</br></br>
                    <img src='./img/requirements.png' class='case__imgList'></br>
                </li>
                <li class='page__list'>
                    <span class='bold'>Information architecture: </span> working with PM's, customer success, and sales, I led multiple rounds of card sorting exercises with internal and external stakeholds. Based on feedback from participants and requirements from the product team, I created a high-level flow for the product in the form of a flow-chart, which was given the 👍 by all internal stakeholders. Example flows for the product is as follows (note: right click and open in new tab):</br></br>
                    <img src='./img/tasks.jpg' class='case__imgFlow'></br>
                    <img src='./img/distribute.jpg' class='case__imgFlow'></br>
                </li>
                <li class='page__list'>
                    <span class='bold'>Initial whiteboarding: </span> worked with UX design colleague to conduct co-design session focusing on rapidly creating options (focusing on quantity over quality). At the end, our goal is to develop 10-15 different options for one feature. A sample of what the whiteboard would look like to start is below. I always write the features/needs on the left and rapidly whiteboard as many options as possible to avoid going down one path for too long.</br></br>
                    <img src='./img/whiteboard.png' class='case__imgList'></br>
                </li>
                <li class='page__list'>
                    <span class='bold'>Wireframing & usability tests: </span> developed initial wireframes and two (A/B test) goal-oriented usability tests (using clickable Balsamiq prototype) that were used to conduct tests on-site with 30+ existing users to validate architecture and feature assumptions. An overview of the usability testing strategy can be viewed here:
                    <a href='https://medium.com/@kyleducharme/usability-testing-guide-part-1-aeb933266b22' target='_blank'>Usability Testing Guide</a>
                </li>
                <li class='page__list'>
                    <span class='bold'>Medium fidelity designs & usability tests: </span> product flow was updated based on previous usability tests and fidelity of designs was improved. This stage primarily focused on in-person usability tests or utilizing Lookback.io for remote tests (both using InVision for testing), which helped dive deeper into their usage and build rapport with users.
                </li>
                <li class='page__list'>
                    <span class='bold'>Hi-fidelity designs & interactive tests: </span> product improved based on previous testing, and a more interactive prototype was built using Proto.io or Principle. Then, final usability tests (20+) were conducted with internal and external stakeholders. Final adjustments made based on feedback.
                </li>
                <li class='page__list'>
                    <span class='bold'>Design hand-off: </span> created interaction and component guides for developers, which were shared during a design/developer kick-off meeting that I led. Then, throughout the duration of the sprint building the product, we worked closely with developers to ensure final developed products matched mockups and product vision.
                </li>
            </ul>
            `);

            const $detailsBodyFive = $('<p>');
            $detailsBodyFive.html(`
            <p class='case__subtitle'>Usability testing visuals</p>
            <p class='page__body'>Below are samples from aspects of the process, specifically during early usability testing and problem definition.</br></br>

            Low-fidelity, goal oriented usability test that immersed participants in a mock story where they were employees at the supplier company "LionHeart Tools" that recently was accepted into MalMart:</br></br>
            
            <img src='./img/usability.gif' class='case__imgLow'></br></br>

            A/G tests were conducted using 7 different iterations of the same page to better understand how users interact with content and what features are most important:</br></br>
            
            <img src='./img/iterations.png' class='case__imgLow'></br></br>
            
            Additional images/prototypes used during usability testing:</br></br>
            
            <img src='./img/example.gif' class='case__imgLow'></br></br>
            <img src='./img/scroll.gif' class='case__imgLow'></br>

            </p>`);

            const $detailsBodySix = $('<p>');
            $detailsBodySix.html(`
            <p class='case__subtitle'>Sample hi-fidelity visuals</p>
            <p class='page__body'>A visual sample of the product was the re-design of the feature that helped suppliers organize, clean, and distribute product data to retailers. The feature was revamped to mirror the functionality of creating playlists in Spotify, which significantly simplified the process and ensured that users always knew where they were within the process from start-to-finish.</br></br>
            
            The following are before and afters of the same feature:

            </p>`);


            $details.append($detailsTitle, $detailsBody, $detailsBodyOne, $detailsBodyTwo, $detailsBodyThree, $detailsBodyFour, $detailsBodyFive, $detailsBodySix);

            return $details;
        }
    },
    caseDetails: {
        value: function () {
            const $before = $('<img>')
                .attr('src', './img/edgenetbefore.jpg')
                .addClass('case__img');
            const $after = $('<img>')
                .attr('src', './img/edgenetafter.png')
                .addClass('case__img');

            const images = {
                $before,
                $after
            }

            return images;
        }
    }
})

module.exports = edgeManager;