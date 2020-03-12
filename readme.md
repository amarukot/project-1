# NBA Trivia Game

**Project #1** | GA-SEI-1118 | Aldo Marukot

**Wireframe**
(https://xd.adobe.com/view/d95f7984-fbe3-4a9a-7921-339119fd82af-af6e/)

**Preview** <br>
Version 1 (https://amarukot.github.io/project-1/) <br>
Version 2 (https://amarukot.github.io/project-1/ver-2/version-2.html)

## Bronze, Silver, Gold plans

### Bronze

- simple styling
- 1 level with 5 questions
- user selects answer from multiple choices
- clicking on or selecting correct answer adds points
- 4-5 points win, 1-3 try better, 0 points, you're not very good at this

### Silver

<details><summary>(first version)</summary>
* better css styling, incorporating images and better visuals
* 2 or 3 levels
* certain questions gets more points
* finishing game with a certain number of points, give rating (Excellent, Good, Poor)
* display points
</details>

New Silver Plan

- new format. incorporate modal windows
- add timer
- add end of game info (score, time, etc.)

### Gold

- interactive images, buttons, clean design
- implement UX understanding
- 5 levels, 5 questions
- difficulty options - timer
- multiple players
- correct and wrong answer visual/sound feedback

## Progress

### 12/08/19

Built initial HTML basic layout and added Bootstrap CSS and JS tags

### 12/09/19

- Slight visual styling changes.
- Basic gameplay established.
- array of questions and answers set as constant in js
- initial set of questions and answers load at beginning of page load
- function to check answer added
- correct answer feedback
- wrong answer feedback
- update Round # according to number of questions
- update score
- reload new set of questions after each answer is submitted
- Game Over feedback at end of game

**Problems**

1. Having trouble styling this section. Radio buttons should be stacked.

<details><summary>code snippet</summary>

```
 <main>
        <h2 id="active-round">Round 1</h2>
        <!-- having trouble stacking the radio inputs as a column. it should be stacked by default in bootstrap. -->
        <section id="active-modal" class="column">
            <h5 id="active-question" data-question=0>Question 1</h5>
            <form class="form-check form-group">
                <input class="form-check-input answer-choices" type="radio" id="question-1" ></input>
                <label for="question-1">answer a</label>
                <input class="form-check-input answer-choices" type="radio" id="question-2" ></input>
                <label for="question-1">answer b</label>
                <input class="form-check-input answer-choices" type="radio" id="question-3" ></input>
                <label for="question-1">answer c</label>
                <input class="form-check-input answer-choices" type="radio" id="question-4" ></input>
                <label for="question-1">answer d</label>
                <input class="form-check-input answer-choices" type="radio" id="question-5" ></input>
                <label for="question-1">answer e</label>
                <button>Submit Answer</button>
            </form>
        </section>
    </main>
```

</details>

Went with a different approach and just stacked them manually using css grid options from Bootstrap. Will continue tweaking that later. Will focus on gameplay first.

### 12/10/19

- fill in with real questions
- finish at least Bronze plan
  - done.
- fixed End of Game (was continuing population of questions)
- added 'Play Again' button
- changed visuals
- updated css to be responsive (buttons, font)
- validated CSS and HTML for Bronze version

### 12/11/19

**PROBLEMS**

1. Was stuck on trying to get modal windows to dynamically create radio buttons and labels

<details><summary>code snippet</summary>

```
questionTitle.forEach((item) => {
    item.textContent = triviaQuestions[questionIndex].question
    let optArr = triviaQuestions[questionIndex].options
    optArr.forEach (item => {
        let currAnsCh = document.querySelector("[data-optionset='"+questionIndex+"']")
        currAnsCh.appendChild(newOptionNode)
        newOptionLabelNode.textContent = item
        currAnsCh.appendChild(newOptionLabelNode)

    })
})
```

</details>

    So, I just skipped that and just created div elements for 5 answer options and dynamically filled in the textContent.

2. Also got stuck on the 'submit' buttons within all modal windows to properly listen to click event (checkAnswer). Turns out clicking the modal window toggle calls the checkAnswer function. Most likely something to do with Bootstrap handling. Dan Lawrence from GA agrees with this assumption and wasn't able to pinpoint the cause either.

<details><summary>HTML code snippet</summary>

```
<main class="row align-items-center mx-4">
        <section class="round-section col mx-1">
            <div class="round-number" data-toggle="modal" data-target="#modal-1">ROUND 1</div>
            <!-- Question 1 modal -->
            <div class="modal fade text-dark" id="modal-1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modal-1-label">Modal title</h5>
                        </div>
                        <div class="modal-body" id="modal-1-choices">
                            <!-- answer options here -->
                            <form class="form-check row">
                                <input class="radio-buttons" type="radio" name="answer-options" id="question-1" value="">
                                <label for="question-1" class="ans-opt-labels-1"></label>
                                <div class="w-100"></div>
                                <input class="radio-buttons" type="radio" name="answer-options" id="question-1" value="">
                                <label for="question-1" class="ans-opt-labels-1"></label>
                                <div class="w-100"></div>
                                <input class="radio-buttons" type="radio" name="answer-options" id="question-1" value="">
                                <label for="question-1" class="ans-opt-labels-1"></label>
                                <div class="w-100"></div>
                                <input class="radio-buttons" type="radio" name="answer-options" id="question-1" value="">
                                <label for="question-1" class="ans-opt-labels-1"></label>
                                <div class="w-100"></div>
                                <input class="radio-buttons" type="radio" name="answer-options" id="question-1" value="">
                                <label for="question-1" class="ans-opt-labels-1"></label>
                                <div class="w-100"></div>
                                <button type="button" class="btn btn-primary submit-buttons" data-toggle="modal" data-target="#modal-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
```

</details>

<details><summary>JS code</summary>

```var questionIndex = 1;
var submitButtons = document.querySelectorAll(".submit-buttons");
var playerScore = 0;
var modalTitle = document.querySelectorAll(".modal-title");

var modalBody = document.querySelectorAll(".modal-body");

var radioButtons = document.querySelectorAll(".radio-buttons")


modalTitle.forEach(item => {
    item.textContent = triviaQuestions[questionIndex].question;
    console.log(item.textContent);

});

modalBody.forEach(item => {
    let opt = triviaQuestions[questionIndex].options;
    let answerOptionLabels = document.querySelectorAll(".ans-opt-labels-1");
    answerOptionLabels.forEach((item, i) => {
        item.textContent = opt[i];
    });
});

submitButtons.forEach(item => {
    addEventListener("click", checkAnswer);
});

function checkAnswer (e){
    e.preventDefault();
    console.log(e);
    console.trace();
    //grab selected answer
    var selectedAnswer;
    radioButtons.forEach(item => {
        if (item.checked) {
            selectedAnswer = item.value;
            console.log(selectedAnswer);
        };
    });
};
```

</details>
    - fixed by assigning an ID to EACH submit button and giving that an eventListener

- add modal windows - done
- aim for silver at this point - kinda
- add difficuly option? - mm, not done.

## 12/12/19

**GOALS**

- add randomizer function for question array?
- aim for gold level?
- finalize and polish up styling

**COMPLETED**

- added toggling ball images depending on correct/incorrect answer
- fixed layout and question progression through modal windows

# POST-PROJECT

- Mar 2020:
