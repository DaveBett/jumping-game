const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
let speed = 1500;
let score = 0;

const generateObstacle = setInterval(function() {
  let size = Math.floor(Math.random() * 3) + 1;
  switch(size) {
    default:
    case 1:
      obstacle.className = "small";
      break;
    case 2:
      obstacle.className = "mid";
      break;
    case 3:
      obstacle.className = "large";
      break;
  }
}, speed);

const speedUp = function() {
  if (score >= 1000) {
    speed = 500;
    obstacle.style.animation = "slide 0.5s infinite linear";
  } else if (score >= 750) {
    speed = 750;
    obstacle.style.animation = "slide 0.75s infinite linear";
  } else if (score >= 500) {
    speed = 1000;
    obstacle.style.animation = "slide 1s infinite linear";
  } else if (score >= 250) {
    speed = 1250;
    obstacle.style.animation = "slide 1.25s infinite linear";
  } 
}

const scoreInterval = setInterval(() => {
  score += 1;
  scoreDisplay.textContent = `Score: ${score}`;
}, 50);

const checkGameOver = setInterval(function() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if(obstacleLeft < 20 && obstacleLeft > 0 && characterTop >= 130) {
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
    alert (`Game Over\nYour Score: ${score}`);
    window.location.reload();
  };
}, 10);

document.addEventListener('keydown', (e) => {
  if (e.code = "Space") {
    if (character.classList !== "jump") {
      character.classList.add("jump");
    }
    setTimeout(function() {
      character.classList.remove("jump");
    }, 500);
  }
});