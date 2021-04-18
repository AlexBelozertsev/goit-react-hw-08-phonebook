import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';

const HomePage = lazy(() => import('./views/HomePage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Suspense fallback={<p>Load...</p>}>
            <PublicRoute path="/" exact component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              component={RegisterPage}
              redirectTo="/contacts"
            />
            <PublicRoute
              path="/login"
              restricted
              component={LoginPage}
              redirectTo="/contacts"
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsPage}
              redirectTo="/login"
            />
            <Redirect to="/" />
          </Suspense>
        </Switch>
      </Layout>
    );
  }
}

App.propTypes = {
  onGetCurrentUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
