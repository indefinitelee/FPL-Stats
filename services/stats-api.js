const fetch = require('node-fetch');

function getStatsTable(req, res, next){
  console.log('fetching player data!')
  fetch(`https://fantasy.premierleague.com/drf/bootstrap-static`)
    .then(r => r.json())
    .then((players) => {
      let playerData = players.elements.map((player) => {
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
          onPace: (parseInt(player.points_per_game)*38)
        }
      })
      console.log(playerData)
      res.players = playerData;
      next();
    })
    .catch(err => console.log(err));
  }


module.exports = { getStatsTable };
