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
  {
    word: "apple",
    hint: "A round fruit with firm, white flesh and a green, red, or yellow skin",
  },
  {
    word: "beach",
    hint: "An area of sand or small stones near the sea or another area of water such as a lake",
  },
  {
    word: "brain",
    hint: "The organ inside the head that controls thought, memory, feelings, and activity",
  },
  {
    word: "chair",
    hint: "A seat for one person that has a back, usually four legs, and sometimes two arms",
  },
  {
    word: "clock",
    hint: "A device for measuring and showing time, usually found in or on a building and not worn by a person",
  },
  {
    word: "cloud",
    hint: "A grey or white mass in the sky, made up of very small floating drops of water",
  },
  {
    word: "diary",
    hint: "A book in which you record your thoughts or feelings or what has happened each day",
  },
  {
    word: "earth",
    hint: "The planet third in order of distance from the sun, between Venus and Mars; the world on which we live",
  },
  {
    word: "ghost",
    hint: "The spirit of a dead person, sometimes represented as a pale, almost transparent image of that person that some people believe appears to people who are alive",
  },
  {
    word: "heart",
    hint: "The organ in your chest that sends the blood around your body",
  },
  {
    word: "house",
    hint: "A building that people, usually one family, live in",
  },
  { word: "juice", hint: "The liquid that comes from fruit or vegetables" },
  {
    word: "light",
    hint: "The brightness that comes from the sun, fire, etc. and from electrical devices, and that allows things to be seen",
  },
  {
    word: "money",
    hint: "Coins or special pieces of paper that are used to buy things, or an amount of these that a person has",
  },
  {
    word: "plant",
    hint: "A living thing that grows in earth, in water, or on other plants, usually has a stem, leaves, roots, and flowers, and produces seeds",
  },
  {
    word: "radio",
    hint: "A piece of electronic equipment used for listening to radio broadcasts",
  },
  {
    word: "smile",
    hint: "A happy or friendly expression on the face in which the ends of the mouth curve up slightly, often with the lips moving apart so that the teeth can be seen",
  },
  { word: "snake", hint: "A reptile with a long body and no legs" },
  {
    word: "storm",
    hint: "An extreme weather condition with very strong wind, heavy rain, and often thunder and lightning",
  },
  {
    word: "table",
    hint: "A flat surface, usually supported by four legs, used for putting things on",
  },
  {
    word: "tiger",
    hint: "A large wild animal of the cat family with yellowish-orange fur with black lines that lives in parts of Asia",
  },
  { word: "abyss", hint: "A very deep hole that seems to have no bottom" },
];
let hardWords = [
  { word: "abroad", hint: "In or to a foreign country or countries" },
  {
    word: "hazard",
    hint: "Something that is dangerous and likely to cause damage",
  },
  {
    word: "almond",
    hint: "An edible oval nut with a hard shell, or the tree that it grows on",
  },
  { word: "hornet", hint: "A large wasp that can give you a bad sting" },
  {
    word: "ambush",
    hint: "To suddenly attack someone after hiding and waiting for them",
  },
  {
    word: "bottle",
    hint: "A container for liquids, usually made of glass or plastic, with a narrow neck",
  },
  {
    word: "bridge",
    hint: "A structure that is built over a river, road, or railway to allow people and vehicles to cross from one side to the other",
  },
  {
    word: "castle",
    hint: "A large strong building, built in the past by a ruler or important person to protect the people inside from attack",
  },
  { word: "church", hint: "A building for Christian religious activities" },
  { word: "combat", hint: "A fight, especially during a war" },
  { word: "dealer", hint: "A person who trades in something" },
  { word: "danger", hint: "The possibility of harm or death to someone" },
  {
    word: "desert",
    hint: "An area, often covered with sand or rocks, where there is very little rain and not many plants",
  },
  {
    word: "empire",
    hint: "A group of countries ruled by a single person, government, or country",
  },
  {
    word: "employ",
    hint: "To have someone work or do a job for you and pay them for it",
  },
  {
    word: "escape",
    hint: "To get free from something such as a prison or cage, or from someone who will not allow you to leave",
  },
  {
    word: "fabric",
    hint: "Cloth or material for making clothes, covering furniture, etc.",
  },
  {
    word: "factor",
    hint: "A fact or situation that influences the result of something",
  },
  {
    word: "forest",
    hint: "A large area of land covered with trees and plants, usually larger than a wood, or the trees and plants themselves",
  },
  {
    word: "gender",
    hint: "A group of people in a society who share particular qualities or ways of behaving which that society associates with being male, female, or another identity",
  },
  {
    word: "gamble",
    hint: "To do something that involves risks that might result in loss of money or failure, hoping to get money or achieve success",
  },
  { word: "ground", hint: "The surface of the earth" },
  {
    word: "harbor",
    hint: "An area of water next to the coast, often protected from the sea by a thick wall, where ships and boats can shelter",
  },
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
      scoreMultiply = 5;
      powerCost = 50;
      break;
    case "medium":
      selectedWords = shuffleWords(mediumWords);
      scoreMultiply = 8;
      powerCost = 75;
      break;
    default:
      selectedWords = shuffleWords(hardWords);
      scoreMultiply = 10;
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
