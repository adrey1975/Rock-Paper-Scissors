function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
//---------------------------------------------
function playerChoice() { 
    let player = prompt('Choose your weapon: ').toLowerCase();
    return player;
}
//---------------------------------------------
function determineWinner(playerChoice, computerPlay) {
    var pScore = 0;
    var cScore = 0;
    console.log(pScore, cScore);

    if (computerPlay === playerChoice) {
        return "Tie!";
    }
    if (playerChoice === 'rock') {
        if (computerPlay === 'paper') {
            return "You lose, paper beats rock!";
        } else {
            return "Congrats, you win!";
        }
    }

    if (playerChoice === 'paper') {
        if (computerPlay === 'scissors') {
            return "You lose, scissors beats paper!";
        } else {
            return "You win!";
        }
    }

    if (playerChoice === 'scissors') {
        if (computerPlay === 'rock') {
            return "You lose, rock beats scissors!";
        } else {
            return "You win!";
        }
    }
}
//---------------------------------------------
function playGame() {

    const userChoice = playerChoice();
    const cpuChoice = computerPlay();

    console.log('You chose: ' + userChoice);
    console.log('Computer chose: ' + cpuChoice);

    console.log(determineWinner(userChoice, cpuChoice));
}
function rounds() {
    for (let i = 0; i < 3; i++) {
        playGame(i);
    }
}
rounds();


