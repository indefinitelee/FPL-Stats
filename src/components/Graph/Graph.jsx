import React from 'react';
import { LineChart } from 'rd3';
import styles from './Graph.css';

const Graph = props => {
  return (
    <div className={styles['barchart']}>
      <LineChart
        data={props.data}
        height={450}
        width={750}
        fill={'#234981'}
        title={props.chartTitle}
        yAxisLabel={props.yAxisLabel}
        xAxisLabel={props.xAxisLabel}
      />
    </div>
  );

}
export default Graph;
