const $ = require('jquery');

const modalFactory = (title, details, button) => {
    const $body = $('body');

    // Creates background structure
    const $background = $('<span>');
    $background.addClass('modal__bg');
    
    // Creates modal structure
    const $modal = $('<span>');
    $modal.addClass('modal');

    // Modal content structure
    const $content = $('<span>')
    $content.addClass('modal__content');

    // Modal title
    const $title = $('<p>');
    $title.text(title);
    $title.addClass('modal__content--title');
    $content.append($title);

    // Modal details
    const $details = $('<p>');
    $details.text(details);
    $details.addClass('modal__content--details');
    $content.append($details);

    // Appends button to modal
    $content.append(button);
    
    // Creates close button
    const $close = $('<i></i>');
    $close.addClass('material-icons');
    $close.text('close');
    $close.click(closeModal);
    
    // Appending everything together
    $modal.append($close);
    $modal.append($content);
    $background.append($modal);
    $body.append($background);
}

// Closes the modal when a user clicks the 'x'
const closeModal = () => {
    $('.modal__bg').remove();
    $('.modal__close').remove();
}

module.exports = modalFactory;