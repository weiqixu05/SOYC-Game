import Player from "./player.js";
import Input from "./input.js";
import ItemFunc from "./itemfunc.js";
import Game from "./game.js";

let canvas=document.getElementById("gameScreen");
let ctx=canvas.getContext("2d"); //context is what we use to draw on canvas

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 600;


let player = new Player(GAME_WIDTH, GAME_HEIGHT);
player.chosenState="1";
player.draw(ctx);

let item = new ItemFunc();
item.draw(ctx);
let item2 = new ItemFunc();
item2.position.y = item.position.y-(GAME_HEIGHT/2);

let lastTime=0;

let game=new Game();

new Input(player, game);
let score;
let hearts;

function gameLoop(timestamp){
    if(game.gameState==="startMenu"){
        game.startMenu(ctx,GAME_WIDTH,GAME_HEIGHT);
        hearts=3;
    }
    else if(hearts==0){
        game.deathScreen(ctx,GAME_WIDTH,GAME_HEIGHT);
        //resetting everything
        item.score=0;
        item2.score=0;
        item.hearts=3;
        item2.hearts=3;
        score=0;
        item.position.y=0;
        item.position.x=Math.floor(Math.random() * 900);
        item2.position.y=item.position.y-300;
    }
    else{
    let deltaTime=timestamp-lastTime;
    lastTime=timestamp;
    if(game.gameState==="pause"){
        game.togglePause(ctx,GAME_WIDTH, GAME_HEIGHT);
    }
    else{
    //clears frame
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    //updates the player's movement
    player.update(deltaTime);
    player.draw(ctx);
    //updates item 
    score=item.score+item2.score;
    hearts=3-(6-item.hearts-item2.hearts);
    item.draw(ctx);
    item.drawUi(ctx);
    item.update(deltaTime, player);
    ctx.fillStyle="black";
    ctx.textAlign="start";
    ctx.fillText("Score: ", 30, 60);
    ctx.fillText(score.toString(), 100, 60);
    ctx.fillText("Hearts: ", 30, 30);
    ctx.fillText(hearts.toString(),105,30);
    //calls again
    if (item.score >= 10){
        item2.draw(ctx);
        item2.update(deltaTime, player);
    }
}

}
    requestAnimationFrame(gameLoop);
}

gameLoop();