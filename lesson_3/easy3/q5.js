// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

function isColorValid(color) {
  return ['blue','green'].includes(color);
}

function isColorValid2(color) {
  return (color === 'blue' || color === 'green');
}

console.log(isColorValid('blue'));
console.log(isColorValid('green'));
console.log(isColorValid('yellow'));


console.log(isColorValid2('blue'));
console.log(isColorValid2('green'));
console.log(isColorValid2('yellow'));