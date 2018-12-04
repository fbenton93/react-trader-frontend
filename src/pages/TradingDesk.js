import React, { Component } from 'react';
import reqAuth from '../HOCs/reqAuth';


import '../stylesheets/desk.css';
import { Segment } from 'semantic-ui-react';
import SelectionPane from '../components/SelectionPane';
import PurchaseModal from '../components/PurchaseModal';

class TradingDesk extends Component {


  render() {
    return (
      <div id="page-trading-desk" className="page">
        <Segment color="blue"><h4>Select an Asset Below for Analysis and Purchase Options</h4></Segment>
        <SelectionPane />
        <PurchaseModal />
      </div>
    )
  }
}



export default reqAuth(TradingDesk);
