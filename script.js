let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");

document.addEventListener('keydown', (e) => {
  if (e.code = "Space") {
    if (character.classList !== "animate") {
      character.classList.add("animate");
    }
    setTimeout(function() {
      character.classList.remove("animate");
    }, 500);
  }
});

let checkGameOver = setInterval(function() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  if(obstacleLeft < 20 && obstacleLeft > 0 && characterTop > 130) {
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
    alert ('Game Over');
  };
}, 10);