// DOM
let remainingLifeUI = document.getElementById("remaining-life");
let currentScoreUI = document.getElementById("current-score");
let historyWords = document.getElementById("history-words");
let lifePower = document.getElementById("life");
let hintPower = document.getElementById("hint");
let playerInput = document.getElementById("player-input");
let nextButton = document.getElementById("next-button");
let resetButton = document.getElementById("reset-button");
let congratzWordUI = document.getElementById("congratz-word");
let congratzScoreUI = document.getElementById("congratz-score");
let wrongWordUI = document.getElementById("wrong-word");
let wrongScoreUI = document.getElementById("wrong-score");
let wrongResetButton = document.getElementById("wrong-reset-button");
let endGameScore = document.getElementById("end-game-score");
let endGameResetButton = document.getElementById("end-game-reset");
let howToPlayButton = document.getElementById("how-to-play");
let correctAnswerScreen = document.getElementById("correct-answer-screen");
let wrongAnswerScreen = document.getElementById("wrong-answer-screen");
let endGameScreen = document.getElementById("end-game");

// Stats
let maxLife = 10;
let currentLife = maxLife;
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
  lifePower.addEventListener("click", useLifePower);
  hintPower.addEventListener("click", useHintPower);
  nextButton.addEventListener("click", loadNextWord);
  resetButton.addEventListener("click", resetGame);
  wrongResetButton.addEventListener("click", resetGame);
  endGameResetButton.addEventListener("click", resetGame);
  howToPlayButton.addEventListener("click", howToPlay);
}

// Show How To Play
function howToPlay() {
  let explanation =
    "Red Background = Word doesn't contains the letter.\nYellow Background = Word contains the letter, but its in the wrong place.\nGreen Background = Word contains letter and its in correct place.\n- Every power can be used once every word.\nHeart = Gives +1 Life\nLight Bulb = Gives info about current word.\n- Hint can be viewed many times on same word if its bought once\nPower costs change with game difficulty.";
  alert(explanation);
}
// Check Answer
function checkAnswer() {
  let correctAnswer = gameWords[0].word;
  let playerAnswer = playerInput.value;
  if (correctAnswer.toUpperCase() === playerAnswer.toUpperCase()) {
    inreaseScore();
    if (gameWords.length == 1) {
      showEndGameScreen();
    } else {
      loadCorrectAnswerScreen();
    }
  } else {
    checkLetters(correctAnswer, playerAnswer);
  }
}
// Coloring Answer
function createAnswerElement(correctAnswer, playerAnswer) {
  currentWordUI.innerHTML = "";
  for (let i = 0; i < playerAnswer.length; i++) {
    let letter = document.createElement("div");
    letter.textContent = playerAnswer[i].toUpperCase();
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
    if (currentLife < 6) {
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
  if (currentLife == 1) {
    statsGameOver();
    gameOver();
  } else {
    currentLife--;
  }
  remainingLifeUI.textContent = currentLife;
}
// Increase Life
function increaseLife() {
  if (currentLife < maxLife && score > powerCost && !lifeUsed) {
    currentLife++;
    decreaseScore();
    remainingLifeUI.textContent = currentLife;
    lifeUsed = true;
  } else if (currentLife == maxLife) {
    alert("You can't use this power at full life!");
  } else if (lifeUsed) {
    alert("You already used this power!");
  } else {
    alert("Your score is too low!");
  }
}
// Increase Score
function inreaseScore() {
  let activeLife = lifeUsed ? currentLife - 1 : currentLife;
  score += activeLife * scoreMultiply;
  currentScoreUI.textContent = score;
}
function decreaseScore() {
  score -= powerCost;
  currentScoreUI.textContent = score;
}
// Show Hint
function showHint() {
  let wordHint = gameWords[0].hint.toUpperCase();
  if (!hintUsed) {
    if (score >= powerCost) {
      alert("Your Hint : " + wordHint);
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

// Load Correct Answer Screen
function loadCorrectAnswerScreen() {
  gameScreen.style.display = "none";
  correctAnswerScreen.style.display = "block";
  showStatsOnAnswerScreen();
}
// Show Stats on Congratz Screen
function showStatsOnAnswerScreen() {
  congratzWordUI.textContent = gameWords[0].word.toUpperCase();
  congratzScoreUI.textContent = score;
}

// Show Stats Game Over Screen
function statsGameOver() {
  wrongWordUI.textContent = gameWords[0].word.toUpperCase();
  wrongScoreUI.textContent = score;
}

// Game Over Screen
function gameOver() {
  wrongAnswerScreen.style.display = "block";
  gameScreen.style.display = "none";
}

// Load Next Word
function loadNextWord() {
  gameWords.shift();
  resetGameScreen();
  startGame();
  correctAnswerScreen.style.display = "none";
  gameScreen.style.display = "flex";
}

// Reset Game Screen
function resetGameScreen() {
  currentLife = maxLife;
  remainingLifeUI.textContent = currentLife;
  hintUsed = false;
  lifeUsed = false;
  historyWords.innerHTML = "";
  currentWordUI.innerHTML = "";
  playerInput.value = "";
}

// Reset Game
function resetGame() {
  score = 0;
  currentScoreUI.textContent = score;
  resetGameScreen();
  correctAnswerScreen.style.display = "none";
  wrongAnswerScreen.style.display = "none";
  endGameScreen.style.display = "none";
  startScreen.style.display = "block";
}

function showEndGameScreen() {
  gameScreen.style.display = "none";
  endGameScreen.style.display = "block";
  endGameScore.textContent = score;
}
