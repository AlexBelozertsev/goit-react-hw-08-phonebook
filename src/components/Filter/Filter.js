import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, selectors } from '../../redux/contacts';
import Label from '../Label';
import Input from '../Input';

const Filter = ({ value, onChange }) => {
  return (
    <Label name={'Find contact by name'}>
      <Input type={'text'} name={'name'} value={value} onChange={onChange} />
    </Label>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { value: selectors.getVisibleContacts(state) };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
