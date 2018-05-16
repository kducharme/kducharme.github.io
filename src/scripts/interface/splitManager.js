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

            // Appends everything to section
            $structure.append($intro);
            $printArea.append($structure);
        }
    },
    caseIntro: {
        value: function () {
            const $details = $('<span>');
            $details.addClass('resume__details');

            const $detailsTitle = $('<p>');
            $detailsTitle.addClass('page__title');
            $detailsTitle.text('Vehicle Analytics Platform (VP, UX)')

            const $detailsBody = $('<p>');
            $detailsBody.addClass('page__body');
            $detailsBody.text(`Founded in Nashville, splitsecnd was the first plug-and-play crash response, roadside assistance, and driving analytics IoT product and platform on the market. Over the course of my 2.5 years with splitsecnd, my role focused on develping the simplest experience for drivers of all ages ranging from teens to aging seniors.`);

            const $detailsBodyOne = $('<p>');
            $detailsBodyOne.html(`
            <p class='case__subtitle'>The problem</p>
            <p class='page__body'> The problem that the product is solving is that built-in crash response, roadside assistance, and vehicle analytics were only available on new cars, and available IoT devices only worked in vehicles manufactured after 1996. splitsecnd was building a plug-and-play, simple device that would work in any vehicle manufactured after 1926.
            </p>`);

            const $detailsBodyTwo = $('<p>');
            $detailsBodyTwo.html(`
            <p class='case__subtitle'>My role</p>
            <p class='page__body'>As the VP of User Experience, my responsibilities included overseeing the product design and brand team developing the end-to-end product experience ranging from packaging to web & mobile applications. In addition to this, I spent a significant amount of time working with the CEO and sales team leading product demos with potential customers and investors in the United States, Europe, and Middle East.</p>`);

            const $detailsBodyThree = $('<p>');
            $detailsBodyThree.html(`
            <p class='case__subtitle'>User personas</p>
            <p class='page__body'>Initially, the product was developed by the founders for individual consumers, specifically targeting Baby Boomers to purchase for aging parents or teen drivers. But, after years of being able to find product market fit, the company pivoted to focus on building a product that could be white-labeled by business customers, including AAA, Uber, and more. Regardless, the end user of the platform remained the same (drivers between 16-21 and 65+), but the core offering was sold in bulk to large businesses in the US, Europe, and Middle East.</br></br>
            <a href='https://docs.google.com/document/d/13fewICcXMX6mdUog2cWyebpItfG8MFLI0oCXMpzo_6g/edit?usp=sharing' target='_blank'>View full persona document</a>
            </p></br>`);

            const $detailsBodyFour = $('<p>');
            $detailsBodyFour.html(`
            <p class='case__subtitle'>Responsibilities & focus</p>
            <p class='page__body'>The following were aspects in designing the splitsecnd product experience. Note: during my time at splitsecnd, I wore a lot of hats and am more than happy to go into more detail on a call to unpack the following information. </p>
            
            <ul>
            <li class='page__list'>
                <span class='bold'>Feature validation/development </span> worked directly with customers ranging from startups to large brands including AAA, Valeo, and Uber to understand product requirements, research technical implications, and prioritize based on business needs. Then, after determining the roadmap (viewed below), I worked with the dev team to design, develop, and test the product before managing pilots with customers. </br></br>
                <img src='./img/features.png' class='case__imgFlow'></br>
            </li>
            <li class='page__list'>
                <span class='bold'>Competitor analysis </span> developed competitor analysis to better understand market landscape, which directly impacted the feature roadmap, persona development, and design direction.</br></br>
            </li>
            <li class='page__list'>
                    <span class='bold'>Administrative portal UX: </span> worked with large customers ranging from AAA to Uber to Valeo to determine required features and experience for the administrative portal, which was responsible for all device management, activation, bulk analytics, etc. This portal was primarily used by our B2B customers and would be the command center for managing all devices in the field. During the development of this business-facing feature, I spent a significant amount of time meeting with companies to determine needs, as well as working with our manufacturing team to understand the end-to-end device manufacturing and activation process. Below is the architecture of the admin portal (open in a new tab to view full version): </br></br>
                    <img src='./img/admin.jpg' class='case__imgFlow'></br>
                </li>
                <li class='page__list'>
                    <span class='bold'>Mobile application UX: </span> developed the mobile application, which was the primary product used by end consumers. The app provided features like real-time locator, geofencing, trip history, and speeding notifications. During this time, I also served as interim product manager and was directly responsible for managing 8 developers. Below is the architecture and flow of the app flow: </br></br>
                    <img src='./img/app.jpg' class='case__imgFlow'></br>
                    <img src='./img/appflow.jpg' class='case__imgFlow'></br>
                </li>
                <li class='page__list'>
                    <span class='bold'>Web application UX: </span> in addition to the mobile application, I also designed the UX/UI for the web application, which was primarily used by businesses to manage fleets. Below is the architecture and flow of the app flow: </br></br>
                </li>
                <li class='page__list'>
                    <span class='bold'>International product/UX testing: </span> as our product was utilized in the US, Europe, and Middle East, I was responsible for the internalization and testing of the product. As such, I spent significant time in the Middle East and Europe ensuring that the end-to-end product experience was seamless regardless of the location. </br></br>
                </li>
            </ul>
            `);

            const $detailsBodyFive = $('<p>');
            $detailsBodyFive.html(`
            <p class='case__subtitle'>UX Visuals</p>
            <p class='page__body'>Below are samples from aspects of the product experience:</br></br>
            
            <img src='./img/email.png' class='case__img'></br></br>
            <img src='./img/splitsecndone.png' class='case__img'></br></br>
            <img src='./img/setup.gif' class='case__img'></br></br>
            <img src='./img/widgets.png' class='case__img'></br></br>
            <img src='./img/timeline.png' class='case__imgAlt'></br></br>

            </p>`);

            $details.append($detailsTitle, $detailsBody, $detailsBodyOne, $detailsBodyTwo, $detailsBodyThree, $detailsBodyFour, $detailsBodyFive);
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