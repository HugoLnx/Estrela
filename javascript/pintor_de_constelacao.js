function PintorDeConstelacao(constelacao) {
  var constelacao = constelacao;

  this.pintarEm = function(context) {
    var estrelas = constelacao.estrelas();
    for (var i = 0; i < estrelas.length;i++){
      var pintor = new PintorDeEstrela(estrelas[i]);
			pintor.pintarEm(context);
    }
  };
};
