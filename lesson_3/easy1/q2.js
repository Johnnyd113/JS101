let str1 = "Come over here!";
let str2 = "What's up, dpc?";

function isEndingEclamation(str) {
  return str[str.length - 1] === '!';
}

console.log(isEndingEclamation(str1));
console.log(isEndingEclamation(str2));

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));