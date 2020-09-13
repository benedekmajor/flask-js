var background1 = 'blue';
var background2 = 'green';


var color = true;

setInterval(function () {
  document.body.style.backgroundColor = (color ? background1 : background2)
  color = !color;
}, 1000);
