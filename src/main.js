var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    ctx.save();
    ctx.beginPath();
    //ctx.strokeStyle() = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.arc(400, 400, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
}
window.onload = function () {
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    gameLoop();
};
