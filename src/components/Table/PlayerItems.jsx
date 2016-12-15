import React, { Component } from 'react';
import style from './Table.css';

class PlayerItems extends Component {

  render(){
    return (
      <div className="player-items">
        <table>
          <tbody>
            <tr>
              <td>{this.props.id}</td>
              <td>{this.props.firstName}</td>
              <td>{this.props.lastName}</td>
              <td>{this.props.position}</td>
              <td>{this.props.cleanSheets}</td>
              <td>{this.props.goalsConceded}</td>
              <td>{this.props.saves}</td>
              <td>{this.props.yc}</td>
              <td>{this.props.rc}</td>
              <td>{this.props.assists}</td>
              <td>{this.props.goalsScored}</td>
              <td>{this.props.totalPoints}</td>
              <td>{this.props.ppg}</td>
              <td>{this.props.cost}</td>
              <td>{this.props.value}</td>
              <td>{this.props.pace}</td>
              <td><button onClick={() => this.props.getGraphStats(this.props.id)}>Graph this Player</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default PlayerItems;
