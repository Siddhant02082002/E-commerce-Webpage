// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore/lite';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3UTBnnSKU8Bom-ya2uJMzYEVigzr38vQ",
    authDomain: "clon-fe6a9.firebaseapp.com",
    projectId: "clon-fe6a9",
    storageBucket: "clon-fe6a9.appspot.com",
    messagingSenderId: "135499631796",
    appId: "1:135499631796:web:afd3c17ef92d106d5cdbe1",
    measurementId: "G-HPJZSQGRWS"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};