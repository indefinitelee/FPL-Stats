import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return(
      <div>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="password"/>
        <button onClick={this.props.postSignup}>Signup</button>
      </div>
    )
  }
}
