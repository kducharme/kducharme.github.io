const $ = require('jquery');
const $printArea = $('#primary');
const caseFactory = require('../factories/caseFactory');

// Manages the friend view
const aspManager = Object.create(null, {
    caseBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('asp');

            // Gets intro and resume entries
            const $intro = aspManager.caseIntro();
            const $images = aspManager.caseDetails();

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
            $detailsTitle.text('Volunteer Experience Platform')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`Based in rural east Tennessee, Appalachia Service Project (ASP) is a nonprofit that was founded in 1969 to repair and rebuild homes for low income families in Central Appalachia. Since the organization's founding, it has grown into managing more than 15,000 volunteers per year in a 5 state region.`);

            const $detailsBodyOne = $('<p>');
            $detailsBodyOne.html(`
            <p class='case__subtitle'>My role</p>
            <p class='page__body'>After working with ASP for 4 summers during college, I returned in an interim role as Head of UX & Growth to help the organization leverage technology and design to deliver an exception mission trip experience for customers. My role was focused on all aspects of the volunteer experience from learning about ASP to registration to on-site work, as well as finding ways to leverage technology to help the internal team to be more effective in their roles.</p>`);

            const $detailsBodyTwo = $('<p>');
            $detailsBodyTwo.html(`
            <p class='case__subtitle'>The problem</p>
            <p class='page__body'> Prior to joining the ASP team, the system for growing the volunteer base was utilizing outdate technology, which was forcing four employees to spend 40% of their time, worth $15,000 per employeer per year, doing tasks that could be automated. Also, the fragmented, outdated system was severely impacting the customer experience due to the registration process being confusing and time-consuming. 
            </p>`);

            const $detailsBodyThree = $('<p>');
            $detailsBodyThree.html(`
            <p class='case__subtitle'>User personas</p>
            <p class='page__body'> ASP is one of the premier mission trip organizations in the country, and more than 15,000 customers sign up for ASP mission trips per year. Groups primarily are church or civic groups, and the group sizes range from 5 to 200 people. Groups are led by a "contact person" who is responsible for registering, coordinating, and paying on behalf of the group. This person is one of two types of people:</br></br>
            </p>
            
            <p class='page__body'><span class='bold'>Persona 1 (Youth Leader): </span>
            
            The primary user/customer of ASP is a 24-30 year old male that works full-time at a church, community center, or school. Typically, this type of user is less experienced and is leading a trip for their first time. They are often overwhelmed with the responsibilities, so the experience needs to be as simple and guided as possible.</br></br>

            <p class='page__body'><span class='bold'>Persona 1 (Adult Leader): </span>
            
            About 30% of the time, the user is someone volunteering, typically female between 45-60, that's helping coordinate the trip because their son/daughter is participating as well. This type of user has more time and "forgiveness" for a poor experience but is typically less experienced with technology.
            `);

            const $detailsBodyFour = $('<p>');
            $detailsBodyFour.html(`
            <p class='case__subtitle'>My role</p>
            <p class='page__body'>After working with ASP for 4 summers during college, I returned in an interim role as Head of UX & Growth to help the organization leverage technology and design to deliver an exception mission trip experience for customers. My role was focused on all aspects of the volunteer experience from learning about ASP to registration to on-site work, as well as finding ways to leverage technology to help the internal team to be more effective in their roles.</p>`);

            const $detailsBodyFive = $('<p>');
            $detailsBodyFive.html(`
            <p class='case__subtitle'>High-level process</p>
            <p class='page__body'>The following were steps involved in designing the ASP experience. (note: these steps were not sequential) </p>

            <ul>
                <li class='page__list'>
                    <span class='bold'>Interviews: </span> conducted 25+ interviews with internal stakeholders ranging from executives to new employees to understand the state of the organization, technology, and culture. The primary goal was to better understand what hsa been done, current processes, and goals for the future.
                </li>
                <li class='page__list'>
                    <span class='bold'>New growth system: </span> after uncovering that the current growth system was outdated and forcing employees to spend 40% of their time doing things that could be automated, I implemented HubSpot as the cornerstone of our growth strategy. After two months of rolling out the system, 30% of each employees time was freed up due to standardizing the process, building out a "template" library, and leveraging automation.
                </li>
                <li class='page__list'>
                    <span class='bold'>Customer acquisition: </span> implemented a growth strategy to decrease the cost to acquire new customers, which focused on leveraging technology and expanding the team based. After a five month pilot period, I successfully scaled the team from 3 to 7 employees, and we increased our growth ROI by 379% (new revenue generated per $1 spent increased from $1.2 to $5.75.). 
                </li>
                <li class='page__list'>
                    <span class='bold'>Volunteer portal UX: </span> redesigned the volunteer portal UX and am currently consulting with the organization to develop the front-end of the application. The goal of the portal is to manage all volunteer data and payments, as well as serve as the primary way to distribute updates and information to groups. The goal of the redesign was to make the process as intuitive and automated as possible for customers to ensure the process was quick and effective.
                </li>
            </ul>
            `);

            const $detailsBodySix = $('<p>');
            $detailsBodySix.html(`
            <p class='case__subtitle'>Project outcome</p>
            <p class='page__body'>After working with the ASP team for 8 months in the interim role, the project was completed succesfully and a 12 month roadmap was developed to ensure a seamless handoff.
            </br></br>
            <img src='./img/roadmap.png' class='case__imgList'></br></br>

            Key outcomes of the project:

            <ul>
                <li class='page__list'>New process freed up 30% of four employee's time, saving the organization more than $50,000 per year</li>
                <li class='page__list'>Growth strategy generated $100k+ in new customer revenue (54% increase compared to previous three years)</li>
                <li class='page__list'>Outreach to new customers increased from 50 groups per week to 700+ due to automation</li>
                <li class='page__list'>Most importantly - team morale was boosted significantly and members empowered to manage strategy after project completion</li>
            </ul></p>`);


            const $detailsBodySeven = $('<p>');
            $detailsBodySeven.html(`
            <p class='case__subtitle'>Sampel visuals</p>
            <p class='page__body'>The following are sample visuals that were critical in updating the organization's UX and growth strategy.</p>`);

            $details.append($detailsTitle, $detailsBody, $detailsBodyOne, $detailsBodyTwo, $detailsBodyThree, $detailsBodyFour, $detailsBodyFive, $detailsBodySix, $detailsBodySeven);
            return $details;
        }
    },
    caseDetails: {
        value: function () {
            const $before = $('<img>')
                .attr('src', './img/aspone.png')
                .addClass('case__img');
            const $after = $('<img>')
                .attr('src', './img/aspone.png')
                .addClass('case__img');

            const images = {
                $before,
                $after
            }

            return images;
        }
    }
})

module.exports = aspManager;