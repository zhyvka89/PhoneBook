import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName, removeCredentials } from '../../redux/authSlice';
import { useLogoutUserMutation } from '../../redux/user/userApi';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const [logOut] = useLogoutUserMutation();

  const handleBtnClick = () => {
    logOut();
    dispatch(removeCredentials());
  };

  return (
    <div className={styles.menu}>
      <span className={styles.text}>Welcome, {name}</span>
      <Button
        variant="contained"
        color="secondary"
        type="button"
        size="small"
        onClick={handleBtnClick}
      >
        Log Out
      </Button>
    </div>
  );
}
