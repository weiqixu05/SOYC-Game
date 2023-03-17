
import Bin from 'src/bin';


let canvas=document.getElementById("gameScreen");
let ctx=canvas.getContext("2d"); //context is what we use to draw on canvas

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0,0,800,600);

ctx.clearRect(0,0,800,600);

let bin= new Bin(GAME_WIDTH, GAME_HEIGHT);
bin.draw(ctx);