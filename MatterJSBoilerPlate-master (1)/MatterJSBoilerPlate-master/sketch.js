
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground;
var box1;
var box2;
var box3;

function preload()
{
  dustbingreen=loadImage("dustbingreen.png");
}

function setup() {
	rectMode(CENTER);
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(50,100,20)
	console.log(ball);
	
	ground = Bodies.rectangle(400,675,800,20, {isStatic:true} );
	World.add(world, ground)

	box1 = Bodies.rectangle(650,585,200,20, {isStatic:true} );
	World.add(world, box1)

	box2 = Bodies.rectangle(740,575,20,150, {isStatic:true} );
	World.add(world, box2)
	
	box3 = Bodies.rectangle(560,575,20,150, {isStatic:true} );
	World.add(world, box2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  drawSprites();
  rect(ground.position.x, ground.position.y, 800,20)
  imageMode(CENTER)
  image(dustbingreen,box1.position.x, box1.position.y, 200,150)
  //rect(box2.position.x, box2.position.y, 20,150)
  //rect(box3.position.x, box3.position.y, 20,150)
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position,{x:65,y:-65})
	}
}



