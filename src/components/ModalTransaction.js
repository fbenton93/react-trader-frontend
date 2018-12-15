import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalClose } from '../actions';
import { Modal, Button } from 'semantic-ui-react';

import AssetSummaryCard from './AssetSummaryCard';
import TransactionBuy from './TransactionBuy';
import TransactionSell from './TransactionSell';
import LiveDataTable from './TableLiveData';
import ChartComponent from '../stockchart';
import SuccessContent from './SuccessContent';



class TransactionModal extends Component {


  renderModalContent = () => {
    const { selectedAsset, currentUser } = this.props;
    if(this.props.modalOpen.submitted) {
      return (<SuccessContent msg={`Submitted. New Balance: $${currentUser.user.balance}`} />)
    } else {
      return (
        <>
        <div className="flex-container">
          <AssetSummaryCard selectedAsset={selectedAsset} />
          <ChartComponent symbol={selectedAsset.symbol} />
        </div>
        <LiveDataTable symbol={selectedAsset.symbol} />
        </>
      )
    }
  }

  renderTransactionType = () => {
    const { selectedAsset, currentUser, typeSell } = this.props;
    if(this.props.modalOpen.submitted === true) {
      return null
    } else if(typeSell) {
      return (
        <TransactionSell
          selectedAsset={selectedAsset}
          currentUser={currentUser}
        />
      )
    } else {
      return (
        <TransactionBuy
          selectedAsset={selectedAsset}
          currentUser={currentUser}
        />
      )
    }
  }

  render() {
    const { selectedAsset } = this.props;
    return (
      <Modal open={this.props.modalOpen.modal} size="large" id="purchase-modal">
        <Modal.Header>
          <div className="modal-header">
            <h3>
              {selectedAsset.companyName}
              <a target="_blank" href={selectedAsset.website} rel="noopener noreferrer">
                <span id="company-site">{selectedAsset.website}</span>
              </a>
            </h3>
            <Button onClick={() => this.props.modalClose()} color="red">Close</Button>
          </div>
        </Modal.Header>
        <Modal.Content>
          {this.renderModalContent()}
          {this.renderTransactionType()}
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



export default connect(mapStateToProps, { modalClose })(TransactionModal);
