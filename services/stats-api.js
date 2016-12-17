const fetch = require('node-fetch');

// hits the api and returns desired fields, as well as two calculated fields.
function getStatsTable(req, res, next){
  console.log('fetching player data!')
  fetch(`https://fantasy.premierleague.com/drf/bootstrap-static`)
    .then(r => r.json())
    .then((players) => {
      res.players = players.elements.map((player) => {
        return {
          id: player.id,
          firstName: player.first_name,
          lastName: player.second_name,
          // team: player.team,
          // position: player.element_type, £
          cs: player.clean_sheets,
          goalsConceded: player.goals_conceded,
          saves: player.saves,
          yc: player.yellow_cards,
          rc: player.red_cards,
          assists: player.assists,
          goalsScored: player.goals_scored,
          ppg: player.points_per_game,
          total: player.total_points,
          cost:  "£ " + player.now_cost/10,
          value: player.value_season,
          pace: ((parseInt(player.points_per_game))*38)
        }
      })
      next();
    })
    .catch(err => console.log(err));
  };

// fetches data from API and formats for use by rd3
  function getGraphStats(req, res, next){
      console.log('fetching graph data!')
      const id = req.params.id;
      fetch(`https://fantasy.premierleague.com/drf/element-summary/${id}`)
      //make this id attached to a button that fetches that data
        .then(r => r.json())
        .then((gStats) => {
          console.log('returned');
          res.graphStats = formatGraph(gStats);
          next();
        })
        .catch(err => next(err));
     };

  function formatGraph(graph) {
      let values = [];
      graph.history.map((week) => {
        values.push({x: week.round, y: week.total_points});
        });
      const final = [
        {
          name: 'Weekly Scores',
          values: values,
        },
      ];
      console.log('returning final')
      return final;
    }


module.exports = { getStatsTable, getGraphStats };
