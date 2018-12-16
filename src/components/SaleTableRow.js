import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';


class AssetsTableRow extends Component {
  state = { delayedPrice: 'Loading...'}

  componentDidMount() {
    fetch(`https://api.iextrading.com/1.0/stock/${this.props.asset.ticker}/delayed-quote`)
    .then(response => response.json())
    .then(({ delayedPrice }) => this.setState({ delayedPrice }))
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
