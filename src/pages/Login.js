import React, { Component } from 'react';
import '../stylesheets/login.css'

import LoginForm from '../components/FormLogin';
import SignupForm from '../components/FormSignup';


class Login extends Component {
  state = { signup: false }

  triggerFormSwitch = () => {
    this.setState({ signup: !this.state.signup })
  }

  render() {
    const cssTransition = this.state.signup ? "signup-panel" : "login-panel"
    return (
      <div id="page-login" className="page">
        <div id={cssTransition}>
          {this.state.signup ? <SignupForm /> : <LoginForm triggerFormSwitch={this.triggerFormSwitch} />}
        </div>
      </div>
    )

  }
}

export default Login;
