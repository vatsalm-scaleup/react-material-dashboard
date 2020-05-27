import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

const firebaseConfig = {
  apiKey: 'AIzaSyCXhwnSd-upfiCyQuT9ku8kBQum9UusUcA',
  authDomain: 'dashboard-mvp-1e000.firebaseapp.com',
  databaseURL: 'https://dashboard-mvp-1e000.firebaseio.com',
  projectId: 'dashboard-mvp-1e000',
  storageBucket: 'dashboard-mvp-1e000.appspot.com',
  messagingSenderId: '1009097857280',
  appId: '1:1009097857280:web:9b4de22b5f13b91e04bbe5'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
