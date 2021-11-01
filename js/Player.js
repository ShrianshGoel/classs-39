class Player {
  constructor() {
this.Name = null;
this.index = 0;
this.positionX = 0;
this.positionY=0;
this.rank = 0;
this.score=0
  }
  getCount(){
database.ref("playerCount").on("value",(data)=>{
  playerCount = data.val();
});

  }
       
//updateCount
  updateCount(count){
database.ref("/").update({
  playerCount:count
  
})}
addPlayer(){
console.log(this.index)
if(this.index===1){

this.positionX = width/2-100;

}
else {
this.positionX = width/2+100;
  
}

database.ref("players/player"+this.index).set({
 name: this.Name,
 positionX :this.positionX,
 positionY:this.positionY,
score: this.score,
rank: this.rank
})
}
readPosition(){
  database.ref("players/player"+this.index).on("value",(data)=>{
  var post = data.val();
  this.positionX = post.positionX;
  this.positionY = post.positionY; 
  })
  }
  updatePosition(){
    database.ref("players/player"+this.index).update({
      positionX : this.positionX,
      positionY:this.positionY
    })
  }
  //reading information of player
  static getPlayerInfo(){
database.ref("players/").on("value",(data)=>{
allPlayers = data.val();
}
)

  }
}