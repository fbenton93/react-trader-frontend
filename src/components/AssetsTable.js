import React, { Component } from 'react';
import { connect } from 'react-redux';

import reduceAssets from '../helpers/reduceAssets';
import _ from 'lodash';

import { Table } from 'semantic-ui-react';
import AssetsTableRow from './AssetsTableRow';

class AssetsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: reduceAssets(this.props.data)
    }
  }

  renderRows = () => {
    const assetObj = reduceAssets(this.props.data);
    let rowArray = [];
    for(let key in assetObj) {
      rowArray.push(<AssetsTableRow key={key} asset={assetObj[key]} />)
    }
    return rowArray;
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
              <Table.HeaderCell>Cash Spent:</Table.HeaderCell>
              <Table.HeaderCell>Current Value:</Table.HeaderCell>
              <Table.HeaderCell>% Change:</Table.HeaderCell>
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
