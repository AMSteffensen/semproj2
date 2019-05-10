/*
TODO: 
Remove event listner when both players have selected character
Style selected characters
Show both selected characters

check if the result includes a value, so that characters without values are not populated. 
Clean up code
Refactor code

*/
const API_URL = 'https://anapioficeandfire.com/api/characters/';

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
    name: "Jaime Lannister",
    id: 529,
    imgSrc: "jamie.svg"

}, {
    name: "Samwell Tarly",
    id: 954,
    imgSrc: "sam.svg"
}, {
    name: "Tyrion Lannister",
    id: 1052,
    imgSrc: "Tyrion.svg"
}, {
    name: "Brandon Stark",
    id: 206,
    imgSrc: "bran.svg"
}, {
    name: "Bronn",
    id: 217,
    imgSrc: "bronn.svg"
}, {
    name: "Cohollo",
    id: 1278,
    imgSrc: "Cohollo.svg"
}, {
    name: "Melisandre",
    id: 743,
    imgSrc: "Melisandre.svg"
}, {
    name: "Urrathon",
    id: 2057,
    imgSrc: "walker.svg"
}, {
    name: "Arya Stark",
    id: 148,
    imgSrc: "arya.svg"
}];


hound.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[0].name;
    var id = characterArray[0].id;
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    hound.classList.add("selected");

    //fetch data from api
    getData(API_URL, id);
    //check if game is ready to run
    isReady();
});


jamie.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[1].name;
    var id = characterArray[1].id;

    getData(character.id);
    //check number of selections
    checkSelections(character);

    selectedArray.push(character);

    //disable li element for further selection
    jamie.classList.add("selected");

    getData(API_URL, id);
    //check if ready
    isReady();
});

sam.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[2].name;
    var id = characterArray[2].id;
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    sam.classList.add("selected");

    getData(API_URL, id);
    //check if game is ready to run
    isReady();
});

tyrion.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[3].name;
    var id = characterArray[3].id;
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);


    //disable li element for further selection
    tyrion.classList.add("selected");

    getData(API_URL, id);
    //check if game is ready to run
    isReady();
});

bran.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[4].name;
    var id = characterArray[4].id;
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    bran.classList.add("selected");

    getData(API_URL, id);
    //check if game is ready to run
    isReady();
});

dude.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[5].name;
    var id = characterArray[5].id;
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    dude.classList.add("selected");

    getData(API_URL, id);
    //check if game is ready to run
    isReady();
});

khaldrogo.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[6].name;
    var id = characterArray[6].id;
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    khaldrogo.classList.add("selected");

    getData(API_URL, id);
    //check if game is ready to run
    isReady();
});

ladyred.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[7].name;
    var id = characterArray[7].id;
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    ladyred.classList.add("selected");

    getData(API_URL, id);
    //check if game is ready to run
    isReady();
});

walker.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[8].name;
    var id = characterArray[8].id;
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    walker.classList.add("selected");

    getData(API_URL, id);
    //check if game is ready to run
    isReady();
});

arya.addEventListener('click', function (event) {
    //state character name
    var character = characterArray[9].name;
    var id = characterArray[9].id;
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push(character);

    //disable li element for further selection
    arya.classList.add("selected");

    //fetch data from api
    getData(API_URL, id);
    //check if game is ready to run
    isReady();
});

function isReady() {
    if (selectedArray.length > 2) {
        console.log('Please select characters');
    } else if (selectedArray.length == 2) {
        //enable start game button
        console.log("ready");
        storePlayers();
    }
    return true;
}

function checkSelections(character) {

    // check selected arry for number of selections
    if (selectedArray.length == 0) {
        console.log('Player 1 selected:' + character);
        //add selected character to local storage

    } else if (selectedArray.length == 1) {
        console.log('Pleayer 2 selected' + character);
        //add selected character
    } else if (selectedArray.length >= 2) {
        alert('Characters have been selected, please press reset to change characters');

    }
}

function getData(API_URL, id) {
    fetch(API_URL + id)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            populateData(result, id);
        });
}

function populateData(result, id) {
    //populate characters only if 2 or less characters have been selected
    if (selectedArray.length <= 2) {
        var character = document.getElementById('character');

        var displayCharacter = document.createElement("img");
        displayCharacter.setAttribute("id", "character__image");
        displayCharacter.setAttribute("src", "assets/images/" + result.name + '.svg');
        displayCharacter.setAttribute("alt", "character image");
        displayCharacter.classList.add("character__image");

        var description = document.createElement("p");
        description.setAttribute("id", "description");

        var name = document.createTextNode("Name " + result.name + '\n');
        description.appendChild(name);

        var gender = document.createTextNode("Gender " + result.gender + '\n');
        description.appendChild(gender);

        var culture = document.createTextNode("Culture " + result.culture + '\n');
        description.appendChild(culture);

        var aliases = document.createTextNode("Aliases " + result.aliases + '\n');
        description.appendChild(aliases);

        character.appendChild(displayCharacter);
        character.appendChild(description);

    }
}



function storePlayers() {
    localStorage.clear();

    var playerOne = selectedArray[0].toString();
    var playerTwo = selectedArray[1].toString();

    localStorage.setItem("playerOne", playerOne);
    localStorage.setItem("playerTwo", playerTwo);
}