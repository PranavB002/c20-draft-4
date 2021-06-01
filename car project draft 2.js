var car, wall 
var speed,weight

function setup() {
  createCanvas(1600,400);
  wall=creatCanvas(1500,200, 60,height/2 )
  car=createSprite(50, 200, 50, 50);
  speed=random(55,200 )
  weight=random(400, 1500)
  car.velocityX= speed     
  car.x=World.mouseX;
  car.shapecolor= blue 
  console.log(car.y); (car.width/2)
console.log(car.x)
display.car;
  deformation= 0.5*X; weight; X; speed; X; speed/2250
  if (speed<100){
    car.shapecolor= yellow
  }
    else {
      car.shapecolor= blue

  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}