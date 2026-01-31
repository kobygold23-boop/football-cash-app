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
  // Player position
  let px = player.offsetLeft + dx;
  let py = player.offsetTop + dy;

  player.style.left = px + "px";
  player.style.top = py + "px";

  // Ball collision check
  if (isColliding(player, ball)) {
    ball.style.left = ball.offsetLeft + dx + "px";
    ball.style.top = ball.offsetTop + dy + "px";
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
