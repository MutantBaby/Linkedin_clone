import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp0yp4L8Eo-lDrOP7BqDuSlJcUg71J7oU",
  authDomain: "linkedin-clone-e98e0.firebaseapp.com",
  projectId: "linkedin-clone-e98e0",
  storageBucket: "linkedin-clone-e98e0.appspot.com",
  messagingSenderId: "698052704624",
  appId: "1:698052704624:web:708e73b3519c62b58fb7b5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
