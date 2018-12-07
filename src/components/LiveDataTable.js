import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';


class LiveDataTable extends Component {
  state = { asset: {} }

  componentDidMount() {
    this.socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops')
    this.socket.on('message', message => this.setState({asset: JSON.parse(message)}))
    this.socket.on('connect', () => {
      this.socket.emit('subscribe',`${this.props.symbol}`)
    })
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }


  render() {
    const { asset } = this.state;
    const lastSaleTime = (new Date(asset.lastSaleTime)).toString();
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Security</Table.HeaderCell>
            <Table.HeaderCell>Last Sale Price</Table.HeaderCell>
            <Table.HeaderCell>Sale Size</Table.HeaderCell>
            <Table.HeaderCell>Sold At</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{asset.securityType}</Table.Cell>
            <Table.Cell>{asset.lastSalePrice}</Table.Cell>
            <Table.Cell>{asset.lastSaleSize}</Table.Cell>
            <Table.Cell>{lastSaleTime}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default LiveDataTable;
