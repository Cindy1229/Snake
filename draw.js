const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;


//Setup function
(function setup() {
  //Create snake and apple
  snake = new Snake();
  apple = new Apple();
  snake.draw();

  //Create apple in random spot
  apple.pickLocation();
  console.log(apple);


  //Redraw the canvas every 250 miliseconds
  window.setInterval(()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    snake.update();
    snake.draw();
    apple.draw();

    //When the snake collides with the Apple
    if(snake.eat(apple)){
      //Reset the apple's location
      apple.pickLocation();
    }

    //Check if snake has collided with itself
    snake.checkCollision();
    document.querySelector('.score').innerText='SCORE: '+snake.total;
  }, 250)
}());

//Add key listener
window.addEventListener('keydown', (e)=>{

  const direction=e.key.replace('Arrow', '');
  snake.changeDirection(direction);
});
