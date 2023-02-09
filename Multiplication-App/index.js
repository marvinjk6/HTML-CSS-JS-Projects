const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)


let question = document.getElementById("question")
question.innerHTML = `What is ${num1} multiplied by ${num2}?`

const correctAns = num1 * num2

let input = document.getElementById("input")

let score = JSON.parse(localStorage.getItem('score'))

if(!score)
    score = 0

let userScore = document.getElementById("score")
userScore.innerText = `Score: ${score}`

const formElement = document.getElementById("form")

formElement.addEventListener("submit", () => {

    const userAnswer = +input.value
    console.log(userAnswer, typeof userAnswer)
    if(userAnswer === correctAns) {
        score++
    } else {
        score--
    }
    updateLocalStorage()

})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}

