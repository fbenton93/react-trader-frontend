import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGainLoss } from '../actions';

import { Table } from 'semantic-ui-react';
import _ from 'lodash';
import differenceAsAPercent from '../helpers/differenceAsAPercent';

class AssetsTableRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      livePrice: 0
    }
  }

  componentDidMount() {
    this.fetchLastPrice(this.props.asset.ticker);
    this.socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops')
    this.socket.on('message', message => {
      const parsed = JSON.parse(message)
      this.setState({ livePrice: parsed.lastSalePrice })
    })
    this.socket.on('connect', () => {
      this.socket.emit('subscribe',`${this.props.asset.ticker}`)
    })
  }

  fetchLastPrice = (sym) => {
    const day = (new Date()).getUTCDay();
    const timeHr = (new Date()).getUTCHours();
    const timeMin = (new Date()).getMinutes();
    if(timeHr >= 21 || timeHr < 14 || (timeHr === 14 && timeMin < 30) || day <= 1) {
      return fetch(`https://api.iextrading.com/1.0//stock/${sym}/delayed-quote`)
      .then(r => r.json())
      .then(data => this.setState({ livePrice: data.delayedPrice }))
    }
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  render() {
    const { asset, updateGainLoss } = this.props;
    const currentVal = _.round((this.state.livePrice * asset.quantity),2)
    updateGainLoss({ [asset.ticker]: currentVal })
    const change = differenceAsAPercent(asset.totalSpent,currentVal)
    const color = Math.sign(change) === 1 ? "positive" : "negative"

    return (
      <Table.Row className={color}>
        <Table.Cell>{asset.ticker}</Table.Cell>
        <Table.Cell>{asset.name}</Table.Cell>
        <Table.Cell>{asset.quantity}</Table.Cell>
        <Table.Cell>${asset.totalSpent}</Table.Cell>
        <Table.Cell>${currentVal}</Table.Cell>
        <Table.Cell>{change}</Table.Cell>
      </Table.Row>
    )
  }
}


export default connect(null, { updateGainLoss })(AssetsTableRow);
