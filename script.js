
let humanScore = 0;
let computerScore = 0;
let gameOver = false;
// Computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) { return "rock"; }
    else if (choice === 1) { return "paper"; }
    else { return "scissors"; }
}

// Human choice
function getHumanChoice() {
    let btn = document.querySelectorAll("#rock, #paper, #scissors");
    btn.forEach(button => {
        button.addEventListener('click', (event) => { 
            if (gameOver) return;

            let humanChoice;
            console.log("human chose: " + event.target.id);

            if (event.target.id === "rock") { humanChoice = "rock"; }
            else if (event.target.id === "paper") { humanChoice = "paper"; }
            else if (event.target.id === "scissors") { humanChoice = "scissors"; }
            else { return; }

            const computerSelection = getComputerChoice();

            console.log("computer chose: " + computerSelection);
            const result = playRound(humanChoice, computerSelection);
            console.log(result);
            console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);

            // Condition to win
            if (humanScore === 5 || computerScore === 5) {
                gameOver = true;
                const winner = document.createElement("div");
                const container = document.querySelector(".container")
                if (humanScore === 5) {
                    winner.textContent = (`Finally: Human win!!!!!`);
                    container.appendChild(winner);
                } else {
                    winner.textContent = (`Finally: Computer win!!!!!`)
                    container.appendChild(winner);
                }
            }});
    });
}

// Define who win the round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        return "You Win! Paper beats Rock";
    }
    else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        return "You Win! Rock beats Scissors";
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        return "You Win! Scissors beats Paper";
    }
    else {
        return "Even";
    }
}


// run the game
function playGame() {
    console.log("Welcome to Rock-Paper-Scissors");
    getHumanChoice();
}

playGame();

