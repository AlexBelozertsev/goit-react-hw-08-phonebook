import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors, phonebookOperations } from '../redux/contacts';
import Title from '../components/Title';
import Filter from '../components/Filter';
import Contacts from '../components/Contacts';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <>
        <Title text={'Contacts Page'} />
        {contacts.length > 1 && <Filter />}
        <Contacts />
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(phonebookOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
