import React from 'react';
import { Table } from 'reactstrap';

export default class TableTable extends React.Component {

  rowClicked() {
    return(console.log('The link was clicked.'));
  }
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Company</th>
            <th>Match</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={this.rowClicked}>
            <td>Facebook</td>
            <th>99 %</th>
          </tr>
          <tr>
            <td>Amazon</td>
            <th>40 %</th>
          </tr>
          <tr>
            <td>Google</td>
            <th>35 %</th>
          </tr>
        </tbody>
      </Table>
    );
  }
}
