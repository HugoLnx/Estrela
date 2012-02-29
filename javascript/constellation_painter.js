function ConstellationPainter(constellation) {
  var constellation = constellation;

  this.paintOn = function(context) {
    var estrelas = constellation.estrelas();
    for (var i = 0; i < estrelas.length;i++){
      var painter = new StarPainter(estrelas[i]);
			painter.paintOn(context);
    }
  };
};
