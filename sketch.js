var Bg,backgroundImg;
var fighter,fighterImg;
var NPCImg,NPC;
function preload()
{
backgroundImg = loadImage("assets/Bg.jpg");
fighterImg = loadImage("assets/PC.gif");
NPCImg = loadImage("assets/NPC.png")
}
function setup() 
{
createCanvas(windowWidth,windowHeight);

//Bg = createSprite(displayWidth,displayHeight,20,20);
//Bg.addImage(backgroundImg);
//Bg.scale = 1.2;

fighter = createSprite(270,500,20,60)
fighter.addImage(fighterImg);
fighter.scale = 3;

NPC = createSprite(1400,520,20,20)
NPC.addImage(NPCImg);
}

function draw() 
{
background(backgroundImg);
textSize(30);
fill("red")
stroke("black");

if(keyCode == RIGHT_ARROW  && fighter.x <=1400)
{
  fighter.x += 20;
}
if(keyCode == LEFT_ARROW && fighter.x >=270)
{
  fighter.x -= 20;
  
}
if(fighter.isTouching(NPC) && keyCode == UP_ARROW)
{
 fighter.attack();
}
if(fighter.isTouching(NPC) && keyCode == DOWN_ARROW)
{
 fighter.defend();
}
drawSprites();
}
function attack()
{
if(!NPC.isBlocking)
{

}
}
function defend()
{
if(NPC.isAttacking)
{
  
}
}
function choice() 
{
  swal(
    {
      title: `Attack or Defend`,
      text: "Up to Attack or Down to Defend",
      imageUrl:"https://studio.code.org/api/v1/animation-library/spritelab/nxFokH_nQeojqyi67RB4lRZ9xa6Y2v4E/category_tools/pick.png",
      imageSize: "150x150",
      confirmButtonText: "Ok"
    }
  );
}