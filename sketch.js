
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var paper,ground,dustbinImage;

function preload()
{
	dustbinImage = loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Dustbin(600,650,180,20);
	box2 = new Dustbin(520,625,20,100);
	box3 = new Dustbin(700,625,20,100);
	paper = new Paper(100,640,10);
	ground = new Ground(400,680,800,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  imageMode(CENTER)
  image(dustbinImage,600,600,250,150)
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		 Body.applyForce(paper.body,paper.body.position,{x:15, y:-15});
	}
	 }
   



