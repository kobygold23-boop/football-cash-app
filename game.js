const player = document.getElementById("player");
const ball = document.getElementById("ball");

let step = 15;

// Move functions (buttons)
function moveUp() {
  move(0, -step);
}
function moveDown() {
  move(0, step);
}
function moveLeft() {
  move(-step, 0);
}
function moveRight() {
  move(step, 0);
}

// Core movement
function move(dx, dy) {
  // Move player
  player.style.left = player.offsetLeft + dx + "px";
  player.style.top = player.offsetTop + dy + "px";

  // Check collision
  if (isColliding(player, ball)) {
    ball.style.left = ball.offsetLeft + dx + "px";
    ball.style.top = ball.offsetTop + dy + "px";
  }
}

// Collision detection (FIXED)
function isColliding(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.right < bRect.left ||
    aRect.left > bRect.right ||
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom
  );
}
