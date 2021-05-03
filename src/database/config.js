import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDniPetoCcfDBNjc6ZdiF_f5525vB2b3io",
  authDomain: "photowall-7ba57.firebaseapp.com",
  databaseURL: "https://photowall-7ba57-default-rtdb.firebaseio.com",
  projectId: "photowall-7ba57",
  storageBucket: "photowall-7ba57.appspot.com",
  messagingSenderId: "812951014374",
  appId: "1:812951014374:web:f393f9b55af3ebe047a427",
  measurementId: "G-WJLQ3J95KJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { database }