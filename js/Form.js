class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-200, 20);

    this.input.position(displayWidth/2-110, displayHeight/2-150);
    this.button.position(displayWidth/2-55, displayHeight/2-50);

    this.reset.position(displayWidth-140, 30);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-180, displayHeight/2-150);
    });

    this.reset.mousePressed(()=>{
      database.ref('/').update({
        playerCount: 0,
        gameState : 0,
        players : null
      });
    })
  }
}
