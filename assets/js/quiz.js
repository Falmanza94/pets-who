const mainElement = document.querySelector('main');
const start = document.querySelector('#start');

const quizQuestionElement = document.querySelector('#quizQuestion');
const answerElement = document.querySelector('#answer');
const possibleAnswersElement = document.querySelector('#possibleAnswers');

start.addEventListener('click', function () {
    const birds = [
        { name: 'American Robin', image:'assets/images/american-robin.jpg' },
        { name: 'Bald Eagle', image: 'assets/images/bald-eagle.jpg' },
        { name: 'Baltimore Oriole', image: 'assets/images/baltimore-oriole.jpg' },
        { name: 'Barred Owl', image: 'assets/images/barred-owl.jpg' },
        { name: 'Black Capped Chickadee', image: 'assets/images/black-capped-chickadee.jpg' },
        { name: 'Blue Jay', image: 'assets/images/blue-jay.jpg' },
        { name: 'Canada Goose', image: 'assets/images/canada-goose.jpg' },
        { name: 'Carolina Wren', image: 'assets/images/carolina-wren.jpg' },
        { name: 'Cedar Waxwing', image: 'assets/images/cedar-waxwing.jpg' },
        { name: 'Common Grackle', image: 'assets/images/common-grackle.jpg' },
        { name: 'Coopers Hawk', image: 'assets/images/coopes-hawk.jpg' },
        { name: 'Eastern Bluebirds', image: 'assets/images/eastern-bluebirds.jpg' },
        { name: 'Great Egret', image: 'assets/images/great-egret.jpg' },
        { name: 'Indigo Bunting', image: 'assets/images/indigo-bunting.jpg' },
        { name: 'Mourning Doves', image: 'assets/images/mourning-doves.jpg' },
        { name: 'Northern Flicker', image: 'assets/images/northern-flicker.jpg' },    
    ];

    let quizQuestion = 0;
    let highScore = localStorage.getItem('score') || 0;
    let currentScore = 0;

    function renderQuestion() {
        //Clear previous answers
        possibleAnswersElement.innerHTML = '';

        //Swet the current quiz question
        quizQuestionElement.textContent = "What bird is this one?";

        //Create possible answers
        const correctBird = birds[quizQuestion].name; // Get the correct answer
        const shuffledBirds = birds.sort(() => 0.5 - Math.random()).slice(0,4); //Randomly select 4 birds
        shuffledBirds.forEach((bird) => {
            const li = document.createElement('li');
            li.textContent = bird;
            li.dataset.answer = bird; // Store the bird name as the answer
            possibleAnswersElement.appendChild(li);
        });

        // Add event listener for answer selection
        possibleAnswersElement.addEventListener('click', function (event) {
            if (event.target.matches('li')) {
                const selectedAnswer = event.target.dataset.answer;
                if (selectedAnswer === correctBird) {
                    alert("YOU DID IT!");
                    currentScore++;;
                } else {
                    alert("Wrong anser! The correct answer was " + correctBird);
                }

                quizQuestion++; // Move to the next question
                if (quizQuestion < birds.length) {
                    renderQuestion();
                } else {
                    alert("Quiz finished! Your score: " + currentScore);
                    // Optionally reset the quiz or show final score
                }
            }
        });
    }

    // Initialize the quiz
    renderQuestion();
});