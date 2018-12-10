import React, { Component } from 'react';
import { connect } from 'react-redux';

import reqAuth from '../HOCs/reqAuth';
import AssetsTable from '../components/AssetsTable';

import '../stylesheets/portfolio.css';
import { Segment } from 'semantic-ui-react';



class Portfolio extends Component {


  currentBalance = () => {
    if(this.props.currentUser) {
      const { gainLoss } = this.props;
      let agg = 0
      for(const key in gainLoss) {
        agg += gainLoss[key]
      }
      const difference = (agg + this.props.currentUser.balance) - 1000000
      const color = Math.sign(difference) === 1 ? "green" : "red"
      return {difference, color}
    } else {
      return "Loading..."
    }
  }

  render() {
    const { currentUser } = this.props
    const diff = this.currentBalance();
    return (
    <div id="page-portfolio" className="page">
      <div id="profile">
        <Segment.Group horizontal>
          <Segment>User: {currentUser.username}</Segment>
          <Segment>Cash Balance: ${currentUser.balance}</Segment>
          <Segment inverted color={diff.color} tertiary>Account Growth: ${diff.difference}</Segment>
        </Segment.Group>
      </div>

      <div id="holdings">
        <Segment color="yellow"><h4>Your Current Holdings</h4></Segment>
        <AssetsTable />
      </div>
    </div>
  )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.user,
    gainLoss: state.gainLoss
  }
}

export default reqAuth(connect(mapStateToProps)(Portfolio));
