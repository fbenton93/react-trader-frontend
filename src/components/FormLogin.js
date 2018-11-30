import React, { Component } from 'react';
import { Input, Button, Divider } from 'semantic-ui-react';

class FormLogin extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (e,type) => {
    e.preventDefault();
    if(type === 'login') {
      // dispatch an authorized true to trigger a loading screen via reqAuth
      // run action for fetching user
      // push home to history in props
    } else {
      this.props.triggerFormSwitch();
    }
  }

  render() {
    return (
      <div id="login-form">
        <form>
          <div className="flex-wrapper">
            <div id="credentials">
                <div>
                  <label>Username:</label>
                  <Input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div>
                  <label>Password:</label>
                  <Input name="password" type="password" value={this.state.passsword} onChange={this.handleChange} />
                </div>
            </div>
            <div id="actions">
              <div>
                <Button type="submit" id="btn-submit" onClick={(e) => this.handleClick(e,'login')}>
                  Log In
                </Button>
                <Divider inverted={true} />
                <Button id="btn-click" onClick={(e) => this.handleClick(e,'signup')}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FormLogin;
