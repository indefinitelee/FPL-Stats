import React, { Component } from 'react';
import PlayerItems from './PlayerItems.jsx';
import style from './Table.css';

class Table extends Component {
  renderPlayers(){
    return this.props.playersTable.map((player, i) =>
      <PlayerItems
        key={i}
        id={player.id}
        firstName={player.firstName}
        lastName={player.lastName}
        position={player.position}
        cleanSheets={player.cs}
        goalsConceded={player.goalsConceded}
        saves={player.saves}
        yc={player.yc}
        rc={player.rc}
        assists={player.assists}
        goalsScored={player.goalsScored}
        ppg={player.ppg}
        total={player.totalPoints}
        cost={player.now_Cost}
        value={player.value}
        pace={player.pace}
      />
      )
    }

  render(){
    return (
      <div id="players-table">
      <table>
        <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Clean Sheets</th>
          <th>Goals Conceded</th>
          <th>Saves</th>
          <th>YC</th>
          <th>RC</th>
          <th>Assists</th>
          <th>Goals Scored</th>
          <th>Total Points</th>
          <th>PPG</th>
          <th>Cost</th>
          <th>Value</th>
          <th>Pace</th>
          <th>Graph</th>
          </tr>
        </tbody>
      </table>
      {this.renderPlayers()}
      </div>
    );
  }
}
export default Table;
