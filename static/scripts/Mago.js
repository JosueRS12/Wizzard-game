export default function Mago(){
  this.posX = 0;
  this.posY = 80;
  this.score = 0;
  this.img = document.getElementById('mago'); 

  this.draw = function(ctx){
    ctx.drawImage(this.img,this.posX,this.posY,40,50);
  }

  this.hola = function(){
    console.log('hola');
  }
}

