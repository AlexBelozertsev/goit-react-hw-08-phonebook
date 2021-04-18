import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { phonebookOperations } from '../../redux/contacts';
import Form from '../Form';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

class ContactEditor extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };
  componentDidMount() {
    this.setState({ ...this.props.contact });
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onEditContact } = this.props;
    const { id, name, number } = this.state;
    if (name && number) {
      onEditContact(id, { name, number });
      this.reset();
      this.props.onSave();
      return;
    } else alert('Please enter Name or phone number');
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label name={'Name:'}>
          <Input
            type={'text'}
            name={'name'}
            value={this.state.name}
            placeholder={'John Smith'}
            onChange={this.handleChange}
          />
        </Label>
        <Label name={'Phone:'}>
          <InputMask
            mask="+38 (099) 999-99-99"
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="+38 (099) 999-99-99"
            onChange={this.handleChange}
          />
        </Label>
        <Button type={'submit'} text={'Edit contact'} />
      </Form>
    );
  }
}

ContactEditor.defaultProps = {
  contacts: [],
};

ContactEditor.propTypes = {
  onEditContact: PropTypes.func.isRequired,
  contacs: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
  onEditContact: (id, contact) =>
    dispatch(phonebookOperations.editContact({ id, contact })),
});

export default connect(null, mapDispatchToProps)(ContactEditor);
