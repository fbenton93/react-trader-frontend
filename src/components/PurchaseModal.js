import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalClose } from '../actions';
import { Modal, Button } from 'semantic-ui-react';

import AssetSummaryCard from './AssetSummaryCard';
import TransactionCard from './TransactionCard';



class PurchaseModal extends Component {
  render() {
    const { selectedAsset, currentUser } = this.props;
    return (
      <Modal open={this.props.modalOpen} size="large" >
        <Modal.Header>
          <h3>
            {selectedAsset.companyName}
            <a target="_blank" href={selectedAsset.website} rel="noopener noreferrer">
              <span id="company-site">{selectedAsset.website}</span>
            </a>
          </h3>
          <Button onClick={() => this.props.modalClose()} color="red">Cancel</Button>
        </Modal.Header>
        <Modal.Content>
          <div className="flex-container">
            <AssetSummaryCard selectedAsset={selectedAsset} />
          </div>
          <TransactionCard  selectedAsset={selectedAsset} currentUser={currentUser} />
        </Modal.Content>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.modalOpen,
    selectedAsset: state.selectedAsset,
    currentUser: state.currentUser
   }
}

export default connect(mapStateToProps, { modalClose })(PurchaseModal);
