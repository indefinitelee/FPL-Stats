import React, { Component } from 'react';
import PlayerItems from './PlayerItems.jsx';
import style from './Table.css';

class Table extends Component {
  renderPlayers(){
    return this.props.playersTable.map((player, i) =>
      <PlayerItems
        key={i}
        id={player.id}
        cleanSheets={player.cs}
        goalsConceded={player.goalsConceded}
        saves={player.saves}
        yc={player.yc}
        rc={player.rc}
        assists={player.assists}
        goalsScored={player.goalsScored}
        ppg={player.ppg}
        cost={player.nowCost}
        value={player.value}
        pace={player.pace}
      />
      )
    }

  render(){
    return (
      <div id="players-table">
      {this.renderPlayers()}
      </div>
    );
  }
}
export default Table;
