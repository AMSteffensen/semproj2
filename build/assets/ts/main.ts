let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

function gameLoop() {
  requestAnimationFrame(gameLoop);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1280, 720);

}


class State {
    constructor(level, actors, status) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    static start(level) {
        return new State(level, level.startActors, "playing");

        get player() {
            return this.actors.find(a => a.type == "player");
        }
    }
}

class Player {
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
    }

  //get character

   //create position
}




// class cRectangle implements iShape {
//   public x: number = 0;
//   public y: number = 0;
//   public lineWidth: number = 5;
//   public width: number = 0;
//   public height: number = 0;
//   public color: string = "blue";

//   constructor(
//     x: number,
//     y: number,
//     width: number,
//     height: number,
//     color: string = "blue",
//     line_width: number = 2
//   ) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.lineWidth = line_width;
//   }
// }

// class cCircle implements iShape {
//   public x: number = 0;
//   public y: number = 0;
//   public radius: number = 10;
//   public lineWidth: number = 2;
//   public color: string = "red";
//   constructor(
//     x: number,
//     y: number,
//     radius: number,
//     color: string = "red",
//     line_width: number = 2
//   ) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//     this.lineWidth = line_width;
//   }

  public draw = (): void => {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.rect(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
  };




window.onload = () => {
  canvas = <HTMLCanvasElement>document.getElementById("cnvs");
  ctx = canvas.getContext("2d");


  gameLoop();
};
