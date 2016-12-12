const apiRouter = require('express').Router();
const { getStatsTable } = require('../services/stats-api.js')

apiRouter.route('/')
  .get(getStatsTable, (req, res, next) => res.json(res.players));

module.exports = apiRouter;
