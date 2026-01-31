const player = document.getElementById("player");
const ball = document.getElementById("ball");

let x = 135;
let y = 430;
const step = 10;

function updatePosition() {
  player.style.left = x + "px";
  player.style.top = y + "px";

  // Ball follows the player
  ball.style.left = (x + 5) + "px";
  ball.style.top = (y - 15) + "px";
}

function moveUp() {
  y -= step;
  updatePosition();
}

function moveDown() {
  y += step;
  updatePosition();
}

function moveLeft() {
  x -= step;
  updatePosition();
}

function moveRight() {
  x += step;
  updatePosition();
}

// Initial position
updatePosition();
