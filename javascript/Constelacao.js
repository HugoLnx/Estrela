function Constelacao(raio){
	var raio = raio;
	var estrelas = [];
	for (var i = raio; i > 0; i--){
		estrelas.push(new Estrela(i));
	}
	
	this.se_desenhar = function(context,historicoCursor){
		for (var i = 0; i < historicoCursor.length && i < raio; i++){
			if (estrelas[i] == undefined)
				estrelas[i] = new Estrela(i);
			estrela = estrelas[i];
			x = historicoCursor[i]['x'];
			y = historicoCursor[i]['y'];
			estrela.se_desenhar(context,x,y);
		}
	}
}