// Arrays of questions and answers
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
var btnStartQuiz = document.getElementById('btn-start-quiz');
var homeContent = document.getElementById('home-content');
var question = document.getElementById('question');
var btna = document.getElementById('a');
var btnb = document.getElementById('b');
var btnc = document.getElementById('c');
var btnd = document.getElementById('d');
var progress = document.getElementById('progress');
var correctAlert = document.getElementById('correct');
var wrongAlert = document.getElementById('wrong');
var scoreContainer = document.getElementById('high-scores-page');
var viewHighScores = document.getElementById('btn-high-scores');
var endQuiz = document.getElementById('end-quiz');
var answersId = document.getElementById('answersId');
var questionsAnswers = document.getElementById('questionsAnswers');
var goBack = document.getElementById('btn-go-back');
var clearHighScores = document.getElementById('btn-clear-high-scores');
var submitScore = document.getElementById('submitScore');
// var replay = document.getElementById('replay');
var finalScore = document.getElementById('finalScore');
var timer = document.getElementById('timer');
var timerNumber = document.getElementById('timerNumber');
var highscoreDisplayName = document.getElementById('highscore-initials');
var highscoreInputName = document.getElementById('initials');

// Timer variables
var timeLeft = 60;
var timeInterval;

// Other Variables
let score = 0;
let runningQuestionIndex = 0;
let lastQuestionIndex = questions.length -1;

// Prevents endQuiz() from appearing on the homepage
endQuiz.style.display="none";

// Makes new questions appear
function quizQuestions()  {

    let q = questions[runningQuestionIndex];

    question.innerHTML = q.question;
    btna.innerHTML = q.answerA;
    btnb.innerHTML = q.answerB;
    btnc.innerHTML = q.answerC;
    btnd.innerHTML = q.answerD;
};

// Counter render
function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit;
        count++
    } else {
        count = 0;
    }
}

// What happens if answer choosen is correct
function answerIsCorrect() {
    progress.style.display="block";
    correctAlert.style.display="block";
    wrongAlert.style.display="none";
    score++;
    alert('Correct!');
};

// What happens if answer choosen is wrong
function answerIsWrong() {
    progress.style.display="block";
    wrongAlert.style.display="block";
    correctAlert.style.display="none";
    timeLeft -=10;
    alert('Wrong! You loose 10 seconds on the timer :(');
};

// Makes submit data section appear after last question of quiz
function enterScore() {
    questionsAnswers.style.display="none";
    endQuiz.style.display="block";
    clearInterval(timerInterval);
    timerNumber.textContent = ('Done');
    document.getElementById("finalScore").innerHTML = "Your score is " + score + " points out of 5!";
};

// Finds out if answer clicked is correct or wrong and tells what happens accordingly
function rightWrong(answer) {
    if (answer == questions[runningQuestionIndex].correctAnswer) {
        answerIsCorrect();

    } else {
        answerIsWrong();
    }

    if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        quizQuestions();

    } else {
        enterScore();
    }
};

// Starts the game
function startQuiz() {
    homeContent.style.display="none";
    endQuiz.style.display="none";
    quizContent.style.display="block";
    quizQuestions();

    // Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        timerNumber.textContent = timeLeft;

        if (timeLeft === 0) {
            alert('Oups.. Time out!');
            clearInterval(timerInterval);
            enterScore();
        }
    }, 1000);
};

// Clear the high score list when click on button
function clearScores() {
    localStorage.setItem('savedHighscores', JSON.stringify([]));
    scoreRender();
}

// Displays the high score list from localStorage
function scoreRender() {
    endQuiz.style.display="none";
    homeContent.style.display="none";
    quizContent.style.display="none";
    scoreContainer.style.display="block";
    generateHighscores();
};

// Function generateHighscores();
function generateHighscores() {
    highscoreDisplayName.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    
    highscores.forEach(function(ele){
        var newLi = document.createElement('li');
        newLi.textContent = ele.name + ' - ' + ele.score;
        highscoreDisplayName.appendChild(newLi);
    });
}

// Happens when click on submit initial and score button: recods data in localStorage
function submitScoreInitial() {
    alert('You are all set!');

    if (highscoreInputName.value === ""){
        alert("Your initials cannot be blank. Please re-submit.");
        return false;

    } else {
        var savedHighscores = JSON.parse(localStorage.getItem('savedHighscores')) || [];
        var currentUser = highscoreInputName.value;
        var currentHighscore = {
            name: currentUser,
            score: score
        };

        console.log(savedHighscores);

    savedHighscores.push(currentHighscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    generateHighscores();
    
    }
};

// // Replay function
// function replayQuiz() {
//     homeContent.style.display ="block";
//     scoreContainer.style.display ="none";
//     endQuiz.style.display="none";
//     timeLeft = 60;
//     score = 0;
//     currentQuestionIndex = 0;
// }

// Happens when click on goBack button
function goBackFunction() {
    homeContent.style.display ="block";
    quizContent.style.display="none";
    scoreContainer.style.display ="none";
};

// Event Listeners
btnStartQuiz.addEventListener("click", startQuiz); 
viewHighScores.addEventListener("click", scoreRender);
goBack.addEventListener("click", goBackFunction);
clearHighScores.addEventListener("click", clearScores);
submitScore.addEventListener("click", submitScoreInitial);
// replay.addEventListener("click", replayQuiz);