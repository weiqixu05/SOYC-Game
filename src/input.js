export default class input{
    constructor(){
        document.addEventListener('keydown', (event) => {
            alert(event.key);
            switch (event.key){
                case 'ArrowLeft': // left arrow key
                    player.moveLeft();
                    break;
                case 'ArrowRight': // right arrow key
                    player.moveRight();
                    break;
                case '1': // 1 key
                    this.state = 'holdingGarbage';
                    break;
                case '2': // 2 key
                    this.state = 'holdingCompost';
                    break;
                case '3': // 3 key
                    this.state = 'holdingPlastic';
                    break;
                case '4': // 4 key
                    this.state = 'holdingPaper';
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            alert(event.key);
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