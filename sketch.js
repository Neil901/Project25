
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash;
var ground;
var wall1,wall2,wall3;
var bin,BinImage;
var paper1
var paper1Image
function preload()
{
BinImage = loadImage ("bin1.png")
paper1Image= loadImage ("crumpled_paper_1.jpg")
}


function setup() {
	createCanvas(800, 700);
	background(0);
	engine = Engine.create();
	world = engine.world;
	bin = createSprite (650,575,200,25)
	ground = createSprite (400,650,800,50);
	wall1 = createSprite (650,625,200,25);
	wall2 = createSprite (550,600,10,50);
	wall3 = createSprite (750,600,10,50);
	paper1 = createSprite (100,600,0,0)
	ground.shapeColor= (255);
	trash = new paper (100,600,50);
	trash.scale= 0.5
	bin.scale=0.1
	bin.addImage (BinImage)
	paper1.addImage (paper1Image)
	paper1.scale=0.25
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  trash.display();
  drawSprites();
}

function keyPressed(){
		if (keyCode === UP_ARROW) {
Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-85})
		}
}

