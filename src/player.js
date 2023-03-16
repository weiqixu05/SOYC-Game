export default class player{
    constructor(gameWidth, gameHeight){ 
        this.gameWidth = gameWidth

        this.width = 10;
        this.height = 10;

        this.position = {
            x: gameWidth/2 - this.width/2,
            y: gameHeight/2 - this.height-5
        };
        this.maxspeed = 5;
        this.speed = 0;

        this.states = {
            'holdingGarbage': document.getElementById('Id'), //Player-Garabge image
            'holdingCompost': document.getElementById('Id'), //Player-Compost image
            'holdingRecyler': document.getElementById('Id'), //Player-Recylcer image
            'holdingPaperRecyler': document.getElementById('Id') //Player-PaperRecylcer image
        }
        this.state = 'holdingGarbage'
        this.image = this.states[this.state]

    }

    moveLeft(){
        this.speed = -this.maxspeed;
    }

    moveRight(){
        this.speed = this.maxspeed;
    }

    stop(){
        this.speed = 0;
    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltatime){
        if (!deltatime) return;

        this.image = this.states[this.state]

        this.position.x  += this.speed;
        
        if (this.position.x < 0){
            this.positition.x = 0;
        }

        if (this.position.x + this.width > gameWidth){
            this.position.x = gameWidth - this.width;
        }
    }

}