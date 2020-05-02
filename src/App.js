import React from 'react';
import * as firebase from 'firebase'

import './App.css';
import { useAuth0 } from "./utils/auth0";
import NavBar from "./components/NavBar";

const firebaseConfig = {
  apiKey: "AIzaSyDFulch9S_hXrOKzo0nOV54CZh3vW11nog",
  authDomain: "satakuntatalo-services.firebaseapp.com",
  databaseURL: "https://satakuntatalo-services.firebaseio.com",
  projectId: "satakuntatalo-services",
  storageBucket: "satakuntatalo-services.appspot.com",
  messagingSenderId: "513995870934",
  appId: "1:513995870934:web:d02b227e44d2f24e"
};

function App() {
  //firebase.initializeApp(firebaseConfig);

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
