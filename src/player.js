/*export default class Player{
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

} */

export default class Player {
    constructor(gameWidth, gameHeight){
        this.gameWidth=gameWidth;
        this.width=50;
        this.height=30;
        this.maxSpeed=30;
        this.minSpeed=7;
        this.speed=0;
        this.prevSpeed=0;
        this.position={
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
    }

    moveLeft(){
        if(this.prevSpeed>=0){
            //have to add this if just went right
            this.prevSpeed=-this.minSpeed;
        }
        if(this.prevSpeed>=-this.maxSpeed){
            //acceleration 
            this.speed=this.prevSpeed*1.1;
            this.prevSpeed=this.speed;
        }
        //caps speed
        else{this.speed=-this.maxSpeed;}
    }

    moveRight(){
        if(this.prevSpeed<=0){
            //does this if just went left
            this.prevSpeed=this.minSpeed;
        }
        if(this.prevSpeed<=this.maxSpeed){
            //acceleration
            this.speed=this.prevSpeed*1.1;
            this.prevSpeed=this.speed;
        }
        //caps speed
        else{this.speed=this.maxSpeed;}
    }

    stop(){
        this.speed=0;
        this.prevSpeed=0;
    }

    draw(ctx){
        ctx.fillStyle='#0ff';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){
        if(!deltaTime){return;}
        this.position.x+=this.speed;
        //boundaries
        if(this.position.x<0){this.position.x=0;}
        if(this.position.x+this.width>=this.gameWidth){this.position.x=this.gameWidth-this.width;}
    }
}
