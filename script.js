const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
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
}, 1500);

const scoreInterval = setInterval(() => {
  score += 1;
  scoreDisplay.textContent = `Score: ${score}`;
}, 100);

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