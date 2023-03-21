export default class ItemFunc{
    constructor(){
        this.height = 25;
        this.width = 25;
        this.speed = 3;
        this.count=1;
        this.hearts=3;
        this.score=0;
        this.position = {
            x: Math.floor(Math.random() * 900),
            y: 0
        };
        this.state={
            "1":document.getElementById("Banana Peel"),
            "2":document.getElementById("Water Bottle2"),
            "3":document.getElementById("Lined Paper"),
            "4":document.getElementById("Plastic Straw")
        }
        this.currentState=(Math.floor(Math.random() * 4) + 1).toString();
        this.img=this.state[this.currentState];
    }
    
    draw(ctx){
        this.img=this.state[this.currentState];
        ctx.drawImage(this.img, this.position.x, this.position.y);
    }
    drawUi(ctx){
        ctx.font = "25px serif";
    }

   respawn(){
        this.position.y = this.position.y-600;//600 is gameheight
        this.position.x = Math.floor(Math.random() * 1000);//1000 is gamewidth
        this.currentState=(Math.floor(Math.random() * 4) + 1).toString();
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

