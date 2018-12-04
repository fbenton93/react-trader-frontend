import React, { Component } from 'react';
import reqAuth from '../HOCs/reqAuth';

import '../stylesheets/desk.css';
import SelectionPane from '../components/SelectionPane';

class TradingDesk extends Component {

  render() {
    return (
      <div id="page-trading-desk" className="page">
      At the Stock Page
      <SelectionPane />
      </div>
    )
  }
}

export default reqAuth(TradingDesk);
