const apiRouter = require('express').Router();
const { getStatsTable, getGraphStats } = require('../services/stats-api.js')

apiRouter.route('/tables')
  .get(getStatsTable, (req, res, next) => res.json(res.players));

apiRouter.route('/graph/:id')
  .get(getGraphStats, (req, res, next) => res.json(res.graphStats));

module.exports = apiRouter;
