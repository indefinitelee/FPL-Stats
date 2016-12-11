DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS secrets;
DROP TABLE IF EXISTS user_predictions;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS players;

BEGIN;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR NOT NULL,
password VARCHAR NOT NULL
);

CREATE TABLE secrets(
  secret_id SERIAL PRIMARY KEY,
  mySecret VARCHAR NOT NULL,
  myOtherSecret VARCHAR NOT NULL
);

CREATE TABLE user_predictions (
id SERIAL PRIMARY KEY,
user_id VARCHAR,
player_id VARCHAR,
prediction INTEGER
);

CREATE TABLE players (
id SERIAL PRIMARY KEY,
second_name TEXT NOT NULL,
first_name TEXT NOT null,
team VARCHAR,
element_type INTEGER,
now_cost INTEGER,
goals_scored INTEGER,
assists INTEGER,
goals_conceded INTEGER,
saves INTEGER,
bonus INTEGER,
clean_sheets INTEGER,
yellow_cards INTEGER,
red_cards INTEGER,
points_per_game VARCHAR,
total_points INTEGER
);

CREATE TABLE teams (
id INTEGER,
name TEXT
);

COMMIT;
