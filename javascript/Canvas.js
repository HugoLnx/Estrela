function Canvas(id){
	var estrela = new Estrela(15);
	var elem = document.getElementById(id);
	var mouseX = 0;
	var mouseY = 0;
	var context = elem.getContext('2d');
	context.lineWidth = 4;
	
	this.atualizar = function(mX,mY){
		mouseX = mX - 8;
		mouseY = mY - 3;
		context.clearRect(0,0,elem.width,elem.height);
		
		estrela.desenhar_no(context,mouseX,mouseY);
	}
}