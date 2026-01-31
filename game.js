// Get canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = 360;
canvas.height = 500;

// Player object
const player = {
  x: 170,
  y: 420,
  width: 30,
  height: 40,
  speed: 5
};

// Controls
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Listen for key presses
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") leftPressed = true;
  if (e.key === "ArrowRight") rightPressed = true;
  if (e.key === "ArrowUp") upPressed = true;
  if (e.key === "ArrowDown") downPressed = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") leftPressed = false;
  if (e.key === "ArrowRight") rightPressed = false;
  if (e.key === "ArrowUp") upPressed = false;
  if (e.key === "ArrowDown") downPressed = false;
});

// Draw football field
function drawField() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Draw player
function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Update player position
function movePlayer() {
  if (leftPressed && player.x > 0) player.x -= player.speed;
  if (rightPressed && player.x + player.width < canvas.width) player.x += player.speed;
  if (upPressed && player.y > 0) player.y -= player.speed;
  if (downPressed && player.y + player.height < canvas.height) player.y += player.speed;
}

// Game loop
function gameLoop() {
  drawField();
  movePlayer();
  drawPlayer();
  requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();
