import React, { Component } from 'react';
import styles from './App.css';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';
import Graph from '../Graph/Graph.jsx';
import JsonTable from 'react-json-table';


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
      console.log('Did mount!')
      this.getStatsTable();
    }

// get the data object from API and parse out the fields I want, then send to state
    getStatsTable(){
      fetch(`/api`)
      .then((players) => {
      this.setState({
          playersTable: playerData
        });
      })
      .catch(err => console.log(err));
    }
    //   .then(r => r.json())
    //   .then((players) => {
    //     console.log(players)
    //     let playerData = players.elements.map((player) => {
    //       return {
    //         firstName: player.first_name,
    //         secondName: player.second_name,
    //         team: player.team,
    //         position: player.element_type,
    //         cs: player.clean_sheets,
    //         goalsConceded: player.goals_conceded,
    //         saves: player.saves,
    //         goalsScored: player.goals_scored,
    //         assists: player.assists,
    //         yc: player.yellow_cards,
    //         rc: player.red_cards,
    //         ppg: player.points_per_game,
    //         nowCost: player.now_cost,
    //         totalPoints: player.total_points
    //         // onPace: (parseInt(ppg)*38)
    //       }
    //     }) // End of map function
    // // unexpected end of input somewhere here
    // can i set state here, do I need to??

// table component asks for the state as a prop i guess
// end table stuff
//
//
//
// graph stuff
// this will be shown on click so i think componentmount is wrong
  componentWillMount() {
    console.log('Will Mount')
    this.getGraphStats
  }

  getGraphStats () {
// can i do a forloop fetch?
// 603 because I know length of array at/element-summary but
// can i do like const arr = fetch and i<arr.length?
//something with promise.all (ask Jason - waits for api to return before next goes)
  for (i; i<= 603; i++){
    fetch(`http://fantasy.premierleague.com/drf/element-summary/${i}`, {
    mode:'no-cors'
  })
    .then(r => r.json())
    .then((response) => {
      const filtered = this.filterGraph(response);
      this.setState({
        playerGraph: filtered
      });
    })
    .catch(err => console.log(err));
    }
  }

  filterGraph(data) {
    let values = [];
    data.forEach((player) => {
      values.push({x: player.history.round, y: player.history.total_points});
    })
    const final = [
      {
        name: 'Weekly Scores',
        values: values,
      },
    ];
    return final;
  }

//end graph stuff
//
//
// signup,login, etc.
//
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
            <JsonTable rows={ this.state.playersTable }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
