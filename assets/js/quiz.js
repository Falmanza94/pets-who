const mainElement = document.querySelector('main');
const back = document.querySelector('#back');

const birds = [
{
    question = "What bird is this one?",
        answer = 0,
        possibleAnswers = ["Toucan”, “Pelican”, “etc…”]
        image = "image.png"
    //repeat for more questions
    {
                question = "What bird is this one ?"
    answer = 0
    possibleAnswers = ["Toucan”, “Pelican”, “etc…”]
    image = "image.png"
}
]

let currentQuestion = 0
let highScore = localStorage.getItem("score”) || 0
let currentScore = 0
    function renderQuestion() {
                        const quizQuestion = birds[currentQuestion]
                        document.querySelector("question”).textContent = quizQuestion.question
    
        for (let i = 0; i < quizQuestion.possibleAnswers.length; +ii) {
                            const li = document.createElement(‘li’)
                            li.textContent = quizQuestion.possibleAnswers[i]
                            li.dataset.answer = i

                            document.querySelector("#answers”).appendChild(li)
                            )
                        }

                        answersElement.addEventListener(“click”, function () {
                            If(event.target.matches(‘li’)) {
                                const answer = event.targe.darase.answer
                                quizQuestion[currentQuestion].answer === answer) {
                                    alert("YOU DID IT!")
            currentScore++
        } else { 
            for ()
        alert("you suck”)
    }

setTImeout(function () {
    currentQuestion++
    renderQuestion()
}.3000
