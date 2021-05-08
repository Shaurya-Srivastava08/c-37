class Quiz {
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("blue");
    //write code to show a heading for showing the result of Quiz
    textSize(25);
    text("Result of Quiz",340,50);
    //call getContestantInfo( ) here
       Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      var display_answers=230;
      fill("red");
      textSize(20);
      text("NOTE:contestant who answered the correct answers are highlighted in green color!",130,230)
      for (var plr in allContestants){
        var correctAns="2";
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill ("yellow")
     
    //write code to add a note here

    //write code to highlight contest who answered correctly
    display_answers+=20
 textSize(15);
 text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answers)
  }

    }
  }
}
