import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './defaultAvatar.png';
import style from './UserMenu.module.css';
import Button from '../Button';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={style.container}>
    <img src={avatar} alt="avatar" width="32" className={style.avatar} />
    <span className={style.name}>{name}</span>
    <Button type={'button'} text={'Logout'} onClick={onLogout} />
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
