function GameLoop(updateGame) {
  var frame = 0;
  var FPS = 20;
  var finished = true;

	window.setTimeout(loop,fps);

  function loop() {
    setTimeout(loop,FPS);
    updateGame();
    frame++;
  };

  this.frame = function() {
    return frame;
  };
};
