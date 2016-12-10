import React, { Component } from 'react';
import styles from './App.css';
import Header from './Header/Header.jsx';


class App extends Component {
  constructor(){
    super();
    this.state = {
      players: []
  }
}

  getStats() {

  }

  render() {
    return (
      <div className={styles["App"]}>
        <Header />
        <div className={styles["graph-container"]}>
          <div className={styles["chart"]}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
