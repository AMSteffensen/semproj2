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