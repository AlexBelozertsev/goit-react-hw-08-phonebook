import React, { Component } from 'react';
import style from './Contacts.module.css';
import PropTypes from 'prop-types';
import Button from '../Button';
import Modal from '../Modal';
import ContactEditor from '../ContactEditor/ContactEditor';

class Contact extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { id, name, number, onDeliteContact } = this.props;
    return (
      <>
        {name}: {number}
        <div className={style.actions}>
          <Button type={'button'} text={'Edit'} onClick={this.toggleModal} />
          <Button type={'button'} text={'Delete'} onClick={onDeliteContact} />
        </div>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactEditor
              onSave={this.toggleModal}
              contact={{ id, name, number }}
            />
          </Modal>
        )}
      </>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeliteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func,
};

export default Contact;
