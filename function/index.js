console.log("hello World");

// write function which take 2 parameter and return sum b/w all numbers including them.

function sumMinMax(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumMinMax(0, 5));

//   functn expresion and anonymous functn

// if we asasign a function to a variable i.e is func expression

let funcExpression = function example() {
  console.log("funcExpression is executed");
};
funcExpression();
console.log(funcExpression());
// this is example of named function expression

// let's see a example of anonymous func expression and how to call them

(function () {
  console.log("i am a anonymous function");
})();
// this is the example of IIFE immediately invoked anonymous function
// ist way lets see another way

let noNameFunc = function () {
  console.log("also a anonymous function ");
};

noNameFunc();

// let see a example of function declaration

function greet(name) {
  console.log(`Welcome ${name}!! Good Day`);
}

greet("salman");
