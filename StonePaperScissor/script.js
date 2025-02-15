// Choices for the game
const choices = ['Stone', 'Paper', 'Scissors'];

// Get references to DOM elements
const userChoiceSpan = document.getElementById('user-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const gameResult = document.getElementById('game-result');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const tiesSpan = document.getElementById('ties');
const resetButton = document.getElementById('reset');
const resetScoreButton = document.getElementById('reset-score');

// Initialize score variables
let wins = 0;
let losses = 0;
let ties = 0;

// Function to handle the user's selection
function handleUserChoice(choice) {
    const userChoice = choice;
    const computerChoice = getComputerChoice();
    
    // Display the choices as images
    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;
    // Determine the result and update the score
    const result = determineWinner(userChoice, computerChoice);
    gameResult.textContent = result;

    // Update the score based on the result
    if (result === 'You win!') {
        wins++;
        winsSpan.textContent = wins;
    } else if (result === 'Computer wins!') {
        losses++;
        lossesSpan.textContent = losses;
    } else {
        ties++;
        tiesSpan.textContent = ties;
    }
    
    // Show the reset button for the game
    resetButton.style.display = 'inline-block';
}

// Function to get a random choice for the computer
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    }

    if (
        (user === 'Stone' && computer === 'Scissors') ||
        (user === 'Paper' && computer === 'Stone') ||
        (user === 'Scissors' && computer === 'Paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Add event listeners to the buttons
document.getElementById('stone').addEventListener('click', () => handleUserChoice('Stone'));
document.getElementById('paper').addEventListener('click', () => handleUserChoice('Paper'));
document.getElementById('scissors').addEventListener('click', () => handleUserChoice('Scissors'));

// Reset the game (clear choices and results, reset score)
resetButton.addEventListener('click', () => {
    // Reset the game score
    wins = 0;
    losses = 0;
    ties = 0;
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    tiesSpan.textContent = ties;
    
    // Clear the choices and game result
    userChoiceSpan.innerHTML = '';
    computerChoiceSpan.innerHTML = '';
    gameResult.textContent = '';
    
    // Hide the reset button
    resetButton.style.display = 'none';
});

// Reset the score
resetScoreButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    ties = 0;
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    tiesSpan.textContent = ties;
    resetButton.style.display = 'none';
    userChoiceSpan.innerHTML = '';
    computerChoiceSpan.innerHTML = '';
    gameResult.textContent = '';
});
