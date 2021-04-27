//Create variables here
var di1,di2;
var database;
var foodS;
function preload()
{
	di1=loadImage("dogImg.png");
  di2=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  
  dog=createSprite(250,300,150,150);
  dog.addImage(di1);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(di2);
}
  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}



