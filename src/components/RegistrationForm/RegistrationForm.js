import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { useSignupUserMutation } from '../../redux/user/userApi';

import styles from './RegistrationForm.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function RegistrationForm() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUser] = useSignupUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUser({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="required-name"
          label="Your Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          variant="filled"
        />

        <TextField
          required
          id="filled-required"
          label="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          variant="filled"
        />

        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          variant="filled"
        />

        <div className={styles.button}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
