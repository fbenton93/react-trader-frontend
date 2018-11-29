import React from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from '../actions';

import { Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import Summary from './Summary';
import '../stylesheets/navbar.css';



const Navbar = (props) => {
  if(props.authorized) {
    return (
      <div id="navbar">
        <ul id="nav-menu">
          <li>
            <Link to="/">
              <i className="chart area icon"></i> PORTFOLIO
            </Link>
          </li>
          <Divider />
          <li>
            <Link to="/trading-desk">
            <i className="dollar sign icon"></i> TRADING DESK
            </Link>
          </li>
          <Divider />
          <li onClick={() => props.logOut()}>
            SIGN OUT
          </li>
          <Divider />
        </ul>
      </div>
    )
  } else {
    return (
      <div id="navbar">
        <Summary />
      </div>
    )
  }
}



function mapStateToProps(state) {
  return { authorized: state.authorized }
}

export default connect(mapStateToProps,{logIn,logOut})(Navbar)
