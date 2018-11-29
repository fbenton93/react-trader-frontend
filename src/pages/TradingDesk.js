import React, { Component } from 'react';
import reqAuth from '../HOCs/reqAuth';

class TradingDesk extends Component {

  render() {
    return (
      <div id="page-trading-desk" className="page">
      At the Stock Page
      </div>
    )
  }
}

export default reqAuth(TradingDesk);
