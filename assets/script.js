let quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');

function quiz();

function showResults();

buildQuiz();

start();

function start() {
    let heading = document.createElement("p");
    heading.setAttribute("id", "start");
    heading.textContent = "Here's the coding quiz challenge!";

    let quizInstructions = document.createElement("p");
    heading.setAttribute("id", "quizInstructions");
    quizInstructions.textContent = "An incorrect time will take 10 seconds off the clock. When you run out of time the game is over! You'll have an opportunity to save your score at the end. When you're ready to play, press start!";
}