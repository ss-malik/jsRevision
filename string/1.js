// iterating over char of string

// for of loop

let string = "my name is Salman Malik";

// for (let char of string) {
//   console.log(char);
// }

// count no of char in given string
let count = 0;
for (let char of string) {
  if (char == "a") {
    count++;
  }
}
console.log(count);

for (let i = 0; i < string.length; i++) {
  console.log(i, string[i]);
}
