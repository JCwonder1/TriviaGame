// Store questions
// a way to keep track of questions asked
// keep track of how many were right


//Store Questions and Answers

var question1 = {
    question: "On Wednesday, the House Intelligence Committee announced plans to investigate whether _______has any leverage over President Trump.",
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
    imageCaption: "The report stated that ISIS is likely to regain territory in Syria.",
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
    imageCaption: "Germany is pressing is pumping the brakes on Facebook's data gathering ability.",
    imageLocation: "assets/images/facebook_dislike_germany.jpg"
};

var arrayOfQuestions = ["question1", "question2", "question3", "question4", "question5", "question6"];


//Function to randomize array
function randomArray(array){
    var randomArray = [];
    randomArray = array.sort(function(a, b){return 0.5 - Math.random()});
    return randomArray;
}

var rando = randomArray(question1.choices);
var randomizeQuestion = randomArray(arrayOfQuestions);

console.log(randomizeQuestion);

for(i=0; i < arrayOfQuestions.length; i++){
    let arrayCount = arrayOfQuestions[i];
    console.log(window[arrayCount].question);
}







//
//     With Valentine's Day approaching, Potbelly Sandwich Shop announced a new special offering – On Feb 14th they will be giving every single person what for free:
// a.	One free cookie.
//     b.	One rose
// c.	One chocolate
// d.	One heart test.
//     Image Caption: Cookie of shame.
//     On Wednesday, NASA announced that 2018 was the fourth year on record for being the:
//
//     a.	Hottest year.
//     b.	Spaciest year.
//     c.	Highest number of space shuttle launches.
//     d.	None of the above.
//
//     Image Caption:  Global warming exist.  Get on board before there is no board to get on.
//
//     After it was discovered that its accelerator pedal often got stuck, a recall warning was put out for:
//
// a.	Barbie Power Wheels Dream Camper
// b.	Toyota
// c.	Honda’s
// d.	Boeing
//
// Image Caption: Fisher-Price recalled these after confirming that the peddle sticks.
//
//     New app called Recharge let you rent what to people for single minutes:
//     a.	Your house.
//     b.	Body
// c.	Car battery
// d.	Cell Phone
// Image Caption:  You can now find a napping spot on every corner because of Recharge.
//     New Study shows driverless cars will cause more traffic because they would refuse to:
//     a.	Pay for parking
//     b.	Parallel park
// c.	Ask for directions
//     d.	Drive above the speed limit.
//     Image Caption: Driverless cars will choose to round the block instead of paying.
//
//     Delta is facing a backlash on social media after encouraging passengers to do what?
//     a.	Pass their name & number to other passengers.
//     b.	Wear blackface.
//     c.	Kill Grey Squirrels
// d.	Boycott watching the State of the union.
//     Image Caption:  Here are the napkins.
