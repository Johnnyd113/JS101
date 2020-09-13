const readline = require('readline-sync');
const MESSAGES = require('./messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0 ||
         Number.isNaN(Number(number));
}

function userLoanAmount() {
  prompt(MESSAGES['enterLoanAmount']);
  let loanAmount = readline.question();
  while (isInvalidNumber(loanAmount)) {
    prompt(MESSAGES['invalidNumber']);
    loanAmount = readline.question();
  }
  return Number(loanAmount);

  // TODO: edge cases handle commas, decimals

}

function userLoanAPR() {
  prompt(MESSAGES['enterAPR']);
  let loanAPR = readline.question();
  while (isInvalidNumber(loanAPR)) {
    prompt(MESSAGES['invalidNumber']);
    loanAPR = readline.question();
  }

  return Number(loanAPR) / 100;

  // TODO: more edge cases

}

function userLoanDurationYears() {
  prompt(MESSAGES['enterLoanDuration']);
  let loanDurationYears = readline.question();
  while (isInvalidNumber(loanDurationYears)) {
    prompt(MESSAGES['invalidNumber']);
    loanDurationYears = readline.question();
  }
  return Number(loanDurationYears);

  // TODO: more edge cases
}

function calcLoanDurationMonths(loanDurationYears) {
  return loanDurationYears * 12;
}

function calcMonthlyIntRate(loanAPR) {
  return loanAPR / 12;
}

function calcMonthlyPayment(loanAmount, monthlyIntRate, loanDurationMonths) {
  let monthlyPayment = loanAmount *
  (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate),
    (-loanDurationMonths))));

  return monthlyPayment;
}

function userRunAgain(runAgain) {
  prompt(MESSAGES['runAgain']);
  runAgain = readline.question();
  return runAgain;
}

// Begin Appliction

console.clear();

prompt(MESSAGES['welcome']);
let runAgain = 'y';
while (runAgain === 'y') {

  // get user info
  let loanAmount = userLoanAmount();
  let loanAPR = userLoanAPR();
  let loanDurationYears = userLoanDurationYears();

  // convert user info
  let loanDurationMonths = calcLoanDurationMonths(loanDurationYears);
  let monthlyIntRate = calcMonthlyIntRate(loanAPR);

  // calc monthly payment
  let monthlyPayment =
    calcMonthlyPayment(loanAmount, monthlyIntRate, loanDurationMonths);

  prompt(MESSAGES['paymentAmount'] + ` $${monthlyPayment}.`);

  // rerun?
  runAgain = userRunAgain(runAgain);
}