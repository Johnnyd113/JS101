let flintstones = ['Fred', 'Wilma'];
flintstones.push(['Barney', 'Betty']);
flintstones.push(['Bambam', 'Pebbles']);

// solution 1
let flintstones1 = [];
flintstones.forEach(num => {
  if (typeof num === 'object') {
    num.forEach(num2 => flintstones1.push(num2));
  } else flintstones1.push(num);
});

// solution 2
let flintstones2 = [];


console.log(flintstones);
console.log(flintstones1);