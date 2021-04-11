var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;
var gardenImg; 

function preload() {
gardenImg = loadImage("garden.png");
catImg1 = loadImage ("cat1.png");
catImg2 = loadAnimation ("cat2.png","cat3.png");
catImg3 = loadImage ("cat4.png");
mouseImg1 = loadImage ("mouse1.png");
mouseImg2 = loadAnimation ("mouse2.png","mouse3.png")
mouseImg3 = loadImage ("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(800,600);
    cat.addImage("catSleeping",catImg1)
    cat.scale = 0.2; 

    mouse = createSprite(200,600);
    mouse.addImage("mouseStanding",mouseImg1);
    mouse.scale = 0.2;

    //create tom and jerry sprites here

}

function draw() {

    background(gardenImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.velocityX = 0; 
      cat.x = 300;
      cat.addAnimation("catEnd",catImg3);
      cat.changeAnimation("catEnd");
      cat.scale = 0.2; 

      mouse.addAnimation("mouseEnd",mouseImg3);
      mouse.changeAnimation("mouseEnd")
      mouse.scale = 0.2;


    }
    drawSprites();
}


function keyPressed(){
 if(keyCode === LEFT_ARROW){
   cat.velocityX = -5;
   cat.addAnimation("catRunning",catImg2);
   cat.changeAnimation("catRunning");

   mouse.addAnimation("mouseRunning",mouseImg2);
   mouse.changeAnimation("mouseRunning");
 }
}
  


