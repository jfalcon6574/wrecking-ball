class Ball{
  constructor(x, y, radius) {
      var options = {
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      World.add(world,this.body)
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
}