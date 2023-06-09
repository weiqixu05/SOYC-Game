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
    let deltaTime=timestamp-lastTime;
    lastTime=timestamp;
    if(game.gameState==="introScreen"){
        game.introScreen(ctx,GAME_WIDTH,GAME_HEIGHT);
    }
    else if(game.gameState==="startMenu"){
        game.startMenu(ctx,GAME_WIDTH,GAME_HEIGHT);
        hearts=3;
        score=0;
        item.played=false;
    }
    else if(game.gameState==="instructionScreen"){
        game.instructionScreen(ctx,GAME_WIDTH,GAME_HEIGHT);
    }
    else if(hearts==0){
        let lastscore = score
        game.deathScreen(ctx,GAME_WIDTH,GAME_HEIGHT,lastscore);
        if(item.played==false){
            item.played=true;
            item.lossSound.play();
        }
        //resetting everything
        item.score=0;
        item2.score=0;
        item.hearts=3;
        item2.hearts=3;
        item.position.y=0;
        item.position.x=Math.floor(Math.random() * (900 - 100) + 100);
        item2.position.y=item.position.y-300;
    }
    else if(game.gameState==="pause"){
        game.togglePause(ctx,GAME_WIDTH, GAME_HEIGHT);
    }
    else{
    //clears frame
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.drawImage(document.getElementById('Background'), 0, 0)
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
    ctx.fillText("Score: ", 20, 30);
    ctx.fillText(score.toString(), 90, 30);
    ctx.font="bold 20px sans-serif";
    ctx.fillText("1: Compost;   2: Plastic Recycling;   3: Paper Recycling;   4: Garbage", 140, 30);
    ctx.textAlign="center";
    if (hearts==3){
        ctx.drawImage(document.getElementById('Heart'), 850, 0)
        ctx.drawImage(document.getElementById('Heart'), 900, 0)
        ctx.drawImage(document.getElementById('Heart'), 950, 0)
    }
    else if (hearts==2){
        ctx.drawImage(document.getElementById('Heart'), 900, 0)
        ctx.drawImage(document.getElementById('Heart'), 950, 0)
    }
    else if (hearts==1){
        ctx.drawImage(document.getElementById('Heart'), 950, 0)
    }
    //calls again
    if (item.score >= 10){
        if(item2.position.y<item.position.y){
            item2.position.y=item.position.y-GAME_HEIGHT/2;
        }
        else{item2.position.y=item.position.y+GAME_HEIGHT/2;}
        item2.draw(ctx);
        item2.update(deltaTime, player);
    }
}


    requestAnimationFrame(gameLoop);
}

gameLoop();