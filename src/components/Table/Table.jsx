import React, { Component } from 'react';
import JsonTable  from 'react-json-table';
import styles from './Table.css';

class Table extends Component {
  render() {
  return(
    <div className={styles['table']}>
     <JsonTable
      rows={this.props.rows}
        // settings={ this.getSettings() }
        // onClickCell={ this.onClickCell }
        // onClickHeader={ this.onClickHeader }
        // onClickRow={ this.onClickRow }
      />
      </div>
    );
  }
}

export default Table;
