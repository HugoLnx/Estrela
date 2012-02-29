function Estrela(r,x_inicial,y_inicial,cor){
	var x = x_inicial;
	var y = y_inicial;
	var raio = r;
	var cor = cor;
	
	this.copiarPosicao = function(estrela){
		x = estrela.getX();
		y = estrela.getY();
	}

  this.distanciaPara = function(x2,y2){
    return Math.sqrt(Math.pow(x2-x,2)+Math.pow(y2-y,2));
  }

  this.posicaoQuandoDistarDe = function(distancia,x2,y2) {
    var xn = x2-x;
    var yn = y2-y;
    var yr = ((distancia-0.1)*yn)/Math.sqrt(xn*xn+yn*yn);
    if (yn === 0)
      var xr = 0;
    else var xr = (yr*xn)/yn;
    return {x:x+xr, y:y+yr};
  }
	
	this.copiarCor = function(estrela){
		cor = estrela.getCor();
	}
	
	this.setPosicao = function(novoX,novoY){
		x = novoX;
		y = novoY;
	}
	
	this.getX = function(){
		return x;
	}
	
	this.getY = function(){
		return y;
	}
	
	this.getCor = function(){
		return cor;
	}
	
	this.setX = function(novoX){
		x = novoX;
	}
	
	this.setY = function(novoY){
		y = novoY;
	}
	
	this.setCor = function(novaCor){
		cor = novaCor;
	}

  this.raio = function() {
    return raio;
  }

  this.cor = function() {
    return cor;
  }

  this.x = function() {
    return x;
  }

  this.y = function() {
    return y;
  }
}
