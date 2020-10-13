let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arr2 = arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => b - a);
  } else return subArr.slice().sort().reverse();
});

console.log(arr2);
console.log(arr);