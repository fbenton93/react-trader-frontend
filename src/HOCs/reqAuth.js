import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions';
import { Redirect } from 'react-router-dom';

import LoadingPage from '../pages/LoadingPage';




const reqAuth = (ChildComponent) => {
  class AuthorizedComponent extends Component {

    // componentDidMount() {
    //   if (localStorage.getItem('jwt') && !this.props.currentUser.user) {
    //     this.props.fetchCurrentUser()
    //   }
    // }

    render() {
      console.log('were in the wrapper')
      if(this.props.loading && this.props.authorized && !this.props.currentUser.user) {
        console.log("we're at the loader")
        return <LoadingPage msg={"Loading Your Profile"} />
      } else if(!this.props.authorized) {
        console.log("we're at the redirect")
        return <Redirect to="/login" />
      } else if(this.props.currentUser.user){
        console.log("returning the desired component")
        return <ChildComponent />
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
