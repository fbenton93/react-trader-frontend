import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Table, Button } from 'semantic-ui-react';
import _ from 'lodash';
import marketsAreOpen from '../helpers/marketsAreOpen';
import { purchaseAsset } from '../actions';

class TransactionBuy extends Component {
  state = {
    units: 0,
    confirmed: false
  }

  handleChange = (event) => {
    this.setState({ units: event.target.value })
  }

  handleClick = (e) => {
    if(this.validate().length === 0) {
      if(e.target.id === 'confirm') {
        this.setState({ confirmed: true})
      }
      if(e.target.id === 'execute' && this.state.confirmed) {
        const { selectedAsset } = this.props;
        this.props.purchaseAsset({
          ticker: selectedAsset.symbol,
          name: selectedAsset.companyName,
          price: selectedAsset.delayedPrice,
          quantity: this.state.units
        })
      }
    }
  }

  validate = () => {
    let errors = [];

    if(marketsAreOpen()) {
      errors.push(<li>React Trader operates during American market hours. Come back between 9:30AM and 5PM on weekdays.</li>)
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
          <Button color="blue" id="confirm" onClick={this.handleClick}>Confirm</Button>
          <Button color="green" id="execute" onClick={this.handleClick} disabled={!this.state.confirmed}>Purchase</Button>
          {this.validate().length > 0 ? <ul id="errors">{this.validate()}</ul> : null }
        </div>
      )
  }
}


export default connect(null,{ purchaseAsset })(TransactionBuy);
