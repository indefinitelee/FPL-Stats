import React, { Component } from 'react';
import styles from './App.css';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';
import Graph from '../Graph/Graph.jsx';
import Table from '../Table/Table.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signupForm: {
        username: '',
        password: ''
    },
      loginForm: {
        username: '',
        password: ''
      },
      playersTable: [],
      tableTitle: 'Player Statistics',
      playerGraph: [],
      graphTitle: 'Actual and Predicted Points',
      xAxisLabel: 'Game Week',
      yAxisLabel: 'Points',
      currentToken: ''
    }
  }

//table stuff
    componentDidMount(){
      console.log('Did mount')
      this.getStatsTable();
  }

  getStatsTable(req, res, next){
  fetch(`http://fantasy.premierleague.com/drf/bootstrap-static`, {
    mode:'no-cors'
  })
    .then(r => r.json())
//why map not filter?
    .then((players) => {
      res.rows = players.elements.map((player) => {
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
          onPace: (parseInt(ppg)*38)
        }
      })
      this.setState({
        playersTable: res.rows
// can i set state here, do I need to??
      });
      next();
    })
    .catch(error => next(error));
  }


//end table stuff
//
//graph stuff
  componentWillMount() {
    console.log('Will Mount')
    this.getHistory
  }
//end graph stuff
//
// signup,login, etc.

  trackSignupForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    this.setState({
      signupForm: {
        username: fieldsArr[0].value,
        password: fieldsArr[1].value
      }
    }, () => {
      console.log(this.state.signupForm)
    })
  }

  trackLoginForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    this.setState({
      loginForm: {
        username: fieldsArr[0].value,
        password: fieldsArr[1].value
      }
    }, () => {
      console.log(this.state.loginForm)
    })
  }


  postSignup() {
    console.log('clicked')
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.signupForm.username,
        password: this.state.signupForm.password
      })
    })
    .then((data) => {
      this.setState({
        signupForm: {
          username: '',
          password: ''
        }
      })
    })
  }

  postLogin() {
    console.log('clicked')
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.loginForm.username,
        password: this.state.loginForm.password
      })
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        currentToken: data,
        loginForm: {
          username: '',
          password: ''
        }
      }, () => {
        console.log(this.state)
      })
    })
  }

  logout() {
    this.setState({
      currentToken: '',
    }, () => {
      console.log('after logout ', this.state)
    })
  }

  render() {
    return (
      <div className={styles["App"]}>
        <div className={styles["Header"]}>
          <Signup
            trackSignupForm={this.trackSignupForm.bind(this)}
            postSignup={this.postSignup.bind(this)}
          />
          <Login
            trackLoginForm={this.trackLoginForm.bind(this)}
            postLogin={this.postLogin.bind(this)}
            logout={this.logout.bind(this)}
          />
        </div>
          <div className={styles["graph-container"]}>
            <Graph
              height={this.state.height}
              graphTitle={this.state.chartTitle}
              xAxisLabel={this.state.xAxisLabel}
              yAxisLabel={this.state.yAxisLabel}
              data={this.state.players}
            />
            <div className={styles["table"]}>
            <Table
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
