//Game States
var PLAY=1;
var END=0;
var gameState=1;

var scene;
var scene_image;
var coconut, green_apple, kiwi, lemon, Lime, mango, Orange, passionfruit, pear, pineapple, Plum, red_apple, strawberry, watermelon, banana;
var coconut_image, green_apple_image, kiwi_image, lemon_image, Lime_image, mango_image, Orange_image, passionfruit_image, pear_image, pineapple_image, Plum_image, red_apple_image, strawberry_image, watermelon_image, banana_image;
var sword;
var sword_image;
var score = 0;
var fruitGroup;
var bomb;
var bomb_image, bombGroup;
var gameOver;
var gameOver_image;
var X1, X2, X3;
var X1_image, X2_image, X3_image;
var XGroup;
var missFruit;
var missCounter = 0; // Add miss counter variable

function preload(){
  scene_image = loadImage("Background.png");
  coconut_image = loadImage("Coconut.webp");
  green_apple_image = loadImage("Green_Apple-removebg-preview.png");
  kiwi_image = loadImage("Kiwi_Fruit-removebg-preview.png");
  lemon_image = loadImage("Lemon.webp");
  Lime_image = loadImage("Lime-removebg-preview.png");
  mango_image = loadImage("Mango-removebg-preview.png");
  Orange_image = loadImage("Orange-removebg-preview.png");
  passionfruit_image = loadImage("Passionfruit.webp");
  pear_image = loadImage("Pear-removebg-preview.png");
  pineapple_image = loadImage("Pineapple.webp");
  Plum_image = loadImage("Plum-removebg-preview.png");
  red_apple_image = loadImage("Red_Apple-removebg-preview.png");
  strawberry_image = loadImage("Strawberry-removebg-preview.png");
  watermelon_image = loadImage("Watermelon.webp");
  banana_image = loadImage("Banana-removebg-preview.png");
  sword_image = loadImage("Sword.png");
  bomb_image = loadImage("Bomb.webp");
  gameOver_image = loadImage("gameover.png");
  X1_image = loadImage("X1.png")
  X2_image = loadImage("X2.png")
  X3_image = loadImage("X3.png")
}

function setup() {
  createCanvas(600, 400);
  scene = createSprite(300,200,600,400);
  scene.addImage("scene",scene_image);
  
  sword = createSprite(300,300,10,10);
  sword.addImage("sword", sword_image);
  sword.scale = 0.1;
  
  gameOver = createSprite(300,200,10,10);
  gameOver.addImage("gameOver", gameOver_image);
  gameOver.scale = 3;
  
  fruitGroup = createGroup();
  bombGroup = createGroup();
  XGroup = createGroup();
  xDisplay();
}

function draw() {
  background("lightblue");
  if(gameState === PLAY){
    fruits();
    bomb();
    // Check for missed fruits
    checkMissedFruits();
    // Move sword with mouse
    sword.y = World.mouseY
    sword.x = World.mouseX
    gameOver.visible = false;
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score ++;
    }
    
    else{if(bombGroup.isTouching(sword)){
      gameOver.visible = true;
      gameState = END;
    }
    //change display for x
    if(missCounter == 1){
      X1.visible = false;
    }
    else if(missCounter == 2){
      X2.visible = false;
    }
    else if(missCounter == 3){
      X3.visible = false;
      gameOver.visible = true;
     }
  }
}
   
    //Call fruits and Enemy function
    
    // Increase score if sword touching fruit
    // Change the animation of sword to gameover and reset its position
  console.log(missCounter);
drawSprites();
  
  //Display score
  textSize(15);
  fill("white");
  text(" Score : " + score,10,30);
  }

