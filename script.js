'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const setScore = function(newScore) {
    document.querySelector('.score').textContent = newScore;
}

//Retrieving our elements
const number = document.querySelector('.number');
const body = document.querySelector('body');
const userGuess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

// !!! Setting the functionality of Check Button when its clicked;

checkButton.addEventListener('click', function() {

    const guess = Number(userGuess.value);

    if (!guess) {
        displayMessage('No Number Entered!');

        // When Guess is Correct
    } else if (guess === secretNumber) {

        displayMessage('Correct Number!');

        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        number.textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When Guess is Wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {

            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            setScore(score);

        } else {

            displayMessage('You lost the game!');
            body.style.backgroundColor = 'red';
            number.textContent = secretNumber;
            number.style.width = '30rem';
            setScore(0);
        }
    }
});


againButton.addEventListener('click', function() {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    displayMessage('Start guessing...');
    setScore(score);
    userGuess.value = '';
    number.textContent = '?';


});
