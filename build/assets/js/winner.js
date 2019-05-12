/* 
    Draw winner hero to screen
    Animate hero
*/

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    image = new Image(),
    winner = localStorage.getItem("Winner"),
    character = localStorage.getItem(winner);
text = character + ' Won the game';

image.src = 'assets/images/' +
    character + '.svg';
context.clearRect(0, 0, canvas.width, canvas.height);


image.onload = function (e) {
    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight
    context.drawImage(image, 0, 0);
    drawText();
};



function drawText() {
    var box = document.getElementById('winner');
    box.textContent = text;
}

//If player wants to try again, send back to character select screen
function tryAgain() {
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 1000);
}