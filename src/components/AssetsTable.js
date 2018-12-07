import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'semantic-ui-react';

class AssetsTable extends Component {



  renderRows = () => {


    return (
      <Table.Row negative>
        <Table.Cell>FB</Table.Cell>
        <Table.Cell>Facebook</Table.Cell>
        <Table.Cell>200</Table.Cell>
        <Table.Cell>$240</Table.Cell>
        <Table.Cell>$47,000</Table.Cell>
        <Table.Cell>-0.97%</Table.Cell>
        <Table.Cell>04-11-2018</Table.Cell>
      </Table.Row>
    )
  }


  render() {
    return (
      <div id="assets">
        <Table sortable={true}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Ticker:</Table.HeaderCell>
              <Table.HeaderCell>Company:</Table.HeaderCell>
              <Table.HeaderCell># of Shares:</Table.HeaderCell>
              <Table.HeaderCell>Purchased Price:</Table.HeaderCell>
              <Table.HeaderCell>Current Value:</Table.HeaderCell>
              <Table.HeaderCell>% Change:</Table.HeaderCell>
              <Table.HeaderCell>Date of Purchase:</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderRows()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { data: state.currentUser.user.active_assets}
}

export default connect(mapStateToProps)(AssetsTable);
