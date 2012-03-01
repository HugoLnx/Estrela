function PintorDeConstelacao(constelacao) {
  var constelacao = constelacao;
  var camadas = [
    {alpha: 0,expessure:0.3},
    {alpha: 0.01,expessure:0.2},
    {alpha: 0.02,expessure:0.1},
    {alpha: 0.03,expessure:0.1},
    {alpha: 0.06,expessure:0.05},
    {alpha: 0.07,expessure:0.05},
    {alpha: 0.1,expessure:0.1},
    {alpha: 1,expessure:0.1}
  ];

  this.pintarEm = function(context) {
    var cores = {};
    var estrelas = constelacao.estrelas();
    for (var i = 0; i < estrelas.length;i++){
      var estrela = estrelas[i]
      var cor = estrela.cor().join(' ');
      if (!cores[cor]) cores[cor]=[];
      cores[cor].push(new PintorDeEstrela(estrela));
    }

    for (var cor_s in cores){
      var pintores = cores[cor_s];
      var cor = cor_s.split(' ');
      for (var i = 0; i < camadas.length;i++){
        var camada = camadas[i];
        context.fillStyle = Canvas.stringRGBA(cor[0],cor[1],cor[2],camada.alpha);
        context.beginPath();
        for (var j = 0; j < pintores.length;j++){
          var pintor = pintores[j];
          pintor.desenharMaisUmaCamada(context,camada.expessure);
        }
        context.closePath();
        context.fill();
      }
    }
  };
};
