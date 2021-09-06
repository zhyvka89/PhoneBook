// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, setCurrentUser } from '../../redux/authSlice';
import { useGetCurrentUserQuery } from '../../redux/user/userApi';

import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import { getIsLogedIn } from '../../redux/authSlice';

import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLogedIn);
  const dispatch = useDispatch();
  const isToken = useSelector(getToken);
  const { data: user } = useGetCurrentUserQuery(isToken);

  useEffect(() => {
    if (isToken === null) return;
    dispatch(setCurrentUser(user));
  }, [isToken, dispatch, user]);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
