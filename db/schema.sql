CREATE TABLE users (
id: serial primary key,
username: varchar,
email: varchar,
),

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
points_per_game: decimal,
total_points: integer,
),

CREATE TABLE teams (
id: integer,
name: text,
)
