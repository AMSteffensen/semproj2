/* 
    Draw winner hero to screen
    Animate hero
*/

window.onload = function () {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        w = canvas.width,
        h = canvas.height;
    var currentX = 0;
    window.addEventListener("click", reset);

    function reset() {
        currentX = 0;
    }
    setInterval(redrawScreen, 10);

    function redrawScreen() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillRect(currentX, 0, 30, 30);
        currentX = currentX + 1;
    }
}