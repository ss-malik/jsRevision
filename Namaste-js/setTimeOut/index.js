// function x() {
//   var a = 1;
//   setTimeout(function () {
//     console.log(a);
//   }, 2000);
//   console.log("hello");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("yo");
// }
// x();
// console.log(window);

function a() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
a();

function b() {
  for (var x = 1; x <= 5; x++) {
    console.log("x", x);
  }
}
b();
