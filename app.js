const express = require("express");
const app = express();
const config = { port: process.env.PORT || 3000 };

const fortunes = [
    "Embrace the learning journey. Coding experience is built step by step.",
    "Your dedication to learning to code will open doors to new opportunities.",
    "Just like debugging, challenges are temporary. Keep coding!",
    "In the world of tech, every line of code you write is a step toward success.",
    "Your career switch into tech is like a well-optimized algorithm: efficient and rewarding.",
    "Every error is an opportunity to learn something new. Don't give up!"
  ]

app.get("/", (req, res) => {
  function getFortune() {
    res.json({ fortune: fortunes[(Math.floor(Math.random() * fortunes.length))]})
  }
  getFortune()
});


app.listen(config.port, () => {
  console.log(`App listening on http://localhost:${config.port}`)
})