var canvas;
var backgroundImage;
var bgImg;
var database;
var data
var car1,car2,cars,c1,c2;
var track;
var form, player;
var playerCount;
var allPlayers;
var gameState;


function preload() {
  backgroundImage = loadImage("./assets/background.png");
c1 = loadImage("./assets/car1.png");
c2=loadImage("./assets/car2.png");
track = loadImage("./assets/track.jpg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
game.updateState(1);

  }
  

if(gameState===1){
  game.play();
  
}

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
