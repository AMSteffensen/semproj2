const cards = document.querySelectorAll('.character-select');

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
        console.log('Player two has selected.');

        //check character that is selected
        console.log(firstCharacter.dataset.character);
        console.log(secondCharacter.dataset.character);
    }
}

cards.forEach(card => card.addEventListener('click', selectCharacter));