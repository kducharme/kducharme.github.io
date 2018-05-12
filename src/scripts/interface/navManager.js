const $ = require('jquery');
const $printArea = $('#side');

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
            $pages.append($header['PAGES'][0].textContent, $pagesLinks)

            // Appends case studies (header + links)
            $caseStudies.append($header['CASE STUDIES'][0].textContent, $studiesLinks)

            // Appends pages and case studies to page
            $printArea.append($pages, $caseStudies)
        }
    },
    navHeader: {
        value: function () {
            const titles = ['PAGES', 'CASE STUDIES']
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
            const links = ['About Me', 'Past Roles', 'Dev Skills', 'References' ]
            links.forEach(link => {
                $link = $('<p>');
                $link.on('click', function(e) {
                    console.log('woo')
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
                $link.on('click', function(e) {
                    console.log('woo')
                })
                $link.text(link)
                $link.addClass('sidenav__link')
                $structure.append($link);
            })
            return $structure;
        }
    }
})

module.exports = navManager;