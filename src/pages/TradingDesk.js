import React, { Component } from 'react';
import reqAuth from '../HOCs/reqAuth';

import '../stylesheets/desk.css';
import { Segment } from 'semantic-ui-react';
import SelectionPane from '../components/SelectionPane';
import PurchaseModal from '../components/PurchaseModal';

class TradingDesk extends Component {
  state = { modalOpen: false }

  triggerModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render() {
    return (
      <div id="page-trading-desk" className="page">
        <Segment color="blue"><h4>Select an Asset Below for Analysis and Purchase Options</h4></Segment>
        <SelectionPane openModal={this.triggerModal} />
        <PurchaseModal open={this.state.modalOpen} closeModal={this.triggerModal} />
      </div>
    )
  }
}

export default reqAuth(TradingDesk);
