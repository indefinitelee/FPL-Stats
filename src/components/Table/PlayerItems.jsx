import React, { Component } from 'react';
import style from './Table.css';

class PlayerItems extends Component {

  render(){
    return (
      <div className="player-items">
        <table>
          <tbody>
            <tr>
              <td><p>{this.props.id}</p></td>
              <td><p>{this.props.firstName}</p></td>
              <td><p>{this.props.lastName}</p></td>
              <td><p>{this.props.position}</p></td>
              <td><p>{this.props.cleanSheets}</p></td>
              <td><p>{this.props.goalsConceded}</p></td>
              <td><p>{this.props.saves}</p></td>
              <td><p>{this.props.yc}</p></td>
              <td><p>{this.props.rc}</p></td>
              <td><p>{this.props.assists}</p></td>
              <td><p>{this.props.goalsScored}</p></td>
              <td><p>{this.props.totalPoints}</p></td>
              <td><p>{this.props.ppg}</p></td>
              <td><p>{this.props.cost}</p></td>
              <td><p>{this.props.value}</p></td>
              <td><p>{this.props.pace}</p></td>
              <td><button onClick={() => this.props.getGraphStats(this.props.id)}>Graph this Player</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default PlayerItems;
