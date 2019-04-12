var canvas = document.getElementById('animated-canvas');
var context = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation);
var circleX = 60;

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
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

drawCircle();

