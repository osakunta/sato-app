import React from 'react';
import './App.css';
import * as firebase from 'firebase'

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
  firebase.initializeApp(firebaseConfig);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