function coconut() {
  var coconut = createSprite(10,100,10,10);
  coconut.addImage("coconut",coconut_image);
  coconut.scale = 0.5;
  coconut.lifetime = 100;
  coconut.velocityX = 10; 
  fruitGroup.add(coconut);
}
function green_apple() {
  var green_apple = createSprite(100,400,10,10);
  green_apple.addImage("green_apple", green_apple_image);
  green_apple.scale = 0.5;
  green_apple.lifetime = 100;
  green_apple.velocityY = -10;
  fruitGroup.add(green_apple);
}
function kiwi() {
  var kiwi = createSprite(550,300,10,10);
  kiwi.addImage("kiwi",kiwi_image);
  kiwi.scale = 0.5;
  kiwi.lifetime = 100;
  kiwi.velocityX = -10;
  fruitGroup.add(kiwi);
}
function lemon() {
  var lemon = createSprite(100,10,10,10);
  lemon.addImage("lemon", lemon_image);
  lemon.scale = 0.5;
  lemon.lifetime = 100;
  lemon.velocityY = 10;
  fruitGroup.add(lemon);
}
function Lime() {
  var Lime = createSprite(500,10,10,10);
  Lime.addImage("Lime", Lime_image);
  Lime.scale = 0.5;
  Lime.lifetime = 100;
  Lime.velocityY = 10;
  fruitGroup.add(Lime);
}
function mango() {
  var mango = createSprite(50,150,10,10);
  mango.addImage("mango", mango_image);
  mango.scale = 0.5;
  mango.lifetime = 100;
  mango.velocityX = 10;
  fruitGroup.add(mango);
}
function Orange() {var Orange = createSprite(230,10,10,10);
  Orange.addImage("Orange", Orange_image);
  Orange.scale = 0.5;
  Orange.lifetime = 100;
  Orange.velocityY = 10;
  fruitGroup.add(Orange);
}
function passionfruit() {
  var passionfruit = createSprite(385,10,10,10);
  passionfruit.addImage("passionfruit", passionfruit_image);
  passionfruit.scale = 0.5;
  passionfruit.lifetime = 100;
  passionfruit.velocityY = 10;
  fruitGroup.add(passionfruit);
}
function pear() {
  var pear = createSprite(130,0,10,10);
  pear.addImage("pear", pear_image);
  pear.scale = 0.5;
  pear.lifetime = 100;
  pear.velocityY = 10;
  fruitGroup.add(pear);
}
function pineapple(){
  var pineapple = createSprite(350,500,10,10);
  pineapple.addImage("pineapple", pineapple_image);
  pineapple.scale = 1;
  pineapple.lifetime = 100;
  pineapple.velocityY = -10;
  fruitGroup.add(pineapple);
}
function Plum(){
  var Plum = createSprite(450,0,10,10);
  Plum.addImage("Plum", Plum_image);
  Plum.scale = 0.5;
  Plum.lifetime = 100;
  Plum.velocityY = 10;
  fruitGroup.add(Plum);
}
function red_apple(){
  var red_apple = createSprite(600,250,10,10);
  red_apple.addImage("red_apple", red_apple_image);
  red_apple.scale = 0.5;
  red_apple.lifetime = 100;
  red_apple.velocityX = -10;
  fruitGroup.add(red_apple);
}
function strawberry(){
  var strawberry = createSprite(575,10,10,10);
  strawberry.addImage("strawberry", strawberry_image);
  strawberry.scale = 0.5;
  strawberry.lifetime = 100;
  strawberry.velocityY = 10;
  fruitGroup.add(strawberry);
}
function watermelon(){
  var watermelon = createSprite(350,0,10,10);
  watermelon.addImage("watermelon", watermelon_image);
  watermelon.scale = 1;
  watermelon.lifetime = 100;
  watermelon.velocityY = 10;
  fruitGroup.add(watermelon);
}
function banana(){
  var banana = createSprite(10,200,10,10);
  banana.addImage("banana", banana_image);
  banana.scale = 0.5;
  banana.lifetime = 100;
  banana.velocityX = 10;
  fruitGroup.add(banana);
}
function fruits(){
  if(frameCount % 100 === 0){
    var fruitselecter = Math.round(random(1,15));
    //console.log(fruitselecter);
    if(fruitselecter == 1){ coconut(); }
    else if (fruitselecter == 2){
      green_apple();
    }else if (fruitselecter == 3){
      kiwi();
    }else if (fruitselecter == 4){
      lemon();
    }else if (fruitselecter == 5){
      Lime();
    }else if (fruitselecter == 6){
      mango();
    }else if (fruitselecter == 7){
      Orange();
    }else if (fruitselecter == 8){
      passionfruit();
    }else if (fruitselecter == 9){
      pear();
    }else if (fruitselecter == 10){
      pineapple();
    }else if (fruitselecter == 11){
      Plum();
    }else if (fruitselecter == 12){
      red_apple();
    }else if (fruitselecter == 13){
      strawberry();
    }else if (fruitselecter == 14){
      watermelon();
    }else if (fruitselecter == 15){
      banana();
   }
  }
 }
function bomb(){
  if(frameCount % 200 === 0){
  var bomb = createSprite(200,600,10,10);
  bomb.x = Math.round(random(100,500));
  bomb.addImage("bomb", bomb_image);
  bomb.scale = 0.3;
  bomb.lifetime = 100;
  bomb.velocityY = -10;
  bombGroup.add(bomb);
  }
}
function xDisplay(){
  X1= createSprite(575,30,10,10);
  X1.addImage("X1", X1_image);
  X1.scale = 0.01;
  XGroup.add(X1);
  X2 = createSprite(550,30,10,10);
  X2.addImage("X2", X2_image);
  X2.scale = 0.01;
  X3 = createSprite(525,30,10,10);
  X3.addImage("X3", X3_image);
  X3.scale = 0.01;
}
// Add function to check for missed fruits
function checkMissedFruits() {
  for(var i = 0; i < fruitGroup.length; i++) {
    var fruit = fruitGroup.get(i);
    
    // Check if fruit has left the screen
    if((fruit.velocityX > 0 && fruit.x > width + fruit.width/2) || 
       (fruit.velocityX < 0 && fruit.x < -fruit.width/2) ||
       (fruit.velocityY > 0 && fruit.y > height + fruit.height/2) ||
       (fruit.velocityY < 0 && fruit.y < -fruit.height/2)) {
      missCounter++; // Increment miss counter
      fruit.remove(); // Remove the fruit
    }
  }
}