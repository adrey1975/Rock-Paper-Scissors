// Function that will randomize our computers choice
function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(computerPlay());

// Function to play a round of RPS
function playRound (playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
       // pScore++;
       // cScore++;
        return "Tie!";
        
    }
    if (playerChoice === 'ROCK') {
        if (computerChoice === 'PAPER') {
           // cScore++;
            return "You lose, paper beats rock!";
        } else {
           // pScore++;
            return "Congrats, you win!";
        }
    }

    if (playerChoice === 'PAPER') {
        if (computerChoice === 'SCISSORS') {
         //   cScore++;
            return "You lose, scissors beats paper!";
        } else {
          //  pScore++;
            return "You win!";
        }
    }

    if (playerChoice === 'SCISSORS') {
        if (computerChoice === 'ROCK') {
          //  cScore++;
            return "You lose, rock beats scissors!";
        } else {
           // pScore++;
           // cScore++;
            return "You win!";
        }
    }
}

const playerChoice = "ROCK";
const computerChoice = computerPlay();
console.log(playRound(playerChoice, computerChoice));


