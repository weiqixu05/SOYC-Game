import Player from 'src/player';
import Bin from 'src/bin';

let canvas=document.getElementById("gameScreen");
let ctx=canvas.getContext("2d"); //context is what we use to draw on canvas

const GAME_WIDTH = 1920
const GAME_HEIGHT = 1080

ctx.clearRect(0,0,800,600);

let player = new Player(GAME_WIDTH, GAME_HEIGHT)

player.draw(ctx)
