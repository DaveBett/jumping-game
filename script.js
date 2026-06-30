const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
const sizes = ["small", "medium", "large"];
let speed = 1500;
let score = 0;


obstacle.style.animation = `slide ${speed.toString()}ms infinite linear`;

function getRandomObstacleSize() {
    i = Math.floor(Math.random() * (sizes.length));
    return sizes[i];
}

function randomizeSize() {
  setInterval(() => {
    const size = getRandomObstacleSize();
    obstacle.className = `${size}`
  }, speed)
}

//function speedUp() {
//  setInterval(function() {
//    if (score >= 1000) {speed = 500;}
//    else if (score >= 750) {speed = 750;}
//    else if (score >= 500) {speed = 1000;} 
//    else if (score >= 250) {speed = 1250;} 
//
//    obstacle.style.animation = `slide ${speed.toString()}ms infinite linear`;
//    console.log(obstacle.style.animation);
//  }, speed);
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
      alert(`Game Over.\nYour Score: ${score}`);
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
  //monitorCollision();
}

game();