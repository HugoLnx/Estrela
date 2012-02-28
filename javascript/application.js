var canvas;
var mouseEvent;
var frame = 0;

function init(){
	document.onmousemove = guardarMouseEvent;
	window.setInterval(atualizarEstrela,20);
	canvas = new Canvas('estrelas');
}

function guardarMouseEvent(e){
	mouseEvent = e;
}

function atualizarEstrela(){
  frame++;
	if (mouseEvent != undefined)
		canvas.atualizar(mouseEvent.pageX,mouseEvent.pageY);
}
