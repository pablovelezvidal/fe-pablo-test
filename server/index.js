const express = require("express");
const { port = 3333, delay = 0 } = require("minimist")(process.argv);
const cors = require("cors");

var randomsNums = () =>
  [...Array(20)].map(() => Math.floor(Math.random() * 99));

const app = express()
  .use(cors())
  .get("/numbers", (req, res) => res.status(200).json(randomsNums()));

app.listen(port, () => console.log("Ramdom nums app running on port " + port));
