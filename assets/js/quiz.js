const mainElement = document.querySelector('main');
const back = document.querySelector('#back');

const quizData = [
    {
        image: 'pets-who/images/american-robin.jpg', // Replace with actual image path
        options: ['american-robin', 'Eagle', 'Parrot'],
        answer: 'american-robin'
    },
    {
        image: 'pets-who/images/bald-eagles.jpg', // Replace with actual image path
        options: ['bald-eagle', 'Ostrich', 'Flamingo'],
        answer: 'bald-eagle'
    },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const birdImage = document.getElementById('bird-image');
    const optionsContainer = document.getElementById('options');
    const nextButton = document.getElementById('next-button');

    birdImage.src = currentQuestion.image;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = 'none'; // Hide next button initially
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const nextButton = document.getElementById('next-button');

    if (selectedOption === currentQuestion.answer) {
        alert('Correct!');
    } else {
        alert('Wrong! The correct answer is ' + currentQuestion.answer);
    }

    nextButton.style.display = 'block'; // Show next button after answering
}

document.getElementById('next-button').onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
        // Optionally, reset the quiz or show results
    }
};