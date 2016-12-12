import React, { Component } from 'react';
const JsonTable = require('react-json-table');
import styles from './Table.css';

React.render(
  <JsonTable rows={ this.props.playersTable }/>,
  document.body);

