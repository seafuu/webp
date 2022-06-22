import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseApp=firebase.initializeApp ( {
  apiKey: "AIzaSyAv50HIfPhCjYBjP3GBHJfCuSutKWFnt-Q",
  authDomain: "finalig-508b3.firebaseapp.com",
  projectId: "finalig-508b3",
  storageBucket: "finalig-508b3.appspot.com",
  messagingSenderId: "398845115912",
  appId: "1:398845115912:web:753ecf8ab71486a94edbbd"
  });
const db = firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
export {db,auth,storage}


