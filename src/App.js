import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Form from './components/Form';
import ContactsPage from './pages/ContactsPage';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import AppBar from './components/AppBar/AppBar';

export default function App() {
  return (
    <Layout>
      <AppBar />
      {/* <h1>PhoneBook</h1> */}
      {/* <Form /> */}
      <Suspense>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/register">
            <RegistrationPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/contacts">
            <ContactsPage />
          </Route>
        </Switch>
      </Suspense>
      {/* <h2>Contacts</h2> */}
    </Layout>
  );
}
