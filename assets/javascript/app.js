var correct = 0;
var incorrect = 0;
var unanswered = 0;

var questionsLeft = 7;
var timeLeft = 15;

var multiChoices = [
    ["Billy Joel Cat", "Keyboard Cat", "Piano Cat"],
    ["Doge","Doggo","Shiba Pupper"],
    ["I can haz cheeseburger?", "I can has cheezburger?", "I can has cheeseburger?"],
    ["..and that's the tea, sis!", "Me & Also Me", "..but that's none of my business"],
    ["Success Kid", "Determined Kid", "Yes Kid"],
    ["Railroad Cat", "Train Cat", "Monorail Cat"],
    ["Sunic", "Sanic", "s o n i c c"]
];

$("#start-button").on("click", function() {
nextQuestion();
answerbutton();
$("answers")
});

  function nextQuestion() {
    setTimeout(function() {
        setInterval(function(){
            timeLeft--}, 1000);
            
      }, 15000);
    $("#start-question").html("What does this meme?");
  };

  function answerButtons() {
    $("<button>" + multiChoices.[0][0] + "</button>")
  };

  //Player clicks start button 
  //start button disappears & question #1 displays
  //user has 15 seconds to answer, decrease 1 second from counter every second.
  //if user selects a correct answer then increase correct counter by 1pt and move on to question #2
  //if user selects an incorrect answer or exhausts all 15 seconds,then it increases incorrect counter by 1pt and it moves on to question #2
  //when user finishes question 7, (the questions left counter turns 0) then the screen displays final stats.
  //user can click restart with the restart button.