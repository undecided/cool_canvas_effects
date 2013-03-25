window.onload = function() {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  document.body.appendChild(canvas);



  var repaint = function() {
    context.fillStyle = "rgba(0, 255, 0, 0.1)";
    context.fillRect(0,0,canvas.width, canvas.height);

    var random_size = Math.round(Math.random() * 30);
    var random_x = Math.round(Math.random() * canvas.width);
    var random_y = Math.round(Math.random() * canvas.height);

    context.fillStyle = "rgb(0, 128, 255)";
    context.fillRect(random_x, random_y, random_size, random_size);

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