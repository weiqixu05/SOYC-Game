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

    
    let itemtype = random(compostitem, recylceritem, garbageitem, paperitem);
    let item = random(itemtype.images);


    draw(ctx){
        
    }

    update(deltatime){
        if (!deltatime) return;

        this.position.y  -= this.speed;
        
    }
}