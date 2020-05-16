import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';

import initFirebase from './utils/firebase';
import { useAuth0 } from './utils/auth0';
import history from './utils/history';
import Container from './components/basic/Container';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Gallery from './components/pages/Gallery';
import NavBar from './components/NavBar';

function App() {
  initFirebase();

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Router history={history}>
        <NavBar />
        <Link to="/profile">Profile</Link>
        <Link to="/gallery">Gallery</Link>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
