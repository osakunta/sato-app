import React from 'react';

import './App.css';
import firebase from './utils/firebase'
import { useAuth0 } from "./utils/auth0";
import NavBar from "./components/NavBar";

function App() {
  console.log(firebase);

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
