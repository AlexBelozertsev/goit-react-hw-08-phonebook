import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import Title from '../components/Title';

const HomePage = ({ isAuthenticated, userName }) => {
  return (
    <>
      <Title text={'Phonebook'} />
      <span>Save your contacts</span>
      {isAuthenticated ? (
        <Title text={`Welcome, ${userName}!`} />
      ) : (
        <>
          <Title text={`Welcome, guest!`} />
          <p>You should Register or Login to use the App</p>
        </>
      )}
    </>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  userName: authSelectors.getUsername(state),
});

export default connect(mapStateToProps)(HomePage);
