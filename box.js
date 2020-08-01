class Box{
    constructor(x,y,w,h) {
      var options = {
          friction: 0.5,
          restitution: 10
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width = width; 
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("green");
      rectMode(CENTER);
      fill("red");
    rect(0, 0, this.width,this.height);
    pop();
    }
  };