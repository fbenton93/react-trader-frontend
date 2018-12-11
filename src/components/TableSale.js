import React, { Component } from 'react';
import { connect } from 'react-redux';
import reduceAssets from '../helpers/reduceAssets';
import { fetchSelectedAsset } from '../actions';

import { Table } from 'semantic-ui-react';
import SaleTableRow from './SaleTableRow';

class SaleTable extends Component {

  handleClick = (event) => {
    console.log(event.target)
  }

  renderRows = () => {
    const assetObj = reduceAssets(this.props.data);
    let rowArray = [];
    for(let key in assetObj) {
      rowArray.push(<SaleTableRow key={key} asset={assetObj[key]} />)
    }
    return rowArray;
  }

  render() {
    return (
      <div id="assets">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Ticker:</Table.HeaderCell>
              <Table.HeaderCell>Company:</Table.HeaderCell>
              <Table.HeaderCell># of Shares:</Table.HeaderCell>
              <Table.HeaderCell>Current Share Price:</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body onClick={this.handleClick}>
            {this.renderRows()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.currentUser.user.active_assets
  }
}

export default connect(mapStateToProps)(SaleTable);
