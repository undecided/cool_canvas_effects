window.onload = function() {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  document.body.appendChild(canvas);



  var repaint = function() {
    context.fillStyle = "rgba(0, 255, 0, 0.5)";
    context.fillRect(0,0,canvas.width, canvas.height);
  };



  var resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    repaint();
  };

  window.onresize = resize;
  resize();

};