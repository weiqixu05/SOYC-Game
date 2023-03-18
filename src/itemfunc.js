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
        this.position.y = 600
        this.position.x = Math.floor(Math.random() * 900)
    }
    
    update(deltatime){
        if (!deltatime) return;

        this.position.y  += this.speed;
    /*
        if ((this.position.y - this.height / 2 <= player.position.y - player.height / 2) && (this.position.x >= player.position.x - player.width/2 && this.position.x <= player.position.x + player.width/2)){
            if (player.state == this.state){
                score += 1
                this.respawm()
            }else{
                hearts -= 1
                this.respawn()
            }
        } else if (this.position.y - this.height/2 <= 0){
            hearts -= 1
            this.respawn
        }*/        
    }
}