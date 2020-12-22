const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var brickImg;
var ball;
var paddle;
var brick = [];
var k = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  paddle = new Paddle(785, 700);
  ball = new Ball(785, 475, "white")

  //iverted pyramid pattern
  for (var y = 75; y < 800; y = y + 35) {
    for (var x = 400 + y; x < 1200 - y; x = x + 66) {
      brick[k] = new Brick(x, y);

      k = k + 1;

    }

  }

}

function draw() {
  Engine.update(engine);
  background(200);
  Matter.Body.setPosition(paddle.body, { x: mouseX, y: 700 })

  detectCollision(paddle,ball)

  paddle.display();
  ball.display();

  for (var i = 0; i < brick.length; i++) {
    brick[i].display();
  }

}