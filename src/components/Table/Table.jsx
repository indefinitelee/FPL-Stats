import React from 'react';
import { JsonTable } from 'react-json-table';
import styles from './Table.css';

const Table = props => {
  return(
    <div className={styles['table']}>
     <JsonTable
        rows={ this.props.playersTable }
        settings={ this.getSettings() }
        onClickCell={ this.onClickCell }
        onClickHeader={ this.onClickHeader }
        onClickRow={ this.onClickRow }
      />
      </div>
    );
    getSettings {
      // var me = this;
      return {
        keyField: 'name',
        cellClass: function( current, key, item){
          if( this.state.cell == key && this.state.row == item.name )
            return current + ' cellSelected';
          return current;
        },
        headerClass: function( current, key ){
            if( this.state.sort == key )
              return current + ' headerSelected';
            return current;
        },
        rowClass: function( current, item ){
          if( this.state.row == item.name )
            return current + ' rowSelected';
          return current;
        }
      };
    },

    onClickCell: function( e, column, item ){
      this.setState( {cell: column} );
    },

    onClickHeader: function( e, column ){
      this.setState( {sort: column} );
    },

    onClickRow: function( e, item ){
      this.setState( {row: item.name} );
    }
  }

export default Table;
