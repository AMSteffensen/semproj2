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


var numberOfClicks = 0;
var selectedCharacter = '';

var characterArray = ['Hound', 'Jaime', 'Sam', 'Tyrion', 'Bran', 'Dude', 'Khaldrogo', 'Ladyred', 'Walker', 'Arya'];

var selectedArray = [];



for (var i = 0; i < characterArray.length; i++) {
    switch (selectedCharacter) {
        case 'Hound':
            alert('Player one selects The Hound');
            break;
        case 'Jamie':
            alert('Player one selects Jamie');
            break;
        case 'Sam':
            alert('Player one selects Sam');
            break;
        case 'Tyrion':
            alert('Player one selects Tyrion');
            break;
        case 'Bran':
            alert('Player one selects Bran');
            break;
        case 'Dude':
            alert('Player one selects Dude');
            break;
        case 'khaldrogo':
            alert('Player one selects Khaldrogo');
            break;
        case 'ladyred':
            alert('Player one selects Ladyred');
            break;
        case 'walker':
            alert('Player one selects Walker');
            break;
        case 'arya':
            alert('Player one selects Arya');
            break;
        default:
            console.log('Please select a character.');
    }
}


hound.addEventListener('click', function (event) {

    //check if target has been selected
    // if (hound.matches(".selected") == true) {
    //     console.log("player one selected");
    // }


    //state character name
    var character = 'The Hound';
    //check number of selections
    checkSelections(character);

    //add playerselection to array
    selectedArray.push("Hound");

    //disable li element for further selection
    hound.parentElement.style.display = 'none';

    //mesage that player to is ready to select
    // alert('The hound was selected. ');


    //classList.add('selected');

    //check if game is ready to run
    isReady();
});


jamie.addEventListener('click', function (event) {
    //state character name
    var character = 'Jaime';
    //check number of selections
    checkSelections(character);
});

sam.addEventListener('click', function (event) {
    alert('Player one selects Sam');
});

tyrion.addEventListener('click', function (event) {
    alert('Player one selects Tyrion');
});

bran.addEventListener('click', function (event) {
    alert('Player one selects Bran');
});

dude.addEventListener('click', function (event) {
    alert('Player one selects Dude');
});

khaldrogo.addEventListener('click', function (event) {
    alert('Player one selects Khal Drogo');
});

ladyred.addEventListener('click', function (event) {
    alert('Player one selects Ladyred');
});

walker.addEventListener('click', function (event) {
    alert('Player one selects Walker');
});

arya.addEventListener('click', function (event) {
    alert('Player one selects Arya');
});

function showAlert(event) {
    alert("click detected");
}

function isReady() {
    if (selectedArray.length > 2) {

    } else if (selectedArray.length == 2) {
        //disable nav selections 

        //enable start game button
        alert("ready");
    }
}

function checkSelections(character) {
    // check selected arry for number of selections
    if (selectedArray.length == 0) {
        alert('Pleayer 1 selected:' + character);
        var player1 = storeCharacter('Player1', character);
    } else if (selectedArray.length == 1) {
        alert('Pleayer 2 selected' + character);
        var player2 = storeCharacter('Player1', character);
    }
}



function storeCharacter(player, character) {
    //localStorage.setItem(player, JSON.stringify(character));
}

const data = JSON.parse(localStorage.getItem('items'));

function getCharacter() {
    const data = JSON.parse(localStorage.getItem('items'));
}