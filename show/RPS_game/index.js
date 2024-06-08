const choices = ["rock", "paper", "scissor"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")

const resultDisplay = document.getElementById("resultDisplay")

const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0
let computerScore = 0

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)]
    let result = ""

    if(playerChoice === computerChoice){
        result = "It's a TIE"
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "You WIN" : "You LOSE"
                break
            
            case "paper":
                result = (computerChoice === "rock") ? "You WIN" : "You LOSE"
                break
            
            case "scissor":
                result = (computerChoice === "paper") ? "You WIN" : "You LOSE"
                break
            
        }
    }
    playerDisplay.innerHTML = document.querySelector(`#${playerChoice}`).innerHTML
    computerDisplay.innerHTML = document.querySelector(`#${computerChoice}`).innerHTML
    resultDisplay.textContent = result

    resultDisplay.classList.remove("greenText", "redText")
    switch(result){
        case "You WIN":
            resultDisplay.classList.toggle("greenText")
            playerScore++
            playerScoreDisplay.textContent = playerScore
            break
        case "You LOSE":
            resultDisplay.classList.toggle("redText")
            computerScore++
            computerScoreDisplay.textContent = computerScore
            break
    }
}

