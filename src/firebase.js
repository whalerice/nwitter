import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5D0D7mjDu6CoA0sN2hxXAUJLekSYWHRw",
  authDomain: "nwitter-fd13e.firebaseapp.com",
  projectId: "nwitter-fd13e",
  storageBucket: "nwitter-fd13e.appspot.com",
  messagingSenderId: "954549973175",
  appId: "1:954549973175:web:ad41e40b81a44492b55d32",
};

export default firebase.initializeApp(firebaseConfig);
