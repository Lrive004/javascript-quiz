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

    startBtn.addEventListener('click', startQuiz);
    submitBtn.addEventListener('click', saveScore);

    function startQuiz() {
        startBtn.parentNode.classList.add('hide');
        questionContainer.classList.remove('hide');
        showQuestion();
        startTimer();
    }

    function showQuestion() {
        var currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').textContent = currentQuestion.question;

        var optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option) => {
            var button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(answer) {
        var currentQuestion = questions[currentQuestionIndex];

        if (answer === currentQuestion.correctAnswer) {
            score++;
        } else {
            timeLeft -= 10;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }

    function startTimer() {
        var timerInterval = setInterval(() => {
            timeEl.textContent = "Timer: " + timeLeft;
            if (timeLeft > 0) {
                timeLeft--;
            } else {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }

    function endQuiz() {
        clearInterval();
        questionContainer.classList.add('hide');
        endScreen.classList.remove('hide');
        finalScore.textContent = score;
    }

    function saveScore() {
        var userInitials = initialsInput.value.trim();
        var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

        highScores.push({ initials: userInitials, score: score });
        localStorage.setItem('highScores', JSON.stringify(highScores));
        
        window.location.href = 'scores.html';

    }
