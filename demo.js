const express = require("express");
const app = express();
//mongoose stuff
const mongoose = require('mongoose')
const db_url = 'mongodb://localhost:27017/bookmarks'
mongoose.connect(db_url)
const db = mongoose.connection
db.once("open", () => console.log("connected to mongoDB"))

const config = { port: process.env.PORT || 3000 };
app.use(express.json)

const Bookmark = require('./models/Bookmark')

/* const bookmarks = [
   {
        "id": "1",
        "title": "Google",
        "url": "https://www.google.com"
    }
] */

app.get("/bookmarks", (req, res) => {
    Bookmark.find().then((results) => 
res.status(200).json())
})

app.post("/bookmarks", (req, res) => {
/* const newBookmark = req.body */
/* bookmarks.push(newBookmark) */
const newBookmark = new Bookmark(req.body)
newBookmark.save()
res.status(201).json(newBookmark)
})

app.get('/bookmarks/:bookmarkId', (req, res) => {
Bookmark.findById(req.params.bookmarkId).then((results) => {
    if (results) {
        res.status(200).json(results)
    }else {
        res.status(404).json({ "message": "not found" })
    }
})
    .catch((error) => res.status(404).json({ "message": "not valid" }))
})

app.patch('/bookmarks/:bookmarkId', (req, res) => {
    Bookmark.findById(req.params.bookmarkId).then((bookmark) => {
        if (bookmark) {
        bookmark.title = req.body.title || bookmark.title
        bookmark.url = req.body.url || bookmark.url
        bookmark.save()
        res.status(200).json(bookmark)
    }else {
        res.status(404).json({ "message": "not found" })
    }})
    .catch((error) => res.status(404).json({ "message": "bad request" }))
})

app.delete('/bookmarks/:bookmarkId', (req, res) => {
    Bookmark.findById(req.params.bookmarkId).then((bookmark) => {
        if (bookmark) {
            //delete 
        }else {
            res.status(404).json({ "message": "not found" })
        }})
        .catch((error) => res.status(404).json({ "message": "bad request" }))
})
app.listen(config.port, () => {
    console.log(`App listening on http://localhost:${config.port}`)
  })