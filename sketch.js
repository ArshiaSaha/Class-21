var fixedRect, movingRect;
var car, bike;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,180,20,50);
  bike = createSprite(200,290,40,60);
  car.velocityY = 3;
  bike.velocityY = -2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }else{
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }
  bounceoff(car,bike);
  drawSprites();
}

