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
        cleanSheets={player.cs}
        goalsConceded={player.goalsConceded}
        saves={player.saves}
        yc={player.yc}
        rc={player.rc}
        assists={player.assists}
        goalsScored={player.goalsScored}
        ppg={player.ppg}
        total={player.total}
        getGraphStats={this.props.getGraphStats}
        pace={player.pace}
        cost={player.cost}
        value={player.value}
        estimate=''
        trackEstimate={this.props.trackEstimate}
      />
      )
    }

  render(){
    return (
      <div className="render-player-items">

      {this.renderPlayers()}
      </div>
    );
  }
}
export default Table;
