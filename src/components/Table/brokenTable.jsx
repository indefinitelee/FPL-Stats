// import React, { Component } from 'react';
// const FixedDataTable = require('fixed-data-table');
// const {Table, Column, Cell} = FixedDataTable;



// class MyTable extends React {
//   constructor(props) {
//     super(props);
//     }

//   render() {
//     let {dataList} = this.props.playersTable;
//     return (
//       <Table
//         rowHeight={50}
//         headerHeight={50}
//         rowsCount={dataList.length}
//         width={1000}
//         height={500}>
//         {...this.props}>
//         <Column
//           columnKey="firstName"
//           header={<Cell>First Name</Cell>}
//           cell={<LinkCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="secondName"
//           header={<Cell>Last Name</Cell>}
//           cell={<TextCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="team"
//           header={<Cell>Team</Cell>}
//           cell={<LinkCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="Position"
//           header={<Cell>Position</Cell>}
//           cell={<TextCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="cs"
//           header={<Cell>Clean Sheets</Cell>}
//           cell={<LinkCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="saves"
//           header={<Cell>Saves</Cell>}
//           cell={<TextCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="goalsScored"
//           header={<Cell>Goals</Cell>}
//           cell={<LinkCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="assists"
//           header={<Cell>Assists</Cell>}
//           cell={<TextCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="yc"
//           header={<Cell>Yellow Cards</Cell>}
//           cell={<LinkCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="rs"
//           header={<Cell>Red Cards</Cell>}
//           cell={<TextCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />        <Column
//           columnKey="ppg"
//           header={<Cell>Points Per Game</Cell>}
//           cell={<LinkCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="nowcost"
//           header={<Cell>Cost</Cell>}
//           cell={<TextCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="totalPoints"
//           header={<Cell>Total Points</Cell>}
//           cell={<LinkCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="onPace"
//           header={<Cell>On Pace</Cell>}
//           cell={<TextCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//         <Column
//           columnKey="value"
//           header={<Cell>Value</Cell>}
//           cell={<LinkCell data={dataList} />}
//           fixed={true}
//           width={100}
//         />
//       </Table>
//     );
//   }
// }

// export default MyTable;
