import React from 'react';
import { useAuth0 } from '../utils/auth0';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const loginButton = <button type="button" onClick={() => loginWithRedirect({})}>Login</button>;
  const logoutButton = <button type="button" onClick={() => logout()}>Logout</button>;

  return (
    <div>
      {isAuthenticated ? logoutButton : loginButton}
    </div>
  );
};

export default NavBar;
