function Constelacao(raio){
	var raio_maior = raio;
	var estrelas = [];
	
	this.se_desenhar = function(context,historicoCursor){

		for (var i = 0; i < historicoCursor.length && i <= raio_maior; i++){
			if (estrelas[i] == undefined){
				estrela = new Estrela(raio_maior-i);
				estrelas.push(estrela);
			} else {
				estrela = estrelas[i];
			}

			x = historicoCursor[i]['x'];
			y = historicoCursor[i]['y'];
			estrela.se_desenhar(context,x,y);
		}
	}

}