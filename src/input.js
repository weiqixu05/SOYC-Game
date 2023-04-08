

export default class Input{
    constructor(player, game){
        document.addEventListener('keydown', (event) => {
            switch (event.key){
                case 'ArrowLeft': // left arrow key
                    player.moveLeft();
                    break;
                case 'ArrowRight': // right arrow key
                    player.moveRight();
                    break;
                case '1': // 1 key
                    player.chosenState = "1";
                    if(player.moveState===1){
                        player.moveLeft();
                    }
                    else if(player.moveState===2){
                        player.moveRight();
                    }
                    else{player.stop();}
                    break;
                case '2': // 2 key
                    player.chosenState = "2";
                    if(player.moveState===1){
                        player.moveLeft();
                    }
                    else if(player.moveState===2){
                        player.moveRight();
                    }
                    else{player.stop();}
                    break;
                case '3': // 3 key
                    player.chosenState = "3";
                    if(player.moveState===1){
                        player.moveLeft();
                    }
                    else if(player.moveState===2){
                        player.moveRight();
                    }
                    else{player.stop();}
                    break;
                case '4': // 4 key
                    player.chosenState = "4";
                    if(player.moveState===1){
                        player.moveLeft();
                    }
                    else if(player.moveState===2){
                        player.moveRight();
                    }
                    else{player.stop();}
                    break;
                case ' ': // spacebar
                    if(game.gameState==="go"){
                        game.gameState="pause";
                    }
                    else if(game.gameState==="pause"){
                        game.gameState="go";
                    }
                    break;
                case 's':
                    if(game.gameState==="startMenu"){
                        game.gameState="go";
                    }
                    else if(game.gameState==="deathScreen"){
                        game.gameState="startMenu";
                    }
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch (event.key){
                case 'ArrowLeft': // left arrow key unheld
                    if(player.speed < 0){
                        player.stop();
                    }
                    break;
                case 'ArrowRight': // right arrow key unheld
                    if (player.speed > 0){
                        player.stop();
                    }
                    break;
            }
        });
    }
}