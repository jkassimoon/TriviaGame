var correct = 0;
var incorrect = 0;
var unanswered = 0;

var questionsLeft = 7;
var timeLeft = 10;

var currentQuestion = 0;

var memeQuestions = [
{
    image: "assets/images/keyboardcat.gif",
    choices:["Billy Joel Cat", "Keyboard Cat", "Piano Cat"],
    answer:1  
},
{
  image: "assets/images/doge.jpg",
  choices:["Doge","Doggo","Shiba Pupper"],
  answer:0  
},
{
  image: "assets/images/icanhascheezburger.jpg",
  choices:["I can haz cheeseburger?", "I can has cheezburger?", "I can has cheeseburger?"],
  answer:1  
},
{
  image: "assets/images/thatsnoneofmybusiness.jpg",
  choices:["...and that's the tea, sis!", "Me & Also Me", "...but that's none of my business"],
  answer:2  
},
{
  image: "assets/images/successkid.png",
  choices:["Success Kid", "Determined Kid", "Yes Kid"],
  answer:0  
},
{
  image: "assets/images/monorailcat.jpg",
  choices:["Railroad Cat", "Train Cat", "Monorail Cat"],
  answer:2  
},
{
  image: "assets/images/sanic.jpg",
  choices:["Sunic", "Sanic", "s o n i c c"],
  answer:1  
},
]

$("#start-button").on("click", function() {
  $("#start-question").html("What does this meme?");
  var imageTag = $("<img>");
  imageTag.attr("src", memeQuestions[currentQuestion].image);
  $("#meme-image").append(imageTag);
  answerButtons();
  timmerStart();
  // setTimeout(function() {
  //   setInterval(function(){
  //     timeLeft--}, 1000);
  //     //go to the next question when time is 0
  //     // if/else
  //     console.log('xx');
  // }, 15000);
});

  function timmerStart() {
    setTimeout(function() {
      // action
      console.log("didn't answer in time");
      incorrect++;
      nextQuestion();
      }, 10000);
  //   setInterval(function(){
  //     timeLeft--;
  //   console.log('interval');
  // }, 1000);
  //   $("#start-question").html("What does this meme?");
  //   answerButtons();
  //   timmerStart();
  // };

  $(".answerButton").on("click", function() {
    //TODO: check if they got it right or wrong
    nextQuestion();
  });

  function nextQuestion() {
    currentQuestion++;
    var imageTag = $("<img>");
    imageTag.attr("src", memeQuestions[currentQuestion].image);
    $("#meme-image").append(imageTag);
    answerButtons();
    timmerStart();
  }

  function answerButtons() {
    memeQuestions[currentQuestion].choices.forEach(function(element) {
      console.log(element);
      var createButton = $("<button>");
      createButton.addClass("answer-button");
      createButton.html(element);
      $("#multi-choices").append(createButton);
    });
  };

  //Player clicks start button 
  //start button disappears & question #1 displays
  //user has 15 seconds to answer, decrease 1 second from counter every second.
  //if user selects a correct answer then increase correct counter by 1pt and move on to question #2
  //if user selects an incorrect answer or exhausts all 15 seconds,then it increases incorrect counter by 1pt and it moves on to question #2
  //when user finishes question 7, (the questions left counter turns 0) then the screen displays final stats.
  //user can click restart with the restart button.