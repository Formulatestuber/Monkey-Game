
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
   monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20)
monkey.addAnimation ("moving",monkey_running)
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}
function draw() {
  
  background (255)
  text("Score: "+ score,   170,50);
  
  if (monkey.isTouching(bananaGroup)){
    score = score+1;
  }

  if (ground.x<0){
    ground.x = ground.width/2;
  } 
  
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide (ground);
  
  if (monkey.isTouching(bananaGroup)){
    banana.destroy();
  }
  
  spawnbananas();
  spawnObstacles();
  
 drawSprites();
}

function spawnbananas(){
  
  if (frameCount % 100 === 0){
    banana = createSprite(400, 200, 5, 10);
    banana.y = Math.round(random(150,200));
    banana.addImage(bananaImage)
    banana.scale = 0.1  ;
    banana.velocityX = -7.5;
    banana.lifetime = 200;
    
    bananaGroup.add(banana)
  }
}

function spawnObstacles(){

if (frameCount % 60 === 0){
  obstacle = createSprite(400,327.5, 20, 20);
  obstacle.velocityX = -6;
  obstacle.addImage (obstacleImage)
  obstacle.scale = 0.1;
  obstacle.lifetime = 300;
  
  obstacleGroup.add (obstacle);
  
}
}