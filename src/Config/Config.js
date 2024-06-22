import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAmcaqpWwdlMkk93qOsZhfS6ri14kuwhMI",
  authDomain: "todo-firebase-b8181.firebaseapp.com",
  projectId: "todo-firebase-b8181",
  storageBucket: "todo-firebase-b8181.appspot.com",
  messagingSenderId: "414716042564",
  appId: "1:414716042564:web:c72bf9ba7079e22fbb4b11",
  measurementId: "G-K58LQGWZFT"
};

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 

