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

// 
function handleChoice(humanChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

    const result = playRound(humanChoice, computerChoice);
    console.log(result);
    console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore >= 5 || computerScore >= 5) endGame();
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

// condition to stop the game
function endGame() {
    gameOver = true;
    if (humanScore >= 5) console.log(`🏆 You win the game with ${humanScore} points!`);
    else console.log(`💀 Computer wins with ${computerScore} points!`);
}

// run the game
function playGame() {
    btn = document.querySelectorAll("#rock, #paper, #scissors");
    btn.forEach(btn => {
        btn.addEventListener("click", () => handleChoice(btn.id));
    });
}

playGame();

