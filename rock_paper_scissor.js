let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener("click",function () {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
})

scissor.addEventListener("click", () => {
    playGame("scissor");
    alert("hello")
})

function playGame(userChoice) {
  let result;

  const choice = ['rock','scissor','paper'];
  const computerChoice = choice[Math.floor(Math.random() * choice.length)];
  if(userChoice === computerChoice) {
      result = "its draw"
  }
  else if(
      (userChoice === "rock" && computerChoice === "paper") ||  
      (userChoice === "scissor" && computerChoice === "paper") || 
      (userChoice === "paper" && computerChoice === "rock")
   ) {
      result = "you win !"
      humanScor ++;
      }
  else {
      result = "computer win";
      computerScore ++;
}



}
