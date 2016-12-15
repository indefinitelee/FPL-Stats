import React, { Component } from 'react';
import style from './Table.css';

class PlayerItems extends Component {

  render(){
    return (
      <div className="player-items">
        <table>
          <tbody>
            <tr>
              <td className="id">{this.props.id}</td>
              <td className="first">{this.props.firstName}</td>
              <td className="last">{this.props.lastName}</td>
              <td className="position">{this.props.position}</td>
              <td className="cs">{this.props.cleanSheets}</td>
              <td className="gc">{this.props.goalsConceded}</td>
              <td className="saves">{this.props.saves}</td>
              <td className="yc">{this.props.yc}</td>
              <td className="rc">{this.props.rc}</td>
              <td className="assists">{this.props.assists}</td>
              <td className="scored">{this.props.goalsScored}</td>
              <td className="total">{this.props.totalPoints}</td>
              <td className="ppg">{this.props.ppg}</td>
              <td className="cost">{this.props.cost}</td>
              <td className="value">{this.props.value}</td>
              <td className="pace">{this.props.pace}</td>
              <td className=""><button onClick={() => this.props.getGraphStats(this.props.id)}>Graph this Player</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default PlayerItems;
