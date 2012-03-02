function Canvas(id){
	var constelacao = new Constelacao(30);
	var elem = document.getElementById(id);
  var texto = new TextoInformativo('Hover Here',elem.width/2,elem.height/2);
	var mouseX = 0;
	var mouseY = 0;
	var context = elem.getContext('2d');
	context.lineWidth = 4;

  texto.visivel(true);
  var pintor = new PintorDeTextoInformativo(texto);
  pintor.pintarEm(context);

	this.atualizar = function(mX,mY){
		mouseX = mX - elem.offsetLeft;
		mouseY = mY - elem.offsetTop;

    var retangulo = constelacao.enquadrada();
		context.clearRect(retangulo.x,retangulo.y,retangulo.width,retangulo.height);

    constelacao.atualizar(mouseX,mouseY);
    var pintor = new PintorDeConstelacao(constelacao);
    pintor.pintarEm(context);

    var estavaVisivel = texto.visivel();
    texto.visivel(!this.estaDentro(mX,mY));

    if(estavaVisivel !== texto.visivel()) {
      var pintor = new PintorDeTextoInformativo(texto);
      pintor.pintarEm(context);
      if(estavaVisivel) context.clearRect(0,0,elem.width,elem.height);
    }
	}

  this.estaDentro = function(x,y) {
    return (x > elem.offsetLeft && x<elem.offsetLeft+elem.width &&
            y > elem.offsetTop && y<elem.offsetTop+elem.height)
  }
	
	Canvas.stringRGBA = function(red,green,blue,alpha){
		return "rgba("+red+","+green+","+blue+","+alpha+")";
	}
}
