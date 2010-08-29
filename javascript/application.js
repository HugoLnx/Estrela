var canvas;

function init(){
	document.onmousemove = onCanvasMouseMove;
	canvas = new Canvas('pingos');
}

function onCanvasMouseMove(e){
	canvas.atualizar(e.pageX,e.pageY);
}