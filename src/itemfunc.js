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

    update(deltatime, player){
        if (!deltatime) return;

        this.position.y  -= this.speed;

        if ((this.position.y - this.height / 2 <= player.position.y - player.height / 2) && (this.position.x >= player.position.x - player.width/2 && this.position.x <= player.position.x + player.width/2)){
            //If item and box match up:
                //item remove
                //Score increase 
            //Else:
                //Lose Heart
                //Remove from screen
        } else if (this.position.y - this.height/2 <= 0){
            //Lose Heart
            //Remove from screen
        }        
    }
}