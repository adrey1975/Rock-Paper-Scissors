// Global variables that will hold our score
var cScore = 0;
var pScore = 0;

// DOM method that will display our score
// this line will display after every round played with an updated score
document.getElementById('score').textContent = "COMPUTER: " + cScore + " PLAYER: " + pScore;

// Selector that allow us to make a callback to our html buttons
const buttons = document.querySelectorAll('[data-selection]');

// Function with our event listener that will take in button we select/click
buttons.forEach(button => {
    button.addEventListener('click', e => {
       const selectionName = button.dataset.selection
       playRound(selectionName)
    });
});

// Function that will generate random value for our computer
function randomSelection() {
    // Array that holds values for computer to randomly choose
    const CHOICES = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomChoice];
}

// Function with conditional statements that are tested based on user choice 
// as well as computer choice --- basically this is where our game is played
function playRound(selection) {
    const computerSelection = randomSelection();

    // DOM div container that will hold our round results as we play
    const container = document.querySelector('.container');
    const results = document.createElement('div');
    results.classList.add('results');

    // DOM div element that will hold our final results
    const finalResults = document.createElement('div');
    finalResults.classList.add('finalResults');

    // Some inline styling using setAttribute method
    results.setAttribute('style', 'font-size: 1.3rem; font-weight: 400; border: rgb(183, 254, 42) 0.125em solid; border-radius: 0.25em; margin: .25rem; padding: .5rem;')
    finalResults.setAttribute('style', 'font-size: 2rem; font-weight: 200; border: rgb(183, 254, 42) 0.125em solid; border-radius: 0.25em; margin: .5rem; padding: .5rem;')

    // Main game play conditional statements
    if (selection === 'rock' && computerSelection === 'paper') {
        results.textContent = 'you summon a rock but computer casts paper, computer wins';
        cScore++;
        document.getElementById('score').textContent = "COMPUTER: " + cScore + " PLAYER: " + pScore;

    } else if (selection === 'paper' && computerSelection === 'rock') {
        results.textContent = 'you cast paper and computer summons a rock, you win';
        pScore++;
        document.getElementById('score').textContent = "COMPUTER: " + cScore + " PLAYER: " + pScore;

    };

    if (selection === 'rock' && computerSelection === 'scissors') {
        results.textContent = 'you summon a rock and computer wields scissors, you win';
        pScore++;
        document.getElementById('score').textContent = "COMPUTER: " + cScore + " PLAYER: " + pScore;

    } else if (selection === 'scissors' && computerSelection === 'rock') {
        results.textContent = 'you wield scissors but computer summons a rock, computer wins';
        cScore++;
        document.getElementById('score').textContent = "COMPUTER: " + cScore + " PLAYER: " + pScore;

    };

    if (selection === 'scissors' && computerSelection === 'paper') {
        results.textContent = 'you wield scissors and computer casts paper, you win';
        pScore++;
        document.getElementById('score').textContent = "COMPUTER: " + cScore + " PLAYER: " + pScore;

    } else if (selection === 'paper' && computerSelection === 'scissors') {
        results.textContent = 'you cast paper but computer wields scissors, computer wins';
        cScore++;
        document.getElementById('score').textContent = "COMPUTER: " + cScore + " PLAYER: " + pScore;

    };

    if (selection === computerSelection) {
        results.textContent = 'Your powers are an even match!';
        document.getElementById('score').textContent = "COMPUTER: " + cScore + " PLAYER: " + pScore;

    };
    container.appendChild(results);

    // Loop that will determine winner
    if (pScore === 3 && cScore < 3) {
        finalResults.textContent = '3 SUCCESSFUL ATTACKS, YOU SEND YOUR COMPUTER TO THE SHADOW REALM!'
        container.appendChild(finalResults);
        replay();
    } else if (pScore < 3 && cScore === 3) {
        finalResults.textContent = 'COMPUTER LANDS 3 ATTACKS AND KILLS YOU!'
        container.appendChild(finalResults);
        replay();
    } else if ( pScore === 3 && cScore === 3) {
        finalResults.textContent = 'WE HAVE A DRAW!'
        container.appendChild(finalResults);
        replay();
    };

    
    
}

// Function to refresh the page after games over
function replay() {
    // This will disable our game buttons until game is restarted
    const rock = document.getElementById("r");
    const paper = document.getElementById("p");
    const scissors = document.getElementById("s");

    rock.setAttribute("disabled", 1);
    paper.setAttribute("disabled", 1);
    scissors.setAttribute("disabled", 1);

    // Will auto restart our game after 5 seconds of winner being declared
    setTimeout(function(){
        window.location.reload(1);
    }, 5000);

}





