var rectangle,rectangle2;
var box,box2;
var rectangle3,rectangle4;
var box3,box4;

function setup() {
  createCanvas(800,700);

  box=createSprite(200,300,80,50);
  box2=createSprite(500,300,80,50);

  box.shapeColor="blue";
  box2.shapeColor="brown";

  box.debug=true;
  box2.debug=true;

  box.velocityX=4;
  box2.velocityX=-4;

 rectangle=createSprite(200,200,50,100)
 rectangle2=createSprite(300,200,50,100)
 rectangle.debug=true;

 rectangle.shapeColor="red";
 rectangle2.shapeColor="green";

 rectangle2.debug=true;

rectangle3=createSprite(400,200,50,100);
rectangle3.shapeColor="brown";
rectangle3.debug=true;

rectangle4=createSprite(600,200,50,100);
rectangle4.shapeColor="blue";
rectangle4.debug=true;

box3=createSprite(300,300,50,100)
box3.shapeColor="skyBlue";
box3.velocityY=4;

box4=createSprite(300,600,50,100)
box4.shapeColor="yellow";
box4.velocityY=-4;

}

function draw() {
  background(0); 
 
  rectangle2.x=mouseX;
  rectangle2.y=mouseY;
  
  if(isTouching(rectangle2,rectangle4)){

    rectangle2.shapeColor="blue";
    rectangle4.shapeColor="white";
  }else{
    rectangle2.shapeColor="green";
    rectangle4.shapeColor="blue";
  }

bounceOff(box3,box4);
 
  drawSprites();
}

