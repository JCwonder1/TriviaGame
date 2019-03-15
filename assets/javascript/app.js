// Store questions
// a way to keep track of questions asked
// keep track of how many were right


/*------------Question Object-----------*/

//Store question, choices, answer, image caption and image

var question1 = {
    question: "Match This number:  ALY69922U30N",
    choices: ["ALY69922U30N", "ALY69922U45N", "ALY69872U20N", "ALY69897U20N"],
    correctAnswer: "ALY69982U30N",
    imageCaption: "ALY69982U30N",
    imageLocation: ""
};

var question2 = {
    question: "Match This number:  ALY59586U20N",
    choices: ["ALY59586U20N", "ALY59587U20N", "ALY59582U20N", "ALY65522U20N"],
    correctAnswer: "ALY59586U20N",
    imageCaption: "ALY59586U20N",
    imageLocation: ""
};

var question3 = {
    question: "Match This number:  ALY65288U20N",
    choices: ["ALY65288U20N", "ALY65289U20N", "ALY65555U20N", "ALY65371U20N"],
    correctAnswer: "ALY65288U20N",
    imageCaption: "ALY65288U20N",
    imageLocation: ""
};

var question4 = {
    question: "Match This number:  ALY62511U20N",
    choices: ["ALY62511U20N", "ALY62512U20N", "ALY04038U10N", "ALY85511U20N"],
    correctAnswer: "ALY62511U20N",
    imageCaption: "ALY62511U20N",
    imageLocation: ""
};

var question5 = {
    question: "Match This number:  200004493",
    choices: ["200004493", "200013265", "EBY100076485", "EBY100076479"],
    correctAnswer: "200004493",
    imageCaption: "200004493",
    imageLocation: ""
};

var question6 = {
    question: "Match This number:  ALY62512U20N",
    choices: ["ALY62511U20N", "ALY62512U20N", "ALY04038U10N", "ALY85511U20N"],
    correctAnswer: "ALY62512U20N",
    imageCaption: "ALY62512U20N",
    imageLocation: ""
};

var question7 = {
    question: "Match This number:  100076484",
    choices: ["100076484", "100076482", "100076481", "100076480"],
    correctAnswer: "100076484",
    imageCaption: "100076484",
    imageLocation: ""
};

var question8 = {
    question: "Match This number:  ALY69922U30N",
    choices: ["Hottest year", "Spaciest year", "Highest number of space shuttle launches", "None of these answers"],
    correctAnswer: "Hottest year",
    imageCaption: "Global warming exist.",
    imageLocation: ""
};

var question9 = {
    question: "Match This number:  Qty8",
    choices: ["Qty8","Qty7","Qty9","Qty0"],
    correctAnswer: "Qty8",
    imageCaption: "Qty8",
    imageLocation: ""
};

var question10 = {
    question: "Match This number:  RB1",
    choices: ["RB1", "RA1", "RB2", "RC1"],
    correctAnswer: "RB1",
    imageCaption: "RB1",
    imageLocation:""
};


var question11 = {
    question: "Match This number:  Z1BS1H",
    choices: ["Z1BS1H", "Z1BS1F", "Z1BS1G", "Z1BS1E"],
    correctAnswer: "Z1BS1H",
    imageCaption: "Z1BS1H",
    imageLocation: ""
};

var question12 = {
    question: "Match This number:  Acura TL 17 Wheel",
    choices: ["Acura TL 17 Wheel", "Acura TL 18 Wheel", "Acura TL Wheel", "Acura 17 Wheel"],
    correctAnswer: "Acura TL 17 Wheel",
    imageCaption: "Acura TL 17 Wheel",
    imageLocation: ""
};


/*-----------FUNCTIONS------------*/


//Function to randomize array
function randomArray(array){
    var randomArray = [];
    randomArray = array.sort(function(a, b){return 0.5 - Math.random()});
    return randomArray;
}

//Building the current question and answer and munipulate the dom
function inputQuestionAnswerDom(question) {
    $questions.text(window[question].question);
    console.log("DEBUG: JUST POSTED NEW QUESTION FROM INSIDE THE inputQuestionAnswerDOM FUNCTION");
    //Return random order of choices
    var rando = randomArray(window[question].choices);
    for (var i = 0; i < rando.length; i++) {

        var incrementPlus = i + 1;
        var answerElement = "$answers" + incrementPlus;

        $("#answer-button-" + incrementPlus).attr("value",rando[i]).text(rando[i]);

    }

    randomQuestion.splice(0,1);


}

