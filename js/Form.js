class Form{
constructor(){
this.title = createImg("./assets/title.png","Speed Racing Game");
this.input = createInput("").attribute("placeholder","Name");
this.button = createButton("Enter");
this.greetings = createElement("h2")

}
display(){
this.setPosition()
this.style();

this.button.mousePressed(
   ()=> {
    this.input.hide();
    this.button.hide();
    this.greetings.html("Hey There "+this.input.value()+"<br>"+" Gathering players.");
    playerCount = playerCount + 1
    player.Name = this.input.value()
      player.index = playerCount;
      player.addPlayer();

    player.updateCount(playerCount);
    player.readPosition();
  }
)
}

 setPosition(){
  this.title.position(width/6.50,height/5.05);
  this.input.position(width/2.50,height/2);
   this.button.position(width/2.40,height/1.50);
   this.greetings.position(width/2.30,height/2.90);

}
 style(){
  this.title.class("gameTitle");
  this.input.class("customInput");
  this.button.class("customButton");
  this.greetings.class("greetings");
}
hide(){
  form.input.hide();
form.button.hide();
form.greetings.hide();
}
}