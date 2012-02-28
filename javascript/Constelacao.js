function Constelacao(raio){
	var raio_maior = raio;
	var estrelas = [];
  var distanciaMax = 10;

  trocarCorPeriodicamente();
  function trocarCorPeriodicamente() {
    cor = randomizarCor();
    setTimeout(trocarCorPeriodicamente,randomizarTempo());
  }

	this.se_desenhar = function(context,mouseX,mouseY){
		for (var i = 0;i <= raio_maior; i++){
			if (estrelas[i] == undefined){
				var estrela = new Estrela(i,mouseX,mouseY,cor);
				estrelas.push(estrela);
			} else {
				var estrela = estrelas[i];
				var proxEstrela = estrelas[i+1];
				if (proxEstrela == undefined){
					estrela.setPosicao(mouseX,mouseY);
					estrela.setCor(cor);
				} else {
          estrela.copiarCor(proxEstrela);
          if(proxEstrela && proxEstrela.distanciaPara(estrela.getX(),estrela.getY()) > distanciaMax) {
            var pos = proxEstrela.posicaoQuandoDistarDe(distanciaMax,estrela.getX(),estrela.getY());
            estrela.setPosicao(pos.x,pos.y);
          } else 
            estrela.copiarPosicao(proxEstrela);
				}
			}
			estrela.se_desenhar(context);
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
}
