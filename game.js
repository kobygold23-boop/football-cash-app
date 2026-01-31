let score = 0;
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
function drawBall( ) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

function drawScore() {
