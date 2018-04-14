getData()
let allPosts = [];

// Gets data from Firebase
function getData() {
    $.ajax({
        url: 'https://kyle-personal-blog.firebaseio.com/posts.json?print=pretty',
        type: "GET",
        success: function (data) {
            parseData(data);
            fixStyling();
        },
        error: function (error) {
            console.table('error: ' + error)
        }
    });
}

// Removes Knook page styling and editability
function fixStyling() {
    let post = document.querySelectorAll('#post-body');
    for (var i = 0; i < post.length; i++) {
        post[i].classList.remove('post-body');
        post[i].removeAttribute('contenteditable');
        post[i].classList.add('post-content');
    }
}

const showContact = () => {
    const modal = document.querySelector('#contact-modal');
    const body = document.querySelector('body');

    modal.classList.toggle('hide');
    body.classList.toggle('prevent-scroll');
}

const clickConstactInNav = document.querySelector('#navContact').addEventListener('click', showContact)

const hideContact = () => {
    const modal = document.querySelector('#contact-modal');
    const body = document.querySelector('body');

    modal.classList.toggle('hide');
    body.classList.toggle('prevent-scroll');
}

const closeContact = document.querySelector('#closeContact').addEventListener('click', hideContact)

// Parses data from Firebase's JSON data
function parseData(data) {
    let post = data;
    let keys = Object.keys(post);

    for (var i = 0; i < keys.length; i++) {
        let k = keys[i]
        let dataObj = {
            k: k,
            title: post[k].title,
            content: post[k].body,
            author: post[k].author,
            date: post[k].date
        }
        allPosts.push(dataObj)
    }
    sortPost(allPosts)
}

// Sorts posts to display most recent first
function sortPost(allPosts) {
    let posts = allPosts;
    let filteredPosts = posts.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1);
    printPosts(filteredPosts)
}

// Prints posts to page
function printPosts(filteredPosts) {
    let posts = filteredPosts;
    let printedPosts = ""
    for (var i = 0; i < allPosts.length; i++) {
        let indivPost = posts[i];
        printedPosts += `<div class="printed--post">
        <p class="post-title">${indivPost.title}<span class="post-date">${indivPost.date}</span></p>
        <p class="post-content">${indivPost.content}</p></div>`;
    }
    document.querySelector('#printed-posts').innerHTML = printedPosts;
}