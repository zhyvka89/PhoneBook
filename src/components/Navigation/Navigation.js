import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
