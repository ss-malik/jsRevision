// sum of all no from 1 to 20

function sumOfAll(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
let result = sumOfAll(1, 3);

console.log(result);
