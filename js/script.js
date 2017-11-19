'use strict';

var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.last-result');
var lowOrHigh = document.querySelector('.low-or-high');

var guessField = document.querySelector('.guess-field');
var guessSubmit = document.querySelector('.guess-submit');

var guessCount = 1;
var resetButton;

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guess: '
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'It is true. You got it';
        lastResult.style.color = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Game over!';
        lastResult.style.color = 'red';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.color = 'red';
        if (userGuess > randomNumber) {
            lowOrHigh.textContent = 'Too high'
        } else if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'Too low';
        }
    }
    guessCount++;
    guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';

    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {

    var resetParas = document.querySelectorAll('.result-paras p');
    for (var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

