"use strict";

const player0Ele = document.querySelector(".player--0");
const player1Ele = document.querySelector(".player--1");
const newGameEle = document.querySelector(".btn--new");
const rollDiceEle = document.querySelector(".btn--roll");
const holdEle = document.querySelector(".btn--hold");
const diceImg = document.querySelector(".dice");
const score0Ele = document.getElementById("score--0");
const score1Ele = document.getElementById("score--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let playing = true;

// hide dice at beginning
diceImg.classList.add("hidden");

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Ele.classList.toggle("player--active");
  player1Ele.classList.toggle("player--active");
}

rollDiceEle.addEventListener("click", function () {
  if (playing) {
    diceImg.classList.remove("hidden");
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    // console.log(randomNumber);
    diceImg.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      // add curr
      currentScore += randomNumber;
      // currentScore0.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

holdEle.addEventListener("click", function () {
  if (playing) {
    // store score in array
    scores[activePlayer] += currentScore;

    // display on DOM
    console.log(
      (document.querySelector(`#score--${activePlayer}`).textContent =
        scores[activePlayer])
    );

    if (scores[activePlayer] >= 20) {
      // player wins | game finish
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      playing = false;
      diceImg.classList.add("hidden");
    } else {
      // switch player
      switchPlayer();
    }
  }
});

newGameEle.addEventListener("click", function () {
  scores = [0, 0];
  console.log(activePlayer);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  playing = true;
  currentScore = 0;
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
});
