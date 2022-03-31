import firebase from 'firebase';
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyDgdW2n6SMtr8D_8nd6gyNFXySIUKu6s7M",
  authDomain: "growwithgrades-55ff7.firebaseapp.com",
  projectId: "growwithgrades-55ff7",
  storageBucket: "growwithgrades-55ff7.appspot.com",
  messagingSenderId: "1028870183797",
  appId: "1:1028870183797:web:acc3c8fc346dc7f386913c"
});

var auth = firebase.auth();
var db = firebase.firestore();

export { auth, db };
