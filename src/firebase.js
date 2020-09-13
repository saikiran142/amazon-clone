import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXVIPMsaOIIMB_AK16Qbz8Xw-c-CwnoZk",
  authDomain: "clone-29755.firebaseapp.com",
  databaseURL: "https://clone-29755.firebaseio.com",
  projectId: "clone-29755",
  storageBucket: "clone-29755.appspot.com",
  messagingSenderId: "327121008801",
  appId: "1:327121008801:web:ac7aa157000f1249d718e0",
  measurementId: "G-BXRJZH9PS8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
