function Constelacao(raio){
	var raio_maior = raio;
	var estrelas = [];
  var distanciaMax = 3;

  trocarCorPeriodicamente();
  function trocarCorPeriodicamente() {
    cor = randomizarCor();
    setTimeout(trocarCorPeriodicamente,randomizarTempo());
  }

  var mudandoDeCor = false;
  var frameInicial = null;

	this.update = function(mouseX,mouseY){
		for (var i = 0;i <= raio_maior; i++){
		  var estrela = estrelas[i];
			if (estrela == undefined){
				var estrela = new Estrela(raio_maior-i,mouseX,mouseY,cor);
				estrelas.push(estrela);
			} else {
				var anteEstrela = estrelas[i-1];
				if (!anteEstrela){
					estrela.setPosicao(mouseX,mouseY);
					estrela.cor(cor);
          mudandoDeCor=true;
				} else {
          if(anteEstrela.distanciaPara(estrela.x(),estrela.y()) > distanciaMax) {
            var pos = anteEstrela.posicaoQuandoDistarDe(distanciaMax,estrela.x(),estrela.y());
            estrela.setPosicao(pos.x,pos.y);
          } else {
            estrela.copiarPosicao(anteEstrela);
          }
				}
			}
		}

    if(mudandoDeCor){
      if (!frameInicial) frameInicial = frame;
      var i = (frame - frameInicial)+1;
      var estrela = estrelas[i];
      var anteEstrela = estrelas[i-1];
      estrela.copiarCor(anteEstrela);
      if(i>=estrelas.length-1){
        mudandoDeCor=false;
        frameInicial=null;
      }
    }
	}

  function randomizarTempo() {
    return 400+Math.floor(Math.random()*500);
  }
	
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

  this.estrelas = function() {
    return estrelas;
  }
}
