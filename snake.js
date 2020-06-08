//Snake obeject constrcutor
function Snake () {
  this.x=0;
  this.y=0;
  this.xSpeed=scale*1;
  this.ySpeed=0;
  this.total=0;
  this.tail=[];


  this.draw=function () {
    ctx.fillStyle = "#38c172";
    //Loop the tail and draw all the coordinates
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillRect(this.x, this.y, scale, scale);

  }

  //Update the snake's position
  this.update=function() {
    //Shift the coordinates to the left
    for (let i=0;i<this.tail.length-1;i++) {
      this.tail[i]=this.tail[i+1];
    }
    //Add the new position to the tail
    this.tail[this.total-1]={x: this.x, y: this.y};

    this.x+=this.xSpeed;
    this.y+=this.ySpeed;

    //Handle when the snake hit the edges of the canvas
    if(this.x>canvas.width){
      this.x=0;
    }
    if(this.x<0){
      this.x=canvas.width;
    }
    if(this.y>canvas.height){
      this.y=0;
    }
    if(this.y<0){
      this.y=canvas.height;
    }
  }

  //Change the snake's direction
  this.changeDirection=function(direction) {
    switch (direction) {
      case 'Up':
        this.xSpeed=0;
        this.ySpeed=-1*scale;
        break;
      case 'Down':
        this.xSpeed=0;
        this.ySpeed=1*scale;
        break;
      case 'Left':
        this.xSpeed=-scale*1;
        this.ySpeed=0;
        break;
      case 'Right':
        this.xSpeed=scale*1;
        this.ySpeed=0;
        break;
    }
  }

  this.eat=function(apple) {
    if(this.x===apple.x && this.y===apple.y) {
      this.total+=1;
      return true;
    }
    return false;
  }
}
