function init() {
  var MAX_RADIUS_FACTOR = 1/6,
      MIN_RADIUS_FACTOR = 1/15;

  var canvas = document.getElementById('o-pulverizator-canvas'),
      context = canvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();

  function xHandler(event) {
    var x = event.x - canvas.offsetLeft;
    return x;
  }

  function yHandler() {
    var y = event.y - canvas.offsetTop;
    return y;
  }

  function radius() {
    var r = Math.max(canvas.width, canvas.height),
        max = r * MAX_RADIUS_FACTOR,
        min = r * MIN_RADIUS_FACTOR;

    return Math.random() * (max - min) + min;
  }

  function randomColor() {
    var r = 255 * Math.random()|0,
        g = 255 * Math.random()|0,
        b = 255 * Math.random()|0;

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  function drawPulverizator(x, y) {
    context.beginPath();
    context.arc(x, y, radius(), 0, 2 * Math.PI);
    context.fillStyle = randomColor();
    context.fill();
  }

  canvas.addEventListener('click', function (event) {
    var x = xHandler(event),
        y = yHandler(event);

    drawPulverizator(x, y);
  }, false);
}

init();
