import Mago from "../scripts/Mago.js";
import Laser from "../scripts/Laser.js";


const mago = new Mago();
const laser = new Laser();

var ctx = document.getElementById("myCanvas").getContext("2d");
document.addEventListener('keydown', handleKey);
var tecla;
var teclaPause = true;

function handleKey(e){
  switch (e.keyCode){
    case 87:
      tecla = 'arriba';
      break;
    case 83:
      tecla = 'abajo';
      break;
    case 80:
      teclaPause = !teclaPause;
      break;
  }
  e.preventDefault();
}

const drawElements = () =>{
  var imgBack = new Image();   // Create new img element
  imgBack.addEventListener('load', ()=>{
    ctx.drawImage(imgBack,0,0,300,150); //width height
    if(teclaPause){
      mago.draw(ctx);
      laser.draw(ctx);
      tecla = '';
    }
    else {  
      mago.update(ctx, tecla);
      laser.update(ctx, mago.colision(laser.getX(), laser.getY(), laser.getWidth()));
      tecla = '';
    }
  }, false);
  imgBack.src = 'static/assets/background-game.jpg'; // Set source path
}
var score = 0;

var fps = 50;
const drawScenary = () =>{
  ctx.beginPath();
  score+=1/10;
  if(mago.colision(laser.getX(),laser.getY(), laser.getWidth())){
    window.alert(`Ha perdido. Su puntaje fue de: ${parseInt(score)} pts`);
    score = 0;
  }
  drawElements();
  ctx.closePath();
}
setInterval(drawScenary,fps); // 300en ms

drawScenary();



