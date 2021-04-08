var bgImg,boy,boyImg,sun,sunImg,virus,virus1,virus2,virus3,virus4,virus5,bomb,bombImg,chomper,chomperImg,shooter,
shooterImg,shooter2,shooter2Img,pumpkin,pumpkinImg,flower,flowerImg,plant,plantImg
var bg



function preload(){
bgImg=loadImage("background.png")
boyImg=loadImage("boy.png")
sunImg=loadImage("sun.png")
virus1=loadImage("virus 1.png")
virus2=loadImage("virus 2.png")
virus3=loadImage("virus 3.png")
virus4=loadImage("virus 4.png")
virus5=loadImage("virus 5.png")
bombImg=loadImage("cherry bomb.png")
chomperImg=loadImage("chomper.png")
shooterImg=loadImage("peashooter.png")
shooter2Img=loadImage("snow peashooter.png")
pumpkinImg=loadImage("pumpkin.png")
flowerImg=loadImage("sunflower.png")
plantImg=loadImage("threepeater.png")
}
function setup() {
  createCanvas(800,400);
 bg=createSprite(100, 100, 800, 800);
 bg.addImage(bgImg)
 
  
}


function draw() {
  background(255);  
  drawSprites();
  textSize(20)
  fill ("black")
  text(mouseX+","+mouseY,mouseX,mouseY);
}