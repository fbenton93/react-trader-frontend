import React, { Component } from 'react';
import '../stylesheets/login.css'

import LoginForm from '../components/FormLogin';

class Login extends Component {
  state = { signup: false }

  triggerFormSwitch = () => {
    this.setState({ signup: !this.state.signup })
  }

  render() {
    return (
      <div id="page-login" className="page">
        <div id="login-panel">
          <LoginForm triggerFormSwitch={this.triggerFormSwitch} />
        </div>
      </div>
    )

  }
}

export default Login;
