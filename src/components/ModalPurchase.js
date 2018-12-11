import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalClose } from '../actions';
import { Modal, Button } from 'semantic-ui-react';

import AssetSummaryCard from './AssetSummaryCard';
import TransactionTable from './TableTransaction';
import LiveDataTable from './TableLiveData';
import ChartComponent from '../stockchart';
import SuccessContent from './SuccessContent';



class PurchaseModal extends Component {
  state = { submitted: false }


  triggerSuccess = () => {
    this.setState({
      submitted: true
    })
  }

  renderModalContent = () => {
    const { selectedAsset, currentUser } = this.props;
    if(this.state.submitted) {
      return (<SuccessContent msg={`Submitted. New Balance: $${currentUser.user.balance}`} />)
    } else {
      return (
        <>
        <div className="flex-container">
          <AssetSummaryCard selectedAsset={selectedAsset} />
          <ChartComponent symbol={selectedAsset.symbol} />
        </div>
        <LiveDataTable symbol={selectedAsset.symbol} />
        <TransactionTable
          selectedAsset={selectedAsset}
          currentUser={currentUser}
          triggerSuccess={this.triggerSuccess}
        />
        </>
      )
    }
  }

  render() {
    const { selectedAsset } = this.props;
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
          {this.renderModalContent()}
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
