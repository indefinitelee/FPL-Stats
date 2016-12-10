DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS secrets;
DROP TABLE IF EXISTS user_predictions;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS players;

BEGIN;

CREATE TABLE users (
id: serial primary key,
username: varchar not null,
password: varchar not null,
);

CREATE TABLE secrets(
  secret_id SERIAL PRIMARY KEY,
  mySecret VARCHAR NOT NULL,
  myOtherSecret VARCHAR NOT NULL
);

CREATE TABLE user_predictions (
id: serial primary key,
user_id: references users,
player_id: references players,
prediction: integer,
);

CREATE TABLE players (
id: serial primary key,
second_name: text not null,
first_name: text not null,
team: varchar,
element_type: integer,
now_cost: integer,
goals_scored: integer,
assists: integer,
goals_conceded: integer,
saves: integer,
bonus: integer,
clean_sheets: integer,
yellow_cards: integer,
red_cards: integer,
points_per_game: varchar,
total_points: integer,
);

CREATE TABLE teams (
id: integer,
name: text,
);

COMMIT;
