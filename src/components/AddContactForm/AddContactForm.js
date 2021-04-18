import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { phonebookOperations, selectors } from '../../redux/contacts';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, onSubmit } = this.props;
    const { name, number } = this.state;
    const checkDublicat = contacts.filter(
      contactName => name.toLowerCase() === contactName,
    );
    if (checkDublicat.length) {
      alert(`${name} is already in contacts`);
      this.reset();
      return;
    }
    if (name && number) {
      onSubmit(this.state);
      this.reset();
      return;
    } else alert('Please enter Name or phone number');
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  nameInputId = uuidv4();
  phoneInputId = uuidv4();

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId} name={'Name:'}>
          <Input
            type={'text'}
            name={'name'}
            value={this.state.name}
            id={this.nameInputId}
            placeholder={'John Smith'}
            onChange={this.handleChange}
          />
        </Label>
        <Label htmlFor={this.phoneInputId} name={'Phone:'}>
          <InputMask
            mask="+38 (099) 999-99-99"
            type="tel"
            name="number"
            value={this.state.number}
            id={this.phoneInputId}
            placeholder="+38 (099) 999-99-99"
            onChange={this.handleChange}
          />
        </Label>
        <Button type={'submit'} text={'Add contact'} />
      </Form>
    );
  }
}

AddContactForm.defaultProps = {
  contacts: [],
};

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacs: PropTypes.array,
};

const mapStateToProps = state => ({
  contactsName: selectors.getContactsNames(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(phonebookOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
