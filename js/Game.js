class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1= createSprite(350,200);
    car2= createSprite(550,200);
    car3= createSprite(750,200);
    car4= createSprite(950,200);
    cars = [car1,car2,car3,car4];

    car1.addImage(car_Img1);
    car2.addImage(car_Img2);
    car3.addImage(car_Img3);
    car4.addImage(car_Img4);
  }

  play(){
    //background("lightpink");
    form.hide();
    
    image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);

    textSize(30);
   // text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     
      var display_position = 130;

      var index=0;
      var x=0;
      var y;
      for(var plr in allPlayers){
         index = index+1;
         x=x+250;
         y=displayHeight - allPlayers[plr].distance;

      //  cars[index-1].x = x;
        cars[index-1].y = y;
         
        if (plr === "player" + player.index){
          //cars[index-1].shapeColor = "red";
          fill("red");
          ellipse(cars[index-1].x,y,60,60);

          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
        fill("white");
        textAlign(CENTER);
        text(allPlayers[plr].name,cars[index-1].x,y+100);
      }
    }  

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance >= 3900){
      gameState = 2;
    }
    drawSprites();
  }

  //C-39 SA
  end(){
    console.log("Game Ended");
  }
}
