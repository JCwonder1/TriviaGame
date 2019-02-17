// Store questions
// a way to keep track of questions asked
// keep track of how many were right


/*------------Question Object-----------*/

//Store question, choices, answer, image caption and image

var question1 = {
    question: "On Wednesday, the House Intelligence Committee announced plans to investigate whether _______ has any leverage over President Trump.",
    choices: ["Russia", "Jared Kushner", "Ivanka Trump", "President Obama"],
    correctAnswer: "Russia",
    imageCaption: "They are investigating whether Russia has any leverage over the President",
    imageLocation: "assets/images/Flag_of_Russia.svg"
};

var question2 = {
    question: "A new report released on Tuesday said that ISIS is likely to regain territory following Trump's decision to withdraw troops from:",
    choices: ["Syria", "Iran", "Afghanistan", "Saudi Arabia"],
    correctAnswer: "Syria",
    imageCaption: "The report stated that ISIS is likely to regain territory in Syria.",
    imageLocation: "assets/images/syria.png"
};

var question3 = {
    question: "A man in Florida caught breaking the windshields of multiple cars in a parking lot said he was only doing it because he:",
    choices: ["Hated cars.", "Was a disgruntle employee.", "Was intoxicated.", "Couldn’t remember where he parked."],
    correctAnswer: "Couldn’t remember where he parked.",
    imageCaption: "This is crazy.",
    imageLocation: "assets/images/cantfindcar.jpg"
};

var question4 = {
    question: "This week, it was revealed that some apps for the _____ may be recording users' screens without their knowledge.",
    choices: ["iPhone", "Samsung Galaxy", "Google Pixel", "LG"],
    correctAnswer: "iPhone",
    imageCaption: "Apple blocked Facebook’s Research VPN app being that it breaks apples policy.",
    imageLocation: "assets/images/privacycheckup.jpg"
};

var question5 = {
    question: "Hoping to do its part to manage the gray squirrel population in the U.K., a business in London is:",
    choices: ["Serving gray squirrel Lasagna", "Asking employees to kill squirrels at lunchtime", "Asking employees to set squirrel traps", "None of the above"],
    correctAnswer: "Serving gray squirrel Lasagna",
    imageCaption: "This must of ruined your appetite and you will probably never eat lasagna again.  Sorry!",
    imageLocation: "assets/images/squirrel.jpg"
};

var question6 = {
    question: "On Thursday, the German government announced plans to limit the data-gathering abilities of social media site:",
    choices: ["Facebook", "Twitter", "Google+", "Myspace"],
    correctAnswer: "Facebook",
    imageCaption: "Germany is pressing the brakes on Facebook's data gathering ability.",
    imageLocation: "assets/images/facebook_dislike_germany.jpg"
};

var question7 = {
    question: "With Valentine's Day approaching, Potbelly Sandwich Shop announced a new special offering – On Feb 14th they will be giving every single person what for free:",
    choices: ["One free cookie", "One rose", "A chocolate", "A heart test"],
    correctAnswer: "One free cookie",
    imageCaption: "Cookie of shame",
    imageLocation: "assets/images/sadcookie.png"
};

var question8 = {
    question: "On Wednesday, NASA announced that 2018 was the fourth year on record for being the:",
    choices: ["Hottest year", "Spaciest year", "Highest number of space shuttle launches", "None of the above"],
    correctAnswer: "Hottest year",
    imageCaption: "Global warming exist.  Get on board before there is no board to get on.",
    imageLocation: "assets/images/globalwarming.jpeg"
};

var question9 = {
    question: "After it was discovered that its accelerator pedal often got stuck, a recall warning was put out for:",
    choices: ["Barbie Power Wheels Dream Camper","Toyota","Honda","Boeing"],
    correctAnswer: "Barbie Power Wheels Dream Camper",
    imageCaption: "Fisher-Price recalled these after confirming that the peddle sticks.",
    imageLocation: "assets/images/barbie.jpeg"
};

var question10 = {
    question: "New app called Recharge let you rent what to people for single minutes:",
    choices: ["Your house", "Body", "Car battery", "Cell phone"],
    correctAnswer: "Your house",
    imageCaption: "You can now find a napping spot on every corner because of Recharge.",
    imageLocation:"assets/images/recharge.jpg"
};


var question11 = {
    question: "New Study shows driverless cars will cause more traffic because they would refuse to:",
    choices: ["Pay for parking", "Parallel park", "Ask for directions", "Drive above the speed limit"],
    correctAnswer: "Pay for parking",
    imageCaption: "Driverless cars will choose to round the block instead of paying which will cause more traffic.",
    imageLocation: "assets/images/driverless.png"
};

var question12 = {
    question: "Delta is facing a backlash on social media after encouraging passengers to do what?",
    choices: ["Pass their name & number to other passengers", "Wear blackface", "Kill Grey Squirrels", "Boycott watching the State of the union"],
    correctAnswer: "Pass their name & number to other passengers",
    imageCaption: "Here are the napkins.",
    imageLocation: "assets/images/delta-coke.jpg"
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
        timer = 15;
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
        }else if (rightAnswers>3 && rightAnswers<7){
            $(".question").text("Good job! You got "+rightAnswers+" correct");
        }else{
            $(".question").text("Wow! You got every question right.  You're a current events wizard!");
        }


        //TODO: Bring to a game over screen and display results.  Need to remove alert.
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
        timer = 15;

    } else {

        clearInterval(intervalID);
        clearTimeout(selectionTimer);

        console.log("DEBUG: INSIDE THE ELSE STATEMENT RUNNING GAME");

        //rebuildAnswerSection();
        runGame();
        timer = 15;
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
var timer = 15;
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






