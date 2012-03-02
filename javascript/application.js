var canvas;
var mouseEvent;
var gameLoop;

function init(){
	document.onmousemove = guardarMouseEvent;
  gameLoop = new GameLoop(atualizarEstrela);
	canvas = new Canvas('estrelas');
}

function guardarMouseEvent(e){
	mouseEvent = e;
}

function atualizarEstrela(){
	if (mouseEvent != undefined)
		canvas.atualizar(mouseEvent.pageX,mouseEvent.pageY);
}
