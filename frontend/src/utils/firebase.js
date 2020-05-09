import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDFulch9S_hXrOKzo0nOV54CZh3vW11nog',
  authDomain: 'satakuntatalo-services.firebaseapp.com',
  databaseURL: 'https://satakuntatalo-services.firebaseio.com',
  projectId: 'satakuntatalo-services',
  storageBucket: 'satakuntatalo-services.appspot.com',
  messagingSenderId: '513995870934',
  appId: '1:513995870934:web:5b1a8bb8063a2ae8726f77',
  measurementId: 'G-0TTY03C7Z3',
};

function initFirebase() {
  return !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
}

export default initFirebase;
