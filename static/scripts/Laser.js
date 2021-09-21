export default function Laser(){
  this.posX = 240;
  this.posY = Math.floor(Math.random()*(145)); //(max - min) + min;
  this.img = document.getElementById('laserGreen'); 


  this.draw = function(ctx){
    ctx.drawImage(this.img,this.posX,this.posY,50,5);
  }

  this.getWidth = function(){
    return 50;
  }

  this.getX = function(){
    return this.posX;
  }

  this.getY = function(){
    return this.posY;
  }

  this.update = function(ctx, colision){
    this.draw(ctx);
    if(this.posX === -50 || colision){
      this.posY =  Math.floor(Math.random()*(145));// max 145
      this.posX = 240 ;
    }
    else 
      this.posX = this.posX-10;
  }
}
