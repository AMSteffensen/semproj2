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

var characterArray = ['Hound', 'Jaime', 'Sam', 'Tyrion', 'Bran', 'Dude', 'Khaldrogo', 'Ladyred', 'Walker', 'Arya'];

var selectedArray = [];


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


hound.addEventListener('click', function (event) {



    //state character name
    var character = 'Sandor';

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("Sandor");

    //disable li element for further selection
    hound.parentNode.disabled = true;

    //fetch data from api
    getData('https://anapioficeandfire.com/api/characters/955', character);
    //check if game is ready to run
    isReady();
});


jamie.addEventListener('click', function (event) {
    //state character name
    var character = 'Jaime';
    //check number of selections
    checkSelections(character);

    selectedArray.push("Jaime");
    //disable li element for further selection
    jamie.parentElement.disabled = true;
    //check if ready
    isReady();
});

sam.addEventListener('click', function (event) {
    //state character name
    var character = 'Sam';

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("Sam");

    //disable li element for further selection
    sam.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

tyrion.addEventListener('click', function (event) {
    //state character name
    var character = 'Tyrion';

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("Tyrion");


    //disable li element for further selection
    tyrion.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

bran.addEventListener('click', function (event) {
    //state character name
    var character = 'Bran';

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("Bran");

    //disable li element for further selection
    hound.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

dude.addEventListener('click', function (event) {
    //state character name
    var character = 'The Dude';

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("The Dude");

    //disable li element for further selection
    hound.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

khaldrogo.addEventListener('click', function (event) {
    //state character name
    var character = 'Khal Drogo';

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("Khal Drogo");

    //disable li element for further selection
    hound.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

ladyred.addEventListener('click', function (event) {
    //state character name
    var character = 'Lady Red';

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("Lady Red");

    //disable li element for further selection
    hound.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

walker.addEventListener('click', function (event) {
    //state character name
    var character = 'Walker';

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("Walker");

    //disable li element for further selection
    hound.parentElement.disabled = true;

    //check if game is ready to run
    isReady();
});

arya.addEventListener('click', function (event) {
    //state character name
    var character = 'Arya';

    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("Arya");

    //disable li element for further selection
    hound.parentElement.disabled = true;

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
    }
}

function checkSelections(character) {
    // check selected arry for number of selections
    if (selectedArray.length == 0) {
        alert('Pleayer 1 selected:' + character);
        //add selected character to local storage
        localStorage.setItem("Player 1", +character);
    } else if (selectedArray.length == 1) {
        alert('Pleayer 2 selected' + character);
        //add selected character
        localStorage.setItem("Player 2", +character);
    }
}










const data = JSON.parse(localStorage.getItem('items'));

function getCharacter() {
    const data = JSON.parse(localStorage.getItem('items'));


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