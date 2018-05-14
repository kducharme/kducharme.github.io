const $ = require('jquery');
const $printArea = $('#side');
const headerManager = require('./headerManager');

// Manages the friend view
const navManager = Object.create(null, {
    navStructure: {
        value: function () {

            // navManager.mobileNav();

            const $pages = $('<span>');
            $pages.addClass('sidenav');

            const $caseStudies = $('<span>');
            $caseStudies.addClass('sidenav');

            // Gets content to populate side nav
            const $header = navManager.navHeader();

            $pagesLinks = navManager.navPages();
            $studiesLinks = navManager.navStudies();

            // Appends primary pages (header + links)
            $pages.append($header['Pages'], $pagesLinks);

            // Appends case studies (header + links)
            $caseStudies.append($header['Sample work'], $studiesLinks);

            // Appends pages and case studies to page
            $printArea.append($pages, $caseStudies);
        }
    },
    navHeader: {
        value: function () {
            const titles = ['Pages', 'Sample work'];
            let headers = {};
            titles.forEach(t => {
                const $head = $('<p>');
                $head.text(t)
                $head.addClass('sidenav__header');
                headers[$head.text()] = $head;
            })
            return headers;
        }
    },
    navPages: {
        value: function () {
            const $structure = $('<span>');
            const links = ['About me', 'Resume & education', 'Development skills']
            links.forEach(link => {
                $link = $('<p>');
                $link.attr('id', link.split(' ')[0])
                $link.on('click', function (e) {
                    $('.activeTab').empty();
                    const active = e.target.textContent;
                    const activeId = e.target.id;
                    headerManager.headerTitle(active);
                    navManager.navActive(activeId);
                    navManager.navShowContent(activeId)
                    navManager.closeAfterClick();
                })
                $link.text(link)
                $link.addClass('sidenav__link')
                $structure.append($link);
            })
            return $structure;
        }
    },
    navStudies: {
        value: function () {
            const $structure = $('<span>');
            const links = ['Edgenet', 'Impactful', 'WaveFire', 'splitsecnd', 'ASP']
            links.forEach(link => {
                $link = $('<p>');
                $link.attr('id', link)
                $link.on('click', function (e) {
                    $('.activeTab').empty();
                    const active = e.target.textContent;
                    const activeId = e.target.id;
                    headerManager.headerTitle(active);
                    navManager.navActive(activeId);
                    navManager.navShowContent(activeId)
                    navManager.closeAfterClick();
                })
                $link.text(link)
                $link.addClass('sidenav__link')
                $structure.append($link);
            })
            return $structure;
        }
    },
    navActive: {
        value: function (active) {
            let activeNav = 'About';
            if (active) { activeNav = active };
            $('.sidenav__link').removeClass('activeLink');
            $(`#${activeNav}`).addClass('activeLink');
        }
    },
    navShowContent: {
        value: function (activeId) {
            let activeBlock = 'About';
            if (activeId) { activeBlock = activeId };
            const resumeManager = require('../interface/resumeManager');
            const devManager = require('../interface/devManager');
            const refManager = require('../interface/refManager');
            const edgeManager = require('../interface/edgeManager');
            const impactfulManager = require('../interface/impactfulManager');
            const waveManager = require('../interface/waveManager');
            const splitManager = require('../interface/splitManager');
            const aspManager = require('../interface/aspManager');
            switch (activeBlock) {
                case 'About':
                    $('.experience').show();
                    $('.resume, .development, .references, .edgenet, .splitsecnd, .impactful, .wavefire, .asp').hide();
                    break;
                case 'Resume':
                    $('.resume').remove();
                    resumeManager.resumeBlock();
                    $('.experience, .development, .references, .edgenet, .splitsecnd, .impactful, .wavefire, .asp').hide();
                    break;
                case 'Development':
                    $('.development').remove();
                    devManager.devBlock();
                    $('.experience, .resume, .references, .edgenet, .splitsecnd, .impactful, .wavefire, .asp').hide();
                    break;
                case 'References':
                    $('.references').remove();
                    refManager.refBlock();
                    $('.experience, .resume, .development, .edgenet, .splitsecnd, .impactful, .wavefire, .asp').hide();
                    break;
                case 'Edgenet':
                    $('.edgenet').remove();
                    edgeManager.caseBlock();
                    $('.experience, .resume, .development, .references, .splitsecnd, .impactful, .wavefire, .asp').hide();
                    break;
                case 'Impactful':
                    $('.impactful').remove();
                    impactfulManager.caseBlock();
                    $('.experience, .resume, .development, .references, .splitsecnd, .edgenet, .wavefire, .asp').hide();
                    break;
                case 'WaveFire':
                    $('.wavefire').remove();
                    waveManager.caseBlock();
                    $('.experience, .resume, .development, .references, .splitsecnd, .impactful, .edgenet, .asp').hide();
                    break;
                case 'splitsecnd':
                    $('.splitsecnd').remove();
                    splitManager.caseBlock();
                    $('.experience, .resume, .development, .references, .edgenet, .impactful, .edgenet, .asp').hide();
                    break;
                case 'ASP':
                    $('.asp').remove();
                    aspManager.caseBlock();
                    $('.experience, .resume, .development, .references, .edgenet, .impactful, .edgenet, .splitsecnd').hide();
                    break;
            }
        }
    },
    openMobileNav: {
        value: function () {
            $('.menu').on('click', function () {
                if ($('#side').css('display') === 'none') {
                    $('#side').css('display', 'block')
                    navManager.closeMobileNav();
                }
            })
        }
    },
    closeMobileNav: {
        value: function () {
            $('.menu').on('click', function () {
                $('#side').css('display', 'none')
                navManager.openMobileNav();
            })
        }
    },

    closeAfterClick: {
        value: function () {
            if ($(window).width() < 500) {
                $('#side').css('display', 'none')
            }
        }
    }
})

module.exports = navManager;