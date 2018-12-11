import React, { Component } from 'react';
import reqAuth from '../HOCs/reqAuth';

import BuyTab from './TabBuy';
import SellTab from './TabSell';
import { Segment, Divider } from 'semantic-ui-react';
import '../stylesheets/desk.css';


class TradingDesk extends Component {
  state = { tab: 'buy' }

  handleClick = (event) => {
    if(this.state.tab !== event.target.id) {
      this.setState({ tab: event.target.id })
    }
  }

  render() {
    return (
      <div id="page-trading-desk" className="page">
        <Segment.Group horizontal className="navigators">
          <Segment>Select a Transaction: </Segment>
          <Segment id="buy" className="navigator" onClick={this.handleClick}>Buy</Segment>
          <Segment id="sell" className="navigator" onClick={this.handleClick}>Sell</Segment>
        </Segment.Group>
        <Divider />
        {this.state.tab === 'buy' ? <BuyTab /> : <SellTab />}
      </div>
    )
  }
}


export default reqAuth(TradingDesk);
