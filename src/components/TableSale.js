import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExistingAsset } from '../actions';



import { Table } from 'semantic-ui-react';
import SaleTableRow from './SaleTableRow';

class SaleTable extends Component {

  handleClick = (event) => {
    const { ticker, id } = this.props.data.find((asset) => {
      return asset.id == event.target.parentNode.id
    })
    console.log(ticker,id)
    this.props.fetchExistingAsset(ticker, id)
  }

  renderRows = () => {
    const rowArray = this.props.data.map((asset) => {
      return <SaleTableRow key={asset.id} asset={asset} />
    })

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
              <Table.HeaderCell>Purchase Price:</Table.HeaderCell>
              <Table.HeaderCell>Purchased At:</Table.HeaderCell>
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

export default connect(mapStateToProps, { fetchExistingAsset })(SaleTable);
