const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("high-score");
const sizes = ["small", "medium", "large"];
let score = 0;
let highScore = 0;
let music = document.getElementById("mainTheme");
let sfx = document.getElementById("death");

function getRandomObstacleSize() {
    let i = Math.floor(Math.random() * (sizes.length));
    return sizes[i];
}

function randomizeSize() {
  setInterval(() => {
    const size = getRandomObstacleSize();
    obstacle.className = `${size}`
  }, 1499)
}

function setHighScore() {
  if (score > highScore) { 
    highScore = score;
    highScoreDisplay.textContent = `High Score: ${highScore}`;
  }
}

//function speedUp() {
//  setInterval(function() {
//    if (speed > 700) { speed -= 100 }
//
//    obstacle.style.animation = `slide ${speed.toString()}ms infinite linear`;
//    console.log(obstacle.style.animation);
//  }, 10000);
//}

function scoreUp() {
  setInterval(() => {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;
  }, 100);
}

function checkGameOver() {
  const characterClientRect = character.getBoundingClientRect();
  const characterL = characterClientRect.left;
  const characterR = characterClientRect.right;
  const characterB = characterClientRect.bottom;

  const obstacleClientRect = obstacle.getBoundingClientRect();
  const obstacleL = obstacleClientRect.left;
  const obstacleR = obstacleClientRect.right;
  const obstacleT = obstacleClientRect.top;  

  const xCollision = obstacleR > characterL && obstacleL < characterR;
  const yCollision = characterB > obstacleT;
  
  return xCollision && yCollision;
}

function monitorCollision() {
  setInterval(() => {
    if (checkGameOver()) {
      setHighScore();
      pauseSound(music);
      playSound(sfx);
      obstacle.setAttribute('class', 'paused');
      alert(`Game Over.\nYour Score: ${score}\nCurrent highscore: ${highScore}`);
      score = 0;
      restartSound(music);
    }
  }, 20);
}

function jump() {
  document.addEventListener('keydown', (e) => {
    if (e.code == "Space") {
      if (character.classList !== "jump") {
        character.classList.add("jump");
      }
      setTimeout(function() {
        character.classList.remove("jump");
      }, 500);
    }
  });
}

function gameRules() {
  alert
  ("Welcome to the Jumping Game \n" +
    "The rules are simple: \n" +
    "Use Spacebar to jump over the incoming obstacles \n" +
    "Survive as long as you can!"
  );
}

function playSound(soundFile) {
  soundFile.volume = 0.2;
  soundFile.play();
}

function restartSound(soundFile) {
  soundFile.currentTime = 0;
  soundFile.play();
}

function pauseSound(soundFile) {
  soundFile.pause();
}

function game() {
  gameRules();
  playSound(music);
  jump();
  randomizeSize();
  scoreUp();
  //speedUp();
  monitorCollision();
}

game();
