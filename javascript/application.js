var canvas;
var mouseEvent;

function init(){
	document.onmousemove = onCanvasMouseMove;
  window.setInterval(onActEstrela,20);
	canvas = new Canvas('estrelas');
}

function onCanvasMouseMove(e){
  mouseEvent = e;
}

function onActEstrela(){
  if (mouseEvent != undefined)
	  canvas.atualizar(mouseEvent.pageX,mouseEvent.pageY);
}
