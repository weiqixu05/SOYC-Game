export default class ItemFunc{
    constructor(){
        this.height = 25;
        this.width = 25;
        this.speed = 5;
        this.count=1;
        this.hearts=3;
        this.score=0;
        this.position = {
            x: Math.floor(Math.random() * 900),
            y: 0
        };
        this.state={
            "1":document.getElementById("black item"),
            "2":document.getElementById("green item"),
            "3":document.getElementById("purple item"),
            "4":document.getElementById("red item")
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
        this.position.y = 0;
        this.position.x = Math.floor(Math.random() * 900);
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

/*if ((this.position.y - this.height / 2 >= player.position.y - player.height / 2) && (this.position.x >= player.position.x - player.width/2 && this.position.x <= player.position.x + player.width/2)){
    if (player.state == this.state){
        score += 1
        this.respawn()
    }else{
        hearts -= 1
        this.respawn()*/