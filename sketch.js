
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

ground = new Ground(800,670,1600,20)
paper = new Paper(200,450,70)
dustbin = new Dustbin(1200,650)

  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.run(engine);
  ground.display()
 paper.display()
 dustbin.display()
}

function keyPressed(){
if(keyCode === 32  ){
	Matter.Body.applyForce(paper.body, paper.body.position, {x : 84, y : -84})
 }	
}

