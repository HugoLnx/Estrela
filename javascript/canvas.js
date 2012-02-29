function Canvas(id){
	var historicoCursor = [];
	var constelacao = new Constelacao(30);
	var elem = document.getElementById(id);
	var mouseX = 0;
	var mouseY = 0;
	var context = elem.getContext('2d');
	context.lineWidth = 4;

  function desenharTextoInformativo(){
		context.beginPath();context.closePath();
    context.save();
    context.font = '30px arial';
    context.fillStyle = "rgba(255,255,255,0.1)";
    context.textAlign = "center";
    context.textBaseline = "middle";
    var text = "< Hover Here >";
    context.fillText(text,(elem.width/2),(elem.height/2));
    context.fill();
    context.restore();
  }
  desenharTextoInformativo();

	this.atualizar = function(mX,mY){
		context.clearRect(0,0,elem.width,elem.height);
	
		mouseX = mX - elem.offsetLeft;
		mouseY = mY - elem.offsetTop;
    constelacao.update(mouseX,mouseY);
    var painter = new ConstellationPainter(constelacao);
    painter.paintOn(context);
    if (!this.estaDentro(mX,mY))
      desenharTextoInformativo();
	}

  this.estaDentro = function(x,y) {
    return (x > elem.offsetLeft && x<elem.offsetLeft+elem.width &&
            y > elem.offsetTop && y<elem.offsetTop+elem.height)
  }
	
	Canvas.stringRGBA = function(red,green,blue,alpha){
		return "rgba("+red+","+green+","+blue+","+alpha+")";
	}
}
