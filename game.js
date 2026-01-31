const player = document.getElementById("player");
const ball = document.getElementById("ball");

let step = 10;

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

function move(dx, dy) {
  // Move player
  player.style.left = player.offsetLeft + dx + "px";
  player.style.top = player.offsetTop + dy + "px";

  // If touching the ball, push it forward
  if (isColliding(player, ball)) {
    ball.style.left = ball.offsetLeft + dx * 1.2 + "px";
    ball.style.top = ball.offsetTop + dy * 1.2 + "px";
  }
}

function isColliding(a, b) {
  let ar = a.getBoundingClientRect();
  let br = b.getBoundingClientRect();

  return !(
    ar.right < br.left ||
    ar.left > br.right ||
    ar.bottom < br.top ||
    ar.top > br.bottom
  );
}
