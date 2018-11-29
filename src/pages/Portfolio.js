import React, { Component } from 'react';
import reqAuth from '../HOCs/reqAuth';

class Portfolio extends Component {
  render() {
    return (
    <div id="page-portfolio" className="page">
    Portfolio Page
    </div>
  )
  }
}

export default reqAuth(Portfolio);
