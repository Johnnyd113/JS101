const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function inputRunAgain(inputRunAgain) {
  prompt(MESSAGES['runAgain']);
  inputRunAgain = readline.question().toLowerCase();

  while (!['yes', 'y', 'no', 'n'].includes(inputRunAgain)) {
    prompt(MESSAGES['invalidRunAgain']);
    inputRunAgain = readline.question().toLowerCase();
  }
  return inputRunAgain;
}

function calculateDivision(number1, number2) {
  if (number2 === 0) {
    prompt(MESSAGES['divideByZero']);
    return 'undefined';
  } else {
    return number1 / number2;
  }
}

function getNumber(whichNumber = 'first') {
  prompt(MESSAGES[`${whichNumber}Number`]);
  let number = readline.question();

  while (isInvalidNumber(number)) {
    prompt(MESSAGES['invalidNumber']);
    prompt(MESSAGES['invalidEnterNumber']);
    number = readline.question();
  }
  return Number(number);
}

function getOperator() {
  prompt(MESSAGES['getOperator']);
  let operator = readline.question();

  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt(MESSAGES['invalidOperation']);
    operator = readline.question();
  }
  return operator;
}

function performOperation(operator, number1, number2) {
  let result;
  switch (operator) {
    case '1':
      result = number1 + number2;
      break;
    case '2':
      result = number1 - number2;
      break;
    case '3':
      result = number1 * number2;
      break;
    case '4':
      result = calculateDivision(number1, number2);
  }

  prompt(MESSAGES['result'] + `${result}.`);
}

// Begining of application
console.clear();

prompt(MESSAGES['greet']);

let runAgain;
do {
  let number1 = getNumber('first');
  let number2 = getNumber('second');
  let operator = getOperator(number1, number2);
  performOperation(operator, number1, number2);

  runAgain = inputRunAgain(runAgain);

} while (runAgain === 'y' || runAgain === 'yes');

prompt(MESSAGES['goodbye']);