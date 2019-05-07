/*
TODO: 
Remove event listner when both players have selected character
Fix local Storage
Find character numbers for all characters to fetch from

Clean up code
Refactor code

*/

const hound = document.getElementById('hound');
const jamie = document.getElementById('jamie');
const sam = document.getElementById('sam');
const tyrion = document.getElementById('tyrion');
const bran = document.getElementById('bran');
const dude = document.getElementById('dude');
const khaldrogo = document.getElementById('khaldrogo');
const ladyred = document.getElementById('ladyred');
const walker = document.getElementById('walker');
const arya = document.getElementById('arya');
var columns = document.querySelectorAll('.nav-char-column');

var numberOfClicks = 0;
var selectedCharacter = '';

var selectedArray = [];

var characterArray = [{
    name: "Sandor Clegane",
    id: 955,
    imgSrc: "Sandor Clegane.svg"
}, {
    name: "Jamie",
    id: 955,
    imgSrc: "jamie.svg"

}, {
    name: "Sam",
    id: 955,
    imgSrc: "sam.svg"
}, {
    name: "Tyrion",
    id: 955,
    imgSrc: "Tyrion.svg"
}, {
    name: "Bran",
    id: 955,
    imgSrc: "bran.svg"
}, {
    name: "Dude",
    id: 955,
    imgSrc: "Sandor Clegane.svg"
}, {
    name: "khaldrogo",
    id: 955,
    imgSrc: "khaldrogo.svg"
}, {
    name: "Lady Red",
    id: 955,
    imgSrc: "ladyred.svg"
}, {
    name: "Walker",
    id: 955,
    imgSrc: "walker.svg"
}, {
    name: "Arya",
    id: 955,
    imgSrc: "arya.svg"
}];


hound.addEventListener('click', function (event) {

    //state character name
    var character = characterArray[0].name;

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    hound.parentNode.disabled = true;

    //fetch data from api
    getData('https://anapioficeandfire.com/api/characters/955', character);
    //check if game is ready to run
    isReady();
});


jamie.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[1].name;
    //check number of selections
    checkSelections(character);

    selectedArray.push(character);

    //disable li element for further selection
    jamie.parentElement.disabled = true;
    //check if ready
    isReady();
});

sam.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[2].name;

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    sam.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

tyrion.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[3].name;

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);


    //disable li element for further selection
    tyrion.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

bran.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[4].name;

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    bran.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

dude.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[5].name;

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    dude.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

khaldrogo.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[6].name;

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    khaldrogo.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

ladyred.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[7].name;

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    ladyred.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

walker.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[8].name;

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    walker.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

arya.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[9].name;

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    arya.parentElement.disabled = true;

    //fetch data from api
    getData('https://anapioficeandfire.com/api/characters/148', character);
    //check if game is ready to run
    isReady();
});

function showAlert(event) {
    alert("click detected");
}

function isReady() {
    if (selectedArray.length > 2) {
        console.log('Please select characters');
    } else if (selectedArray.length == 2) {
        //disable nav selections 
        columns.disabled = true;
        //enable start game button
        alert("ready");
        storePlayers();
    }
}

function checkSelections(character) {

    // check selected arry for number of selections
    if (selectedArray.length == 0) {
        alert('Player 1 selected:' + character);
        //add selected character to local storage

    } else if (selectedArray.length == 1) {
        alert('Pleayer 2 selected' + character);
        //add selected character
    }
}



function getData(Url, id) {
    fetch(Url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            populateData(result, id);
        });
}

function populateData(result, id) {
    let displayCharacter =
        '<img src="assets/images/' + result.name + '.svg">' +
        '<h3>' + result.name + '<h3>' +
        '<p> Born:' + result.born + '</p>' +
        '<p> Gender:' + result.gender + '</p>' +
        '<p> culture:' + result.culture + '</p>' +
        '<p> Aliases:' + result.aliases + '</p>';
    document.getElementById('character').innerHTML = displayCharacter;
}

function storePlayers() {
    localStorage.clear();

    var playerOne = selectedArray[0].toString();
    var playerTwo = selectedArray[1].toString();

    localStorage.setItem("playerOne", playerOne);
    localStorage.setItem("playerTwo", playerTwo);
}



//make self invoked function to count selections
// (function () {
//     //check if target has been selected


//     // if (hound.matches(".selected") == true) {
//     //     console.log("player one selected");
//     // }

//     for (var i = 0; i <= selectedArray.length; i++) {
//         console.log(selectedArray.length);
//     }
// }());