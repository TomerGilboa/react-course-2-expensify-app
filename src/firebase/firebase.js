import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDs2syxUTEGzyeuHQaYq_ASWs3wKbfNHOA",
    authDomain: "expensify-5a6a8.firebaseapp.com",
    databaseURL: "https://expensify-5a6a8.firebaseio.com",
    projectId: "expensify-5a6a8",
    storageBucket: "expensify-5a6a8.appspot.com",
    messagingSenderId: "632643249023"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };