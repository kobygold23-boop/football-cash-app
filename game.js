const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Canvas size
canvas.width = 360;
canvas.height = 600;

// Player object
const player = {
  x: canvas.width / 2,
  y: canvas.height - 80,
  radius: 15,
  speed: 5
};

// Controls
const keys = {};

// Listen for key press
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Update player position
function update() {
  if (keys["ArrowLeft"] && player.x > player.radius) {
    player.x -= player.speed;
  }
  if (keys["ArrowRight"] && player.x < canvas.width - player.radius) {
    player.x += player.speed;
  }
  if (keys["ArrowUp"] && player.y > player.radius) {
    player.y -= player.speed;
  }
  if (keys["ArrowDown"] && player.y < canvas.height - player.radius) {
    player.y += player.speed;
  }
}

// Draw everything
function draw() {
  // Clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Field background
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Player
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

// Game loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();
