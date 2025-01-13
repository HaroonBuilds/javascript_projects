let humanScore = 0;
let computerScore = 0;

function getComputedChoice() {
    let computerOutput = Math.floor(Math.random() * 3);
    if (computerOutput == 1) {
        return "scissor";
    } else if (computerOutput == 2) {
        return "paper";
    } else if (computerOutput == 0) {
        return "rock";
    }
}

function getHumanChoice() {
    return prompt("Enter a word: rock, scissor, paper");
}

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("Round Level!");
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        console.log("You win! Scissor beats paper.");
        humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        humanScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        console.log("You win! Rock beats scissor.");
        humanScore += 1;
    } else if (computerChoice == "scissor" && humanChoice == "paper") {
        console.log("Computer wins! Scissor beats paper.");
        computerScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("Computer wins! Paper beats rock.");
        computerScore += 1;
    } else if (computerChoice == "rock" && humanChoice == "scissor") {
        console.log("Computer wins! Rock beats scissor.");
        computerScore += 1;
    }
}

function playGame() {
    let attempts = 0;
    while (attempts < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputedChoice();
        playRound(computerSelection, humanSelection);
        attempts += 1;
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Your score: ${humanScore}, Computer's score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Computer's score: ${computerScore}, Your score: ${humanScore}`);
    } else {
        console.log(`It's a tie! Your score: ${humanScore}, Computer's score: ${computerScore}`);
    }
}

// Start the game
playGame();
