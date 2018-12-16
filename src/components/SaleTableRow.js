import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';


import iex from '../api/iex';


class AssetsTableRow extends Component {
  state = { delayedPrice: 'Loading...'}

  componentDidMount() {
    iex.get(`/stock/${this.props.asset.ticker}/delayed-quote`)
    .then(response => {
      const { delayedPrice } = response.data
      this.setState({ delayedPrice })
    })
  }

  render() {
    const { asset } = this.props;
    return (
      <Table.Row id={asset.id}>
        <Table.Cell>{asset.ticker}</Table.Cell>
        <Table.Cell>{asset.name}</Table.Cell>
        <Table.Cell>{asset.quantity}</Table.Cell>
        <Table.Cell>${asset.price}</Table.Cell>
        <Table.Cell>{asset.created_at}</Table.Cell>
        <Table.Cell>${this.state.delayedPrice}</Table.Cell>
      </Table.Row>
    )
  }
}


export default AssetsTableRow;
