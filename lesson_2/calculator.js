const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumber(whichNumber = 'first') {
  prompt(MESSAGES['enterNumber1'] + `${whichNumber}` + MESSAGES['enterNumber2']);
  let number = readline.question();

  while (invalidNumber(number)) {
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
      if (number2 === 0) {
        prompt(MESSAGES['divideByZero']);
        result = 'undefined';
      } else result = number1 / number2;
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

  prompt(MESSAGES['runAgain']);
  runAgain = readline.question().toLowerCase();

} while (runAgain === 'y');

prompt(MESSAGES['goodbye']);