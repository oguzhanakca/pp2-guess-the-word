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
  { word: "army", hint: "A particular country's fighting force" },
  {
    word: "area",
    hint: "A particular part of a place, piece of land, or country",
  },
  {
    word: "baby",
    hint: "A very young child, especially one that has not yet begun to walk or talk",
  },
  {
    word: "ball",
    hint: "Any object in the shape of a sphere, especially one used as a toy by children or in various sports such as tennis and football",
  },
  { word: "city", hint: "a large town" },
  {
    word: "date",
    hint: "A numbered day in a month, often given with a combination of the name of the day, the month, and the year",
  },
  {
    word: "duty",
    hint: "Something that you have to do because it is part of your job, or something that you feel is the right thing to do",
  },
  {
    word: "east",
    hint: "The direction from which the sun rises in the morning, opposite to the west, or the part of an area or country that is in this direction",
  },
  {
    word: "edge",
    hint: "The direction from which the sun rises in the morning, opposite to the west, or the part of an area or country that is in this direction",
  },
  {
    word: "fear",
    hint: "An unpleasant emotion or thought that you have when you are frightened or worried by something dangerous, painful, or bad that is happening or might happen",
  },
  {
    word: "face",
    hint: "The front of the head, where the eyes, nose, and mouth are",
  },
  {
    word: "game",
    hint: "An entertaining activity or sport, especially one played by children, or the equipment needed for such an activity",
  },
  {
    word: "girl",
    hint: "A female child or young woman, especially one still at school",
  },
  {
    word: "hair",
    hint: "The mass of thin thread-like structures on the head of a person, or any of these structures that grow out of the skin of a person or animal",
  },
  {
    word: "hand",
    hint: "The part of the body at the end of the arm that is used for holding, moving, touching, and feeling things",
  },
  { word: "idea", hint: "A suggestion or plan for doing something" },
  {
    word: "king",
    hint: "The title of a male ruler of a country, who holds this position because of his royal birth",
  },
  {
    word: "kind",
    hint: "Generous, helpful, and thinking about other people's feelings",
  },
  {
    word: "page",
    hint: "A side of one of the pieces of paper in a book, newspaper, or magazine, usually with a number printed on it",
  },
  {
    word: "jump",
    hint: "To push yourself suddenly off the ground and into the air using your legs",
  },
  { word: "kill", hint: "To cause someone or something to die" },
  { word: "wild", hint: "Uncontrolled, violent, or extreme" },
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
      powerCost = 50;
      break;
    case "medium":
      selectedWords = shuffleWords(mediumWords);
      scoreMultiply = 15;
      powerCost = 75;
      break;
    default:
      selectedWords = shuffleWords(hardWords);
      scoreMultiply = 20;
      powerCost = 100;
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
