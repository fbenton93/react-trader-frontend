import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalClose } from '../actions';
import { Modal, Button } from 'semantic-ui-react';

import AssetSummaryCard from './AssetSummaryCard';
import TransactionTable from './TransactionTable';
import LiveDataTable from './LiveDataTable';
import ChartComponent from '../stockchart';



class PurchaseModal extends Component {
  render() {
    const { selectedAsset, currentUser } = this.props;
    return (
      <Modal open={this.props.modalOpen} size="large" id="purchase-modal">
        <Modal.Header>
          <div className="modal-header">
            <h3>
              {selectedAsset.companyName}
              <a target="_blank" href={selectedAsset.website} rel="noopener noreferrer">
                <span id="company-site">{selectedAsset.website}</span>
              </a>
            </h3>
            <Button onClick={() => this.props.modalClose()} color="red">Cancel</Button>
          </div>
        </Modal.Header>
        <Modal.Content>
          <div className="flex-container">
            <AssetSummaryCard selectedAsset={selectedAsset} />
            <ChartComponent symbol={selectedAsset.symbol} />
          </div>
          <LiveDataTable symbol={selectedAsset.symbol} />
          <TransactionTable  selectedAsset={selectedAsset} currentUser={currentUser} />
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
