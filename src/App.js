import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRout';
import PublicRoute from './components/PublicRout';

import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Layout>
      <AppBar />

      <Suspense
        fallback={
          <div className={classes.root}>
            <LinearProgress color="secondary" />
          </div>
        }
      >
        <Switch>
          <PublicRoute path="/" exact>
            <h1>Hello, for continue to work, please register</h1>
          </PublicRoute>

          <PublicRoute path="/register" redirectTo="/login" restricted>
            <RegistrationPage />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/home">
            <HomePage />
          </PrivateRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Layout>
  );
}
