var canvas;

function init(){
	document.onmousemove = onCanvasMouseMove;
	canvas = new Canvas('estrelas');
}

function onCanvasMouseMove(e){
	canvas.atualizar(e.pageX,e.pageY);
}