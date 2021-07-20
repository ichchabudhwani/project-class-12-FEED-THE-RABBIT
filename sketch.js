var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf,orangeleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
orangeleafImg = loadImage("orangeLeaf.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

drawSprites();
}



function draw() {
  background("lightblue");
 
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;
  
   
 
  spawnapples();   
  spawnleaves();   
   drawSprites();

}
function spawnapples() {
if (frameCount % 80 === 0) {
  if (select_sprites == 1) {
    var select_sprites =Math.round(random(1,3)); 
     
  }
  apple=createSprite(random(50,350),40,10,10);
apple.scale= 0.06;
apple.addImage(appleImg);

  apple.velocityY= +3;
  apple.lifetime=120;
 
} 
}
function spawnleaves() {
  if (frameCount % 80 === 0) {
    if (select_sprites==1) {
      var select_sprites =Math.round(random(1,2));
      spawnleaves();  
    }
    orangeleaf=createSprite(random((50,350),40.10,10))
 orangeleaf.scale= 0.07;

  orangeleaf.addImage(orangeleafImg);
    orangeleaf.y = Math.round(random(100,50))
    orangeleaf.velocityY= +3;
    orangeleaf.lifetime=120; 
}
}