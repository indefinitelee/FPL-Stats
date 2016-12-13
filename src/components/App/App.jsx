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
      playersTable: [],
      tableTitle: 'Player Statistics',
      signupForm: {
        username: '',
        password: ''
    },
      loginForm: {
        username: '',
        password: ''
      },
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
    console.log('fetching table!!')
      fetch(`/api/tables`)
      .then(r => r.json())
      .then((playerData) => {
        this.setState({
          playersTable: playerData
        });
        // console.log(playerData)
        console.log(this.state.playersTable)
      })
      .catch(err => console.log(err));
    }
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
    fetch(`/api/graph/:id`)
      .then(r => r.json())
      .then((graphStats) => {
        this.setState({
          playerGraph: graphStats
        });
      })
      .catch(err => console.log(err));
    }
// end graph stuff


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
        <h1>FPL Stats Dashboard</h1>
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
          </div>
          <div className={styles["table-container"]}>
            <Table
              playersTable={this.state.playersTable}
              getGraphStats={this.getGraphStats.bind(this)}
            />
          </div>
      </div>
    );
  }
}

export default App;
