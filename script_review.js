'use strict';

/*
// CHAPTER DOM Manipulation and Event Handling

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

//Do smthg when check button is pressed - adding event listener
//addEventListener takes at least two arguments - ('the event we're listening for', function() {to be executed})

//CHALLENGE Guess Number Game

// CHECK Set the initial variables;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

// CHECK Functions for changing the text contents of the elements;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


// CHECK Setting the functionality of Check Button when its clicked;

document.querySelector('.check').addEventListener('click', function() {

    // !!! Retrieving the input value that user entered as guess
    const guess = Number(document.querySelector('.guess').value);

    // CHECK Checking the user input value "guess" against the "secretNumber";

    // !!! When no number entered
    if (!guess) {

        // document.querySelector('.message').textContent = 'No Number Entered!';

        //Instead of the code above we use our displayMessage function;
        displayMessage('No Number Entered!');

        // !!! When guess is correct
    } else if (guess === secretNumber) {

        displayMessage('Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // !!! When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) { //when the score is 1 it will be the last chance for the user

            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? 'Too high!' : 'Too low!'; //if guess is higher or lower

            //Instead of the code above we use our function again;
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');

            // !!! User score drops down since the guess was wrong
            score--;
            // !!! New score is displayed
            document.querySelector('.score').textContent =
                score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.score').textContent = 0;
        }
    }
    //!!! This part is commented out to compare the long version below with the short version above

    //  When guess is too high
    //} else if (guess > secretNumber) {
    //     if (score > 1) { //when the score is 1 it will be the last chance for user
    //         document.querySelector('.message').textContent =
    //             'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent =
    //             score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             'You lost the game!';
    //         document.querySelector('body').style.backgroundColor = 'red';
    //         document.querySelector('.number').textContent = secretNumber;
    //         document.querySelector('.number').style.width = '30rem';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // !!! When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {

    //         document.querySelector('.message').textContent =
    //             'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent =
    //             score;
    //     } else { // score is now 1 and when user clicks Check button and if the guess is wrong;
    //         document.querySelector('.message').textContent =
    //             'You lost the game!';
    //         document.querySelector('body').style.backgroundColor = 'red';
    //         document.querySelector('.number').textContent = secretNumber;
    //         document.querySelector('.number').style.width = '30rem';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});


// CHECK Resetting the game when the user clicks the  'Again' Button
document.querySelector('.again').addEventListener('click', function() {
    // !!! Resetting all the initial values;

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';


});
