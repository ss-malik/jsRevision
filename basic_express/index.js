const express = require("express");

const port = 3000;

const app = express();

app.get("/", function (req, res) {
  // res.send("hello bade log, duvaao m yaad rakhna");
  res.json({ test: "myTest" });
});

app.listen(port, () => console.log(`Backend is running on Port ${port}`));
