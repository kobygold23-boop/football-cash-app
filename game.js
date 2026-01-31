const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Canvas size (match your screen)
canvas.width = 360;
canvas.height = 600;

// Player
let player = {
  x: canvas.width / 2 - 15,
  y: canvas.height - 80,
  size: 30,
  speed: 10
};

// Draw player
function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

// Clear screen
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Game loop
function gameLoop() {
  clear();
  drawPlayer();
  requestAnimationFrame(gameLoop);
}

// Movement functions (BUTTONS)
function moveLeft() {
  if (player.x > 0) player.x -= player.speed;
}

function moveRight() {
