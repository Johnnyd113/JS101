const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumber(whichNumber = 'first') {
  prompt(`Enter your ${whichNumber} number:`);
  let number = readline.question();

  while (invalidNumber(number)) {
    prompt("Hmm... that doesn't look like a valid number.");
    prompt("Please enter a number:");
    number = readline.question();
  }
  return Number(number);
}

function getOperator() {
  prompt(`What operation would you like to perform?
  Please enter the number next to your desired operation.
  (1) Add
  (2) Subtract
  (3) Multiply
  (4) Divide`);
  let operator = readline.question();

  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt("Hmm... that doesn't look like a valid operation.");
    prompt('Please enter a number 1, 2, 3, or 4.');
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
      result = number1 / number2;
      break;
  }
  return result;
}

function calculator(firstRun = true) {

  if (firstRun) {
    prompt('Welcome to Calculator!');
    prompt('This program allows you to add, subtract, multiply or divide two '
      + 'numbers.');
  }

  let number1 = getNumber('first');
  let number2 = getNumber('second');
  let operator = getOperator(number1, number2);
  let result = performOperation(operator, number1, number2);

  prompt(`Your result is ${result}.`);
}

let runAgain;
let firstRun = true;
do {
  calculator(firstRun);
  prompt('Would you like to use the calculator again?');
  prompt('Enter "y" to use the calculator again. ' +
         "Enter anything else to end the program");
  runAgain = readline.question();
  firstRun = false;
} while (runAgain === 'y');

prompt('Thank you for trying this calculator. Goodbye!');