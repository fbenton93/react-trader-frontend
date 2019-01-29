import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions';
import { Redirect } from 'react-router-dom';

import { Input, Label, Form, Button } from 'semantic-ui-react';

class SignupForm extends Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    submitted: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup({
      ...this.state.user
    }, () => this.setState({ submitted: true }))
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return this.state.submitted ? <Redirect to="/portfolio" /> : (
        <div id="signup-form">
          <form onSubmit={this.handleSubmit}>
            <Form.Field>
            <Label pointing="below">New Username:</Label>
            <Input name="username" value={this.state.username} onChange={this.handleChange} />
            </Form.Field>

            <Form.Field>
            <Label pointing="below">Email Address:</Label>
            <Input name="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Field>

            <Form.Field>
            <Label pointing="below">Password:</Label>
            <Input name="password" value={this.state.password} onChange={this.handleChange} type="password" />
            </Form.Field>

            <Form.Field>
            <Label pointing="below">Confirm Password:</Label>
            <Input name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} type="password" />
            </Form.Field>

            <Button color="green">Submit</Button>
          </form>
        </div>
      )
    }
}

export default connect(null,{ signup })(SignupForm);
