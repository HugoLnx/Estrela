function PintorDeTextoInformativo(ctexto) {
  var ctexto = ctexto;

  this.pintarEm = function(context) {
    if (!ctexto.visivel()) return;

    context.beginPath();context.closePath();
    context.save();
    context.font = '30px arial';
    context.fillStyle = "rgba(255,255,255,0.1)";
    context.textAlign = "center";
    context.textBaseline = "middle";
    var text = "< " + ctexto.texto() + " >";
    context.fillText(text,ctexto.x(),ctexto.y());
    context.fill();
    context.restore();
  };
};
