let myName = "salman";
var myFirstName = "annu";

function getName() {
  console.log("Hello world");
}

getName();
console.log(myName);

// object to get length, to get key and values also

let obj = {
  id: 1,
  myName: "salman",
  lastName: "Malik",
  contactNo: 123456,
};

console.log(Object.keys(obj).length);
console.log(Object.keys(obj));
console.log(Object.values(obj));
