import React, { Component } from 'react';
import { Input, Table, Button, Confirm } from 'semantic-ui-react';
import _ from 'lodash';

class TransactionTable extends Component {
  state = {
    units: null,
    triggerConfirmation: false
  }

  handleChange = (event) => {
    this.setState({ units: event.target.value })
  }

  handleClick = () => {
    this.setState({ triggerConfirmation: !this.state.triggerConfirmation })
  }

  executeTrade = () => {
    if(this.validate().length === 0) {
      // trigger trade
    }
  }

  validate = () => {
    let errors = [];
    const timeHr = (new Date()).getUTCHours();
    const timeMin = (new Date()).getMinutes();
    // can I standardize EST?
    if(timeHr > 21 || timeHr < 14 || (timeHr === 14 && timeMin < 30)) {
      errors.push(<li>React Trader operates during American market hours. Come back between 9:30AM and 5PM</li>)
    }

    const { selectedAsset, currentUser } = this.props;
    if(currentUser.user.balance < (selectedAsset.delayedPrice * this.state.units)) {
      errors.push(<li>The cost of this transaction exceeds your cash balance.</li>)
    }

    if(this.state.units <= 0) {
      errors.push(<li>Invalid quantity</li>)
    }

    return errors;
  }

  render() {

    const { selectedAsset, currentUser } = this.props;
    const cost = _.round(this.state.units * selectedAsset.delayedPrice,2);
    const maxShares = Math.floor(currentUser.user.balance / selectedAsset.delayedPrice)
    const time = new Date(selectedAsset.delayedPriceTime).toString();
    const balance = currentUser.user.balance - cost

    return (
      <div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Remaining Cash Balance:</Table.HeaderCell>
              <Table.HeaderCell>Units:</Table.HeaderCell>
              <Table.HeaderCell>Reserved Share Price:</Table.HeaderCell>
              <Table.HeaderCell>As Of:</Table.HeaderCell>
              <Table.HeaderCell>Transaction Cost:</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>${balance}</Table.Cell>
              <Table.Cell>
                  <Input
                  type="number"
                  min={0}
                  max={maxShares}
                  value={this.state.units}
                  onChange={this.handleChange}
                  />
              </Table.Cell>
              <Table.Cell>${selectedAsset.delayedPrice}</Table.Cell>
              <Table.Cell>{time}</Table.Cell>
              <Table.Cell>${cost}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Button onClick={this.handleClick}>Buy</Button>
        <Confirm id="confirmation" open={this.state.triggerConfirmation}  onCancel={this.handleClick} onConfirm={this.executeTrade} />
        {this.validate().length > 0 ? <ul id="errors">{this.validate()}</ul> : null }
      </div>
    )
  }
}


export default TransactionTable;
