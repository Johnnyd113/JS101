const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard:   ['paper', 'spock'],
  spock:    ['rock', 'scissors'],
};
const VALID_SHORTENED_CHOICES = {
  rock: ['r', 'ro', 'rock'],
  paper: ['p', 'pa', 'paper'],
  scissors: ['sc', 'scissors'],
  lizard: ['l', 'li', 'lizard'],
  spock: ['sp', 'spock']
};

function getWinner(choice, computerChoice) {
  let winner;
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    winner = 'player';
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    winner = 'computer';
  } else winner = 'tie';
  return winner;
}

function displayWinner(winner) {
  if (winner === 'tie') prompt ('You Tied!');
  else prompt(`${winner} won`);
}

function getChoice(choice) {
  for (let pick in VALID_SHORTENED_CHOICES) {
    if (VALID_SHORTENED_CHOICES[pick].includes(choice)) {
      return pick;
    }
  }
  return 'unknown';
}


function prompt(message) {
  console.log(`=> ${message}`);
}

let playerWins = 0;
let computerWins = 0;

console.clear();
prompt('Welcome to a best of 5 of Rock, Paper, Scissors, Lizard, Spock');

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = getChoice(readline.question());

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = getChoice(readline.question());
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You choose ${choice}, computer chose ${computerChoice}`);

  let winner = getWinner(choice, computerChoice);
  displayWinner(winner);
  if (winner === 'player') playerWins += 1;
  if (winner === 'computer') computerWins += 1;

  prompt(`The score is\nyou: ${playerWins}\ncomputer: ${computerWins}`);

  if (playerWins > 2 || computerWins > 2) {
    prompt('Do you want to play again(y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    computerWins = 0;
    playerWins = 0;
    if (answer[0] !== 'y') break;
  }

}