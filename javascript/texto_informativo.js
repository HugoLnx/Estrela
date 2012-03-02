function TextoInformativo(texto,x,y) {
  var texto = texto;
  var x = x;
  var y = y;
  var visivel = false;
  
  this.texto = function() {
    return texto;
  };

  this.visivel = function(estaVisivelOuNao) {
    if (estaVisivelOuNao===undefined || estaVisivelOuNao===null)
      return visivel;
    else
      visivel = estaVisivelOuNao;
  };

  this.x = function() {
    return x;
  };

  this.y = function() {
    return y;
  };
}
