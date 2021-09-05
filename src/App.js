import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRout';
import PublicRoute from './components/PublicRout';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export default function App() {
  return (
    <Layout>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute path="/register">
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
