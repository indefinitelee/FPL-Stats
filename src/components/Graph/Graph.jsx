import React from 'react';
import { LineChart } from 'rd3';
import styles from './Graph.css';

const Graph = props => {

  return (
    <div className={styles['linechart']}>
      <LineChart
        data={props.data}
        height={450}
        width={750}
        margins={ { top: 0, right: 0, bottom: 0, left: 5 } }
        fill={'#234981'}
        title={props.graphTitle}
        yAxisLabel={props.yAxisLabel}
        xAxisLabel={props.xAxisLabel}
      />
    </div>
  );
}
export default Graph;
