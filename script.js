let player = document.getElementById("player");

let x = 135;
let y = 430;
let step = 10;

function updatePosition() {
  player.style.left = x + "px";
  player.style.top = y + "px";
}

function moveUp() {
  if (y > 0) {
    y -= step;
    updatePosition();
  }
}

function moveDown() {
  if (y < 470) {
    y += step;
    updatePosition();
  }
}

function moveLeft() {
  if (x > 0) {
    x -= step;
    updatePosition();
  }
}

function moveRight() {
  if (x < 270) {
    x += step;
    updatePosition();
  }
}
