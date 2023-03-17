export default class input{
    constructor(){
        document.addEventListener('keydown', (event) => {
            alert(event.key);
            switch (event.key){
                case 'ArrowLeft': // left arrow key
                    Player.moveLeft();
                    break;
                case 'ArrowRight': // right arrow key
                    Player.moveRight();
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
            alert(event.key);
            switch (event.key){
                case 'ArrowLeft': // left arrow key unheld
                    if(Player.speed < 0){
                        Player.stop();
                    }
                    break;
                case 'ArrowRight': // right arrow key unheld
                    if (Player.speed > 0){
                        Player.stop();
                    }
                    break;
            }
        });
    }
}