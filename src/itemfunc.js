export default class ItemFunc{
    constructor(){
        this.height = 25;
        this.width = 25;
        this.speed = 3;
        this.count=1;
        this.hearts=3;
        this.score=0;
        this.position = {
            x: Math.floor(Math.random() * (850 - 100) + 100),
            y: 0
        };
        this.state={
            "1":[document.getElementById("Apple Core"), document.getElementById("Banana Peel"), document.getElementById("Rose"), document.getElementById("Pumpkin")],
            "2":[document.getElementById("Orange Bottle"), document.getElementById("Water Bottle"), document.getElementById("Glass Jar"), document.getElementById("Pop Can")],
            "3":[document.getElementById("Lined Paper"), document.getElementById("Newspaper"), document.getElementById("Envelope"), document.getElementById("Box")],
            "4":[document.getElementById("Plastic Straw"), document.getElementById("Candy Wrapper"), document.getElementById("Mug"), document.getElementById("Plastic Bag")]
        }
        this.currentState=(Math.floor(Math.random() * 4) + 1).toString();
        this.subState=(Math.floor(Math.random() * 4));
        this.img=this.state[this.currentState][this.subState];

        this.scoreSound = document.getElementById("scoreSound");
        this.lossSound = document.getElementById("lossSound");
    }
    
    draw(ctx){
        this.img=this.state[this.currentState][this.subState];
        ctx.drawImage(this.img, this.position.x, this.position.y);
    }
    drawUi(ctx){
        ctx.font = "25px serif";
    }

   respawn(){
        this.position.y = this.position.y-600;//600 is gameheight
        this.position.x = Math.floor(Math.random() * (900 - 100) + 100);//spawns between x=100 and x=900
        this.currentState=(Math.floor(Math.random() * 4) + 1).toString();
        this.subState=(Math.floor(Math.random() * 4));
        //console.log(this.currentState, ' ', this.subState, ' ', this.position.x);
    }

    collide(player){
        if((player.position.y<=this.position.y&&this.position.y<=player.position.y+player.height)&&(this.position.x+this.height>=player.position.x-3&&this.position.x<=player.position.x+player.width+3)){
            return true;
        }
    }
    
    update(deltatime, player){
        if (!deltatime) return;
        this.position.y  += this.speed;
    
       if(this.collide(player)&&player.chosenState===this.currentState){
            this.respawn();
            this.score++;
            this.scoreSound.play();
       }
       
       else if(this.collide(player)&&player.chosenState!==this.currentState){
            this.respawn();
            this.hearts--;
       }
       
        else if (this.position.y >= player.position.y+player.height){
            this.hearts--;
            this.respawn();
        }
    }
}
