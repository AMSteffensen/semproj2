//TODO: Fetch data
window.addEventListener("load", function () {
    fetch("https://anapioficeandfire.com/api/characters/583").then(function (response) {
        console.log("Content type:", response.headers.get("Content"));
    }).then(function (returnedData) {
        console.log("Returned data: ", returnedData);
    });
});


//character selection

function getCharacter() {
    var playerOne = document.getElementById("");

    //Store player one selection to local storage
}