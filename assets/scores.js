document.addEventListener('DOMContentLoaded', function () {
    var scoresList = document.getElementById('scores-list');

    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    highScores.forEach((score) => {
        var listItem = document.createElement('li');
        listItem.textContent = `${score.initials} - ${score.score}`;
        scoresList.appendChild(listItem);
    });
});
