import compostitem from "./CompostItem";
import recylceritem from "./RecyclerItem";
import garbageitem from "./GarbageItem";
import paperitem from "./PaperItem";

export default class ItemFunc{
    constructor(){
        this.height = 10;
        this.width = 10;

        this.position = {
            x: Math.floor(Math.random() * 1500),
            y: 1080
        };
        this.speed = 5;
    }
    
    draw(ctx){
        
    }

    respawn(){

    }

    update(deltatime, player){
        if (!deltatime) return;

        this.position.y  -= this.speed;

        if ((this.position.y - this.height / 2 <= player.position.y - player.height / 2) && (this.position.x >= player.position.x - player.width/2 && this.position.x <= player.position.x + player.width/2)){
            if (player.state == this.state){
                score += 1
            }else{
                hearts -= 1
            }
        } else if (this.position.y - this.height/2 <= 0){
            hearts -= 1
        }        
    }
}