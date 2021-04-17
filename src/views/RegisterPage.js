import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Title from '../components/Title';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <Title text={'Registration'} />
        <Form onSubmit={this.handleSubmit} autoComplete={'off'}>
          <Label name={'Name:'}>
            <Input
              type={'text'}
              name={'name'}
              value={name}
              placeholder={'Your Name'}
              onChange={this.handleChange}
            />
          </Label>

          <Label name={'E-mail'}>
            <Input
              type={'email'}
              name={'email'}
              value={email}
              placeholder={'your@mail.com'}
              onChange={this.handleChange}
            />
          </Label>

          <Label name={'Password'}>
            <Input
              type={'password'}
              name={'password'}
              value={password}
              placeholder={'*******'}
              onChange={this.handleChange}
            />
          </Label>

          <Button type={'submit'} text={'Signup'} />
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
