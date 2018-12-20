import React, { Component } from 'react';
import { connect } from 'react-redux';

import marketsAreOpen from '../helpers/marketsAreOpen';
import { sellAsset } from '../actions';
import { Table, Input, Button } from 'semantic-ui-react';


class TransactionSell extends Component {
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
        this.props.sellAsset({
          id: this.props.selectedAsset.id,
          quantity: this.state.units,
          price: this.props.selectedAsset.delayedPrice
        })
      }
    }
  }

  validate = () => {
    let errors = [];
    const { currentUser, selectedAsset } = this.props;
    const existingAsset = currentUser.user.active_assets.find((asset) => asset.id === selectedAsset.id)
    if(!marketsAreOpen()) {
      errors.push(<li>React Trader operates during American market hours. Come back between 9:30AM and 4PM</li>)
    }
    if(this.state.units <= 0 || this.state.units > existingAsset.quantity) {
      errors.push(<li>Invalid quantity</li>)
    }
    return errors;
  }

  render() {
    const { selectedAsset, currentUser } = this.props;
    const saleAmount = this.state.units * selectedAsset.delayedPrice;
    const time = (new Date(selectedAsset.delayedPriceTime)).toString();
    const existingAsset = currentUser.user.active_assets.find((asset) => asset.id === selectedAsset.id)
    const maxShares = existingAsset ? existingAsset.quantity : "Loading..."

    return (
      <div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Existing Shares:</Table.HeaderCell>
              <Table.HeaderCell>Sell (Quantity):</Table.HeaderCell>
              <Table.HeaderCell>Reserved Share Price:</Table.HeaderCell>
              <Table.HeaderCell>As Of:</Table.HeaderCell>
              <Table.HeaderCell>Sale Amount:</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{maxShares}</Table.Cell>
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
              <Table.Cell>${saleAmount}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Button color="blue" id="confirm" onClick={this.handleClick}>Confirm</Button>
        <Button color="green" id="execute" onClick={this.handleClick} disabled={!this.state.confirmed}>Sell</Button>
        {this.validate().length > 0 ? <ul id="errors">{this.validate()}</ul> : null }
      </div>
    )
  }
}

export default connect(null, { sellAsset })(TransactionSell);
