window.onload = function() {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  document.body.appendChild(canvas);



  var repaint = function() {
    context.fillStyle = "rgba(0, 255, 0, 0.1)";
    context.fillRect(0,0,canvas.width, canvas.height);

    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var size = Math.random() * 30;


    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.fillRect(x,y, size, size);

    setTimeout(repaint, 100);

  };



  var resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    repaint();
  };

  window.onresize = resize;
  resize();

};