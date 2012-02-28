function Constelacao(raio){
	var raio_maior = raio;
	var estrelas = [];
  var distanciaMax = 10;
	
	this.se_desenhar = function(context,mouseX,mouseY){
		for (var i = 0;i <= raio_maior; i++){
			if (estrelas[i] == undefined){
				var estrela = new Estrela(i,mouseX,mouseY);
				estrelas.push(estrela);
			} else {
				var estrela = estrelas[i];
				var proxEstrela = estrelas[i+1];
				if (proxEstrela == undefined){
					estrela.setPosicao(mouseX,mouseY);
					estrela.trocarCor();
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

}
