const $ = require('jquery');
const $printArea = $('#data');

// Manages the friend view
const experienceManager = Object.create(null, {
    experienceBlock: {
        value: function () {
            const $structure = $('<span>');
            $structure.addClass('friends');

            // Gets list of friends & messages
            const $friendList = experienceManager.friendList();
            const $friendMessages = experienceManager.friendMessages();

            // Appends everything to section
            $structure.append($friendList, $friendMessages);
            $printArea.append($structure);
        }
    },
    experienceList: {
        value: function () {
            const $friendList = $('<span>');
            $friendList.addClass('friends__list');

            return $friendList;
        }
    },
    experienceMessages: {
        value: function () {
            const $friendMessages = $('<span>');
            $friendMessages.addClass('friends__messages');
            const writeMessages = experienceManager.writeMessages();
            const showMessages = experienceManager.showMessages();

            // Appending to the message block
            $friendMessages.append(showMessages, writeMessages);

            return $friendMessages;
        }
    },
    experienceMessages: {
        value: function () {
            const $postMessages = $('<span>');
            $postMessages.addClass('friends__messages--post');

            return $postMessages;
        }
    },
    experienceMessages: {
        value: function () {
            const $writeArea = $('<input>');
            $writeArea.attr('placeholder', 'Enter message');
            $writeArea.addClass('friends__messages--write');
            $writeArea.keypress(function (e) {
                if ($writeArea.val()) {
                    if (e.which === 13) {
                        experienceManager.postMessages($writeArea.val());
                        experienceManager.clearWriteArea();
                        experienceManager.scrollToBottom();
                    }
                }
            })
            return $writeArea;
        }
    }
})

module.exports = experienceManager;