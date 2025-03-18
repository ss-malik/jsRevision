// // find sum from 1 to 50

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// function sumUpTo(n) {
//   let sum = 0;
//   for (let index = 0; index <= n; index++) {
//     sum += index;
//   }
//   return sum;
// }

// let result = sumUpTo(1000);
// console.log(result);

// function square(n) {
//   return n * n;
// }

// function sumOfSquare(a, b) {
//   let val1 = square(a);
//   let val2 = square(b);
//   return val1 + val2;
// }

// console.log(sumOfSquare(2, 3));

// function sumOfSquares(a, b, fn) {
//   let val1 = fn(a);
//   let val2 = fn(b);
//   return val1 + val2;
// }

// console.log(sumOfSquares(2, 4, square));

// const fs = require("fs");

// fs.readFile("hi.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// let arr = [1, 2, 3, 4, 5];

// let item = arr.splice(4, 1);
// console.log(arr, item);

// let p = new Promise(function (resolve) {
//   resolve("hi");
// });
// console.log(1, p);

// p.then(function (res) {
//   console.log(res);
// });

let obj = {
  name: "salman",
  age: 99,
  gender: "male",
};

console.log(typeof obj);
console.log(typeof JSON.parse(JSON.stringify(obj)));

async function getData() {
  try {
    const apiData = await fetch("https://dummyjson.com/products", {
      method: "Get",
    });
    const result = await apiData.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getData();

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => console.log(res, "from .then"));
