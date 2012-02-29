function StarPainter(star) {
  var star = star;
  var layers = [
    {alpha: 0.01,expessure:0.5},
    {alpha: 0.02,expessure:0.1},
    {alpha: 0.04,expessure:0.1},
    {alpha: 0.06,expessure:0.1},
    {alpha: 0.1,expessure:0.1},
    {alpha: 1,expessure:0.1}
  ];

  this.paintOn = function(context) {
    var raioRenderizacao = star.raio();
    var expessureSum = 0;
    for(var i in layers) {
      var layer = layers[i];

			context.fillStyle = Canvas.stringRGBA(star.cor()[0],star.cor()[1],star.cor()[2],layer.alpha);
			context.beginPath();
      expessureSum += layer.expessure;
      while(raioRenderizacao > star.raio()*(1-expessureSum)){
			  context.arc(star.x(),star.y(),raioRenderizacao,0,Math.PI*2,true);
        raioRenderizacao -= 1;
      }
			context.closePath();
			context.fill();
    }
  };
};
