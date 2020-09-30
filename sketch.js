
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papero;
var dustbin,ground;

function setup() {
	createCanvas(1600, 700);
   
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 // ground=createSprite(600,1100,2000,20)
  //ground.shapeColor=("white")
  ground=new Ground(width/2,670,width,20)
 papero=new Paper(200,450,40)
 //dustbin=new Dustbin(1100,1000,20,20)
 

 box1=createSprite(1015,650,200,20);
	box1.shapeColor=("red");

	box2=createSprite(915,600,20,100);
	box2.shapeColor=("red");

box3=createSprite(1115,600,20,100);
	box3.shapeColor=("red");
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  rectMode(CENTER);
  drawSprites();
  papero.display();
  //dustbin.display();
  ground.display();
  
  
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(papero.body,papero.body.position,{x:75,y:-75})
  }
  
}

