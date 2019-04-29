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
        //remove character after selection
        firstCharacter.style.display = 'none';

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

        //remove character after selection
        secondCharacter.style.display = 'none';

    }
}

//add events lister to cards
cards.forEach(card => card.addEventListener('click', selectCharacter));


/* when button clicked, check what target that is clicked, if it matches charcter store selection to local storage 

const character
if (target.matches(character) {
    console.log(target.value)
}

*/




//Start game
function startGame() {
    //when both players have slected a character, start game.


}




function fetchData(Url, id) {
    fetch(Url)
        .then((response) => {
            return response.json();
        })
        .then((result) = {
            console.log(result);
            populateCardInfo(result, id);
        });
}