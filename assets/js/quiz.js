const mainElement = document.querySelector('main');
const back = document.querySelector('#back');

back.addEventListener('click', function () {
    const birds = [
        'American Robin', 'Bald Eagle', 'Baltimore Oriole', 'Barred Owl',
        'Black-Capped Chickadee', 'Blue Jay', 'Canada Goose', 'Carolina Wren',
        'Cedar Waxwing', 'Common Grackle', "Cooper's Hawk", 'Eastern Bluebird',
        'Great Egret', 'Indigo Bunting', 'Mourning Dove', 'Northern Flicker'
    ];

    let quizQuestion = "What bird is this one?";
    let answer = 0;
    let possibleAnswers = birds; // Directly assigning birds to possibleAnswers

    quizQuestion.textContent = data.quizQuestion
    answer.textContent = data.answer
    possibleAnswers.textContent = data.possibleAnswers

    // Image source should be handled separately, not in this context
});

let currentQuestion = 0;
let highScore = localStorage.getItem('score') || "0";
let currentScore = 0;

function renderQuestion() {
    const quizQuestion = birds[currentQuestion];
    document.querySelector("#quizQuestion").textContent = quizQuestion;

    console.log("Loop has ended.");

    const answersElement = document.querySelector("#answers");


    for (let i = 0; i < possibleAnswers.length; i++) {
        const li = document.createElement('li');
        li.textContent = possibleAnswers[i];
        li.dataset.answer = i;

        answersElement.appendChild(li);
    }

    answersElement.addEventListener('click', function (event) {
        if (event.target.matches('li')) {
            const selectedAnswer = event.target.dataset.answer;
            if (birds[currentQuestion] === possibleAnswers[selectedAnswer]) {
                alert("YOU DID IT!");
                currentScore++;
            } else {
                alert("you suck");
            }

            setTimeout(function () {
                currentQuestion++;
                renderQuestion();
            }, 3000);
        }
    });
}