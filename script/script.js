let userWins = 0;
let computerWins = 0;

const choice = document.getElementsByClassName('choice');
for (const element of choice) {
    element.addEventListener('click', () => {
        runGame(element.attributes.value.value);
    });
};

function runGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    updateScore(result);
    updateDisplay(userChoice, computerChoice, getResultString(result));
};

function getComputerChoice () {
    const validChoice = ['rock', 'paper', 'scissors'];
    const computerNumericChoice = Math.floor(Math.random() *  validChoice.length);
    return validChoice[computerNumericChoice];
};

function updateScore(result) {
    if (result === 'win') {
        userWins++;
    } else if (result === 'lose') {
        computerWins++;
    };
};

function getResultString(result) {
    const resultString = {
        'win': 'The user won!',
        'lose': 'The computer won!',
        'tie': 'It was a tie!',
    };

    return resultString[result];
};

function determineWinner(userChoice, computerChoice) {
    return getPermutations()[userChoice][computerChoice];
};

function getPermutations() {
    const PERMUTATIONS = {
        'rock': {'rock': 'tie', 'paper': 'lose', 'scissors': 'win'},
        'paper': {'rock': 'win', 'paper': 'tie', 'scissors': 'lose'},
        'scissors': {'rock': 'lose', 'paper': 'win', 'scissors': 'tie'},
    };

    return PERMUTATIONS;
};

function updateDisplay(userChoice, computerChoice, result) {
    document.getElementById('score').innerText = `(User) ${userWins} - ${computerWins} (Computer)`;
    document.getElementById('user-choice').innerText = `The user chose ${userChoice}`;
    document.getElementById('computer-choice').innerText = `The computer chose ${computerChoice}`; 
    document.getElementById('result').innerText = result;
};