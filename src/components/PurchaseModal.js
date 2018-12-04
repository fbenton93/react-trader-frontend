import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalClose } from '../actions';
import { Modal, Button } from 'semantic-ui-react';

import AssetSummaryCard from './AssetSummaryCard';
import TransactionCard from './TransactionCard';



class PurchaseModal extends Component {
  render() {
    const { selectedAsset } = this.props;
    return (
      <Modal open={this.props.modalOpen} size="large" >
        <Modal.Header>
          <h3>{selectedAsset.companyName}</h3>
          <Button onClick={() => this.props.modalClose()} color="red">Cancel</Button>
        </Modal.Header>
        <Modal.Content>
          <div className="flex-container">
            <AssetSummaryCard selectedAsset={selectedAsset}/>
            <TransactionCard />
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.modalOpen,
    selectedAsset: state.selectedAsset
   }
}

export default connect(mapStateToProps, { modalClose })(PurchaseModal);
