// var submitButtons = document.querySelectorAll(".submit-buttons");

var questionIndex = 1
var playerScore = 0
var currentRound = 1
var scoreDisplay = document.querySelector("#score")

var modalTitle = document.querySelectorAll(".modal-title");

var modalBody = document.querySelectorAll(".modal-body");

var allRadioButtons = document.querySelectorAll(".radio-buttons")

// var submitButton1 = document.querySelector("#submit-button-1")
// submitButton1.addEventListener("click", checkAnswer)

var submitButtons = document.querySelectorAll(".submit-buttons")
submitButtons.forEach(item => {
    item.addEventListener("click", checkAnswer)
})


modalTitle.forEach((item, i) => {
    item.textContent = triviaQuestions[i+1].question;
});

modalBody.forEach((item, i) => {
    let idx = i+1
    let answerOptionLabels = document.querySelectorAll(".ans-opt-labels-"+idx);
    let answerOptions = document.querySelectorAll(".ans-options-"+idx);
    answerOptionLabels.forEach((item, i) => {
        item.textContent = triviaQuestions[idx].options[i];
    });
    console.log(answerOptionLabels);

    answerOptions.forEach((item, i) => {
        item.value = triviaQuestions[idx].options[i];
    });
    console.log(answerOptions);

    // radioButtons.forEach((item, i) => {
    //     item.value = triviaQuestions[idx].options[i]
    //     console.log(item.value);
    // });
    // console.log(radioButtons)
});

// assign answer options to radio button values
// radioButtons.forEach((item, index) => {
//     item.value = triviaQuestions[questionIndex].options[index]
//     console.log(item.value);
    
// })

function checkAnswer(e) {
    e.preventDefault();
    //grab selected answer
    var selectedAnswer;  
    allRadioButtons.forEach(item => {
        if (item.checked) {
            selectedAnswer = item.value;
            console.log(item)
            console.log(selectedAnswer);
        };
    });

    //check against correct answer
    if (selectedAnswer == triviaQuestions[questionIndex].answer) {
        if ((questionIndex) % 5 !== 0) {
            playerScore += 1
            alert("CORRECT! +1 POINT")
        } else {
            playerScore += 2
            alert("CORRECT! +2 POINTS")
        }
        document.querySelector("#ball-"+questionIndex).classList.remove("invisible")
    } else {
        // console.log("INCORRECT")
        alert("SORRY, that is incorrect.")
        document.querySelector("#ball-"+questionIndex).style.filter = "grayscale(1)"
        document.querySelector("#ball-"+questionIndex).classList.remove("invisible")

    }

    questionIndex += 1
    console.log(questionIndex)
 

    //clear out all radio buttons selection & update score
    allRadioButtons.forEach(item => {
        item.checked = false
    })
    scoreDisplay.textContent = playerScore

    if ((questionIndex) % 5 == 0) {
        let nextR = currentRound + 1
        let nextQ = questionIndex + 1
        if (nextR > 1 && nextR <= 5) {
            //make next round clickable and change color
            document.querySelector("#board-"+ nextR).classList.add("active-round")
            document.querySelector("#board-"+ nextR).setAttribute("data-target", "#modal-"+nextQ)

            // make previous round inactive and unclickable
            document.querySelector("#board-"+ currentRound).classList.remove("active-round")
            document.querySelector("#board-"+ currentRound).setAttribute("data-target", "")
            document.querySelector("#round-start").classList.add("invisible")
        }
        currentRound += 1
    } 
};

function clickRound() {
    console.log(this)
}