var canvas = document.getElementById('animated-canvas');
var context = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation);
var circleX = 60;
var velocity = 1;
var acceleration = 0.5;

function canvasAnimation(){
    circleX++;
    drawCircle(circleX, canvas.height/2, 25);
    canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, s){
    clearCanvas();
    context.fillStyle = "crimson";
    context.beginPath();
    context.arc(x, y, s, 0, 2 * Math.PI);
    context.fill();
    velocity += acceleration;
    circleX += velocity;
    if(circleX > canvas.width){
        circleX = 0;
        velocity = 1;
    }
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

drawCircle();

