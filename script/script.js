const valid_choice = ['rock', 'paper', 'scissor'];
const choice = document.getElementsByClassName('choice');
let user_wins = 0;
let computer_wins = 0;

// Applying event listeners to the rock, paper, scissor images
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', () => {
        computer_response(choice[i].attributes.value.value);
    });
};

// Determine the results from the computer's response
function computer_response(user_choice) {

    // Numerically randomize the computer's chosen gesture
    const computer_numeric_choice = Math.floor(Math.random() *  valid_choice.length);
    let computer_choice = valid_choice[computer_numeric_choice];
    let result;

    // Determine the results based on the game's rule
    if (computer_choice === user_choice) {
        result = 'The result is a tie!';
    } else if (computer_choice === 'rock') {
        if (user_choice === 'paper') {
            user_wins += 1;
            result = 'The user won!';
        } else {
            computer_wins += 1;
            result = 'The computer won!';
        };
    } else if (computer_choice === 'paper') {
        if (user_choice === 'rock') {
            computer_wins += 1;
            result = 'The computer won!';
        } else {
            user_wins += 1;
            result = 'The user won!';
        };
    } else if (computer_choice === 'scissor') {
        if (user_choice === 'rock') {
            user_wins += 1;
            result = 'The user won!';
        } else {
            computer_wins += 1;
            result = 'The computer won!';
        };
    };

    update_header(user_choice, computer_choice, result);

};

// Manipulate the DOM elements to display an updated scoreboard, chosen gestures, and the latest results
function update_header(user_choice, computer_choice, result) {

    const scoreboard = document.getElementById('score');
    const user_choice_display = document.getElementById('user-choice');
    const computer_choice_display = document.getElementById('computer-choice');
    const result_display = document.getElementById('result');
    
    let score_string = `(User) ${user_wins} - ${computer_wins} (Computer)`
    let user_choice_string = `The user chose ${user_choice}`;
    let computer_choice_string = `The computer chose ${computer_choice}`; 
    
    scoreboard.innerText = score_string;
    user_choice_display.innerText = user_choice_string;
    computer_choice_display.innerText = computer_choice_string;
    result_display.innerText = result;

};