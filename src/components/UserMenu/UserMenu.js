import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './defaultAvatar.png';
import style from './UserMenu.module.css';
import Button from '../Button';

const UserMenu = ({ avatar, userEmail, onLogout }) => (
  <div className={style.container}>
    <div className={style.userContainer}>
      <img src={avatar} alt="avatar" width="32" className={style.avatar} />
      <span className={style.name}>{userEmail}</span>
    </div>
    <Button type={'button'} text={'Logout'} onClick={onLogout} />
  </div>
);

UserMenu.propTypes = {
  avatar: PropTypes.node.isRequired,
  userEmail: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userEmail: authSelectors.getUserEmail(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
