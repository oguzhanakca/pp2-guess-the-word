// Elements
let difficulties = document.getElementById("difficulties");
let startScreen = document.getElementById("start-screen");
let gameScreen = document.getElementById("game-screen");

let currentWordUI = document.getElementById("current-word");

// Game Settings
let currentDifficulty;
let scoreMultiply;
let powerCost;

// Words Data
let easyWords = [
  { word: "army", hint: "soldier" },
  { word: "area", hint: "region" },
  { word: "baby", hint: "newborn" },
  { word: "ball", hint: "soccer" },
  { word: "card", hint: "poker" },
  { word: "city", hint: "London" },
  { word: "date", hint: "day/month/year" },
  { word: "duty", hint: "mission" },
  { word: "east", hint: "direction" },
  { word: "edge", hint: "rim" },
  { word: "fear", hint: "dread" },
  { word: "face", hint: "front" },
  { word: "game", hint: "chess" },
  { word: "girl", hint: "young woman" },
  { word: "hair", hint: "feather" },
  { word: "hand", hint: "paw" },
  { word: "idea", hint: "concept" },
  { word: "king", hint: "crown" },
  { word: "kind", hint: "honest" },
  { word: "page", hint: "sheet" },
  { word: "jump", hint: "bounce" },
  { word: "kill", hint: "execute" },
  { word: "wild", hint: "feral" },
];
let mediumWords = [
  { word: "apple", hint: "fruit" },
  { word: "beach", hint: "sea" },
  { word: "brain", hint: "thinking" },
  { word: "chair", hint: "furniture" },
  { word: "clock", hint: "time" },
  { word: "cloud", hint: "steam" },
  { word: "diary", hint: "journal" },
  { word: "earth", hint: "world" },
  { word: "ghost", hint: "spirit" },
  { word: "heart", hint: "love" },
  { word: "house", hint: "cottage" },
  { word: "juice", hint: "fluid" },
  { word: "light", hint: "ignite" },
  { word: "money", hint: "cash" },
  { word: "plant", hint: "tree" },
  { word: "radio", hint: "broadcasting" },
  { word: "smile", hint: "laugh" },
  { word: "snake", hint: "serpent" },
  { word: "storm", hint: "tempest" },
  { word: "table", hint: "desk" },
  { word: "tiger", hint: "cat" },
  { word: "abyss", hint: "chasm" },
];
let hardWords = [
  { word: "abroad", hint: "overseas" },
  { word: "hazard", hint: "danger" },
  { word: "almond", hint: "nut" },
  { word: "hornet", hint: "wasp" },
  { word: "ambush", hint: "trap" },
  { word: "bottle", hint: "flask" },
  { word: "bridge", hint: "arch" },
  { word: "castle", hint: "citadel" },
  { word: "church", hint: "chapel" },
  { word: "combat", hint: "battle" },
  { word: "dealer", hint: "broker" },
  { word: "danger", hint: "alert" },
  { word: "desert", hint: "sand" },
  { word: "empire", hint: "nation" },
  { word: "employ", hint: "use" },
  { word: "escape", hint: "flee" },
  { word: "fabric", hint: "cloth" },
  { word: "factor", hint: "element" },
  { word: "forest", hint: "woods" },
  { word: "gender", hint: "sex" },
  { word: "gamble", hint: "bet" },
  { word: "ground", hint: "terrain" },
  { word: "harbor", hint: "port" },
];
let gameWords;

// Event Listener
difficulties.addEventListener("click", chooseDifficulty);

// Add Space Element To UI
function startGame() {
  for (let i = 0; i < gameWords[0].word.length; i++) {
    currentWordUI.appendChild(addSpacesOnUI());
  }
  console.log(gameWords[0].word);
}
// Create Space Element
function addSpacesOnUI() {
  let space = document.createElement("div");
  space.className = "letter";
  space.textContent = "_";
  return space;
}

// Display Game Screen & Hide Start Screen
function loadGame() {
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
}

// Load Words
function loadWords(difficulty) {
  let selectedWords;
  switch (difficulty) {
    case "easy":
      selectedWords = shuffleWords(easyWords);
      scoreMultiply = 10;
      powerCost = 100;
      break;
    case "medium":
      selectedWords = shuffleWords(mediumWords);
      scoreMultiply = 15;
      powerCost = 175;
      break;
    default:
      selectedWords = shuffleWords(hardWords);
      scoreMultiply = 20;
      powerCost = 250;
      break;
  }
  return selectedWords;
}

// Words Shuffle > Fisher-Yates Sorting Algorithm
function shuffleWords(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Choose Difficulty
function chooseDifficulty(e) {
  let selectedDifficulty = e.target.getAttribute("data-type");
  currentDifficulty = selectedDifficulty;
  if (selectedDifficulty !== null) {
    gameWords = loadWords(selectedDifficulty);
    loadGame();
    startGame();
  }
}
