import fs from "fs";

let readFile = fs.readFileSync("./1.txt", "UTF-8");

fs.readFile("./2.txt", "UTF-8", (err, data) => {
  if (err) {
    console.log(err);
  } else console.log(data);
});

// console.log(readFile);
