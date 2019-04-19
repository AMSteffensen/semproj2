var _this = this;
var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
}
var State = /** @class */ (function () {
    function State(level, actors, status) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }
    State.start = function (level) {
        return new State(level, level.startActors, "playing");
        get;
        player();
        {
            return this.actors.find(function (a) { return a.type == "player"; });
        }
    };
    return State;
}());
var Player = /** @class */ (function () {
    function Player(pos, speed) {
        this.pos = pos;
        this.speed = speed;
    }
    return Player;
}());
draw = function () {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = _this.color;
    ctx.lineWidth = _this.lineWidth;
    ctx.rect(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
};
window.onload = function () {
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    gameLoop();
};
