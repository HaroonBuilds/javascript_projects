let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computer_choice = Math.floor(Math.random() * 3);
    if(computer_choice == 1){
        return "scissor";
    }
    else if(computer_choice == 2) {
        return "paper";
    }
    else if (computer_choice == 0) {
        return "rock";

    }
}
function getHumanChoice() {
   return prompt("enter a word ")
}
function playround(a,b) {
    if(a == b) {
        console.log("your and computer choice is same so  it is 'pie' ")
    }
    else if (a == "scissor" && b == "paper"){
        console.log(` You win! ${a} beats ${b} `);
        humanScore += 1;
    }
    else if( a == "rock" && b == "scissor") {
        console.log(`you win! ${a} beats ${b} `);
        humanScore += 1;
    }
    else if(a == "paper" && b == "rock") {
        console.log(`you win! ${a} beats ${b} `);
        humanScore += 1;
    }
    
    
    else if (b == "scissor" && a == "pbper"){
        console.log(`computer win! ${b} beats ${a}`);
        humanScore += 1;
    }
    else if( b == "rock" && a == "scissor") {
        console.log(`computer win! ${b} beats ${a}`);
        humanScore += 1;
    }
    else if(b == "paper" && a == "rock") {
        console.log(`computer win! ${b} beats ${a}`);
        humanScore += 1;
    }
}
let ax = playround(getHumanChoice(),getComputerChoice());
function playgame() {
    console.log(ax)
    if(humanScore > computerScore) {
        console.log(`human score ${humanScore} : Computer score ${computerScore} : you won the match`)
    }
    else{
        console.log(`computer score ${computerScore} computer won: human score ${humanScore}`)
    }

}
playgame()




