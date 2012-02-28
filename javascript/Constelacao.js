function Constelacao(raio){
	var raio_maior = raio;
	var estrelas = [];
	
	this.se_desenhar = function(context,mouseX,mouseY){
		for (var i = 0;i <= raio_maior; i++){
			if (estrelas[i] == undefined){
				estrela = new Estrela(i,mouseX,mouseY);
				estrelas.push(estrela);
			} else {
				estrela = estrelas[i];
				proxEstrela = estrelas[i+1];
				if (proxEstrela == undefined){
					estrela.setPosicao(mouseX,mouseY);
					estrela.trocarCor();
				} else {
          estrela.copiarCor(proxEstrela);
          var distanciaMax = 15;
          if(estrela.distanciaPara(proxEstrela) <= distanciaMax) {
            estrela.copiarPosicao(proxEstrela);
          } else {
            var xn = (estrela.getX()-proxEstrela.getX());
            var yn = (estrela.getY()-proxEstrela.getY());
            var yr = ((distanciaMax-0.1)*yn)/Math.sqrt(xn*xn+yn*yn);
            if (yr*xn === 0 && yn === 0)
              var xr = 0;
            else var xr = (yr*xn)/yn;
            estrela.setPosicao(proxEstrela.getX()+xr,proxEstrela.getY()+yr);
          }
				}
			}
			estrela.se_desenhar(context);
		}
	}

}
