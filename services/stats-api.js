const fetch = require('node-fetch');

function getTableStats(req, res, next){
  fetch(`fantasy.premierleague.com/drf/bootstrap-static`)
    .then(r => r.json())
    .then((data) => {
      res.rows = data.elements.map((player) => {
        return {
          firstName: player.first_name,
          secondName: player.second_name,
          team: player.team,
          position: player.element_type,
          cs: player.clean_sheets,
          goalsConceded: player.goals_conceded,
          saves: player.saves,
          goalsScored: player.goals_scored,
          assists: player.assists,
          yc: player.yellow_cards,
          rc: player.red_cards,
          ppg: player.points_per_game,
          nowCost: player.now_cost,
          totalPoints: player.total_points,
          // will this work?
          onPace: parseInt(ppg)*38
          // continue writing for all keys you want
          // follow the react nyc firehosues for how to renderall
          // check out using that react library to make into a table.
          // then 3ds for graphs
        }
      })
      console.log(player)
      next();
    })
    .catch((error) => {
      console.log("Error is ", error);
      res.error = error;
      next();
    });
};

module.exports = { getTableStats };
