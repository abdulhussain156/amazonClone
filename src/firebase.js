import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVnQmoRkgbc-sMKxN3hYymuWIwrrBliNg",
  authDomain: "e-clone-697c3.firebaseapp.com",
  projectId: "e-clone-697c3",
  storageBucket: "e-clone-697c3.appspot.com",
  messagingSenderId: "884066976341",
  appId: "1:884066976341:web:0a54c39663d16ee4a78adc",
  measurementId: "G-6G5T9VRV0W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };