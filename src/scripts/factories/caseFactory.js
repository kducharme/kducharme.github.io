const $ = require('jquery');

const devFactory = (before, after) => {
    const $before = $('<img>')
        .attr('src', before)
        .addClass('case__img');
    const $after = $('<img>')
        .attr('src', after)
        .addClass('case__img');

    return $row;
}

module.exports = devFactory;