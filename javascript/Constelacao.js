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
					estrela.copiarPosicao(proxEstrela);
					estrela.copiarCor(proxEstrela);
				}
			}
			estrela.se_desenhar(context);
		}
	}

}
