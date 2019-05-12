/* 
    Draw winner hero to screen
    Animate hero
*/

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    image = new Image(),
    winner = localStorage.getItem("Winner"),
    character = localStorage.getItem(winner);
text = character;
text2 = 'Won the game';

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawWinner();
    drawText();
}

function drawWinner() {

    image.src = 'assets/images/' +
        character + '.svg';
    context.clearRect(0, 0, canvas.width, canvas.height);


    image.onload = function (e) {
        context.drawImage(image, 150, 250);
    };

}

function drawText() {
    var TEXT_X = 65,
        TEXT_Y = canvas.height / 4 + 50;

    var TEXT_X2 = 165,
        TEXT_Y2 = canvas.height / 4 + 80;
    context.strokeStyle = 'blue';

    context.fillText(text, TEXT_X, TEXT_Y);
    context.strokeText(text, TEXT_X, TEXT_Y);

    context.fillText(text2, TEXT_X2, TEXT_Y2);
    context.strokeText(text2, TEXT_X2, TEXT_Y2);

}

context.font = '30px Palatino';
context.lineWidth = 1.0;
context.fillStyle = 'cornflowerblue';



draw();


//If player wants to try again, send back to character select screen
function tryAgain() {
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 1000);
}