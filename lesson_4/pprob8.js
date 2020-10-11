let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

flintstones.forEach((elem, idx) => {
  flintstonesObj[elem] = idx;
});

console.log(flintstonesObj);