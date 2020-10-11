let str = 'The Flintstones Rock!';

for (let lines = 0; lines < 10; lines += 1) {
  console.log(str.padStart(lines + str.length));
}

for (let padding = 1; padding <= 10; padding++) {
  console.log(' '.repeat(padding) + str);
}