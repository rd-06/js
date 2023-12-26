'use strict';

let seceretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(seceretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === seceretNumber) {
    displayMessage('🎉 Correct Number');
    // document.querySelector('.number').textContent = '🎉';
    document.querySelector('body').style.backgroundColor = 'greenyellow';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== seceretNumber) {
    if (score > 1) {
      displayMessage(
        guess > seceretNumber ? 'guess is too high' : 'guess is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  seceretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = 'rgb(172, 171, 171)';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
