const pg = require('pg-promise')({});

const pgConfig = process.env.DATABASE_URL || {
                    database: process.env.PG_DATABASE,
                    host:     process.env.PG_HOST,
                    password: process.env.PG_PASSWORD,
                    port:     process.env.PG_PORT,
                    user:     process.env.PG_USER };

const db = pg(pgConfig);

module.exports = db;
