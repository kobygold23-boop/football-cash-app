const player = document.getElementById("player");
const pitch = document.getElementById("pitch");

let x = 135;
let y = 430;
const speed = 10;

function updatePlayer() {
  player.style.left = x + "px";
  player.style.top = y + "px";
}

function moveUp() {
  if (y > 0) y -= speed;
  updatePlayer();
}

function moveDown() {
  if (y < pitch.clientHeight - player.clientHeight) y += speed;
  updatePlayer();
}

function moveLeft() {
  if (x > 0) x -= speed;
  updatePlayer();
}

function moveRight() {
  if (x < pitch.clientWidth - player.clientWidth) x += speed;
  updatePlayer();
}
