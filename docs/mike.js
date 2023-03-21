"use strict";

/* === Funktionen === */

const headline = function (text) {
  document.querySelector(".headline").textContent = text;
};

const randomBox = function (rand) {
  document.querySelector(".random-box").textContent = rand;
};

const bodyColor = function (color) {
  document.querySelector(".random-box").style.backgroundColor = color;
  document.querySelector("body").style.backgroundColor = color;
};

const message = function (text) {
  document.querySelector(".message").textContent = text;
};

const scoreValue = function (score) {
  document.querySelector(".score").textContent = score;
};

const incorrectGuess = function (guess, random) {
  if (score > 1) {
    message(guess < random ? "⏬ Too low" : "⏫ Too high");
    score--;
    scoreValue(score);
  } else {
    // <- GAME OVER
    message("💀 RIP -> GG");
    scoreValue(0);
    bodyColor("#000");
    randomBox("XX");
    headline("💀 GAME OVER 💀");
  }
};

/* === VARIABLEN === */

let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

/* === PROGRAMM CHECK === */

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#input-field").value);
  bodyColor("#4f5750");

  if (!guess) {
    message("⛔ Invalid input!"); // <- Invalid input
    bodyColor("#5c1111");
  } else if (guess < 1 || guess > 20) {
    // <- Out of range
    message("⛔ Outside range!");
    bodyColor("#5c1111");
  } else if (guess === randomNumber) {
    // <- Correct guess
    message("🥳 You guessed correct");
    bodyColor("#156615");
    randomBox(randomNumber);
    headline("🏋️ YOU WIN 🏋️");
    if (score > highscore) {
      // <- Incorrect guess
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess < randomNumber || guess > randomNumber) {
    incorrectGuess(guess, randomNumber);
  }
});

/* === PROGRAMM AGAIN === */

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  message("Start guessing...");
  scoreValue(20);
  bodyColor("#4f5750");
  randomBox("?");
  headline("Guess My Number!");
});
