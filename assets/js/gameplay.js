// DOM
let remainingLifeUI = document.getElementById("remaining-life");
let currentScore = document.getElementById("current-score");
let historyWords = document.getElementById("history-words");
let lifePower = document.getElementById("life");
let hintPower = document.getElementById("hint");
let playerInput = document.getElementById("player-input");

// Stats
let life = 5;
let score = 0;
let hintUsed = false;
let lifeUsed = false;

eventListeners();

function eventListeners() {
  playerInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checkAnswer();
    }
  });
}

function checkAnswer() {
  let correctAnswer = gameWords[0].word;
  let playerAnswer = playerInput.value;
  if (correctAnswer.length === playerAnswer.length) {
    createAnswerElement(correctAnswer, playerAnswer);
  } else {
    alert("Your answer is too short or too long!");
    playerInput.value = "";
  }
}

function createAnswerElement(correctAnswer, playerAnswer) {
  currentWordUI.innerHTML = "";
  for (let i = 0; i < playerAnswer.length; i++) {
    let letter = document.createElement("div");
    letter.textContent = playerAnswer[i];
    if (correctAnswer[i] === playerAnswer[i]) {
      letter.className = "letter correct-answer";
    } else if (correctAnswer.includes(playerAnswer[i])) {
      letter.className = "letter wrong-place";
    } else {
      letter.className = "letter wrong-answer";
    }
    currentWordUI.appendChild(letter);
  }
}

function correctLetter(element) {}
