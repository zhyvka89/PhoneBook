import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogedIn } from '../../redux/authSlice';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLogedIn);

  return (
    <nav>
      {isLoggedIn && (
        <>
          <NavLink
            to="/home"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>

          <NavLink
            to="/contacts"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
