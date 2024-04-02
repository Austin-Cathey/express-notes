const express = require("express");
const app = express();
const config = { port: process.env.PORT || 3000 };

function printWordFreq(file, callback) {
    fs.readFile(/home/atlas/momentum/code/javascript/node/express-ensemble/ensemble-2/fortune.json, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        process.exit(1);
      }
const fortunes = data
    })
}

app.get("/", (req, res) => {
  function getFortune() {
    res.json({ fortune: fortunes[(Math.floor(Math.random() * fortunes.length))]})
  }
  getFortune()
});


app.listen(config.port, () => {
  console.log(`App listening on http://localhost:${config.port}`)