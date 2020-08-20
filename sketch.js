const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Events = Matter.Events;

var engine, world;
var balls = [];
var ball;
var dots = [];
var cols = 5;
var rows = 5;

function setup() {
  // Setup the canvas
  createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;
  //ground = new Ground(200, 490, 1200, 20);

  player = new Player(200, 200);
  Events.on(engine, "collisionStart", collision);

  var spacing = width / cols;
  //nested array
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      var dot = new Dots(j * spacing, j * spacing);
      dots.push(dot);
    }
  }
}

function draw() {
  background("green");

  if (frameCount % 20 === 0) {
    // how fast u want to render your enemies on ur screen
    ball = new Ball(random(width), 100, 20);
    balls.push(ball);
  }
  Engine.update(engine);

  for (var j = 0; j < balls.length; j++) {
    balls[j].display();
  }
  for (var j = 0; j < dots.length; j++) {
    dots[j].display();
    // inc. their sizes to create your obstacles/mountains/elevated ground
    //use one or many render accordingly on screen
  }
  player.display();
  //ground.display();
}
function collision(event) {
  var pairs = event.pairs;

  for (var i = 0; i < pairs.length; i++) {
    var labelB = pairs[i].bodyB.label;
    var labelA = pairs[i].bodyA.label;
    if (labelA == "particle" && labelB == "dots") {
      balls[i].destroyEach();

      if (labelA == "dots" && labelB == "particle") {
        balls[i].destroy();
        //colliding
      }
    }
  }
}
