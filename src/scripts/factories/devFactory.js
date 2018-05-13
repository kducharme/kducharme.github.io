const $ = require('jquery');

const devFactory = (oneTitle, oneBody, twoTitle, twoBody) => {
    const $row = $('<span>').addClass('skillsRow');

    // Skill one block
    const $skillOne = $('<span>')
        .addClass('skillAlt');

    const $skillOneTitle = $('<p>')
    .text(oneTitle)
    .addClass('skill__title');

    const $skillOneBody = $('<p>')
        .text(oneBody)
        .addClass('skill__body');

    $skillOne.append($skillOneTitle, $skillOneBody);
    
    // Skill two block
    const $skillTwo = $('<span>')
    .addClass('skillAlt');
    
    const $skillTwoTitle = $('<p>')
    .text(twoTitle)
    .addClass('skill__title');
    
    const $skillTwoBody = $('<p>')
    .text(twoBody)
    .addClass('skill__body');
    
    $skillTwo.append($skillTwoTitle, $skillTwoBody);

    $row.append($skillOne, $skillTwo)
    return $row
}

module.exports = devFactory;