// Rotates emojis in hero text on loading
const rotateEmoji = () => {
    let emoji = document.querySelector('#emoji'),
        allEmojis = ['👯', '🤓', '🕺🏻', '🙋‍♂️', '🤘🏻', '🤸🏻‍', '👨‍💻', '🤾🏻‍♂️'],
        showEmoji, i = 0;

    let timer = setInterval(() => {
        if (allEmojis.length == i) {
            i = 0;
        }
        else {
            showEmoji = allEmojis[i];
            emoji.textContent = showEmoji;
            i++;
        }
    }, 2000);
}

const rotate = window.addEventListener('load', rotateEmoji);