const mainElement = document.querySelector('main');
const start = document.querySelector('#start');

const quizQuestionElement = document.querySelector('#quizQuestion');
const birdImageElement = document.querySelector('#birdImage'); // Select the image element
const possibleAnswersElement = document.querySelector('#possibleAnswers');
const toggleButton = document.getElementById('mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

let popup = document.getElementById("popup")

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

start.addEventListener('click', function () {
    const birds = [
        { name: 'American Robin', image:'assets/images/american-robin.jpg' },
        { name: 'Bald Eagle', image: 'assets/images/bald-eagles.jpg' },
        { name: 'Baltimore Oriole', image: 'assets/images/baltimore-oriole.jpg' },
        { name: 'Barred Owl', image: 'assets/images/barred-owl.jpg' },
        { name: 'Black Capped Chickadee', image: 'assets/images/black-capped-chickadee.jpg' },
        { name: 'Blue Jay', image: 'assets/images/blue-jay.jpg' },
        { name: 'Canada Goose', image: 'assets/images/canada-goose.jpg' },
        { name: 'Carolina Wren', image: 'assets/images/carolina-wren.jpg' },
        { name: 'Cedar Waxwing', image: 'assets/images/cedar-waxwing.jpg' },
        { name: 'Common Grackle', image: 'assets/images/common-grackle.jpg' },
        { name: 'Coopers Hawk', image: 'assets/images/coopers-hawk.jpg' },
        { name: 'Eastern Bluebirds', image: 'assets/images/eastern-bluebirds.jpg' },
        { name: 'Great Egret', image: 'assets/images/great-egret.jpg' },
        { name: 'Indigo Bunting', image: 'assets/images/indigo-bunting.jpg' },
        { name: 'Mourning Doves', image: 'assets/images/mourning-doves.jpg' },
        { name: 'Northern Flicker', image: 'assets/images/northern-flicker.jpg' },    
    ];

    let quizQuestion = 0;

    let currentScore = 0;
    let usedBirds = []; // Initialize used birds array
    let correctBird;

    function renderQuestion() {
        possibleAnswersElement.innerHTML = ''; //Clear previous answers
        quizQuestionElement.textContent = "What bird is this one?"; //Set the current quiz question

        //Create possible answers
        correctBird = birds
            .filter(bird => !usedBirds.includes(bird.name)) // Exclude used birds by name
            .sort(() => 0.5 - Math.random())
            .slice(0,1)[0]; // Randomly select one correct answer (get the first element)
            usedBirds.push (correctBird.name)
        birdImageElement.src = correctBird.image; // Set the image source to the correct bird's image

        const otherBirds = birds
            .filter(bird => bird.name !== correctBird.name) // Exclude the correct bird by name
            .sort(() => 0.5 - Math.random())
            .slice(0,3); //Randomly select three incorrect birds

        const possibleBirds = [correctBird, ...otherBirds];
        possibleBirds.sort(() => 0.5 - Math.random()); // Shuffle again to mix the correct answer

        possibleBirds.forEach((bird) => {
            const li = document.createElement('li');
            li.textContent = bird.name; // Use the bird's name
            li.dataset.answer = bird.name; // Store the bird name as the answer
            possibleAnswersElement.appendChild(li);
        });

        
    }  

    // Add event listener for answer selection
    possibleAnswersElement.addEventListener('click', function (event) {
        if (event.target.matches('li')) {
            const selectedAnswer = event.target.dataset.answer;
            if (selectedAnswer === correctBird.name) {
                alert("CORRECT!");
                currentScore++;
            } else {
                alert("Wrong answer! The correct answer was " + correctBird.name);
            }
            quizQuestion++;
            if (quizQuestion < birds.length) {
                renderQuestion();
            } else {
                alert("Quiz finished! Your score: " + currentScore);  
                saveHighScore(currentScore); // Pass the current score to saveHighScore  
                const playAgain = confirm("Do you want to take the quiz again?");
                if (playAgain) {
                    // Reset the quiz
                    currentScore = 0; // Reset score
                    quizQuestion = 0; // Reset question index
                    usedBirds = []; // Reset used birds
                    renderQuestion(); // Start the quiz again
                } else {
                    alert("Thank you for playing!");
                }
            }
        }
    });
        // Function to save a new high score
        function saveHighScore(currentScore) {
        // Get the current high score from local storage
        const currentHighScore = parseInt(localStorage.getItem('highScore')) || 0;
        // If there is no high score or the new score is higher, save it
        if (currentScore > currentHighScore) {
            localStorage.setItem('highScore', currentScore);
            alert("New high score saved: " + currentScore);
        } else {
            alert("Current high score remains: " + currentHighScore);
        }
        }
    
    // Initialize the quiz
    renderQuestion();
    // saveHighScore();
    console.log(usedBirds);
})