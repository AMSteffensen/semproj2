const cards = document.querySelectorAll('.character');

function selectCharacter() {
    console.log('I was clicked');
    console.log(this);
}

cards.forEach(card => card.addEventListener('click', selectCharacter));