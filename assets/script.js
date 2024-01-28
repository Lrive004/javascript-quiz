var startBtn = document.getElementById('start-btn');
var questionContainer = document.getElementById('question-container');
var endScreen = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var submitBtn = document.getElementById('submit-btn');
var timeEl = document.getElementById("time");

var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 75;

var questions = [
        {
            question: "Commonly used data types DO NOT include:",
            options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
            correctAnswer: "2. Booleans"
        },
        {
            question: "The condition in an if/else statement is enclosed with ____",
            options: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
            correctAnswer: "3. Parenthesis"
        },
        {
            question: "Arrays in JavaScript can be used to store:",
            options: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the above"],
            correctAnswer: "4. All of the above"
        },
        {
            question: "String values must be enclosed within ___ when being assigned to variables.",
            options: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
            correctAnswer: "3. Quotes"
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            options: ["1. Javascript", "2. Terminal/Bash", "3. For loops", "4. Console.log"],
            correctAnswer: "4. Console.log"
        },
    
    ];