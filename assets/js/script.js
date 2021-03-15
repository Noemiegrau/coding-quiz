// arrays of questions and answers
let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answerA: '1. strings',
        answerB: '2. booleans',
        answerC: '3. alerts',
        answerD: '4. numbers',
        correctAnswer: 'c'
    },
    {
        question: 'The condition in an if / else statement is enclosed with _______.',
        answerA: '1. quotes',
        answerB: '2. curly brackets',
        answerC: '3. parenthesis',
        answerD: '4. square brackets',
        correctAnswer: 'b'
    },
    {
        question: 'Arrays in JavaScript can be used to store _______.',
        answerA: '1. numbers and strings',
        answerB: '2. other arrays',
        answerC: '3. booleans',
        answerD: '4. all of the above',
        correctAnswer: 'd'
    },
    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        answerA: '1. commas',
        answerB: '2. curly brackets',
        answerC: '3. quotes',
        answerD: '4. parenthesis',
        correctAnswer: 'c'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answerA: '1. JavaScript',
        answerB: '2. terminal/bash',
        answerC: '3. for loops',
        answerD: '4. console.log',
        correctAnswer: 'd'
    }
];

// DOM elements
var quizContent = document.getElementById('quiz-content');
var result = document.getElementById('result');
var endQuiz = document.getElementById('end-quiz');
var finalScore = document.getElementById('finalScore'); 
var viewHighScores = document.getElementById('view-high-scores');
var btnStartQuiz = document.getElementById('btn-start-quiz');
var homeContent = document.getElementById('home-content');
var quizContent = document.getElementById('quiz-content');
var question = document.getElementById('question');
var btna = document.getElementById('a');
var btnb = document.getElementById('b');
var btnc = document.getElementById('c');
var btnd = document.getElementById('d');
var progress = document.getElementById('progress');
var correctAlert = document.getElementById('correct');
var wrongAlert = document.getElementById('wrong');
var scoreContainer = document.getElementById('high-scores-page');
var viewHighScore = document.getElementById('btn-high-scores');
var endQuiz = document.getElementById('end-quiz');
var answersId = document.getElementById('answersId');
var questionsAnswers = document.getElementById('questionsAnswers');
var goBack = document.getElementById('btn-go-back');
var clearHighScores = document.getElementById('btn-clear-high-scores');
var submitScore = document.getElementById('submitScore');
// var correctSection = document.getElementById('correctSection');
// var wrongSection = document.getElementById('wrongSection');


// some variables that will be used later
let score = 0;
let runningQuestionIndex = 0;
let lastQuestionIndex = questions.length -1;

// prevents endQuiz from appearing on the homepage
endQuiz.style.display="none";

// makes new questions appear
function quizQuestions()  {
    
    let q = questions[runningQuestionIndex];

    question.innerHTML = q.question;
    btna.innerHTML = q.answerA;
    btnb.innerHTML = q.answerB;
    btnc.innerHTML = q.answerC;
    btnd.innerHTML = q.answerD;

};

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}



function answerIsCorrect() {
    progress.style.display="block";
    correctAlert.style.display="block";
    wrongAlert.style.display="none";
    alert('Correct!');
}

function answerIsWrong() {
    progress.style.display="block";
    wrongAlert.style.display="block";
    correctAlert.style.display="none";
    alert('Wrong! You loose 10 seconds on the timer :(');
}

function enterScore() {
    questionsAnswers.style.display="none";
    endQuiz.style.display="block";
}

function rightWrong(answer) {
    if(questions[runningQuestionIndex].correct == answer ) {
        score++;
        answerIsCorrect();
    } else if (questions[runningQuestionIndex].correct !== answer ) {
        answerIsWrong();
    }

    if(runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        quizQuestions();
    } else{
        enterScore();
    }
}

// starts the game
function startQuiz() {
    homeContent.style.display="none";
    endQuiz.style.display="none";
    quizContent.style.display="block";
    quizQuestions();
};

// function createListItem();

function scoreRender(){
    endQuiz.style.display="none";
    homeContent.style.display="none";
    quizContent.style.display="none";
    scoreContainer.style.display="block";
    let scorePerCent = Math.round(100 * score / questions.length);
}

function submitScoreInitial() {
    alert('You are all set!');
}

function goBackFunction() {
    homeContent.style.display ="block";
    quizContent.style.display="none";
    scoreContainer.style.display ="none";
}

// EVENT LISTENERS
// startQuiz() activated on button click
btnStartQuiz.addEventListener("click", startQuiz) 

viewHighScore.addEventListener("click", scoreRender);

goBack.addEventListener("click", goBackFunction);

clearHighScores.addEventListener("click", function (evt) {

});

submitScore.addEventListener("click", submitScoreInitial);





    // var correct = myQuestions[currentQuestionIndex].correctAnswer;
    

    // //document.getElementById('')

    // correctSection.addClass("hide");
    // wrongSection.addClass("hide");

    //     // if answer is correct
    //     if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
    //         //wrongAlert.style.display="none";
    //         //wrongAlert.addClass("hide");
    //         correctSection.style.display="block";
    //         //correctAlert.style.removeClass("hide");
    //         score++;
    //         currentQuestionIndex++;
    //         quizQuestions();

    //     // if answer is wrong
    //     } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
    //         //wrongAlert.style.display="block";
    //         wrongSection.style.display="block";
    //         currentQuestionIndex++;
    //         quizQuestions();
    //     }

        

    // if ( === correctAnswer) {
    // correctAlert.style.display="block";
    // } else if ( !== correctAnswer) {
    // wrongAlert.style.display="block";
    // }



    // btna.addEventListener("click", rightWrong) 
    // btnb.addEventListener("click", rightWrong)
    // btnc.addEventListener("click", rightWrong)
    // btnd.addEventListener("click", rightWrong)