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
dice.addEventListener("click", newTurn);

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

function newTurn() {

    /*
        Get current postion of token
        Roll dice, calculate new position
        If new position is larger than winning postion, end game.
        If Player rolls 6, give new turn
    */

    var id = currentPos();
    var moveTiles = rollDice();
    var newPos = id + moveTiles;
    var ap = activePlayer();
    var moveBack = newPos - 3;

    if (newPos) {
        //check if player hits trap
        switch (newPos) {
            case 5:
                alert(ap + " hit trap at tile 5" + " moving back to tile 1");
                moveToken(ap, 1);
                break;
            case 10:
                alert(ap + " hit trap at tile 10" + " moving back to tile 5");
                moveToken(ap, 5);
                break;
            case 15:
                alert(ap + " hit trap at tile 15" + " moving back to tile " + moveBack);
                moveToken(ap, moveBack);
                break;
            case 20:
                alert(ap + " hit trap at tile 20" + " moving back to tile " + moveBack);
                moveToken(ap, moveBack);
                break;
            case 25:
                alert(ap + " hit trap at tile 25" + " moving back to tile 15");
                moveToken(ap, 15);
                break;

            default:
                console.log(ap + " rolled " + moveTiles);

                if (newPos >= 30) {
                    gameOver();
                } //if player throw 6, throw again
                else if (moveTiles == 6) {
                    //if player throw 6, throw again
                    alert(ap + " rolled 6, new turn!");
                    moveToken(ap, newPos);
                    console.log(ap + " rolled " + moveTiles);
                } else {
                    moveToken(ap, newPos);
                }

        }

    }

}

/*
    move active player to new position
    if it is player ones turn, move blue token number of tiles
    if it is player twos turn, move red token number of tiles
    */
function moveToken(ap, newPos) {
    document.getElementById("tile" + newPos).appendChild(document.getElementById(ap));
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
            //isTrap(ap);
            break;
        case "playerTwo":
            console.log("Player two is at position: " + id);
            //isTrap(ap);
            break;
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


function styleTraps() {
    
}