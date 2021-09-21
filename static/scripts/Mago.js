export default function Mago(){
  this.posX = 0;
  this.posY = 80;
  this.score = 0;
  this.img = document.getElementById('mago'); 

  this.colision = function(laserX, laserY, laserWidth){
    var distanciaBlock = Math.sqrt( Math.pow(laserX - (this.posX + -10),2) ); 
    if(distanciaBlock < 40 && laserY > this.posY+5 && laserY < this.posY + 43)
      return true; 
    else 
      return false;
  }

  this.draw = function(ctx){
    ctx.drawImage(this.img,this.posX,this.posY,40,50);
  }

  this.update = function(ctx, orden){
    this.draw(ctx);
    this.move(orden);
  }

  this.move = function(orden){
    if(orden == 'arriba')
      this.posY = this.posY - 5;
    if(orden == 'abajo')
      this.posY = this.posY + 5;
  }
}

