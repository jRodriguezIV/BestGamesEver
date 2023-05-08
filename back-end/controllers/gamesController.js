const express = require("express");
const games = express.Router()


games.get("/", async (req, res) => {
    // getAllGames
    res.status(200).json({success: true})
})

module.exports = games