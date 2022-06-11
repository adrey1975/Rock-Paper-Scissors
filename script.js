var arr = ['rock', 'paper', 'scissors'];
var rand = Math.floor(Math.random() * arr.length);
var winner = " ";
var cScore = 0;
var pScore = 0;


const computerSelection = computerPlay();
const playerSelection = playerChoice();


//---------------------------------------------
function computerPlay() {
    comp = arr[rand];
    return comp;
}
console.log(computerSelection);
//---------------------------------------------
function playerChoice() { 
    player = prompt('Choose your weapon: ').toLowerCase();
    return player;
}
//---------------------------------------------
function playRound() {
    if(computerSelection === 'rock' && playerSelection === 'paper') {
        winner = "Round for player!";
        pScore++;
        return winner;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        winner = "Round for Computer";
        cScore++;
        return winner;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        winner = "Round for Computer";
        cScore++;
        return winner;
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        winner = "Round for player!";
        pScore++;
        return winner;
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        winner = "Round for player!";
        pScore++;
        return winner;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        winner = "Round for Computer";
        cScore++;
        return winner;
    } else {
        winner = "draw!";
        pScore++;
        cScore++;
        return winner; }

}
console.log(playRound());
//---------------------------------------------
function checkWin() {
    if (pScore > cScore) {
        alert('Player wins!');
    } else if (cScore > pScore) {
        alert('Player loses! CPU Wins!');
    } else {
        alert('Draw! No one wins!');
    }
}
//---------------------------------------------
function game() {
    for (let i = 0; i <3; i++) {
        playRound(i);
    }

    checkWin();

}
console.log(game());
game();



