const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;  
let computerScore = 0;

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = " ";

    if (playerChoice === computerChoice) {
        result = "It's a tie";

    } else {                                                   
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissor") ? "YOU WIN" : "YOU LOSE";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;

            case "scissor":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

  
// updates the text on the screen  picked rock paper or scissors
    playerDisplay.textContent = `player: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    
    switch(result) {
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
    
        case "YOU LOSE": // Corrected from "YOU LOOSE !"
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
