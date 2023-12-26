const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const score0El = document.getElementById('score-0');
const score1El = document.getElementById('score-1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current-0');
const current1El = document.getElementById('current-1');
const btnRoll = document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player-winner');
  player1El.classList.remove('player-winner');
  player0El.classList.add('player-active');
  player1El.classList.remove('player-active');
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player-active');
  player1El.classList.toggle('player-active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // roll the dice
    const dice = Math.trunc(Math.random() * 5 + 1);
    diceEl.classList.remove('hidden');
    // display dice
    diceEl.src = `dice-${dice}.png`;

    // check for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    // adding current score  to player score
    score[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      score[activePlayer];

    // check score > 100
    if (score[activePlayer] > 10) {
      playing = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-winner');
    } else {
      // switch the player
      switchPlayer();
    }
  }
});

btnnew.addEventListener('click', init);
