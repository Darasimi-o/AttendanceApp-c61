import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBO2K0Y99wB5yJ38iNsB89QpszTnEHmAdU",
  authDomain: "attendance-app-60.firebaseapp.com",
  databaseURL: "https://attendance-app-60-default-rtdb.firebaseio.com",
  projectId: "attendance-app-60",
  storageBucket: "attendance-app-60.appspot.com",
  messagingSenderId: "409020876829",
  appId: "1:409020876829:web:768aa5287630721e4adef4",
  measurementId: "G-TCMLLT5WJV"
};
firebase.initializeApp(firebaseConfig)
export default firebase.database();
