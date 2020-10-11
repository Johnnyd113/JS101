// method 1
let numbers = [1, 2, 3, 4];
numbers.splice(0,numbers.length);
console.log(numbers);

// method 2
numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length;) {
  numbers.shift();
}
console.log(numbers);

// method 3
numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);

// method 4
numbers = [1, 2, 3, 4];
numbers.length = 0;