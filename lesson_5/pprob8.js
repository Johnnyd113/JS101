
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(subArr => {
  subArr.join().split('').forEach(letter => {
    if (['a','e','i','o','u'].includes(letter)) {
      console.log(letter);
    }
  });
});