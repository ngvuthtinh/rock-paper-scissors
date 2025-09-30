console.log("Ưelcome to Rock-Paper-Scissors");

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){ return "rock";}
    else if (choice === 1){ return "paper";}
    else {return "scissors";}
}

function getHumanChoice(){
    let choice = prompt("What's your choice");
    return choice;
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++; 
        return "You lose! Paper beats Rock";}
    else if (humanChoice === "scissors" && computerChoice === "rock"){ 
        computerScore++; 
        return "You lose! Rock beats Scissors";}
    else if (humanChoice === "paper" && computerChoice === "scissors"){ 
        computerScore++; 
        return "You lose! Scissors beats Paper";}
    else if (computerChoice === "rock" && humanChoice === "paper"){ 
        humanScore++;
        return "You Win! Paper beats Rock";}
    else if (computerChoice === "scissors" && humanChoice === "rock"){ 
        humanScore++;
        return "You Win! Rock beats Scissors";}
    else if (computerChoice === "paper" && humanChoice === "scissors"){ 
        humanScore++;
        return "You Win! Scissors beats Paper";}
    else {
        return "Even";
    }
}


function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("computer " + computerSelection);
        console.log(playRound(humanSelection, computerSelection));
    }

    if (humanScore > computerScore){
        return `Finally: You win!!!!! with ${humanScore} score`;
    } else {
        return `Finally: Computer win!!!!! with ${computerScore} score`;
    }
}

console.log(playGame());