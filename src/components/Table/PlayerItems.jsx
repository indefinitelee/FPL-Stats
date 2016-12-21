import React, { Component } from 'react';
import style from './Table.css';

class PlayerItems extends Component {

  render(){
    return (
      <div className="player-items">
        <table>
          <tbody>
            <tr>
              {/*<th>Id</th>*/}
              <th>First Name</th>
              <th>Last Name</th>
              <th>Clean Sheets</th>
              <th>Goals Conceded</th>
              <th>Saves</th>
              <th>YC</th>
              <th>RC</th>
              <th>Assists</th>
              <th>Goals Scored</th>
              <th>PPG</th>
              <th>Total Points</th>
              <th>Cost</th>
              <th>Value</th>
              <th>Pace</th>
              <th>Graph</th>
              <th>Total Estimate</th>
            </tr>
            <tr>
              {/*<td>{this.props.id}</td>*/}
              <td>{this.props.firstName}</td>
              <td>{this.props.lastName}</td>
              <td>{this.props.cleanSheets}</td>
              <td>{this.props.goalsConceded}</td>
              <td>{this.props.saves}</td>
              <td>{this.props.yc}</td>
              <td>{this.props.rc}</td>
              <td>{this.props.assists}</td>
              <td>{this.props.goalsScored}</td>
              <td>{this.props.ppg}</td>
              <td>{this.props.total}</td>
              <td>{this.props.cost}</td>
              <td>{this.props.value}</td>
              <td><button onClick={() => this.props.getGraphStats(this.props.pace)}>Graph Pace</button></td>
              <td><button onClick={() => this.props.getGraphStats(this.props.id)}>Graph this Player</button></td>
              {/* <td><input onChange={() => this.props.trackCustomForm} type="text" placeholder="your total estimate"/></td>*/}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default PlayerItems;
