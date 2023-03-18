import Bin from "./bin.js"
import Input from "./input.js"

let canvas=document.getElementById("gameScreen");
let ctx=canvas.getContext("2d"); //context is what we use to draw on canvas

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let bin = new Bin(GAME_WIDTH, GAME_HEIGHT);
bin.draw(ctx);

let lastTime=0;

new Input();


function gameLoop(timestamp){
    let deltaTime=timestamp-lastTime;
    lastTime=timestamp;
    //clears frame
    ctx.clearRect(0, 0, 800,600);
    //updates the bins movement
    bin.update(deltaTime);
    bin.draw(ctx);

    //calls again
    requestAnimationFrame(gameLoop);
}

gameLoop();