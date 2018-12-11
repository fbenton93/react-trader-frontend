import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions';
import { Redirect } from 'react-router-dom';

import LoadingPage from '../pages/LoadingPage';




const reqAuth = (ChildComponent) => {
  class AuthorizedComponent extends Component {

    componentDidMount() {
      if (localStorage.getItem('jwt') && !this.props.currentUser.user) {
        this.props.fetchCurrentUser();
      }
    }

    render() {
      if(this.props.currentUser.user && this.props.authorized && !this.props.loading) {
        return <ChildComponent />
      } else if(this.props.loading) {
        return <LoadingPage msg={"Fetching Data"} />
      } else {
        return <Redirect to="/login" />
      }

    }
  } // class end

  function mapStateToProps(state) {
    return {
      currentUser: state.currentUser,
      authorized: state.authorized,
      loading: state.loading
    }
  }

  return connect(mapStateToProps,{ fetchCurrentUser })(AuthorizedComponent)
}

export default reqAuth;
