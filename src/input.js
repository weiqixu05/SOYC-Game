

export default class Input{
    constructor(player){
        document.addEventListener('keydown', (event) => {
            switch (event.key){
                case 'ArrowLeft': // left arrow key
                    player.moveLeft();
                    break;
                case 'ArrowRight': // right arrow key
                    player.moveRight();
                    break;
                case '1': // 1 key
                    Player.state = 'holdingGarbage';
                    break;
                case '2': // 2 key
                    Player.state = 'holdingCompost';
                    break;
                case '3': // 3 key
                    Player.state = 'holdingPlastic';
                    break;
                case '4': // 4 key
                    Player.state = 'holdingPaper';
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