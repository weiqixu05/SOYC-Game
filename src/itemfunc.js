export default class ItemFunc{
    constructor(gameWidth, gameHeight){
        this.height = 10;
        this.width = 10;
        this.speed = 5;
        this.position = {
            x: Math.floor(Math.random() * 900),
            y: 0
        };
    }
    
    draw(ctx){
        ctx.fillStyle='0ff';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

   respawn(){
        this.position.y = 0
        this.position.x = Math.floor(Math.random() * 900)
    }

    collide(player){
        if((player.position.y<=this.position.y&&this.position.y<=player.position.y+player.height)&&(this.position.x+this.height>=player.position.x-3&&this.position.x<=player.position.x+player.width+3)){
            return true;
        }
    }
    
    update(deltatime, player){
        if (!deltatime) return;

        this.position.y  += this.speed;

        if(this.position.y >= 600){this.respawn();}
        
       if(this.collide(player)){
         this.respawn();
       }
            
  
        /*} else if (this.position.y >= 600){
            hearts -= 1
            this.respawn
        }*/
    }
}

/*if ((this.position.y - this.height / 2 >= player.position.y - player.height / 2) && (this.position.x >= player.position.x - player.width/2 && this.position.x <= player.position.x + player.width/2)){
    if (player.state == this.state){
        score += 1
        this.respawn()
    }else{
        hearts -= 1
        this.respawn()*/