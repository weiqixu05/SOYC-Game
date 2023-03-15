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
    constructor(){
        document.addEventListener('keydown', (event) => {
            alert(event.keyCode);
            switch (event.keyCode){
                case 49: // 1 key
                    alert ('garbage');
                    break;
                case 50: // 2 key
                    alert ('compost');
                    break;
                case 51: // 3 key
                    alert('recyler');
                    break;
                case 52: // 4 key
                    alert('paper recycler');
                    break;
            }
        });
    }
}