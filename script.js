const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("high-score");
const sizes = ["small", "medium", "large"];
let score = 0;
let highScore = 0;

function getRandomObstacleSize() {
    let i = Math.floor(Math.random() * (sizes.length));
    return sizes[i];
}

function randomizeSize() {
  setInterval(() => {
    const size = getRandomObstacleSize();
    obstacle.className = `${size}`
  }, 1500)
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
      alert(`Game Over.\nYour Score: ${score}\nCurrent highscore: ${highScore}`);
      score = 0;
    }
  }, 10);
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

function game() {
  jump();
  randomizeSize();
  scoreUp();
  //speedUp();
  monitorCollision();
}

function restartGame(){
    location.reload();
}

game();
