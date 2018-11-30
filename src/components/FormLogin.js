import React, { Component } from 'react';
import { Input, Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { logIn } from '../actions';

class FormLogin extends Component {
  state = {
    username: 'fbenton',
    password: 'password'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (e,type) => {
    e.preventDefault();
    if(type === 'login') {
      this.props.logIn(
        { username: this.state.username,
          password: this.state.password
        },
        () => this.props.history.push('/')
      );
    } else {
      this.props.triggerFormSwitch();
    }
  }

  render() {
    const error = this.props.error === '401' ? 'Invalid Credentials' : null
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
                  <Input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <p style={{color: 'red'}}>{error}</p>
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

function mapStateToProps(state) {
  return {
    error: state.errors.error
  }
}

export default connect(mapStateToProps,{logIn})(FormLogin);
