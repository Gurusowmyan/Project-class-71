import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here

  apiKey: "AIzaSyBKb1GxnfNXrQMTSkBUX-iWmOQd0S9mk-s",
  authDomain: "school-attendance-ffa85.firebaseapp.com",
  databaseURL: "https://school-attendance-ffa85-default-rtdb.firebaseio.com",
  projectId: "school-attendance-ffa85",
  storageBucket: "school-attendance-ffa85.appspot.com",
  messagingSenderId: "873119372015",
  appId: "1:873119372015:web:ca90c99a0a82f4e352011a"
}

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

