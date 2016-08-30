var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1/16/1000;
var backCanvas = document.createElement('canvas');
backCanvas.width = canvas.width;
backCanvas.height = canvas.height;
var backCtx = backCanvas.getContext('2d');

var image = new Image();
image.src = "C:/Users/cj/Pictures/pictures/galaxy-wallpapers-22-1.jpg";

var x = 0;
var y = 0;

var input = {
  up: false,
  down: false,
  left: false,
  right: false
}
window.onkeydown = function(event){
  event.preventDefault();
  switch(event.keyCode){
    //up
      case 38:
      case 87:
        input.up = true;
        break;
        //left
      case 37:
      case 65:
        input.left = true;
        break;
        //rightg
      case 39:
      case 68:
        input.right = true;
        break;
        //down
      case 40:
      case 83:
        input.down = true;
        break;
  }
}

window.onkeyup = function(event){
  switch(event.keyCode){
    //up
      case 38:
      case 87:
        input.up = false;
        break;
        //left
      case 37:
      case 65:
        input.left = false;
        break;
        //rightg
      case 39:
      case 68:
        input.right = false;
        break;
        //down
      case 40:
      case 83:
        input.down = false;
        break;
  }
}

function loop(timestamp){

  if(input.up) y -=1;
  if(input.down) y+=1;
  if(input.right) x+=1;
  if(input.left) x-=1;

  backCtx.clearRect(0,0 , canvas.width, canvas.height);
  backCtx.drawImage(image, 0, 0, canvas.width, canvas.height);
  for(i=0; i< 100; i++){
    backCtx.fillStyle = "blue";
    backCtx.fillRect(
      (i*20)%100,
      (i*20)%100, 10,10);
  }

  backCtx.fillStyle = "red";
  backCtx.fillRect(x,y,5,5);

  //swap buffers
  ctx.drawImage(backCanvas, 0,0);

  requestAnimationFrame(loop);
  //setTimeout(loop,speed);
}
//var intervalId = setInterval(loop, speed);
//loop();
requestAnimationFrame(loop);
