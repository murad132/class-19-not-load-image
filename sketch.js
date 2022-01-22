var boy 
var ghost
var ImgBoy

function preload(){
    ImgBoy = loadImage("boy_running.png");
}

function setup() {
    createCanvas(400,600);
boy=createSprite(200,200);
boy.addImage(ImgBoy);
boy.velocitX = 6;
}

function draw() {
 
}