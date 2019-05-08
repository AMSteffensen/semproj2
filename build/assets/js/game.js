/*
TODO: 
Determinate winner
Send to game over screen

Clean up code
Refactor code
Polish
*/

var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var dice = document.getElementById("dice");
dice.addEventListener("click", rollDice);
dice.addEventListener("click", moveToken);

//get player selections stored from previous screen
var playerOneSelection = localStorage.getItem('playerOne');
var playerTwoSelection = localStorage.getItem('playerTwo');

function rollDice() {
    //throw dice no number greater than 6
    const max = 6;
    var rollDice = Math.ceil(Math.random() * max);
    return rollDice;
}

/*
    add counter to count how many clicks on roll
*/

var numberOfClicks = 0;

dice.addEventListener('click', function (e) {
    numberOfClicks += 1;
    //console.log(numberOfClicks)
    return numberOfClicks;
});

/*
    add function to return active player
     for each click that is odd, it is players two 's turn
     for each even click it is player ones turn
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

    /*
        Get current postion of token
        Roll dice, calculate new position
        If new position is larger than winning postion, end game.
        If Player rolls 6, give new turn
    */

    var id = currentPos();
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
    if (activePlayer() == "playerOne") {
        console.log("Player one rolled: " + moveTiles);
        console.log("new position: " + newPos);
        console.log("Moving player one");
        document.getElementById("tile" + newPos).appendChild(document.getElementById("playerOne"));
        console.log("Player two's turn");
    } else if (activePlayer() == "playerTwo") {
        console.log("Player two rolled: " + moveTiles);
        console.log("new position: " + newPos);
        console.log("Moving player two");
        document.getElementById("tile" + newPos).appendChild(document.getElementById("playerTwo"));
        console.log("Player one's turn");
    }

}


/*
    Get active player
    Store active players position
    Return the ID number of the current active players tile
*/

function currentPos() {
    var ap = activePlayer();
    var playerPos = document.getElementById(ap);

    var tile = playerPos.parentElement;
    var tileId = tile.id;
    //Convert string to INT
    var id = parseInt(tileId.substr(4));

    //check if active player is at trap postition
    switch (ap) {
        case "playerOne":
            console.log("Player one is at position: " + id);
            isTrap(ap);
            break;
        case "playerTwo":
            console.log("Player two is at position: " + id);
            isTrap(ap);
            break;
    }

    /*
        add traps to tile board
        if active player hits a trap, play effect
    */
    function isTrap(ap) {
        switch (id) {
            case 5:
                alert(ap + " Hit a trap");
                break;
            case 10:
                alert(ap + " Hit a trap");
                break;
            case 15:
                alert(ap + " Hit a trap");
                break;
            case 20:
                alert(ap + " Hit a trap");
                break;
            case 25:
                alert(ap + " Hit a trap");
                break;
        }
    }
    return id;
}

/*
    determinate winner
    show game over screen
*/

function gameOver() {
    var winner = activePlayer();
    localStorage.setItem("Winner", winner);
    alert(winner + " Won the game!");
    scoreScreen();
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