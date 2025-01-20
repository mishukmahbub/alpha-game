// play now button function
function startGame() {
  // hide title screen
  const titleScreen = document.getElementById("title-screen");
  titleScreen.classList.add("hidden");

  // show stage screen
  const stageScreen = document.getElementById("stage-screen");
  stageScreen.classList.remove("hidden");

  //hide game over screen
  const gameOverScreen = document.getElementById("game-over");
  gameOverScreen.classList.add("hidden");

  //reset life
  const lifeElement = document.getElementById("life");
  lifeElement.innerText = 5;

  //reset score
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = 0;

  continueGame();
}

//get a random letter
function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");
  const randomIndex = Math.round(Math.random() * 25);
  const randomLetter = alphabetArr[randomIndex];
  return randomLetter;
}

//stage screen function
function continueGame() {
  const randomLetter = getRandomLetter();

  // remove previous highlights
  const keysArr = document.getElementsByClassName("kbd");
  for (const key of keysArr) {
    key.classList.remove("bg-[#FFA500]");
  }

  //highlight key
  const kbdKey = document.getElementById(randomLetter);
  kbdKey.classList.add("bg-[#FFA500]");

  //display letter
  const displayLetter = document.getElementById("display-letter");
  displayLetter.innerText = randomLetter.toUpperCase();
}

//key press function
document.addEventListener("keyup", function (event) {
  const displayLetter = document
    .getElementById("display-letter")
    .innerText.toLowerCase();

  // game scoring function
  if (event.key === displayLetter) {
    const scoreElement = document.getElementById("score");
    let score = parseInt(scoreElement.innerText);
    scoreElement.innerText = score + 1;
  } else {
    const lifeElement = document.getElementById("life");
    let life = parseInt(lifeElement.innerText);
    if (life === 0) {
      gameOver();
    } else {
      lifeElement.innerText = life - 1;
    }
  }
  continueGame();
});

//game over function
function gameOver() {
  // hide stage screen
  const stageScreen = document.getElementById("stage-screen");
  stageScreen.classList.add("hidden");

  //show game over screen
  const gameOverScreen = document.getElementById("game-over");
  gameOverScreen.classList.remove("hidden");

  // get final score
  const scoreElement = document.getElementById("score");
  let score = scoreElement.innerText;

  // show final score
  const finalScoreElement = document.getElementById("final-score");
  finalScoreElement.innerText = score;
}
