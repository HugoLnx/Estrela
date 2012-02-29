function PintorDeEstrela(estrela) {
  var estrela = estrela;
  var camadas = [
    {alpha: 0.01,expessure:0.5},
    {alpha: 0.02,expessure:0.1},
    {alpha: 0.04,expessure:0.1},
    {alpha: 0.06,expessure:0.1},
    {alpha: 0.1,expessure:0.1},
    {alpha: 1,expessure:0.1}
  ];

  this.pintarEm = function(context) {
    var raioRenderizacao = estrela.raio();
    var expessureSum = 0;
    for(var i in camadas) {
      var camada = camadas[i];

			context.fillStyle = Canvas.stringRGBA(estrela.cor()[0],estrela.cor()[1],estrela.cor()[2],camada.alpha);
			context.beginPath();
      expessureSum += camada.expessure;
      while(raioRenderizacao > estrela.raio()*(1-expessureSum)){
			  context.arc(estrela.x(),estrela.y(),raioRenderizacao,0,Math.PI*2,true);
        raioRenderizacao -= 1;
      }
			context.closePath();
			context.fill();
    }
  };
};