//Build the screen to tell user the correct answer
function buildAfterSelection(question){

    $questions.text(anseredCorrectly + window[question].imageCaption);
    $(".answers").hide();
    $(".afterimage").show();
    $(".afterimage img").attr("src", window[question].imageLocation);


}


//Function to add leading zero
function leadingZero (timer){
    if(timer <= 9){
        timer = "0" + timer;
    }
    return timer;
}


//Function to countdown from 15 seconds
function runCountDown(){
    $(".countDownTimer").text(leadingZero(timer));
    timer--;

    if (timer < 0){
        clearInterval(intervalID);
        counterForTimeout++;
        timeout = true;

    }

    if (timeout && randomQuestion !== []){
        timer = 10;
        runGame();
        timeout = false;
    }

    // if (!randomQuestion.length){
    //     clearInterval(intervalID);
    // }


}

function runGame(){
    $(".afterimage").hide();
    $(".answers").show();
    $(".countDownTimer").show();

    if (selectionTimer){
        clearTimeout(selectionTimer);

    }
    // rebuildAnswerSection();
    if(randomQuestion.length !== 0 ) {

        intervalID = setInterval(runCountDown, 1000);
        currentQuestion = (randomQuestion[0]);
        inputQuestionAnswerDom(randomQuestion[0]);

    }else{
        clearInterval(intervalID);
        $(".answers").hide();
        $(".countDownTimer").hide();
        $(".reload").show();

        if (rightAnswers<=3) {
            $(".question").text("You got " + rightAnswers + " correct!");
        }else if (rightAnswers>3 && rightAnswers<12){
            $(".question").text("Good job! You got "+rightAnswers+" correct");
        }else{
            $(".question").text("Wow! You got every question right.  You're a current events wizard!");
        }



    }
}

//function to check if answer chosen was correct
function checkAnswer(answerSelected){


    if (answerSelected === window[currentQuestion].correctAnswer) {


        rightAnswers++;
        clearInterval(intervalID);
        clearTimeout(selectionTimer);

        console.log("DEBUG: INSIDE THE IF STATEMENT WITH CORRECT ANSWER RUNNING GAME");

        //rebuildAnswerSection();
        runGame();
        timer = 10;

    } else {

        clearInterval(intervalID);
        clearTimeout(selectionTimer);

        console.log("DEBUG: INSIDE THE ELSE STATEMENT RUNNING GAME");

        //rebuildAnswerSection();
        runGame();
        timer = 10;
    }

}

function clearTimers (timerToCheck){
    if (timerToCheck){
        clearInterval(timerToCheck);
        clearTimeout(timerToCheck);
    }

}


/*-----------GLOBAL VARS------------*/

//Array of all questions for object use
var arrayOfQuestions = ["question1", "question2", "question3", "question4", "question5",
    "question6", "question7", "question8", "question9", "question10", "question11", "question12"];


//Set the HTML question element to a Var
var $questions = $(".question");


//Set the HTML answer elements to a Var
var $answer1 = $("#answer-button-1");
var $answer2 = $("#answer-button-2");
var $answer3 = $("#answer-button-3");
var $answer4 = $("#answer-button-4");


//On load it will resort questions so they are not always the same
var randomQuestion = randomArray(arrayOfQuestions);

//Build Timer countdown and conditions
var timer = 10;
var intervalID;
var timeout;

//After section timer
var selectionTimer;

//Score
var currentQuestion;
var counterForTimeout;
var rightAnswers = 0;
var anseredCorrectly;

window.onload = runGame();


/*-----------Event Listener----------*/

//Listen for a button to be pressed
$("button").on("click",
    function(event) {

        if(selectionTimer || intervalID){
            console.log("DEBUG: CLEARED INTERVALS FROM INSIDE THE EVENT");
            clearTimeout(selectionTimer);
            clearInterval(intervalID);

        }

        var answerSelected = event.currentTarget.value;
        if (answerSelected === window[currentQuestion].correctAnswer) {
            anseredCorrectly = "Correct! ";
        }else{
            anseredCorrectly = "Incorrect! ";
        }
        console.log("DEBUG: BUILDING THE IMAGE AN CAPTION");
        buildAfterSelection(currentQuestion);
        $(".countDownTimer").hide();

        // timer = 0;
        // $(".countDownTimer").text(leadingZero(timer));




        setTimeout(function(){
            checkAnswer(answerSelected);
        },5000);


    }


    );

$("#reload").on("click",function(){
    location.reload();
});






