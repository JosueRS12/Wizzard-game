export default function Laser(){
  this.posX = 240;
  this.posY = 100;
  this.img = document.getElementById('laserGreen'); 

  this.draw = function(ctx){
    ctx.drawImage(this.img,this.posX,this.posY,50,5);
  }

  this.hola = function(){
    console.log('hola');
  }
}
