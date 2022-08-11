'use strict';
const checkBtn = document.querySelector('.check');
let displayText = document.querySelector('.message');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let label = document.querySelector('.number');
let currentScore = 20;
let score = document.querySelector('.score');
let againBtn = document.querySelector('.again');
let highScoreEle  = document.querySelector('.highscore');

checkBtn.addEventListener('click', function () {
  const guessInput = Number(document.querySelector('.guess').value);

  if (!guessInput) {
    displayText.textContent = '⛔ Enter Number';
  }

  // if Wins!!
  else if (guessInput === randomNumber) {
    displayText.textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#087c27';
    label.style.width = '20rem';
    highScoreEle.textContent = Math.max(Number(highScoreEle.textContent),currentScore)
    label.textContent = randomNumber;

  }

  // if Number is Low
  else if (guessInput < randomNumber) {
    if (currentScore > 1) {
      displayText.textContent = '📉 Too Low';
      currentScore--;
      score.textContent = currentScore;
    } else {
      displayText.textContent = '🛑 You lost the game';
      score.textContent = 0;
    }

    // if Number is High
  } else if (guessInput > randomNumber) {
    if (currentScore > 1) {
      displayText.textContent = '📈 Too High';
      currentScore--;
      score.textContent = currentScore;
    } else {
      displayText.textContent = '🛑 You lost the game';
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  score.textContent = currentScore;
  document.querySelector('body').style.backgroundColor = '#222';
  displayText.textContent = 'Start guessing...';
  label.textContent = "?";
  document.querySelector('.guess').value = '';
  label.style.width = '15rem';
});
