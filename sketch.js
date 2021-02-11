var fixedRect, movingRect;
var chair,table;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  table = createSprite(400,300,80,30);
  table.shapeColor = "green";
  table.debug = true;
  
  chair = createSprite(300,600,50,60);
}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    table.shapeColor = "green";
    chair.shapeColor = "green";
  }

  if(isTouching(movingRect,chair)){
    chair.shapeColor = "blue";
    movingRect.shapeColor="blue";
  }
  if(isTouching(movingRect,table)){
    table.shapeColor = "red"
    movingRect.shapeColor = 'red'
  }

  drawSprites();
}


