let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");

let generateObstacle = setInterval(function() {
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

let checkGameOver = setInterval(function() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if(obstacleLeft < 20 && obstacleLeft > 0 && characterTop >= 130) {
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
    alert ('Game Over');
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