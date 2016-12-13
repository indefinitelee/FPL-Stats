import React, { Component } from 'react';

class PlayerItems extends Component {

  render(){
    return (
      <div className="player-items">
      <h4>Stats!</h4>
      <button onClick={() => this.props.getGraphStats(this.props.id)}>Graph this Player</button>
      </div>
    );
  }
}


export default PlayerItems;
