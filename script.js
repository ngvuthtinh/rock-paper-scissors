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
    
    let playerImg = document.querySelector(".place-holder-player img");
    playerImg.src = `/pictures/${humanChoice}.jpg`;

    let computerImg = document.querySelector(".place-holder-computer img");
    const computerChoice = getComputerChoice();
    computerImg.src = `/pictures/${computerChoice}.jpg`;

    console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

    const result = playRound(humanChoice, computerChoice);
    const playerScoreDisplay = document.querySelector('.player-score');
    const computerScoreDisplay = document.querySelector('.computer-score');

    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

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

    const container = document.querySelector('.container');
    const retrybtn  = document.createElement('button');
    
    retrybtn.textContent = 'Retry';
    retrybtn.id = 'retry-btn';      

    retrybtn.addEventListener('click', () => {
        resetGame();
        container.removeChild(retrybtn);
    })

    container.appendChild(retrybtn);
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    document.querySelector('.player-score').textContent = 0;
    document.querySelector('.computer-score').textContent = 0;
    document.querySelector(".place-holder-player img").src = '/pictures/rock.jpg';
    document.querySelector(".place-holder-computer img").src = '/pictures/rock.jpg';
}

// run the game
function playGame() {
    btn = document.querySelectorAll("#rock, #paper, #scissors");
    btn.forEach(btn => {
        btn.addEventListener("click", () => handleChoice(btn.id));
    });
}

playGame();

