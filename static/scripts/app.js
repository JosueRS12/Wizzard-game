import Mago from "../scripts/Mago.js";
import Laser from "../scripts/Laser.js";


const mago = new Mago();
const laser = new Laser();

//console.log(mago);
//console.log(laser);
var ctx = document.getElementById("myCanvas").getContext("2d");

const getId = (path) =>{
  return document.getElementById(path);
}

const loadImg = () => {
  const imgs = {
    laserBlue: getId("laserBlue"),
    laserGreen: getId("laserGreen"),
    mago: getId("mago")
  };   
  return imgs;
} 

const drawElements = () =>{
  //(img, posx, posy, w,h)
  var imgs = loadImg();
  var imgBack = new Image();   // Create new img element
  imgBack.addEventListener('load', ()=>{
    ctx.drawImage(imgBack,0,0,300,150);
    laser.draw(ctx);
    mago.draw(ctx);
  }, false);
  imgBack.src = 'static/assets/background-game.jpg'; // Set source path
}

const scenary = () =>{
  ctx.beginPath();
  drawElements();
  ctx.closePath();
}

scenary();

