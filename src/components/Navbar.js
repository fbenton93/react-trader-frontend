import React from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from '../actions';

const Navbar = (props) => {
  console.log(props)
  return (
    <div id="navbar">
      <ul>
        <li>Portfolio</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}



function mapStateToProps(state) {
  return { authorized: state.authorized }
}

export default connect(mapStateToProps,{logIn,logOut})(Navbar)
