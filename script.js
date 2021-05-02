let paragraph = document.getElementById(`paragraph`)
let startGameButton = document.getElementById(`startGameButton`)
let userGuess = document.getElementById(`userGuess`)
let submitUserGuessButton = document.getElementById(`submitUserGuessButton`)
let userGuessDiv = document.getElementById(`userGuessDiv`)

let counter

let number

let intervalId

let guessed = false

startGameButton.addEventListener(`click`, startGame)
submitUserGuessButton.addEventListener(`click`, showResult)

function startGame() {
  counter = 0
  number = Math.floor(Math.random() * 10)
  paragraph.innerHTML = `Starting number is: ${number}`
  intervalId = setInterval(randomNumProducer, 2000)
  startGameButton.style.display = `none`
}

function randomNumProducer() {

  if (counter == 6) {
    clearInterval(intervalId)
    paragraph.innerHTML = `What is the number now?`
    userGuessDiv.style.display = `block`
    return
  }
  
  if (counter > 0) {
    let randomNum = Math.floor(Math.random() * 21) - 10
    if (Math.sign(randomNum) == - 1) {
      paragraph.innerHTML = `${randomNum}`
    }
    else {
      paragraph.innerHTML = `+${randomNum}`
    }
    number = number + randomNum
  }
  counter++
}

function showResult() {

    if (userGuess.value == number) {
      paragraph.innerHTML = `Correct!`
    }
    else {
      paragraph.innerHTML = `Incorrect, the number is ${number}.`
    }
    userGuess.value = ``
    userGuessDiv.style.display = `none`
    startGameButton.style.display = `block`
}

//TODO: Make it so that same  