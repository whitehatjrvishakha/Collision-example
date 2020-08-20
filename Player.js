class Player {
  constructor(x, y) {
    var options = {
      /* frictionAir: 0,
      friction: 10,
      frictionStatic: 1,
      inertia: Infinity,
      restitution: 0.01,
      */
      restitution: 0.4,
      // density: 1.0,
      friction: 0,
    };
    this.body = Bodies.rectangle(x, y, 5, 5, options);

    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;

    World.add(world, this.body);
  }

  display() {
    fill(255);
    stroke("blue");
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    push();
    translate(pos.x, pos.y);
    // ellipseMode(RADIUS);
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}
