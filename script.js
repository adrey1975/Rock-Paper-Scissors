let pScore = 0;
let cScore = 0;

//---------------------------------------------
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(computerPlay());
//---------------------------------------------
function playerChoice() { 
    let player = prompt('Choose your weapon: ').toLowerCase();
    return player;
}

//---------------------------------------------




