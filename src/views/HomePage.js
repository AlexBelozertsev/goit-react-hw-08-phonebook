import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors, phonebookOperations } from '../redux/contacts';
import { authSelectors } from '../redux/auth';
import Title from '../components/Title';
import AddContactForm from '../components/AddContactForm';
import Contacts from '../components/Contacts';

class HomePage extends Component {
  componentDidMount() {
    const { isAuthenticated, getContacts } = this.props;
    return isAuthenticated ? getContacts() : null;
  }
  // componentDidMount() {
  //   this.props.isAuthenticated ? this.props.getContacts() : null
  // }
  render() {
    const { contacts } = this.props;
    return (
      <>
        <Title text={'Phonebook'} />
        <AddContactForm contacts={contacts} />
        {contacts.length > 0 && <Title text={'Contacts'} />}
        <Contacts />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  contacts: selectors.getAllContacts(state),
});
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(phonebookOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
