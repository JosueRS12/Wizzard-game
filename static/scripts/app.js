import Board from "../scripts/view/board.js";

document.addEventListener("keydown", handleKey);
var ctx = document.getElementById("myCanvas").getContext("2d");
var tecla;
var teclaPause = true;
var puntaje =  document.getElementById("puntaje");
var canvas =  document.getElementById("canvas_container");

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

var colision = false;
var board = new Board(ctx);
const drawScenary = () =>{
  if(colision){
    teclaPause = true;
    board = new Board(ctx);
  }
  colision = board.drawElements(tecla, teclaPause);
  tecla = '';
}
setInterval(drawScenary, board.fps); // 300en ms

drawScenary();
