export default class input{
    constructor(){
        document.addEventListener('keydown', (event) => {
            alert(event.keyCode);
            switch (event.keyCode){
                case 37: // left arrow key
                    player.moveLeft();
                    break;
                case 39: // right arrow key
                    player.moveRight();
                    break;
                case 49: // 1 key
                    this.state = 'holdingGarbage';
                    break;
                case 50: // 2 key
                    this.state = 'holdingCompost';
                    break;
                case 51: // 3 key
                    this.state = 'holdingRecycler';
                    break;
                case 52: // 4 key
                    this.state = 'holdingPaperRecycler';
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            alert(event.keyCode);
            switch (event.keyCode){
                case 37: // left arrow key unheld
                    if(player.speed < 0){
                        player.stop();
                    }
                    break;
                case 39: // right arrow key unheld
                    if (player.speed > 0){
                        player.stop();
                    }
                    break;
            }
        });
    }
}