import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles["Header"]}>
        <h1>Fantasy Premiere League Stats Tracker</h1>
        <img src="https://cdn.pixabay.com/photo/2014/09/19/14/44/football-452569_960_720.jpg" alt="logo"/>
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
