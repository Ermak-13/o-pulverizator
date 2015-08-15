function init() {
  var MAX_RADIUS_FACTOR = 1/20,
      MIN_RADIUS_FACTOR = 1/40;

  var canvas = document.getElementById('o-pulverizator-canvas'),
      context = canvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);

  function pageHeight() {
    var B = document.body,
        H = document.documentElement,
        height;

    if (typeof document.height !== 'undefined') {
        height = document.height;
    } else {
        height = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
    }

    return height;
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = pageHeight();
  }
  resizeCanvas();

  function xHandler(event) {
    var x = event.pageX - canvas.offsetLeft;
    return x;
  }

  function yHandler() {
    var y = event.pageY - canvas.offsetTop;
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

  function clickHandler(event) {
    var x = xHandler(event),
        y = yHandler(event);

    drawPulverizator(x, y);
  }
  canvas.addEventListener('click', clickHandler, false);

  // for blogspot ;)
  //var content = document.getElementsByClassName('content')[0];
  //content.addEventListener('click', clickHandler, false);
}

window.onload = function () {
  init();
}
