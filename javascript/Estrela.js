function Estrela(r,x_inicial,y_inicial){
	var x = x_inicial;
	var y = y_inicial;
	var raio = r;
  this.raio = raio;
	var cor = randomizarCor();
	
	function randomizarCor(){
		cor = [];
		qnt_f = 0;
		qnt_zero = 0;
		for (var i=0;i<3;i+=1){
			if ((qnt_f != 2 && Math.floor(Math.random()*10) % 2 == 0) || qnt_zero == 2){
				cor.push(255);
				qnt_f += 1;
			} else {
				cor.push(0);
				qnt_zero += 1;
			}
		}
		return cor;
	}
	
	function stringCorComTransparencia(alpha){
		return "rgba("+cor[0]+","+cor[1]+","+cor[2]+","+alpha+")";
	}
	
	this.se_desenhar = function(context){
		for (var i = 1; i <= raio; i++){
			if (i < raio * 0.1)
				var alpha = 1
			else if (i < raio * 0.333)
				var alpha = 0.3
			else if (i < raio * 0.5)
				var alpha = 0.3
			else
				var alpha = 0.1

			context.fillStyle = stringCorComTransparencia(alpha);
			context.beginPath();
			context.arc(x,y,i,0,Math.PI*2,true);
			context.closePath();
			context.fill();
		}
	}
	
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
    if (yr*xn === 0 && yn === 0) // TODO
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
	
	this.trocarCor = function(){
		cor = randomizarCor();
	}

}
