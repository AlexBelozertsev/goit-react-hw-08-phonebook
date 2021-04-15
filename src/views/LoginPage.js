import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Title from '../components/Title';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Title text={'Login Page'} />
        <Form onSubmit={this.handleSubmit} autoComplete={'off'}>
          <Label name={'E-mail:'}>
            <Input
              type={'email'}
              name={'email'}
              value={email}
              onChange={this.handleChange}
            />
          </Label>

          <Label name={'Password:'}>
            <Input
              type={'password'}
              name={'password'}
              value={password}
              onChange={this.handleChange}
            />
          </Label>

          <Button type={'submit'} text={'Enter'} />
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
