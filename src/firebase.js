import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSetasYsOLMGVRPSs0MFwBn2-8z1i7Zkc",
  authDomain: "instagram-clone-4bfc8.firebaseapp.com",
  databaseURL: "https://instagram-clone-4bfc8-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-4bfc8",
  storageBucket: "instagram-clone-4bfc8.appspot.com",
  messagingSenderId: "332150194278",
  appId: "1:332150194278:web:809ec9fed93cb79d0d2da7",
  measurementId: "G-0QB8VH790H",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
