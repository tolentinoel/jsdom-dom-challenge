let counter = document.getElementById('counter');
let timer = setInterval(increaseNum, 1000);
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let heartButton = document.getElementById('heart');
let pauseButton = document.getElementById('pause');
let listOfComments = document.getElementById('list');
let submit = document.getElementById('submit');

function increaseNum() {
    counter.innerText = parseInt(counter.innerText) + 1;
}

plusButton.addEventListener('click', function(){
    increaseNum();
})

function decreaseNum() {
    counter.innerText = parseInt(counter.innerText) - 1;
}

minusButton.addEventListener('click', function(){
    decreaseNum();
})


function pauseTimer() {
    if (pauseButton.innerText == 'pause') {
        pauseButton.innerText = 'resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
        clearInterval(timer);
    } else {
        pauseButton.innerText = 'pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
        timer = setInterval(increaseNum, 1000);
    }
}
pauseButton.addEventListener('click', function() {
    pauseTimer();
});


let likes = [];
let ulOfLikes = document.querySelector(".likes")

heartButton.addEventListener('click', function(){
    let number = counter.innerHTML
    if (likes[number]) {
        likes[number] += 1;
    } else {
        likes[number] = 1;
    }

    let li = document.createElement('li');
    li.id = number
    let likeString = document.createTextNode(`${number} has received ${likes[number]} like!`);
    li.appendChild(likeString);
    ulOfLikes.appendChild(li);
});


let comment = document.getElementById('comment-input').innerText

submit.addEventListener('click', function(event){
    event.preventDefault()

    let commentText = document.querySelector('input').value
    let li = document.createElement('li')
    li.innerHTML = commentText
    listOfComments.appendChild(li)

    document.querySelector('input').value = ""
});
// listOfComments.appendChild(document.getElementById('comment-input').innerText)