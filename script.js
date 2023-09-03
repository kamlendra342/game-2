'use strict';


/*




console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='😍Correct Number'

document.querySelector('.number').textContent = 15;

document.querySelector(".score").textContent = 34;

document.querySelector('.guess').value = 98;
console.log(document.querySelector('.guess').value);


*/















let number = Math.trunc(Math.random() * 20) + 1;
console.log(number); // cheating
let highscore = 0;
let score = 13;
document.querySelector('.score').textContent = score;



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '⛔⛔ no number input '
    } 
    else if (guess === number) {
        document.querySelector('.number').textContent = number;
        document.querySelector('.message').textContent = 'correct number🫡'
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = "30rem";
        if (score >= highscore) {
            highscore = score;
        }

    }
    else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'guess is greater'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'you lost the game'
        }
    }
    else {
        if (score > 0) {
            document.querySelector('.message').textContent = 'guess is smaller'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'you lost the game'
        }
    }
document.querySelector('.highscore').textContent = highscore; 
});

document.querySelector(".again").addEventListener('click', function () {

    score = 13;
    document.querySelector('.score').textContent = score;
    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number)
    document.querySelector(".message").textContent = 'start guessing ....';
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value= '';
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = '15rem';
    
})





