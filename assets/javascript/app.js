var correct = 0;
var incorrect = 0;
var unanswered = 0;

var questionsLeft = 7;
var timeLeft = 10;

var currentQuestion = 0;
var firstGame = true;
var inGame = false;

var memeQuestions = [
  {
    image: "assets/images/keyboardcat.gif",
    choices: ["Billy Joel Cat", "Keyboard Cat", "Piano Cat"],
    answer: "Keyboard Cat"
  },
  {
    image: "assets/images/doge.jpg",
    choices: ["Doge", "Doggo", "Shiba Pupper"],
    answer: "Doge"
  },
  {
    image: "assets/images/icanhascheezburger.jpg",
    choices: ["I can haz cheeseburger?", "I can has cheezburger?", "I can has cheeseburger?"],
    answer: "I can has cheezburger?"
  },
  {
    image: "assets/images/thatsnoneofmybusiness.jpg",
    choices: ["...and that's the tea, sis!", "Me & Also Me", "...but that's none of my business"],
    answer: "...but that's none of my business"
  },
  {
    image: "assets/images/successkid.png",
    choices: ["Success Kid", "Determined Kid", "Yes Kid"],
    answer: "Success Kid"
  },
  {
    image: "assets/images/monorailcat.jpg",
    choices: ["Railroad Cat", "Train Cat", "Monorail Cat"],
    answer: "Monorail Cat"
  },
  {
    image: "assets/images/sanic.jpg",
    choices: ["Sunic", "Sanic", "s o n i c c"],
    answer: "Sanic"
  },
]

$("#start-button").on("click", function () {

  inGame = true;
  if (firstGame) {
    setInterval(myTimer, 1000);
    firstGame = false;
  }
  $("#start-question").html("What does this meme?");
  var imageTag = $("<img>");
  imageTag.attr("src", memeQuestions[currentQuestion].image);
  $("#meme-image").append(imageTag);
  answerButtons();

  $("#start-button").hide();
  $("#time-left").show()
  $("#correct-counter").html(correct);
  $("#incorrect-counter").html(incorrect);
});


function myTimer() {
  if (!inGame) {
    return;
  }
  if (timeLeft == 0) {
    incorrect++;
    nextQuestion();
  }
  $("#time-left").html("Time left: " + timeLeft);

  timeLeft--;

}

function nextQuestion() {
  $("#correct-counter").html(correct);
  $("#incorrect-counter").html(incorrect);

  currentQuestion++;
  timeLeft = 10;
  if (currentQuestion >= memeQuestions.length) {
    endGame();
    return;
  }

  $("#meme-image").empty();
  var imageTag = $("<img>");
  imageTag.attr("src", memeQuestions[currentQuestion].image);
  $("#meme-image").append(imageTag);
  answerButtons();
  timeLeft = 10;

}

function answerButtons() {
  $("#multi-choices").empty();
  memeQuestions[currentQuestion].choices.forEach(function (element) {
    var createButton = $("<button>");
    createButton.addClass("answer-button");
    createButton.html(element);
    createButton.on('click', function () {

      if (element === memeQuestions[currentQuestion].answer) {
        correct++
      }
      else {
        incorrect++;
      }
      nextQuestion();
    })
    $("#multi-choices").append(createButton);
  });
};

function endGame() {
  var endText = '';
  if (incorrect === 0) {
    endText = 'flawless victory';
  } else if (correct > incorrect) {
    endText = 'not bad';
  } else {
    endText = 'you lose';
  }
  $("#start-question").html(endText);
  inGame = false;
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  currentQuestion = 0;
  questionsLeft = 7;
  timeLeft = 10;
  $("#multi-choices").empty();
  $("#meme-image").empty();
  $("#start-button").show();
  $("#time-left").hide();
}

  //Player clicks start button 
  //start button disappears & question #1 displays
  //user has 15 seconds to answer, decrease 1 second from counter every second.
  //if user selects a correct answer then increase correct counter by 1pt and move on to question #2
  //if user selects an incorrect answer or exhausts all 15 seconds,then it increases incorrect counter by 1pt and it moves on to question #2
  //when user finishes question 7, (the questions left counter turns 0) then the screen displays final stats.
  //user can click restart with the restart button.