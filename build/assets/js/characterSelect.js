const cards = document.querySelectorAll('.character');

let hasSelectedCharacter = false;
let firstCharacter, secondCharacter;

function selectCharacter() {
    // console.log('I was clicked');
    // console.log(this);
    this.classList.toggle('character-select');

    //first player select
    if (!hasSelectedCharacter) {
        hasSelectedCharacter = true;
        firstCharacter = this;

        console.log({
            hasSelectedCharacter,
            firstCharacter
        });
        console.log('Player one has selected.');
    } else {
        //second player select
        hasSelectedCharacter = false;
        secondCharacter = this;

        console.log({
            firstCharacter,
            secondCharacter
        });
        console.log('Player two has selected.')
    }
}

cards.forEach(card => card.addEventListener('click', selectCharacter));