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

hound.addEventListener('click', function (event) {
    alert('Player one selects The Hound');
});

jamie.addEventListener('click', function (event) {
    alert('Player one selects Jamie');
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