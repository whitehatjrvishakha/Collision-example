class Ball {
  constructor(x, y, r) {
    var options = {
      //frictionStatic: 1,
      //inertia: Infinity,
      restitution: 0.8,
      density: 1.0,
      friction: 0.5,
      //restitution: 0.8,
      //frictionAir: 0.06,
    };
    this.body = Bodies.circle(x, y, r, options);
    this.body.label = "particle";
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world, this.body);
  }
  destroy() {
    if (this.body.speed === 1) {
      //to kill
      World.remove(world, this.body);
    }
  }
  display() {
    fill("red");
    stroke(255);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    // ellipseMode(RADIUS);

    ellipse(0, 0, this.r);
    pop();
  }
}
