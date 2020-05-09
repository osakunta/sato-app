import React from 'react';
import { Router, Route, Switch, Link } from "react-router-dom";

import './App.css';
import initFirebase from './utils/firebase'
import { useAuth0 } from "./utils/auth0";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

function App() {
  initFirebase();

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <Link to="/profile">Profile</Link>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;