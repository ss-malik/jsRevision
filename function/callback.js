function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function calc(a, b, callbackFunction) {
  return callbackFunction(a, b);
}

let result = calc(5, 4, sum);
result = calc(5, 4, diff);

console.log("order placed");

function makeCoffee() {
  setTimeout(function () {
    console.log("Coffee is ready sir!");
  }, 2000);
}
makeCoffee();
console.log("order served");
