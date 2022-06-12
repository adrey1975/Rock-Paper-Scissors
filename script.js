var pScore = 0;
var cScore = 0;

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
    if (computerPlay === playerChoice) {
        pScore++;
        cScore++;
        return "Tie!";
        
    }
    if (playerChoice === 'rock') {
        if (computerPlay === 'paper') {
            cScore++;
            return "You lose, paper beats rock!";
        } else {
            pScore++;
            return "Congrats, you win!";
        }
    }

    if (playerChoice === 'paper') {
        if (computerPlay === 'scissors') {
            cScore++;
            return "You lose, scissors beats paper!";
        } else {
            pScore++;
            return "You win!";
        }
    }

    if (playerChoice === 'scissors') {
        if (computerPlay === 'rock') {
            cScore++;
            return "You lose, rock beats scissors!";
        } else {
            pScore++;
            cScore++;
            return "You win!";
        }
    }
}
    // function newFunction() {
    //     var pScore = 0;
    //     var cScore = 0;
    //     return { pScore, cScore };
    //}

//---------------------------------------------
function playGame() {

    const userChoice = playerChoice();
    const cpuChoice = computerPlay();

    console.log('You chose: ' + userChoice);
    console.log('Computer chose: ' + cpuChoice);
    console.log(pScore, cScore);
    console.log(determineWinner(userChoice, cpuChoice));
}
//---------------------------------------------
function finalWinner() {
    if(pScore>cScore) {
        alert("After 3 rounds, you are the final champion! congrats!");
    } else if (pScore<cScore) {
        alert("You lose! Computers are the superior beings!");
    } else {
        alert("No winner! It/'s a draw!");
    }

}
//---------------------------------------------
function rounds() {
    for (let i = 0; i < 3; i++) {
        playGame(i);
    }
    finalWinner()
}
rounds();


