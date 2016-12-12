import React, { Component } from 'react';
const jsonTable = require('react-json-table');
import styles from './Table.css';

React.render(
  <JsonTable rows={ this.props.playersTable }/>,
  document.body);

