let statement = "The Flintstones Rock";

let letterFreq = {};

console.log(statement.split('').forEach(letter => {
  if (letter === ' ') {
    return;
  }
  if (Object.keys(letterFreq).includes(letter)) {
    letterFreq[letter] += 1;
  } else letterFreq[letter] = 1;
}));

console.log(letterFreq);