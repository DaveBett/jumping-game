let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");

console.log(character);

document.addEventListener('keydown', (e) =>{
  if (e.code = "Space") {
    if (character.classList !== "animate") {
      character.classList.add("animate");
    }
    setTimeout(function() {
      character.classList.remove("animate");
    }, 500);
  }
});