
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var snows=[]
function preload(){
  bgImage=loadImage("snow1.jpg");
}

function setup() {
  engine=Engine.create();
  world=engine.world;


  createCanvas(1000,700);
}

function draw() {
  Engine.update(engine);
  background(bgImage);  

  if(frameCount%50===0){
    snows.push(new Snow(random(100,900),-10,20))
  }
  for(var i=0;i<snows.length;i++ ){
    snows[i].display()
  }
  drawSprites();
}
