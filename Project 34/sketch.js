var dog,dogstand,doghappy;
var database,foodS;


function preload()
{
dogstand=loadImage("images/dogImg.png")
doghappy=loadImage("images/dogImg1.png")
}

function setup() {
createCanvas(500,500);
//creating database
database=firebase.database();

// Creating Dog Sprite
dog=createSprite(250,250,50,50)  
dog.scale=0.12
dog.addAnimation("stand",dogstand)
dog.addAnimation("happy",doghappy)

//taking data from firebase
var foodStock= database.ref('Food');
foodStock.on("value",readStock,showError);

}

function readStock(data){
foodS=data.val()
}

function writeStock(x){
database.ref('/').update({
  Food:x
})
}

function showError(){
  console.log("Error in writing to the database");
}





function draw() {  
background(46,139,87)
  drawSprites();
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog=addAnimation(doghappy)

  }

}



