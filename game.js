const player = document.getElementById("player");

let x = 135;
let y = 430;
const step = 10;

function updatePlayer() {
  player.style.left = x + "px";
  player.style.top = y + "px";
}

function moveUp() {
  y -= step;
  if (y < 0) y = 0;
  updatePlayer();
}

function moveDown() {
  y += step;
  if (y > 470) y = 470;
  updatePlayer();
}

function moveLeft() {
  x -= step;
  if (x < 0) x = 0;
  updatePlayer();
}

function moveRight() {
  x += step;
  if (x > 270) x = 270;
  updatePlayer();
}

updatePlayer();
