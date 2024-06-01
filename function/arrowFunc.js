function sum(a, b) {
  return a + b;
}

let ans = sum(2, 3);
console.log("ans", ans);

// to use result at later time we can this technique
// when a function reaches its return statement it will come out of function and if there are more code in function after return statement then that code will never execute so write return statement always in last f function block

let sumArrow = (a, b) => {
  return a + b;
};

let sumArrow1 = (a, b) => a + b;

let ans2 = sumArrow1(2, 16);
console.log(ans2);

// let see arrow func with ternary operator

function sumOrDiff(a, b) {
  if (a > b) {
    return a + b;
  } else {
    return a - b;
  }
}

let sumOrDiff2 = (a, b) => (a > b ? a + b : a - b);

let solution = sumOrDiff2(100, 500);

console.log(solution);

function factorial(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product = product * n;
  }
  return product;
}

let fac = factorial(5);
console.log(fac);
