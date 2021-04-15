import React from 'react';
import style from './Contacts.module.css';
import PropTypes from 'prop-types';
import Button from '../Button';

const Contact = ({ name, number, onDeliteContact }) => {
  return (
    <>
      {name}: {number}
      <Button type={'button'} text={'Delete'} onClick={onDeliteContact} />
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeliteContact: PropTypes.func.isRequired,
};

export default Contact;
