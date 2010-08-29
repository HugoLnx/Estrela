function Canvas(id){
	var historicoCursor = [];
	var constelacao = new Constelacao(30);
	var elem = document.getElementById(id);
	var mouseX = 0;
	var mouseY = 0;
	var context = elem.getContext('2d');
	context.lineWidth = 4;
	
	this.atualizar = function(mX,mY){
		mouseX = mX - 8;
		mouseY = mY - 3;
		historicoCursor.reverse();
		coordenada = [];
		coordenada['x'] = mouseX;
		coordenada['y'] = mouseY;
		historicoCursor.push(coordenada);
		historicoCursor.reverse();
		context.clearRect(0,0,elem.width,elem.height);
		
		constelacao.se_desenhar(context,historicoCursor);
	}
}