export default class input{
    constructor(){
        document.addEventListener('keydown', (event) => {
            alert(event.keyCode);
            switch (event.keyCode){
                case 1: // left arrow key
                    player.moveLeft();
                    break;
                case 2: // right arrow key
                    player.moveRight();
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            alert(event.keyCode);
            switch (event.keyCode){
                case 1: // left arrow key unheld
                    if(player.speed < 0){
                        player.stop();
                    }
                    break;
                case 2: // right arrow key unheld
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
                case 1: // 1 key
                    alert ('garbage');
                    break;
                case 2: // 2 key
                    alert ('compost');
                    break;
                case 3: // 3 key
                    alert('recyler');
                    break;
                case 4: // 4 key
                    alert('paper recycler');
                    break;
            }
        });
    }
}