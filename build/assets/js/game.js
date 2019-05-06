var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var dice = document.getElementById("dice");
dice.addEventListener("click", rollDice);

//dice.addEventListener("click", moveToken);

//roll dice
function rollDice() {
    //throw dice no number greater than 6
    const max = 6;
    var rollDice = Math.ceil(Math.random() * max);
    console.log(rollDice);
    return rollDice;
}

x = 0;
y = 0;
//turn order active state
if (x == "playerOne") rollDice();
else if (x == "playerTwo") moveToken();
else if (x == "value3") newTurn();
//else defaultAction();


for (var i = 0; i <= 30; i++) {
    var playerOne = 0;
    var playerTwo = 0;


}

var activePlayer;
switch (activePlayer) {
    case "playerOne":
        console.log("Player one's turn");
        break;
    case "playerTwo":
        console.log("Player two's turn");
        break;
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


function movePlayer() {
    var id = currentPos();
    var tile = "tile" + id;
    var moveTiles = rollDice();
    var newPos = id + moveTiles;

    if (newPos >= 30) {
        gameOver();
    }


    //if player throw 6, throw again
    if (moveTiles == 6) {
        movePlayer();
    }
    document.getElementById(tile).appendChild(document.getElementById("playerOne"));

}

//check current position for player
function currentPos() {
    var currentPos = 5;

    return currentPos;
}


//determinate which players turn it is


//move token
function movePlayerOne() {
    //do move token based on the result of roll dice
    movePlayer();
}

function movePlayerTwo() {
    //do move token based on the result of roll dice
    movePlayer();
}






function gameOver() {
    alert("Game over");
}

function printNumbers() {
    for (var i = 0; i <= 100; i++) {
        //if divisible by 3
        if (i % 3 == 0) {
            console.log(i + " fizz");
            //if divisible by 5 
        }
        if (i % 5 == 0) {
            console.log(i + " buzz");
        }
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + " fizzbuzz");
        } else {
            console.log(i);
        }
    }
}
printNumbers();



var row = 8;
var column = 8;

for (var i = 0; i <= 8; i++) {
    var current = 0;

    if (current % 2) {
        console.log("#")
    }
    if (current % 2 == 0) {
        console.log(" ");
    } else {
        console.log("\n");
    }
    current++;
}

//change active players turn
function newTurn() {
    //set active player state
    //style active player indicator    
}


function moveToken() {

}