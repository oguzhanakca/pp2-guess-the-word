// DOM
let remainingLifeUI = document.getElementById("remaining-life");
let currentScoreUI = document.getElementById("current-score");
let historyWords = document.getElementById("history-words");
let lifePower = document.getElementById("life");
let hintPower = document.getElementById("hint");
let playerInput = document.getElementById("player-input");

// Stats
let life = 10;
let score = 500;

let hintUsed = false;
let lifeUsed = false;

eventListeners();

function eventListeners() {
  playerInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checkAnswer();
    }
  });
  lifePower.addEventListener("click", useLifePower);
}
// Check Answer
function checkAnswer() {
  let correctAnswer = gameWords[0].word;
  let playerAnswer = playerInput.value;

  if (correctAnswer === playerAnswer) {
    console.log("Correct Answer!");
  } else {
    checkLetters(correctAnswer, playerAnswer);
  }
}
// Coloring Answer
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
// Check Letters
function checkLetters(correctAnswer, playerAnswer) {
  decreaseLife();
  if (correctAnswer.length === playerAnswer.length) {
    if (life < 9) {
      addToHistoryUI(correctAnswer.length);
    }
    createAnswerElement(correctAnswer, playerAnswer);
    playerInput.value = "";
  } else {
    alert("Your answer is too short or too long!");
    playerInput.value = "";
  }
}
// Decrease Life
function decreaseLife() {
  life == 1 ? console.log("game over") : life--;
  remainingLifeUI.textContent = life;
}
// Increase Life
function increaseLife() {
  if (life < 10 && score > powerCost && !lifeUsed) {
    life++;
    decreaseScore();
    remainingLifeUI.textContent = life;
    lifeUsed = true;
  } else if (life == 10) {
    alert("You can't use this power at full life!");
  } else if (lifeUsed) {
    alert("You already used this power!");
  } else {
    alert("Your score is too low!");
  }
}
// Increase Score
function scoreIncrease() {
  let activeLife = lifeused ? life - 1 : life;
  score += activeLife * scoreMultiply;
}
function decreaseScore() {
  score -= powerCost;
}
// Show Hint
function showHint() {
  let wordHint = gameWords[0].hint;
  if (!hintUsed) {
    if (score >= powerCost) {
      alert(wordHint);
      decreaseScore();
      hintUsed = true;
    } else {
      alert("Your score is too low!");
    }
  } else {
    alert(wordHint);
  }
}

// Add Words to History
function addToHistoryUI(correctAnswerLength) {
  let currentWord = document.getElementById("current-word").children;
  let historyWord = document.createElement("div");
  historyWord.className = "history-word";
  for (let i = 0; i < correctAnswerLength; i++) {
    historyWord.appendChild(currentWord[0]);
  }
  historyWords.appendChild(historyWord);
}

// Life Power
function useLifePower() {
  if (confirm(`+1 Life costs ${powerCost} Score.\nAre you sure?`)) {
    increaseLife();
  }
}

// Hint Power
function useHintPower() {
  if (confirm(`Hint costs ${powerCost} Score.\nAre you sure?`)) {
    showHint();
  }
}
