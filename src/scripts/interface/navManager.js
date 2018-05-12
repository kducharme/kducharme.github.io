const $ = require('jquery');
const $printArea = $('#side');
const headerManager = require('./headerManager');

// Manages the friend view
const navManager = Object.create(null, {
    navStructure: {
        value: function () {
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
            $caseStudies.append($header['Case studies'], $studiesLinks);

            // Appends pages and case studies to page
            $printArea.append($pages, $caseStudies);
        }
    },
    navHeader: {
        value: function () {
            const titles = ['Pages', 'Case studies'];
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
            const links = ['About me', 'Resume & education', 'Development skills', 'References']
            links.forEach(link => {
                $link = $('<p>');
                $link.attr('id', link.split(' ')[0])
                $link.on('click', function(e) {
                    $('.activeTab').empty();
                    const active = e.target.textContent;
                    const activeId = e.target.id;
                    headerManager.headerTitle(active);
                    navManager.navActive(activeId);
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
                $link.on('click', function(e) {
                    $('.activeTab').empty();
                    const active = e.target.textContent;
                    const activeId = e.target.id;
                    headerManager.headerTitle(active);
                    navManager.navActive(activeId);
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
            if (active) { activeNav = active; }
            $('.sidenav__link').removeClass('activeLink');
            $(`#${activeNav}`).addClass('activeLink');
        }
    }
})

module.exports = navManager;