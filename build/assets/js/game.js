var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var dice = document.getElementById("dice");
dice.addEventListener("click", rollDice);

//get player selections
var playerOneSelection = localStorage.getItem('playerOne');
var playerTwoSelection = localStorage.getItem('playerTwo');


//roll dice
function rollDice() {
    //throw dice no number greater than 6
    const max = 6;
    var rollDice = Math.ceil(Math.random() * max);
    console.log(rollDice);
    return rollDice;
}

/*
add counter to count how many clicks on roll
for each click that is odd, it is players two's turn
for each even click it is player ones turn
*/

var numberOfClicks = 0;

dice.addEventListener('click', function (e) {
    numberOfClicks += 1;
    //console.log(numberOfClicks)
    return numberOfClicks;
});

/*
    add function to return active player
*/

function activePlayer() {
    var activePlayer;

    if (numberOfClicks % 2 == 0) {
        activePlayer = 'playerOne';
    }
    if (numberOfClicks % 2 !== 0) {
        activePlayer = 'playerTwo';
    }

    return activePlayer;
}

function moveToken() {

    // var ap = activePlayer();
    // var currentPos = document.getElementById(ap);
    var id = currentPos();
    var tile = "tile" + id;
    var moveTiles = rollDice();
    var newPos = id + moveTiles;

    if (newPos >= 30) {
        gameOver();
    }


    //if player throw 6, throw again
    if (moveTiles == 6) {
        moveToken();
    }

    /*
    if it is player ones turn, move blue token number of tiles
    if it is player twos turn, move red token number of tiles
    */
    if (activePlayer() == "playerOne") moveBlue();
    else if (activePlayer() == "playerTwo") moveRed();


    function moveBlue() {
        console.log("Moving blue player");
        document.getElementById(tile).appendChild(document.getElementById("playerOne"));
    }

    function moveRed() {
        console.log("Moving red player");
        document.getElementById(tile).appendChild(document.getElementById("playerTwo"));
    }




}

function currentPos() {
    var ap = activePlayer();

    //set active player 
    var playerPos = document.getElementById(ap);
    // console.log(playerPos);

    var tile = playerPos.parentElement;
    var tileId = tile.id;


    switch (ap) {
        case "playerOne":
            console.log("Player one is at position: " + tileId);
            break;
        case "playerTwo":
            console.log("Player two is at position: " + tileId);
            break;
    }
    return tileId;
}



/* 
Ittarate through trap array, for each number console.log event
*/

var boardTiles = 0;
for (var i = 0; i < boardTiles.length; i++) {
    switch (i) {
        case 0:
            console.log("Start tile");
            break;
        case 1:
            console.log("Normal tile");
            break;
        case 2:
            console.log("Normal tile");
            break;
        case 3:
            console.log("Normal tile");
            break;
        case 4:
            console.log("Normal tile");
            break;
        case 5:
            console.log("Hit an Ice Trap, move back two tiles.");
            break;
        case 6:
            console.log("Normal tile");
            break;
        case 7:
            console.log("Hit an Fire trap, stay for one turn.");
            break;
        case 8:
            console.log("Normal tile");
            break;
        case 9:
            console.log("Normal tile");
            break;
        case 10:
            console.log("Normal tile");
            break;
        case 11:
            console.log("Normal tile");
            break;
    }
}






function gameOver() {
    alert("Game over");
}






function drawCharacters() {
    var characters = document.getElementById(characters);

    let displayCharacter =
        '<img src="assets/images/' + playerOneSelection + '.svg">' +
        '<h3>' + playerOneSelection + '<h3>' +
        '<img src="assets/images/' + playerTwoSelection + '.svg">' +
        '<h3>' + playerTwoSelection + '<h3>';
    document.getElementById('characters').innerHTML = displayCharacter;

}
drawCharacters();