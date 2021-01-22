var dog,happydog,database,foodS,foodStock,dogImg;
function preload()
{

  
  happydog=loadImage("images/dogImg1.png");
  dogImg=loadImage("images/dogImg.png");
}


function setup() {
	createCanvas(500, 500);
  
  database=firebase.database();
  dog=createSprite(200,200);
  dog.scale=0.15
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  dog.addImage(dogImg);

}


function draw() {  
  background(46,139,87);
  fill("red")
  textSize(24);
  text("Press the UP arrow Key To feed the Dog",50,80);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
  }
  if(keyWentUp(UP_ARROW)){
    
    dog.addImage(dogImg);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
foodS=data.val();

}

function writeStock(x){

  database.ref("/").update({

    Food:x
  })
}






