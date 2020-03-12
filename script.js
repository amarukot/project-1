// create randomizing function at some point and initialize here

// setup initial values
var questionIndex = 0;
var playerScore = 0;
var currentRound = 1;
var scoreDisplay = document.querySelector("#score");

var currentQuestion = document.querySelector("#active-question");
var answerChoices = document.querySelectorAll(".answer-choices");
var radioButtons = document.querySelectorAll(".radio-buttons");
var submitButton = document.querySelector("#submit-button");

// initialize 1st set of questions & answers
resetGame();

// currentQuestion.textContent = triviaQuestions[questionIndex].question
// answerChoices.forEach((item, index) => {
//     item.textContent = triviaQuestions[questionIndex].options[index]
// })
// radioButtons.forEach((item, index) => {
//     item.value = triviaQuestions[questionIndex].options[index]
// })

submitButton.addEventListener("click", checkAnswer);

//play again button
var playAgainButton = document.querySelector("#play-again");
playAgainButton.addEventListener("click", resetGame);

function checkAnswer(e) {
  e.preventDefault();
  //grab selected answer
  var selectedAnswer;
  radioButtons.forEach(item => {
    if (item.checked) {
      selectedAnswer = item.value;
      console.log(selectedAnswer);
    }
  });

  //check against correct answer
  if (selectedAnswer == triviaQuestions[questionIndex].answer) {
    console.log("correct!!!");
    console.log(questionIndex);
    if ((questionIndex + 1) % 5 !== 0) {
      playerScore += 1;
    } else {
      playerScore += 2;
    }
  } else {
    console.log("WRONG!!!");
    alert("sorry, that is incorrect.");
  }

  radioButtons.forEach(item => {
    item.checked = false;
  });
  scoreDisplay.textContent = playerScore;
  if ((questionIndex + 1) % 5 == 0) {
    currentRound += 1;
    document.querySelector("#active-round").textContent =
      "Round " + currentRound;
  }
  nextQuestion();
}

function nextQuestion() {
  if (questionIndex < 24) {
    selectedAnswer = "";
    questionIndex += 1;
    currentQuestion.textContent = triviaQuestions[questionIndex].question;
    answerChoices.forEach((item, index) => {
      item.textContent = triviaQuestions[questionIndex].options[index];
    });
    radioButtons.forEach((item, index) => {
      item.value = triviaQuestions[questionIndex].options[index];
    });
  } else {
    console.log("GAME OVER");
    questionIndex = 0;
    currentRound = 1;
    playerScore = 0;
    document.querySelector("#active-round").textContent = "GAME OVER";
    document.querySelector(".main-game-area").className += " invisible";
    document.querySelector("#play-again").classList.remove("invisible");
  }
}

function resetGame() {
  questionIndex = 0;
  playerScore = 0;
  // currentQuestion = document.querySelector("#active-question")
  currentRound = 1;
  scoreDisplay.textContent = playerScore;
  document.querySelector("#active-round").textContent = "Round " + currentRound;
  currentQuestion.textContent = triviaQuestions[questionIndex].question;
  answerChoices.forEach((item, index) => {
    item.textContent = triviaQuestions[questionIndex].options[index];
  });
  radioButtons.forEach((item, index) => {
    item.value = triviaQuestions[questionIndex].options[index];
  });
  document.querySelector("#play-again").className += " invisible";
  document.querySelector(".main-game-area").classList.remove("invisible");
}
