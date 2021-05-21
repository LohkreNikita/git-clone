import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAizLhhQ88hnLz8ZJu111Tx2fSCY3ZSHGo",
    authDomain: "clone-ef407.firebaseapp.com",
    projectId: "clone-ef407",
    storageBucket: "clone-ef407.appspot.com",
    messagingSenderId: "685063205654",
    appId: "1:685063205654:web:a0a21067ae73e8923e5637",
    measurementId: "G-96KT61XY2Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };