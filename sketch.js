var movingRect, fixedRect
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
fixedRect=createSprite(100, 200, 80, 50);
movingRect.shapeColor="green";
fixedRect.shapeColor="green";
movingRect.velocityX=-4
fixedRect.velocityX=4
go1=createSprite(100, 100, 80, 50); 
go1.shapeColor="green"; 
go2=createSprite(200, 100, 80, 50); 
go2.shapeColor="green"; 
go3=createSprite(300, 100, 80, 50); 
go3.shapeColor="green"; 
go4=createSprite(400, 100, 80, 50); 
go4.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  go1.x=mouseX;
  go1.y=mouseY;
  if(isTouching(go1, go4)){ 
    go1.shapeColor="red"; 
    go4.shapeColor="red"; 
  } 
  else{
     go1.shapeColor="green"; 
     go4.shapeColor="green"; 
    }
  
  drawSprites();
  bounceOff(movingRect,fixedRect);
}
