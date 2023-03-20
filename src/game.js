export default class Game{
    constructor(){
        this.gameState=0;
    }

    togglePause(ctx, GAME_WIDTH, GAME_HEIGHT){
        ctx.rect(0,0,GAME_WIDTH,GAME_HEIGHT);
        ctx.fillStyle="black";
        ctx.fill();
        ctx.font="30px Arial";
        ctx.fillStyle="white";
        ctx.textAlign="center";
        ctx.fillText("Paused", GAME_WIDTH/2,(GAME_HEIGHT/2)-50);
        ctx.fillText("Press Spacebar to Continue", GAME_WIDTH/2, (GAME_HEIGHT/2)+50);
    }
}

