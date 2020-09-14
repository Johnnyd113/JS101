let flintstones = ['Fred', 'Wilma'];
flintstones.push(['Barney', 'Betty']);
flintstones.push(['Bambam', 'Pebbles']);

let flintstones2 = [];
flintstones.forEach(function(a) {
  flintstones2 = flintstones2.concat(a);
});

let flintstones3 = [];
flintstones3 = [].concat(...flintstones);

let flintstones4 = [];
flintstones4 = flintstones.reduce((acc, cv) => acc.concat(cv), []);

console.log(flintstones);
console.log(flintstones2);
console.log(flintstones3);
console.log(flintstones4);