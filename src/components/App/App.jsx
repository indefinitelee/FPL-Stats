import React, { Component } from 'react';
import styles from './App.css';
import Header from './Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';


class App extends Component {
  constructor(){
    super();
    this.state = {
      signupForm: {
        username: '',
        password: ''
    },
      loginForm: {
        username: '',
        password: ''
      },
      players: [],
      chartTitle: 'Actual vs. Predicted Points',
      xAxisLabel: 'Game Week',
      yAxisLabel: 'Points',
      currentToken: ''
  }
}

 // {
 //    name: "Actual",
 //    values: [ { x: 1, y: 20 }, ...]
 //  },
 //  {
 //    name: "Prediction",
 //    values: [ { x: 1, y: 82 }, ...]
 //  }

  trackSignupForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    this.setState({
      signupForm: {
        username: fieldsArr[0].value,
        password: fieldsArr[1].value
      }
    }, () => {
      console.log(this.state)
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
      console.log(this.state)
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
  getStats() {

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
              chartTitle={this.state.chartTitle}
              xAxisLabel={this.state.xAxisLabel}
              yAxisLabel={this.state.yAxisLabel}
              data={this.state.players}
            />
            <div className={styles["chart"]}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
