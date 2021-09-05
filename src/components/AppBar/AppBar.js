// import { style } from '@material-ui/system';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
// import NavTabs from '../NavTabs/NavTabs';
// import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
// import { Nav } from 'react-bootstrap';
import { getIsLogedIn } from '../../redux/authSlice';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLogedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav />

      <UserMenu/> */}
    </header>
  );
}
