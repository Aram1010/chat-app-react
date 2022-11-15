import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDH0J81g5JfKJ7pJMBtyxghbxpulWg41A8",
    authDomain: "chat-app-e151e.firebaseapp.com",
    projectId: "chat-app-e151e",
    storageBucket: "chat-app-e151e.appspot.com",
    messagingSenderId: "928847248303",
    appId: "1:928847248303:web:c036e25fa9c4a90b70cd5a",
    measurementId: "G-QGP71CDMDF",
  }).auth();
