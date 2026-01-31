const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Player
let player = {
  x: 140,
  y: 260,
  size: 20,
  speed: 5
};

// Ball
let ball = {
  x: 150,
  y: 230,
  radius: 8,
  vx: 0,
  vy: 0
};

// Draw pitch
function drawPitch() {
  ctx.fillStyle = "#1f8f4e";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  // Goal
  ctx.fillStyle = "white";
  ctx.fillRect(110, 10, 80, 6);
}

// Draw player
function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

// Draw ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

// Collision & kick
function kickBall() {
  let dx = ball.x - (player.x + player.size / 2);
  let dy = ball.y - (player.y + player.size / 2);
  let distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < ball.radius + player.size / 2) {
    ball.vx = dx * 0.3;
    ball.vy = dy * 0.3;
  }
}

// Ball movement + friction
function updateBall() {
  ball.x += ball.vx;
  ball.y += ball.vy;

  ball.vx *= 0.95;
  ball.vy *= 0.95;

  // Wall bounce
  if (ball.x < 10 || ball.x > canvas.width - 10) ball.vx *= -1;
  if (ball.y < 10 || ball.y > canvas.height - 10) ball.vy *= -1;
}

// Controls
function moveUp() { player.y -= player.speed; }
function moveDown() { player.y += player.speed; }
function moveLeft() { player.x -= player.speed; }
function moveRight() { player.x += player.speed; }

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPitch();
  drawPlayer();
  drawBall();

  kickBall();
  updateBall();

  requestAnimationFrame(gameLoop);
}

gameLoop();
