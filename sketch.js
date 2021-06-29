var tom,catImage,catImage2,catImage3
var mouse,mouseImage,mouseImage2
var garden,gardenImage

function preload() {
    catImage = loadAnimation("images/cat1.png")
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImage3 = loadAnimation("images/cat4.png")
    mouseImage = loadAnimation("images/mouse2.png","images/mouse3.png")
    gardenImage = loadImage("images/garden.png")
}

function setup() {
    createCanvas(1000,800);
    //sprites making
    tom = createSprite(890,470,50,50);
    tom.addAnimation("ci1",catImage)
    tom.scale = 0.15
    mouse = createSprite(200,470,50,50)
    mouse.addAnimation("mi1",mouseImage)
    mouse.scale = 0.15

    
}
    

function draw() {
    background(gardenImage);

    drawSprites();


    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("running",catImage2)
        tom.changeAnimation("running") 
        }

        
    if(tom.isTouching(mouse)){
        tom.addAnimation("sitting",catImage3)
        tom.changeAnimation("sitting")
        tom.setVelocityX = 0
        tom.setVelocityY = 0
    }
}




