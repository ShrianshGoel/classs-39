class Game {
  constructor() {
    this.resetTitle=createElement("h2","Reset");
    this.reset = createButton("")

    this.leaderboardTitle = createElement("h2","Leaderboard")
    this.leader1 = createElement("h2")
    this.leader2= createElement("h2")
  }
  getState(){
    database.ref("gameState").on("value",(data)=>{
      gameState = data.val();
    });
    
      }
    
      updateState(state){
    database.ref("/").update({
     gameState:state
      
    })}
  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount();

  

    car1 = createSprite(width/2.50,height/1.20);
    car1.addImage("first",c1);
    car1.scale=0.1
    car2 = createSprite(width/1.80,height/1.20);
    car2.addImage("second",c2);
car2.scale=0.1

    cars = [car1,car2];
  }
play(){
this.handleElements()
this.handleReset();
Player.getPlayerInfo()


if(allPlayers!=undefined){
  image(track,0,-height*4,width,height*5);
  console.log(allPlayers)
  var index =0
  this.showLeaderBoard()
  for (var i in allPlayers){
var x = allPlayers[i].positionX
var y = height-allPlayers[i].positionY
index+=1

cars[index-1].position.x = x
cars[index-1].position.y = y

console.log(player.rank+""+player.index)
if(player.index===index){
  fill("cyan")
 ellipse(x,y,90,90)
 
 camera.position.y = y
}
}

this.handleControls();

}

drawSprites()
}

handleElements(){
form.hide();
form.title.position(width/6.50,height/16.50);
form.title.class("gameTitle1")

this.resetTitle.position(width/1.20,height/9.30);
this.reset.position(width/1.20,height/5.30);
this.reset.class("reset")
this.leaderboardTitle.position(width/9,height/9.30)
this.leader1.position(width/9,height/7.30);
this.leader2.position(width/9,height/5.30);

}
showLeaderBoard(){
  var leader1
  var leader2
  var player
player = Object.values(allPlayers)
if((player[0].rank===0&&player[1].rank===0)||players[0].rank===1){
leader1=player[0].rank+"&emsp;"+player[0].name+"&emsp;"+player[0].score
leader2=player[1].rank+"&emsp;"+player[1].name+"&emsp;"+player[1].score
}
if(player[1].rank===1){
  leader2=player[0].rank+"&emsp;"+player[0].name+"&emsp;"+player[0].score
  leader1=player[1].rank+"&emsp;"+player[1].name+"&emsp;"+player[1].score 
}
this.leader1.html(leader1)
this.leader2.html(leader2)
}
handleReset(){
this.reset.mousePressed(
  ()=>{
    database.ref("/").set({
      playerCount:0,
      gameState:0

    })
    window.location.reload()
  })}

handleControls(){
  if(keyIsDown(UP_ARROW)){
    
player.positionY = player.positionY + 15;
player.updatePosition();

  }
  if(keyIsDown(LEFT_ARROW)&&player.positionX>width/5){
    
    player.positionX = player.positionX - 15;
    player.updatePosition();
    
      }

if(keyIsDown(RIGHT_ARROW)&&player.positionX<width/1.50){
    
  player.positionX = player.positionX + 15;
  player.updatePosition();
  
    }
}
}