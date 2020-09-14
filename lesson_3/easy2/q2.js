let numbers = [1, 2, 3, 4, 5];
console.log(Array.from(numbers).reverse());
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
console.log(Array.from(numbers).sort((num1, num2) => num2 - num1));
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let numbers2 = [];
numbers.forEach(num => numbers2.unshift(num));
console.log(numbers);
console.log(numbers2);