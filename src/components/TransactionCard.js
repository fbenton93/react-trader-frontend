import React, { Component } from 'react';
import { Input, Table } from 'semantic-ui-react';

class TransactionCard extends Component {
  state = { units: 0 }

  handleChange = (event) => {
    this.setState({ units: event.target.value })
  }

  validateTransaction = () => {
    // check that account balance is non-negative
    // check that market is open
  }

  render() {
    const { selectedAsset, currentUser } = this.props;
    const cost = this.state.units * selectedAsset.delayedPrice;
    const time = new Date(selectedAsset.delayedPriceTime).toString();
    const balance = currentUser.user.balance - cost
    console.log(currentUser)
    return (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Remaining Cash Balance:</Table.HeaderCell>
              <Table.HeaderCell>Units:</Table.HeaderCell>
              <Table.HeaderCell>Share Price:</Table.HeaderCell>
              <Table.HeaderCell>As Of:</Table.HeaderCell>
              <Table.HeaderCell>Transaction Cost:</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>${balance}</Table.Cell>
              <Table.Cell><Input type="number" min={0} value={this.state.units} onChange={this.handleChange} /></Table.Cell>
              <Table.Cell>${selectedAsset.delayedPrice}</Table.Cell>
              <Table.Cell>{time}</Table.Cell>
              <Table.Cell>${cost}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    )
  }
}


export default TransactionCard;
