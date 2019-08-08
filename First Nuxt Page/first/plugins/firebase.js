import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA0aZIS54PbceHjMc_Hz5JdvNzt9wQc2P8",
  authDomain: "notas-38dc1.firebaseapp.com",
  databaseURL: "https://notas-38dc1.firebaseio.com",
  projectId: "notas-38dc1",
  storageBucket: "notas-38dc1.appspot.com",
  messagingSenderId: "745531281201",
  appId: "1:745531281201:web:ced2d03b8ee753c6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const storage = firebase.storage();
  export const db = firebase.firestore();
  export const auth = firebase.auth();
  export default firebase;
