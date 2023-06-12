import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../Redux/authActions';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(LoginForm);
