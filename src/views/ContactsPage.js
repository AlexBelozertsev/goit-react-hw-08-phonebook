import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors, phonebookOperations } from '../redux/contacts';
import { authSelectors } from '../redux/auth';
import Title from '../components/Title';
import AddContactForm from '../components/AddContactForm';
import Filter from '../components/Filter';
import Contacts from '../components/Contacts';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  // componentDidMount() {
  //   const { isAuthenticated, getContacts } = this.props;
  //   return isAuthenticated ? getContacts() : null;
  // }
  render() {
    const { contacts } = this.props;
    return (
      <>
        <Title text={'Add new Contact'} />
        <AddContactForm contacts={contacts} />
        {contacts.length > 0 && <Title text={'Your Contacts:'} />}
        {contacts.length > 1 && <Filter />}
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
