import Player from "./player.js"
import Input from "./input.js"
import ItemFunc from "./itemfunc.js";

let canvas=document.getElementById("gameScreen");
let ctx=canvas.getContext("2d"); //context is what we use to draw on canvas

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 600;


let player = new Player(GAME_WIDTH, GAME_HEIGHT);
player.draw(ctx);

let item = new ItemFunc(GAME_WIDTH,GAME_HEIGHT);
item.draw(ctx);

let lastTime=0;

new Input(player);


function gameLoop(timestamp){
    let deltaTime=timestamp-lastTime;
    lastTime=timestamp;
    //clears frame
    ctx.clearRect(0, 0, 1000,600);
    //updates the player's movement
    player.update(deltaTime);
    player.draw(ctx);
    //updates item 
    item.draw(ctx);
    //calls again
    requestAnimationFrame(gameLoop);
}

gameLoop();