const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("This is the Index Page for BestGamesEver")
})

app.get("*", (req,res) => {
    res.status(404).send("This is the Error Resonse")
})