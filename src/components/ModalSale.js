import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalClose } from '../actions';
import { Modal, Button } from 'semantic-ui-react';

class SaleModal extends Component {
  render() {
    return (
      <Modal open={this.props.modalOpen} size="large" id="purchase-modal">
        <Modal.Header>
          <h1>Header</h1>
          <Button color="red" onClick={() => this.modalClose()}>Cancel</Button>
        </Modal.Header>
        <Modal.Content>
          <h1>Content</h1>
        </Modal.Content>
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.modalOpen
  }
}

export default connect(mapStateToProps, { modalClose })(SaleModal);
