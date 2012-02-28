function Estrela(r,x_inicial,y_inicial){
	var x = x_inicial;
	var y = y_inicial;
	var raio = r;
	var cor = randomizarCor();
  var layers = [
    {alpha: 0.1,expessure:0.3},
    {alpha: 0.3,expessure:0.1},
    {alpha: 0.4,expessure:0.1},
    {alpha: 0.7,expessure:0.1},
    {alpha: 0.8,expessure:0.1},
    {alpha: 1,expessure:0.3}
  ];
	
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
    var raioRenderizacao = raio;
    var expessureSum = 0;
    for(var i in layers) {
      var layer = layers[i];

			context.fillStyle = stringCorComTransparencia(layer.alpha);
			context.beginPath();
      expessureSum += layer.expessure;
      while(raioRenderizacao > raio*(1-expessureSum)){
			  context.arc(x,y,raioRenderizacao,0,Math.PI*2,true);
        raioRenderizacao -= 1;
      }
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
