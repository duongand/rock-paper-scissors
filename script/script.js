const validChoice = ['rock', 'paper', 'scissors'];
const choice = document.getElementsByClassName('choice');
let userWins = 0;
let computerWins = 0;

for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', () => {
        computerResponse(choice[i].attributes.value.value);
    });
};

function computerResponse(userChoice) {
    const computerNumericChoice = Math.floor(Math.random() *  validChoice.length);
    const computerChoice = validChoice[computerNumericChoice];
    let result;

    switch (computerChoice) {
        case userChoice:
            result = 'The result is a tie!';
            break;
        case 'rock':
            if (userChoice === 'paper') {
                userWins += 1;
                result = 'The user won!';
            } else {
                computerWins += 1;
                result = 'The computer won!';
            };
            break;
        case 'paper':
            if (userChoice === 'rock') {
                computerWins += 1;
                result = 'The computer won!';
            } else {
                userWins += 1;
                result = 'The user won!';
            };
            break;
        case 'scissors':
            if (userChoice === 'rock') {
                userWins += 1;
                result = 'The user won!';
            } else {
                computerWins += 1;
                result = 'The computer won!';
            };
            break;
        default:
            break;
    };

    update_header(userChoice, computerChoice, result);
};

function update_header(userChoice, computerChoice, result) {
    document.getElementById('score').innerText = `(User) ${userWins} - ${computerWins} (Computer)`;
    document.getElementById('user-choice').innerText = `The user chose ${userChoice}`;
    document.getElementById('computer-choice').innerText = `The computer chose ${computerChoice}`; 
    cdocument.getElementById('result').innerText = result;
};