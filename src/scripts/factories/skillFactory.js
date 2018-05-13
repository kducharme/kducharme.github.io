const $ = require('jquery');

const skillFactory = () => {
    const $row = $('<span>');
    $row.addClass('experience__skills');

    const $skillOne = $('<span>')
        .addClass('skill');

    const $skillOneTitle = $('<p>')
        .text(skillOneTitle);

    const $skillOneBody = $('<p>')
        .text(skillOneBody)
        .addClass('skills__title')


    const $skillTwo = $('<span>')
    $skillTwo.addClass('skill');



    return $row
}

module.exports = skillFactory;