const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") moveUp = true;
  if (e.key === "ArrowDown") moveDown = true;
  if (e.key === "ArrowLeft") moveLeft = true;
  if (e.key === "ArrowRight") moveRight = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") moveUp = false;
  if (e.key === "ArrowDown") moveDown = false;
  if (e.key === "ArrowLeft") moveLeft = false;
  if (e.key === "ArrowRight") moveRight = false;
});
// Resize canvas for mobile
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

// Player
const player = {
  x: canvas.width / 2 - 15,
  y: canvas.height - 80,
  size: 30,
  speed: 6
};
let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;
// Ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  vx: 0,
  vy: 0
};

let score = 0;

// Draw pitch
function drawPitch() {
  ctx.fillStyle = "#0b6623";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "white";
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Goal
  ctx.fillStyle = "white";
  ctx.fillRect(canvas.width / 2 - 60, 20, 120, 10);
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

// Draw score
function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 20, 30);
}

// Ball movement
function updateBall() {
  ball.x += ball.vx;
  ball.y += ball.vy;

  ball.vx *= 0.98;
  ball.vy *= 0.98;
}

// Kick ball
function kickBall() {
  const dx = ball.x - (player.x + player.size / 2);
  const dy = ball.y - (player.y + player.size / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < ball.radius + player.size / 2) {
    ball.vx = dx * 0.3;
    ball.vy = dy * 0.3;
  }
}

// Goal check
function checkGoal() {
  if (
    ball.y < 30 &&
    ball.x > canvas.width / 2 - 60 &&
    ball.x < canvas.width / 2 + 60
  ) {
    score++;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.vx = 0;
    ball.vy = 0;
  }
}

// Controls
window.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") player.x -= player.speed;
  if (e.key === "ArrowRight") player.x += player.speed;
  if (e.key === "ArrowUp") player.y -= player.speed;
  if (e.key === "ArrowDown") player.y += player.speed;
});

// 🟢 GAME LOOP (THISfunction updatePlayer() {
  if (moveUp) player.y -= player.speed;
  if (moveDown) player.y += player.speed;
  if (moveLeft) player.x -= player.speed;
  if (moveRight) player.x += player.speed;

  // Keep player inside the pitch
  if (player.x < 10) player.x = 10;
  if (player.y < 10) player.y = 10;
  if (player.x + player.size > canvas.width - 10)
    player.x = canvas.width - player.size - 10;
  if (player.y + player.size > canvas.height - 10)
    player.y = canvas.height - player.size - 10;
} WAS MISSING)
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPitch();
  drawPlayer();
  drawBall();
  drawScore();
updatePlayer();
  updateBall();
  kickBall();
  checkGoal();

  requestAnimationFrame(gameLoop);
}

// START GAME
gameLoop();
