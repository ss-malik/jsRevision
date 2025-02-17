let myName = "Salman Malik";

function nameChar() {
  for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
  }
}
nameChar();

let selectedColors = ["red", "pink"];

selectedColors[5] = "green";
console.log(selectedColors);
