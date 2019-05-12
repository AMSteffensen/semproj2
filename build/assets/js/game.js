/*
TODO: 
add alerts that dont interupt gameplay instead of alerts. 
add graphics to the game board, winning image and start image
animate rolling of dice

Clean up code
Refactor code
Polish
*/

var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var dice = document.getElementById("dice");
dice.addEventListener("click", rollDice);
dice.addEventListener("click", newTurn);
dice.addEventListener("click", styleCharacters);

//get player selections stored from previous screen
var playerOneSelection = localStorage.getItem('playerOne');
var playerTwoSelection = localStorage.getItem('playerTwo');

var message = '';

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
            case 1:
                message = ap + " turn, press the dice!";
                displayMessage(0);
                break;
            case 5:
                message = ap + " hit trap at tile 5" + " moving back to tile 1";
                displayMessage(message);
                moveToken(ap, 1);
                break;
            case 10:
                message = ap + " hit trap at tile 10" + " moving back to tile 5";
                displayMessage(message);
                moveToken(ap, 5);
                break;
            case 15:
                message = ap + " hit trap at tile 15" + " moving back to tile " + moveBack;
                displayMessage(message);
                moveToken(ap, moveBack);
                break;
            case 20:
                message = ap + " hit trap at tile 20" + " moving back to tile " + moveBack;
                displayMessage(message);
                moveToken(ap, moveBack);
                break;
            case 25:
                message = ap + " hit trap at tile 25" + " moving back to tile 15";
                displayMessage(message);
                moveToken(ap, 15);
                break;

            default:
                displayMessage(ap + " rolled " + moveTiles);

                if (newPos >= 30) {
                    gameOver();
                } //if player throw 6, throw again
                else if (moveTiles == 6) {
                    //if player throw 6, throw again
                    message = ap + " rolled 6, new turn!";
                    displayMessage(message);
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
    message = winner + " Won the game!";
    displayMessage(message);
    scoreScreen();
}




function drawCharacters() {

    var displayCharacter =
        '<div>' +
        '<img id="characterOne" src="assets/images/' + playerOneSelection + '.svg">' +
        '<h2>' + playerOneSelection + '</h2>' +
        '</div>' +
        '<h3> vs</h3>' +
        '<div>' +
        '<img id="characterTwo" src="assets/images/' + playerTwoSelection + '.svg">' +
        '<h2>' + playerTwoSelection + '</h2>' +
        '</div>';
    document.getElementById('characters').innerHTML = displayCharacter;

}

function displayMessage(message) {
    ap = activePlayer();
    var box = document.getElementById('message');


    // var displayMessage = document.createElement("p");
    // displayMessage.setAttribute("id", "message__text");
    // displayMessage.classList.add("show");
    // //then after 5seconds hide message
    // displayMessage.appendChild(displayMessage);

    //box.textContent = 'Test';

    //document.getElementById('message').textContent = 'This text is different!';
    box.textContent = message;

    //fade out message after 5s
    //box.classList.add("message--visible");
}

function styleCharacters() {
    var playerOne = document.getElementById('characterOne');
    var playerTwo = document.getElementById('characterTwo');

    if (activePlayer() == 'playerOne') {
        playerOne.classList.add("active");
        playerTwo.classList.remove("active");
    }

    if (activePlayer() == 'playerTwo') {
        playerTwo.classList.add("active");
        playerOne.classList.remove("active");
    }
}

(function () {
    drawCharacters();
    styleCharacters();
    displayMessage("Press the dice to rolll.");
})();



//Send players to score screen
function scoreScreen() {
    setTimeout(function () {
        window.location.href = 'gameover.html';
    }, 1000);
}