'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "correct number";
// document.querySelector('.score').textContent = 50;
// document.querySelector('.guess').value = 12;
// const number = document.querySelector('.guess').value;
// console.log(number);
let number = Math.trunc(Math.random() * 20) + 1;

let score = 3;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = `Not a Number`;
    } else if (guess === number) {
        document.querySelector('.message').textContent = 'yay you got the number';
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;
        document.querySelector('.number').textContent = number;
        if (score > highScore) {
            highScore = score;
            document.querySelector(`.highscore`).textContent = highScore;
        }

    } else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost this game';
            document.querySelector(`body`).style.backgroundColor = `red`
        }
    } else if (guess < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `you lost the game`;
            document.querySelector(`body`).style.backgroundColor = `red`;
        }
    }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 3;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`.message`).textContent = `Start guessing...`;
    document.querySelector(`.guess`).value = ``;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(`.number`).textContent = `?`;

})
