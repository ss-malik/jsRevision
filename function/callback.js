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

// console.log("order placed");

function makeCoffee() {
  setTimeout(function () {
    return "Coffee is ready sir!";
  }, 2000);
}
makeCoffee();
// console.log("order served");
// function placeOrder() {
//   setTimeout(function () {
//     console.log("order1 is ready");
//     setTimeout(function () {
//       console.log("order2 is ready");
//       setTimeout(function () {
//         console.log("order3 is ready");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// let order = placeOrder();

function makeLassi() {
  setTimeout(() => {
    console.log("lassi 1 is ready");

    function lassi2() {
      setTimeout(() => {
        console.log("lassi 2 is ready");

        function lassi3() {
          setTimeout(() => {
            console.log("lassi 3 is ready");
          }, 2000);
        }
        lassi3();
      }, 2000);
    }
    lassi2();
  }, 2000);
}

makeLassi();
