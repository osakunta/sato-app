import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0 } from 'utils/auth0';
import AppBar from 'components/basic/AppBar';
import Button from 'components/basic/Button';

const Title = styled.span`
  flex-grow: 1;
  font-weight: bold;
  text-transform: uppercase;
`;

const Link = styled(RouterLink)`
  color: white;
`;

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const loginButton = <Button onClick={() => loginWithRedirect({})}>Login</Button>;
  const logoutButton = <Button onClick={() => logout()}>Logout</Button>;

  return (
    <AppBar>
      <Title variant="h6">
        Satakuntalainen Osakunta
      </Title>
      <Link to="/profile">
        <Button>Profile</Button>
      </Link>
      <Link to="/gallery">
        <Button>Gallery</Button>
      </Link>
      {isAuthenticated ? logoutButton : loginButton}
    </AppBar>
  );
};

export default NavBar;
