const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;

//Setup function
(function setup() {
  snake = new Snake();
  snake.draw();

  //Redraw the canvas every 250 miliseconds
  window.setInterval(()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    snake.update();
    snake.draw();
  }, 250)
}());

//Add key listener
window.addEventListener('keydown', (e)=>{

  const direction=e.key.replace('Arrow', '');
  snake.changeDirection(direction);
});
