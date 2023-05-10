DROP DATABASE IF EXISTS games_dev;

CREATE DATABASE games_dev;

\c games_dev;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    cost DECIMAL NOT NULL,
    genre TEXT,
    game_description VARCHAR,
    release_date INT,
    multiplayer BOOLEAN DEFAULT FALSE
);