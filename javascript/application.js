var canvas;
var mouseEvent;
var frame = 0;
var fps = 50;
var intervalId;

function init(){
	document.onmousemove = guardarMouseEvent;
  if (navigator.appCodeName == 'Mozilla')
  window.setTimeout(aumentarFps,3000);
	intervalId = window.setInterval(atualizarEstrela,fps);
	canvas = new Canvas('estrelas');
}

function aumentarFps() {
  fps = 20;
  window.clearInterval(intervalId);
	intervalId = window.setInterval(atualizarEstrela,fps);
}

function guardarMouseEvent(e){
	mouseEvent = e;
}

function atualizarEstrela(){
  frame++;
	if (mouseEvent != undefined)
		canvas.atualizar(mouseEvent.pageX,mouseEvent.pageY);
}
