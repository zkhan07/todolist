import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBGbLaAy7OpD2oCsbB0cnUhJOUKjB5BZJo",
    authDomain: "todolist-27957.firebaseapp.com",
    databaseURL: "https://todolist-27957.firebaseio.com",
    projectId: "todolist-27957",
    storageBucket: "",
    messagingSenderId: "1096558024816",
    appId: "1:1096558024816:web:70ca69d93997e28d857cb5",
    measurementId: "G-K9EZXD9T4E"
  };

  const fire = firebase.initializeApp(config);
  export default fire;
