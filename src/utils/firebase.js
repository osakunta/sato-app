// Config file
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFulch9S_hXrOKzo0nOV54CZh3vW11nog",
  authDomain: "satakuntatalo-services.firebaseapp.com",
  databaseURL: "https://satakuntatalo-services.firebaseio.com",
  projectId: "satakuntatalo-services",
  storageBucket: "satakuntatalo-services.appspot.com",
  messagingSenderId: "513995870934",
  appId: "1:513995870934:web:5b1a8bb8063a2ae8726f77",
  measurementId: "G-0TTY03C7Z3"
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

console.log(firebase.name);
console.log(firebase.database());
