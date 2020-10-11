function factors(number) {

  let factors = [];

  for (let factor = 1; factor <= number; factor += 1) {
    if (number % factor === 0) {
      factors.push(factor);
    }
  }
  return factors;
}

console.log(factors(-1))
console.log(factors(0))
console.log(factors(1))
console.log(factors(3))
console.log(factors(7))
console.log(factors(8))
console.log(factors(27))
