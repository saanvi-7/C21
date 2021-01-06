var fixedRect,movingRect;

function setup() {
  createCanvas(400,400);
  fixedRectangle=createSprite(200, 200, 50, 80);
  fixedBox=createSprite(100,300,50,50);
  fixedBox.shapeColor="pink";
  movingRectangle=createSprite(400,200,80,30);
  movingRectangle.shapeColor="green"
  fixedRectangle.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;

 if(isTouching(movingRectangle,fixedBox)){
  movingRectangle.shapeColor="blue"
  fixedBox.shapeColor="blue"
 //textSize(30);
//text("they are Touching",200,200)
 }

 else{
  movingRectangle.shapeColor="green"
  fixedBox.shapeColor="pink"

 }
 
  drawSprites();
}


