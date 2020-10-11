let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// it will not log true
// must use Number.isNaN()