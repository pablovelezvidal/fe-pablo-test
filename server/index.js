const express = require("express");
const { port = 3333, delay = 0 } = require("minimist")(process.argv);
const cors = require("cors");

var randomsNums = () => {
  let arr = [];
  while (arr.length < 20) {
    let r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};

const app = express()
  .use(cors())
  .get("/numbers", (req, res) => res.status(200).json(randomsNums()));

app.listen(port, () => console.log("Ramdom nums app running on port " + port));
