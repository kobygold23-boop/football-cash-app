const player = document.getElementById("player");
const field = document.getElementById("field");

let x = 140;
let y = 380;
const speed = 10;

// Apply starting position
player.style.left = x + "px";
player.style.top = y + "px";

function moveUp() {
  if (y > 0) {
    y -= speed;
    player.style.top = y + "px";
  }
}

function moveDown() {
  if (y < field.clientHeight - player.clientHeight) {
    y += speed;
    player.style.top = y + "px";
  }
}

function moveLeft() {
  if (x > 0) {
    x -= speed;
    player.style.left = x + "px";
  }
}

function moveRight() {
  if (x < field.clientWidth - player.clientWidth) {
    x += speed;
    player.style.left = x + "px";
  }
}
