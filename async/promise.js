// function makeCoffee(raw) {
//   let pr = new Promise((resolve, reject) => {
//     if (raw != undefined) {
//       setTimeout(() => {
//         resolve(`${raw} is ready`);
//       }, 2000);
//     } else {
//       reject("machine is broken");
//     }
//   });
//   return pr;
// }

// makeCoffee("coffee")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("promised is resolved");
//   });

function task1(cond) {
  let pr1 = new Promise((resolve, reject) => {
    if (cond != undefined) {
      setTimeout((cond) => {
        resolve("task1 done");
      }, 2000);
    } else reject("task 1 not done");
  });
  return pr1;
}
function task2(cond) {
  let pr1 = new Promise((resolve, reject) => {
    if (cond != undefined) {
      setTimeout((cond) => {
        resolve("task2 done");
      }, 2000);
    } else reject("task 2 not done");
  });
  return pr1;
}

function task3(cond) {
  let pr1 = new Promise((resolve, reject) => {
    if (cond != undefined) {
      setTimeout((cond) => {
        resolve("task3 done");
      }, 2000);
    } else reject("task 3 not done");
  });
  return pr1;
}
task1("boo")
  .then((res) => {
    console.log(res);
    return task2(res);
  })
  .then((res) => {
    console.log(res);
    return task3(res);
  })
  .then((res) => {
    console.log(res);
  });
