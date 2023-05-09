const express = require("express");
const { getAllGames, getGame, createGame, deleteGame, updateGame } = require("../queries/games");
const games = express.Router();


games.get("/", async (req, res) => {
    const allGames = await getAllGames();
    if (allGames[0]) {
      res.status(200).json(allGames);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  // SHOW
games.get("/:id", async (req, res) => {
    const { id } = req.params;
    const game = await getGame(id);
    if (game.id) {
      res.json(game);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
  // CREATE
  games.post("/", async (req, res) => {
    try {
      const game = await createGame(req.body);
      res.status(200).json(game);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
  games.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedGame = await deleteGame(id);
    if (deletedGame.id) {
      res.status(200).json(deletedGame);
    } else {
      res.status(404).json("Song not found");
    }
  });
  
  // UPDATE
  games.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedGame = await updateGame(id, req.body);
    res.status(200).json(updatedGame);
  });

module.exports = games;