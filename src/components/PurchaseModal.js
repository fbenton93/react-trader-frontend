import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

class PurchaseModal extends Component {
  render() {
    return (
      <Modal open={this.props.open}>
        <Modal.Header>
          <h3>Asset Purchase Form</h3>
          <Button onClick={this.props.closeModal}>Cancel</Button>
        </Modal.Header>
      </Modal>
    )
  }
}

export default PurchaseModal;
