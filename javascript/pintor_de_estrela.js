function PintorDeEstrela(estrela) {
  var estrela = estrela;
  var raioRenderizacao = estrela.raio();
  var expessureSum = 0;
  var i = 0;

  this.desenharMaisUmaCamada = function(context,espessura) {
    expessureSum += espessura;
    context.moveTo(estrela.x(),estrela.y());
    while(raioRenderizacao > estrela.raio()*(1-expessureSum)){
      context.arc(estrela.x(),estrela.y(),raioRenderizacao,0,Math.PI*2,true);
      raioRenderizacao -= 1;
    }
    i++;
  };
};
