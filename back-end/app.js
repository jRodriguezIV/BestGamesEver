const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())
app.use(express.json())

const gamesController = require("./controllers/gamesController")
app.use('/games', gamesController)

app.get("/", (req, res) => {
    res.status(200).send("This is the Landing Page for BestGamesEver")
})

app.get("*", (req,res) => {
    res.status(404).send("This is the Error Response")
})

module.exports = app;
