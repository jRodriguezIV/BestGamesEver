const db = require("../db/dbConfig.js");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (error) {
    return error;
  }
};

const getGame = async (id) => {
  try {
    const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
    return oneGame;
  } catch (error) {
    return error;
  }
};

// CREATE
const createGame = async (game) => {
  try {
    const newGame = await db.one(
      "INSERT INTO games (name, artist, album , time ,is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [game.name, game.image, game.cost, game.genre, game.game_description, game.release_date, game.multiplayer]
      
    );
    return newGame;
  } catch (error) {
    return error;
  }
};

const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one(
      "DELETE FROM games WHERE id = $1 RETURNING *", id 
      );
    return deletedGame;
  } catch (error) {
    return error;
  }
};

const updateGame = async (id, game) => {
  try {
    const updatedGame = await db.one(
      "UPDATE games SET name=$1, image=$2, cost=$3, genre=$4, game_description=$5, release_date=$6, multiplayer=$6 WHERE id=$7 RETURNING *",
      [game.name, game.image, game.cost, game.genre, game.game_description, game.release_date, game.multiplayer, id]
    );
    return updatedGame;
  } catch (error) {
    return error;
  }
};


module.exports = {getAllGames, getGame, createGame, deleteGame, updateGame};