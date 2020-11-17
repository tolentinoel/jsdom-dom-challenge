let counter = document.getElementById('counter');
let timer = setInterval(increaseNum, 1000);
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let heartButton = document.getElementById('heart');
let pauseButton = document.getElementById('pause');

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
