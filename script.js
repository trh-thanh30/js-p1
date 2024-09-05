"use strict";

let numberGuess = Math.trunc(Math.random() * 20) + 1;
let number = (document.querySelector(".number").value = numberGuess);
let score = Number(document.querySelector(".score").textContent);
let highscore = Number(document.querySelector(".highscore").textContent);
console.log(score);
console.log(number);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > number ? "📈 Too high!" : "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  numberGuess = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
