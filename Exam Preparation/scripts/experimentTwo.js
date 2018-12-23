window.onload =  function () {
  let circleDrawing = document.getElementById('canvas');
  let context = circleDrawing.getContext('2d');
  let circleX = circleDrawing.pageX;
  let circleY = circleDrawing.pageY;

  circleDrawing.addEventListener('click', function (x, y) {
      x = document.pageX;
      y = document.pageY;

      if (x < circleX || y < circleY) {
          context.beginPath();
          context.arc(x, y, 75, 75, 31, false);
          context.strokeStyle = '#f00';
          context.fillStyle = '#f00';
          context.fill();
          context.stroke();
      }
  }, false);

  context.beginPath();
  context.arc(100, 100, 75, 75, 31, false);
  context.strokeStyle = '#f00';
  context.fillStyle = '#f00';
  context.fill();
  context.stroke();
};