var character = document.getElementById("character");
var interval;
var both=0;

function moveLeft(){
    var left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left=left-2+"px";
}

function moveRight(){
    var left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left=left+2+"px";
}

//eventually add this to a separate controller file for better organization
document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval=setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
            interval=setInterval(moveRight, 1);
        }
    }
});
//same with this one
document.addEventListener("keyup", event =>{
    clearInterval(interval);
    both=0;
});