var twoPlayers = false;
var newGame = document.getElementById("newGame");

//new game when both players selected character
newGame.addEventListener("click", function () {
    if (selectedArray.length === 2) {
        twoPlayers = true;
        setTimeout(function () {
            window.location.href = 'game.html';
        }, 2000);

    }
    if (twoPlayers == false) {
        alert("Game not ready to start.");
    }
});

//Send players to score screen
function scoreScreen() {
    setTimeout(function () {
        window.location.href = 'gameover.html';
    }, 1000);
}

//If player wants to try again, send back to character select screen
function tryAgain() {
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 1000);
}