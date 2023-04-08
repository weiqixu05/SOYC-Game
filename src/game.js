export default class Game{
    constructor(){
        this.gameState="startMenu";
    }

    togglePause(ctx, GAME_WIDTH, GAME_HEIGHT){
        ctx.rect(0,0,GAME_WIDTH,GAME_HEIGHT);
        ctx.fillStyle="black";
        ctx.fill();
        ctx.font="30px Arial";
        ctx.fillStyle="white";
        ctx.textAlign="center";
        ctx.fillText("Paused", GAME_WIDTH/2,(GAME_HEIGHT/2)-50);
        ctx.fillText("Press escape key to Continue", GAME_WIDTH/2, (GAME_HEIGHT/2)+50);
    }

    startMenu(ctx, GAME_WIDTH, GAME_HEIGHT){
        ctx.rect(0,0,GAME_WIDTH,GAME_HEIGHT);
        //ctx.rect((GAME_WIDTH/2)-150,(GAME_HEIGHT/2)-60,300,120);
        ctx.fillStyle="black";
        ctx.fill();
        ctx.font="30px Arial";
        ctx.fillStyle="white";
        ctx.textAlign="center";
        ctx.fillText("Press S to Start Game", GAME_WIDTH/2,GAME_HEIGHT/2);
    }

    deathScreen(ctx, GAME_WIDTH, GAME_HEIGHT,lastscore){
        this.gameState="deathScreen";
        ctx.rect(0,0,GAME_WIDTH,GAME_HEIGHT);
        ctx.fillStyle="black";
        ctx.fill();
        ctx.font="30px Arial";
        ctx.fillStyle="white";
        ctx.textAlign="center";
        let score = lastscore.toString()
        ctx.fillText("You Lost. Press S to go back to start menu", GAME_WIDTH/2,GAME_HEIGHT/2);
        ctx.fillText("Score: " + score, GAME_WIDTH/2,GAME_HEIGHT/2+50);
    }
}

