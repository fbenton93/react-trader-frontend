import React, { Component } from 'react';
import { connect } from 'react-redux';

import reqAuth from '../HOCs/reqAuth';
import AssetsTable from '../components/AssetsTable';

import '../stylesheets/portfolio.css';
import { Segment } from 'semantic-ui-react';



class Portfolio extends Component {
  render() {

    const { currentUser } = this.props

    return (
    <div id="page-portfolio" className="page">
      <div id="profile">
        <Segment.Group horizontal>
          <Segment>User: {currentUser.username}</Segment>
          <Segment>Balance: ${currentUser.balance}</Segment>
          <Segment>Account Growth: (Balance + Gains)</Segment>
        </Segment.Group>
      </div>

      <div id="holdings">
        <AssetsTable />
      </div>
    </div>
  )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.user
  }
}

export default reqAuth(connect(mapStateToProps)(Portfolio));
