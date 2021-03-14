// arrays of questions and answers
var myQuestions = [
    {
        question: '1. Commonly used data types DO NOT include:',
        a: 'strings',
        b: 'booleans',
        c: 'alerts',
        d: 'numbers',
        correctAnswer: 'alerts',
    },
    {
        question: '2. The condition in an if / else statement is enclosed with _______.',
        a: 'quotes',
        b: 'curly brackets',
        c: 'parenthesis',
        d: 'square brackets',
        correctAnswer: 'curly brackets',
    },
    {
        question: '3. Arrays in JavaScript can be used to store _______.',
        a: 'numbers and strings',
        b: 'other arrays',
        c: 'booleans',
        d: 'all of the above',
        correctAnswer: 'all of the above',
    },
    {
        question: '4. String values must be enclosed within _______ when being assigned to variables.',
        a: 'commas',
        b: 'curly brackets',
        c: 'quotes',
        d: 'parenthesis',
        correctAnswer: 'quotes',
    },
    {
        question: '5. A very useful tool used during development and debugging for printing content to the debugger is:',
        a: 'JavaScript',
        b: 'terminal/bash',
        c: 'for loops',
        d: 'console.log',
        correctAnswer: 'console.log',
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


function quizQuestions()  {
    
}


function startQuiz() {
    homeContent.style.display="none";
    quizContent.style.display="block";
    quizQuestions();
}



// viewHighScores.addEventListener('click', function (ev1) {
//     ev1.preventDefault();
//     highScores.style.display = 'block';
//     quizChallenge.style.display = 'none';
    
//     renderHighScores();
// });



// EVENT LISTENERS
// startQuiz() activated on button click
btnStartQuiz.addEventListener("click", startQuiz) 


















// timer function
