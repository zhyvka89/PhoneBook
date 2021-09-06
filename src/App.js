import { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRout';
import PublicRoute from './components/PublicRout';

import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, setCredentials, setCurrentUser } from './redux/authSlice';
import { useGetCurrentUserQuery } from './redux/user/userApi';

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
  const dispatch = useDispatch();
  const isToken = useSelector(getToken);
  const { data: user } = useGetCurrentUserQuery(isToken);
  console.log(user);

  useEffect(() => {
    isToken && dispatch(setCurrentUser(user));
  }, [dispatch, isToken, user]);

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
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <RegistrationPage />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Layout>
  );
}
