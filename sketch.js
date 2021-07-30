var trex, trex_running, trex_collided;

var ground, invisibleGround, groundImage;

var ground1

var clouds, cloudImage

var obstacle, cactusImage1, cactusImage2, cactusImage3, cactusImage4, cactusImage5, cactusImage6

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

    trex_collided = loadImage("trex_collided.png");

    groundImage = loadImage("ground2.png")

    cloudImage = loadImage("cloud.png")

    cactusImage1 = loadImage("obstacle1.png")

    cactusImage2 = loadImage("obstacle2.png")

    cactusImage3 = loadImage("obstacle3.png")

    cactusImage4 = loadImage("obstacle4.png")

    cactusImage5 = loadImage("obstacle6.png")

    cactusImage6 = loadImage("obstacle5.png")
}
function setup() {
    createCanvas(600, 200);

    //create a trex sprite

    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite

    ground = createSprite(200,190,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    ground1 = createSprite(200,205,400,20)
    ground1.visible=false
}
function draw() {
    background(280);

    console.log(trex.y);

    //jump when the space button is pressed

    if (keyDown("space") && trex.y>=150) {
        trex.velocityY = -10;


    }
    trex.velocityY = trex.velocityY + 0.8

    spawnCloud()

    spawnObstacle()

    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }   

    trex.collide(ground1)

    drawSprites();
}

function spawnCloud () {

    if (frameCount%75===0) {
        clouds = createSprite(550, 50, 20, 20)
        clouds.velocityX=-5
        clouds.addImage(cloudImage)
        clouds.scale = 0.15
        clouds.y = Math.round(random(20,80))
        clouds.depth = trex.depth
        trex.depth = trex.depth+1
        clouds.lifetime = 125
    }

    
}

function spawnObstacle () {

    if (frameCount%60===0) {

        obstacle = createSprite(600, 180, 20, 20)
        obstacle.velocityX=-4
        var rand = Math.round(random(1,6))
        switch(rand) {

            case 1:
            obstacle.addImage(cactusImage1)
            break;

            case 2:
            obstacle.addImage(cactusImage2)
            break;

            case 3:
            obstacle.addImage(cactusImage3)
            break;

            case 4:
            obstacle.addImage(cactusImage4)
            obstacle.scale = 0.7
            break;

            case 5:
            obstacle.addImage(cactusImage5)
            break;

            case 6:
            obstacle.addImage(cactusImage6)
            obstacle.scale = 0.7
            break;
            
            default:
            obstacle.addImage(cactusImage3)
            break;

        }

        obstacle.scale = 0.07

    }

}


