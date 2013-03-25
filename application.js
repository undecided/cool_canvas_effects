window.onload = function() {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  document.body.appendChild(canvas);

  var my_timeout = false;


  var repaint = function() {
    context.fillStyle = "rgba(0, 255, 0, 0.1)";
    context.fillRect(0,0,canvas.width, canvas.height);

    var random_size = Math.round(Math.random() * 300);
    var random_x = Math.round(Math.random() * canvas.width);
    var random_y = Math.round(Math.random() * canvas.height);
    var blue = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var red = Math.round(Math.random() * 255);


    context.fillStyle = "rgb(" + blue + ", " + green + " , " + red + ")";
    context.fillRect(random_x, random_y, random_size, random_size);

    my_timeout = setTimeout(repaint, 100);
  };


  var resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if(my_timeout) { clearTimeout(my_timeout); }
    repaint();
  };


  window.onresize = resize;
  resize();

};