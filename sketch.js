var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4;
var cars = [];
var car_Img1,car_Img2,car_Img3,car_Img4;
var trackImg;

function preload(){
  car_Img1 = loadImage("images/car1.png");
  car_Img2 = loadImage("images/car2.png");
  car_Img3 = loadImage("images/car3.png");
  car_Img4 = loadImage("images/car4.png");
  trackImg = loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth-30,displayHeight-140);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("lightblue");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
  
}
